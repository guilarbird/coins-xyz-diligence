import { z } from "zod";
import { publicProcedure, protectedProcedure, router } from "../_core/trpc";
import { getDb } from "../db";
import { users, accessRequests, whitelistedEmails } from "../../drizzle/schema";
import { eq, and } from "drizzle-orm";
import bcrypt from "bcrypt";
import { TRPCError } from "@trpc/server";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "../_core/cookies";

const SALT_ROUNDS = 10;

/**
 * Check if email is whitelisted (pre-approved)
 */
async function isEmailWhitelisted(email: string): Promise<boolean> {
  const db = await getDb();
  if (!db) return false;
  const whitelist = await db
    .select()
    .from(whitelistedEmails)
    .where(eq(whitelistedEmails.email, email.toLowerCase()))
    .limit(1);
  return whitelist.length > 0;
}

/**
 * Authentication router with password auth and access approval system
 */
export const authRouter = router({
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

      // Hash password
      const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

      // Check if email is whitelisted
      const isWhitelisted = await isEmailWhitelisted(emailLower);

      // Create user with appropriate approval status
      const [newUser] = await db.insert(users).values({
        email: emailLower,
        name: name || null,
        passwordHash,
        loginMethod: "password",
        openId: `password_${Date.now()}_${Math.random().toString(36).substring(7)}`, // Generate unique openId for password users
        approvalStatus: isWhitelisted ? "approved" : "pending",
        role: "user",
      });

      if (isWhitelisted) {
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

      // Find user
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });
      const [user] = await db
        .select()
        .from(users)
        .where(eq(users.email, emailLower))
        .limit(1);

      if (!user || !user.passwordHash) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Invalid email or password",
        });
      }

      // Verify password
      const isValid = await bcrypt.compare(password, user.passwordHash);
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
      ctx.res.cookie(COOKIE_NAME, user.openId, cookieOptions);

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

      // Check if already whitelisted
      const isWhitelisted = await isEmailWhitelisted(emailLower);
      if (isWhitelisted) {
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
      const isWhitelisted = await isEmailWhitelisted(input.email);
      return { whitelisted: isWhitelisted };
    }),
});
