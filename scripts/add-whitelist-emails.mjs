import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { whitelistedEmails } from "../drizzle/schema.js";

// Specific emails to whitelist
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

async function addWhitelistEmails() {
  const connection = await mysql.createConnection(process.env.DATABASE_URL);
  const db = drizzle(connection);

  console.log("Adding whitelist emails...");

  for (const email of WHITELIST_EMAILS) {
    try {
      await db.insert(whitelistedEmails).values({
        email: email.toLowerCase(),
        addedBy: 1, // System
      });
      console.log(`✓ Added: ${email}`);
    } catch (error) {
      if (error.code === "ER_DUP_ENTRY") {
        console.log(`- Already exists: ${email}`);
      } else {
        console.error(`✗ Error adding ${email}:`, error.message);
      }
    }
  }

  await connection.end();
  console.log("\nDone!");
}

addWhitelistEmails().catch(console.error);
