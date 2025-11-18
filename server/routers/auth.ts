import { z } from "zod";
import { publicProcedure, protectedProcedure, router } from "../_core/trpc";
import { getDb } from "../db";
import { users, accessRequests, whitelistedEmails, APPROVED_DOMAINS } from "../../drizzle/schema";
import { eq, and } from "drizzle-orm";
import bcrypt from "bcrypt";
import { TRPCError } from "@trpc/server";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "../_core/cookies";
import { sendAccessRequestNotification } from "../lib/email";
import { validatePassword } from "../lib/password-validator";
import { DEFAULT_PASSWORD } from "../../drizzle/schema";

const SALT_ROUNDS = 10;

/**
 * Check if email is whitelisted or from approved domain
 */
async function isEmailApproved(email: string): Promise<boolean> {
  const emailLower = email.toLowerCase();
  const emailDomain = emailLower.split("@")[1];
  
  // Check if domain is auto-approved
  if (emailDomain && APPROVED_DOMAINS.includes(emailDomain)) {
    return true;
  }
  
  // Check if email is explicitly whitelisted
  const db = await getDb();
  if (!db) return false;
  const whitelist = await db
    .select()
    .from(whitelistedEmails)
    .where(eq(whitelistedEmails.email, emailLower))
    .limit(1);
  return whitelist.length > 0;
}

/**
 * Authentication router with password auth and access approval system
 */
export const authRouter = router({
  /**
   * Get current user
   */
  me: publicProcedure.query(opts => opts.ctx.user),
  
  /**
   * Logout
   */
  logout: publicProcedure.mutation(({ ctx }) => {
    const cookieOptions = getSessionCookieOptions(ctx.req);
    ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
    return {
      success: true,
    } as const;
  }),

  /**
   * Register new user with email/password
   * - If email is whitelisted → auto-approve
   * - If not whitelisted → create with pending status
   */
  signup: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(8),
        name: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { email, password, name } = input;
      const emailLower = email.toLowerCase();

      // Check if user already exists
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });
      const existingUser = await db
        .select()
        .from(users)
        .where(eq(users.email, emailLower))
        .limit(1);

      if (existingUser.length > 0) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "User with this email already exists",
        });
      }

      // Validate password
      const validation = validatePassword(password);
      if (!validation.valid) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: validation.errors.join(". "),
        });
      }

      // Hash password
      const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

      // Check if email is approved (whitelist or approved domain)
      const isApproved = await isEmailApproved(emailLower);

      // Create user with appropriate approval status
      const [newUser] = await db.insert(users).values({
        email: emailLower,
        name: name || null,
        passwordHash,
        loginMethod: "password",
        openId: `password_${Date.now()}_${Math.random().toString(36).substring(7)}`, // Generate unique openId for password users
        approvalStatus: isApproved ? "approved" : "pending",
        mustChangePassword: false, // User set their own password
        role: "user",
      });

      if (isApproved) {
        // Auto-login whitelisted users
        return {
          success: true,
          approved: true,
          message: "Account created and approved",
        };
      } else {
        return {
          success: true,
          approved: false,
          message: "Account created. Awaiting admin approval.",
        };
      }
    }),

  /**
   * Login with email/password
   * - Check if user is approved before allowing login
   */
  login: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { email, password } = input;
      const emailLower = email.toLowerCase();

      console.log("[Login] Attempting login for:", emailLower);

      // Find user
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });
      const [user] = await db
        .select()
        .from(users)
        .where(eq(users.email, emailLower))
        .limit(1);

      if (!user) {
        console.log("[Login] User not found:", emailLower);
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Invalid email or password",
        });
      }

      if (!user.passwordHash) {
        console.log("[Login] User has no password hash:", emailLower);
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Invalid email or password",
        });
      }

      console.log("[Login] User found:", { email: user.email, hasPassword: !!user.passwordHash, approvalStatus: user.approvalStatus });

      // Verify password
      console.log("[Login] Comparing password...");
      const isValid = await bcrypt.compare(password, user.passwordHash);
      console.log("[Login] Password valid:", isValid);
      
      if (!isValid) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Invalid email or password",
        });
      }

      // Check approval status
      if (user.approvalStatus === "pending") {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Your account is awaiting admin approval",
        });
      }

      if (user.approvalStatus === "rejected") {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Your access request was rejected",
        });
      }

      // Update last signed in
      await db
        .update(users)
        .set({ lastSignedIn: new Date() })
        .where(eq(users.id, user.id));

      // Set session cookie (reuse existing OAuth cookie mechanism)
      const cookieOptions = getSessionCookieOptions(ctx.req);
      console.log("[Login] Cookie options:", JSON.stringify(cookieOptions));
      console.log("[Login] Setting cookie:", COOKIE_NAME, "=", user.openId);
      ctx.res.cookie(COOKIE_NAME, user.openId, cookieOptions);

      console.log("[Login] Login successful for:", user.email, "| Must change password:", user.mustChangePassword);

      return {
        success: true,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        },
      };
    }),

  /**
   * Request access (for non-whitelisted users who want to register)
   */
  requestAccess: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        name: z.string(),
        reason: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const { email, name, reason } = input;
      const emailLower = email.toLowerCase();

      // Check if already approved
      const isApproved = await isEmailApproved(emailLower);
      if (isApproved) {
        return {
          success: true,
          message: "Your email is pre-approved. Please sign up directly.",
          preApproved: true,
        };
      }

      // Check if request already exists
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });
      const existingRequest = await db
        .select()
        .from(accessRequests)
        .where(eq(accessRequests.email, emailLower))
        .limit(1);

      if (existingRequest.length > 0) {
        return {
          success: true,
          message: "Access request already submitted. Awaiting review.",
          preApproved: false,
        };
      }

      // Create access request
      await db.insert(accessRequests).values({
        email: emailLower,
        name,
        reason: reason || null,
        status: "pending",
      });

      // Send email notification to admins
      try {
        await sendAccessRequestNotification({
          email: emailLower,
          name,
          reason: reason || undefined,
          timestamp: new Date(),
        });
      } catch (error) {
        console.error("Failed to send access request notification:", error);
        // Don't fail the request if email fails
      }

      return {
        success: true,
        message: "Access request submitted successfully",
        preApproved: false,
      };
    }),

  /**
   * Check if email is whitelisted (public endpoint for UI hints)
   */
  checkWhitelist: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .query(async ({ input }) => {
      const isApproved = await isEmailApproved(input.email);
      return { whitelisted: isApproved };
    }),

  /**
   * Change password (requires authentication)
   */
  changePassword: protectedProcedure
    .input(
      z.object({
        currentPassword: z.string(),
        newPassword: z.string().min(8),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { currentPassword, newPassword } = input;
      const userId = ctx.user.id;

      // Validate new password
      const validation = validatePassword(newPassword);
      if (!validation.valid) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: validation.errors.join(". "),
        });
      }

      // Get user from database
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });
      const [user] = await db
        .select()
        .from(users)
        .where(eq(users.id, userId))
        .limit(1);

      if (!user || !user.passwordHash) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "User not found or password not set",
        });
      }

      // Verify current password
      const isValid = await bcrypt.compare(currentPassword, user.passwordHash);
      if (!isValid) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Current password is incorrect",
        });
      }

      // Hash new password
      const newPasswordHash = await bcrypt.hash(newPassword, SALT_ROUNDS);

      // Update password and clear mustChangePassword flag
      await db
        .update(users)
        .set({
          passwordHash: newPasswordHash,
          mustChangePassword: false,
        })
        .where(eq(users.id, userId));

      return {
        success: true,
        message: "Password changed successfully",
      };
    }),

});
