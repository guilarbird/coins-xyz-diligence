import { boolean, int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

// Auto-approved email domains
export const APPROVED_DOMAINS = ["coins.xyz", "coins.ph"];

// Default password for new users (must be changed on first login)
export const DEFAULT_PASSWORD = "coins99!";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  /** Password hash for email/password authentication (nullable for OAuth-only users) */
  passwordHash: varchar("passwordHash", { length: 255 }),
  /** Approval status: pending (awaiting admin approval), approved, rejected */
  approvalStatus: mysqlEnum("approvalStatus", ["pending", "approved", "rejected"]).default("pending").notNull(),
  /** Admin who approved/rejected the user */
  approvedBy: int("approvedBy"),
  /** Timestamp of approval/rejection */
  approvedAt: timestamp("approvedAt"),
  /** Flag to force password change on next login */
  mustChangePassword: boolean("mustChangePassword").default(false).notNull(),
  /** Number of failed login attempts */
  failedLoginAttempts: int("failedLoginAttempts").default(0).notNull(),
  /** Timestamp when account was locked due to failed attempts */
  lockedUntil: timestamp("lockedUntil"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Whitelisted emails that are pre-approved for access.
 * Users with these emails skip the approval process.
 */
export const whitelistedEmails = mysqlTable("whitelistedEmails", {
  id: int("id").autoincrement().primaryKey(),
  email: varchar("email", { length: 320 }).notNull().unique(),
  addedBy: int("addedBy").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type WhitelistedEmail = typeof whitelistedEmails.$inferSelect;
export type InsertWhitelistedEmail = typeof whitelistedEmails.$inferInsert;

/**
 * Access requests from users who are not whitelisted.
 * Admins can approve or reject these requests.
 */
export const accessRequests = mysqlTable("accessRequests", {
  id: int("id").autoincrement().primaryKey(),
  email: varchar("email", { length: 320 }).notNull(),
  name: text("name"),
  reason: text("reason"),
  status: mysqlEnum("status", ["pending", "approved", "rejected"]).default("pending").notNull(),
  reviewedBy: int("reviewedBy"),
  reviewedAt: timestamp("reviewedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type AccessRequest = typeof accessRequests.$inferSelect;
export type InsertAccessRequest = typeof accessRequests.$inferInsert;

/**
 * Audit logs for tracking authentication events
 */
export const auditLogs = mysqlTable("auditLogs", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId"),
  email: varchar("email", { length: 320 }),
  action: varchar("action", { length: 64 }).notNull(), // login_success, login_failed, password_changed, etc.
  ipAddress: varchar("ipAddress", { length: 45 }), // IPv6 max length
  userAgent: text("userAgent"),
  details: text("details"), // JSON string with additional context
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type AuditLog = typeof auditLogs.$inferSelect;
export type InsertAuditLog = typeof auditLogs.$inferInsert;

/**
 * Password reset tokens for forgot password flow
 */
export const passwordResetTokens = mysqlTable("passwordResetTokens", {
  id: int("id").autoincrement().primaryKey(),
  email: varchar("email", { length: 320 }).notNull(),
  token: varchar("token", { length: 6 }).notNull(), // 6-digit code
  expiresAt: timestamp("expiresAt").notNull(),
  used: boolean("used").default(false).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type PasswordResetToken = typeof passwordResetTokens.$inferSelect;
export type InsertPasswordResetToken = typeof passwordResetTokens.$inferInsert;
