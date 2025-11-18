import { z } from "zod";
import { protectedProcedure, router } from "../_core/trpc";
import { getDb } from "../db";
import { users, accessRequests, whitelistedEmails } from "../../drizzle/schema";
import { eq, and } from "drizzle-orm";
import { TRPCError } from "@trpc/server";
import { sendApprovalNotification } from "../lib/email";

/**
 * Admin router for managing user approvals and whitelist
 */
export const adminRouter = router({
  /**
   * Get all pending access requests
   */
  getPendingRequests: protectedProcedure.query(async ({ ctx }) => {
    // Check if user is admin
    if (ctx.user.role !== "admin") {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: "Admin access required",
      });
    }

    const db = await getDb();
    if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });

    const pending = await db
      .select()
      .from(accessRequests)
      .where(eq(accessRequests.status, "pending"));

    return pending;
  }),

  /**
   * Get all users with their approval status
   */
  getAllUsers: protectedProcedure.query(async ({ ctx }) => {
    if (ctx.user.role !== "admin") {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: "Admin access required",
      });
    }

    const db = await getDb();
    if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });

    const allUsers = await db.select().from(users);
    return allUsers;
  }),

  /**
   * Approve a user (by user ID)
   */
  approveUser: protectedProcedure
    .input(z.object({ userId: z.number() }))
    .mutation(async ({ input, ctx }) => {
      if (ctx.user.role !== "admin") {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Admin access required",
        });
      }

      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });

      // Get user first
      const [user] = await db
        .select()
        .from(users)
        .where(eq(users.id, input.userId))
        .limit(1);

      if (!user) {
        throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });
      }

      await db
        .update(users)
        .set({
          approvalStatus: "approved",
          approvedBy: ctx.user.id,
          approvedAt: new Date(),
        })
        .where(eq(users.id, input.userId));

      // Send email notification
      if (user.email) {
        try {
          await sendApprovalNotification(user.email, true);
        } catch (error) {
          console.error("Failed to send approval notification:", error);
        }
      }

      return { success: true };
    }),

  /**
   * Reject a user (by user ID)
   */
  rejectUser: protectedProcedure
    .input(z.object({ userId: z.number() }))
    .mutation(async ({ input, ctx }) => {
      if (ctx.user.role !== "admin") {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Admin access required",
        });
      }

      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });

      // Get user first
      const [user] = await db
        .select()
        .from(users)
        .where(eq(users.id, input.userId))
        .limit(1);

      if (!user) {
        throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });
      }

      await db
        .update(users)
        .set({
          approvalStatus: "rejected",
          approvedBy: ctx.user.id,
          approvedAt: new Date(),
        })
        .where(eq(users.id, input.userId));

      // Send email notification
      if (user.email) {
        try {
          await sendApprovalNotification(user.email, false);
        } catch (error) {
          console.error("Failed to send rejection notification:", error);
        }
      }

      return { success: true };
    }),

  /**
   * Approve an access request and add email to whitelist
   */
  approveAccessRequest: protectedProcedure
    .input(z.object({ requestId: z.number() }))
    .mutation(async ({ input, ctx }) => {
      if (ctx.user.role !== "admin") {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Admin access required",
        });
      }

      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });

      // Get the request
      const [request] = await db
        .select()
        .from(accessRequests)
        .where(eq(accessRequests.id, input.requestId))
        .limit(1);

      if (!request) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Access request not found",
        });
      }

      // Add email to whitelist
      await db.insert(whitelistedEmails).values({
        email: request.email,
        addedBy: ctx.user.id,
      });

      // Update request status
      await db
        .update(accessRequests)
        .set({
          status: "approved",
          reviewedBy: ctx.user.id,
          reviewedAt: new Date(),
        })
        .where(eq(accessRequests.id, input.requestId));

      // Send email notification
      try {
        await sendApprovalNotification(request.email, true);
      } catch (error) {
        console.error("Failed to send approval notification:", error);
      }

      return { success: true };
    }),

  /**
   * Reject an access request
   */
  rejectAccessRequest: protectedProcedure
    .input(z.object({ requestId: z.number() }))
    .mutation(async ({ input, ctx }) => {
      if (ctx.user.role !== "admin") {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Admin access required",
        });
      }

      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });

      // Get request first
      const [request] = await db
        .select()
        .from(accessRequests)
        .where(eq(accessRequests.id, input.requestId))
        .limit(1);

      if (!request) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Request not found" });
      }

      await db
        .update(accessRequests)
        .set({
          status: "rejected",
          reviewedBy: ctx.user.id,
          reviewedAt: new Date(),
        })
        .where(eq(accessRequests.id, input.requestId));

      // Send email notification
      try {
        await sendApprovalNotification(request.email, false);
      } catch (error) {
        console.error("Failed to send rejection notification:", error);
      }

      return { success: true };
    }),

  /**
   * Add email to whitelist manually
   */
  addToWhitelist: protectedProcedure
    .input(z.object({ email: z.string().email() }))
    .mutation(async ({ input, ctx }) => {
      if (ctx.user.role !== "admin") {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Admin access required",
        });
      }

      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });

      const emailLower = input.email.toLowerCase();

      // Check if already whitelisted
      const existing = await db
        .select()
        .from(whitelistedEmails)
        .where(eq(whitelistedEmails.email, emailLower))
        .limit(1);

      if (existing.length > 0) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "Email already whitelisted",
        });
      }

      await db.insert(whitelistedEmails).values({
        email: emailLower,
        addedBy: ctx.user.id,
      });

      return { success: true };
    }),

  /**
   * Get all whitelisted emails
   */
  getWhitelist: protectedProcedure.query(async ({ ctx }) => {
    if (ctx.user.role !== "admin") {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: "Admin access required",
      });
    }

    const db = await getDb();
    if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });

    const whitelist = await db.select().from(whitelistedEmails);
    return whitelist;
  }),
});
