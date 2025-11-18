import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import bcrypt from "bcrypt";
import { users } from "../drizzle/schema.js";
import { DEFAULT_PASSWORD } from "../drizzle/schema.js";

const SALT_ROUNDS = 10;

// Whitelisted emails to create with default password
const WHITELIST_EMAILS = [
  "wei@coins.xyz",
  "wei@coins.ph",
  "david@coins.ph",
  "david@coins.xyz",
  "daniel.hott@coins.xyz",
  "daniel.hott@coins.ph",
  "ding@coins.ph",
  "ding@coins.xyz",
  "gui@coins.ph",
  "gui@coins.xyz",
];

async function seedUsers() {
  const connection = await mysql.createConnection(process.env.DATABASE_URL);
  const db = drizzle(connection);

  console.log(`Seeding users with default password: ${DEFAULT_PASSWORD}`);
  console.log("Users will be forced to change password on first login\n");

  // Hash default password once
  const passwordHash = await bcrypt.hash(DEFAULT_PASSWORD, SALT_ROUNDS);

  for (const email of WHITELIST_EMAILS) {
    try {
      await db.insert(users).values({
        openId: `local-${email}`, // Unique openId for password-based users
        email: email.toLowerCase(),
        name: email.split("@")[0], // Use email prefix as name
        loginMethod: "password",
        role: "user",
        passwordHash,
        approvalStatus: "approved", // Auto-approved because whitelisted
        mustChangePassword: true, // Force password change
      });
      console.log(`✓ Created: ${email}`);
    } catch (error) {
      if (error.code === "ER_DUP_ENTRY") {
        console.log(`- Already exists: ${email}`);
      } else {
        console.error(`✗ Error creating ${email}:`, error.message);
      }
    }
  }

  await connection.end();
  console.log("\nDone! All users can now login with password: " + DEFAULT_PASSWORD);
}

seedUsers().catch(console.error);
