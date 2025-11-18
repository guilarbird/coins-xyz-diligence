#!/usr/bin/env node
/**
 * Script to add the first admin user to the whitelist
 * Usage: node scripts/add-admin.mjs <email>
 */

import { drizzle } from "drizzle-orm/mysql2";
import { whitelistedEmails, users } from "../drizzle/schema.ts";
import { eq } from "drizzle-orm";

const email = process.argv[2];

if (!email) {
  console.error("Usage: node scripts/add-admin.mjs <email>");
  process.exit(1);
}

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL environment variable is required");
  process.exit(1);
}

const db = drizzle(process.env.DATABASE_URL);

try {
  // Check if email is already whitelisted
  const existing = await db
    .select()
    .from(whitelistedEmails)
    .where(eq(whitelistedEmails.email, email.toLowerCase()))
    .limit(1);

  if (existing.length > 0) {
    console.log(`✅ Email ${email} is already whitelisted`);
  } else {
    // Add to whitelist (addedBy = 1 for system/first admin)
    await db.insert(whitelistedEmails).values({
      email: email.toLowerCase(),
      addedBy: 1,
    });
    console.log(`✅ Added ${email} to whitelist`);
  }

  // Check if user already exists
  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email.toLowerCase()))
    .limit(1);

  if (existingUser.length > 0) {
    // Update user to admin and approved
    await db
      .update(users)
      .set({
        role: "admin",
        approvalStatus: "approved",
        approvedBy: 1,
        approvedAt: new Date(),
      })
      .where(eq(users.email, email.toLowerCase()));
    console.log(`✅ Updated ${email} to admin role and approved`);
  } else {
    console.log(`ℹ️  User ${email} doesn't exist yet. They will be auto-approved when they sign up.`);
  }

  console.log("\n✅ Done! User can now sign up and will be automatically approved as admin.");
  process.exit(0);
} catch (error) {
  console.error("Error:", error);
  process.exit(1);
}
