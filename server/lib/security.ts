import { getDb } from "../db";
import { auditLogs, users } from "../../drizzle/schema";
import { eq } from "drizzle-orm";
import type { Request } from "express";

/**
 * Rate limiting: Track login attempts per IP
 * In-memory store (for production, use Redis)
 */
const loginAttempts = new Map<string, { count: number; firstAttempt: number }>();

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_ATTEMPTS_PER_WINDOW = 5;
const LOCK_DURATION = 10 * 60 * 1000; // 10 minutes

/**
 * Check if IP is rate limited
 */
export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const attempts = loginAttempts.get(ip);

  if (!attempts) {
    return false;
  }

  // Reset if window expired
  if (now - attempts.firstAttempt > RATE_LIMIT_WINDOW) {
    loginAttempts.delete(ip);
    return false;
  }

  return attempts.count >= MAX_ATTEMPTS_PER_WINDOW;
}

/**
 * Record a login attempt
 */
export function recordLoginAttempt(ip: string): void {
  const now = Date.now();
  const attempts = loginAttempts.get(ip);

  if (!attempts || now - attempts.firstAttempt > RATE_LIMIT_WINDOW) {
    loginAttempts.set(ip, { count: 1, firstAttempt: now });
  } else {
    attempts.count++;
  }
}

/**
 * Check if user account is locked
 */
export async function isAccountLocked(userId: number): Promise<boolean> {
  const db = await getDb();
  if (!db) return false;

  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);

  if (!user || !user.lockedUntil) {
    return false;
  }

  return new Date(user.lockedUntil) > new Date();
}

/**
 * Lock user account after failed attempts
 */
export async function lockAccount(userId: number): Promise<void> {
  const db = await getDb();
  if (!db) return;

  const lockedUntil = new Date(Date.now() + LOCK_DURATION);
  await db
    .update(users)
    .set({ lockedUntil })
    .where(eq(users.id, userId));
}

/**
 * Reset failed login attempts
 */
export async function resetFailedAttempts(userId: number): Promise<void> {
  const db = await getDb();
  if (!db) return;

  await db
    .update(users)
    .set({ failedLoginAttempts: 0, lockedUntil: null })
    .where(eq(users.id, userId));
}

/**
 * Increment failed login attempts
 */
export async function incrementFailedAttempts(userId: number): Promise<number> {
  const db = await getDb();
  if (!db) return 0;

  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);

  if (!user) return 0;

  const newCount = (user.failedLoginAttempts || 0) + 1;

  await db
    .update(users)
    .set({ failedLoginAttempts: newCount })
    .where(eq(users.id, userId));

  // Lock account if too many failed attempts
  if (newCount >= 5) {
    await lockAccount(userId);
  }

  return newCount;
}

/**
 * Get client IP from request
 */
export function getClientIp(req: Request): string {
  return (
    (req.headers["x-forwarded-for"] as string)?.split(",")[0] ||
    req.socket.remoteAddress ||
    "unknown"
  );
}

/**
 * Log authentication event
 */
export async function logAuthEvent(data: {
  userId?: number;
  email?: string;
  action: string;
  ipAddress?: string;
  userAgent?: string;
  details?: Record<string, any>;
}): Promise<void> {
  const db = await getDb();
  if (!db) return;

  await db.insert(auditLogs).values({
    userId: data.userId || null,
    email: data.email || null,
    action: data.action,
    ipAddress: data.ipAddress || null,
    userAgent: data.userAgent || null,
    details: data.details ? JSON.stringify(data.details) : null,
  });
}
