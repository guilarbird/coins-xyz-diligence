import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import bcrypt from "bcrypt";
import { users } from "../drizzle/schema.js";
import { eq } from "drizzle-orm";

async function testLogin() {
  const connection = await mysql.createConnection(process.env.DATABASE_URL);
  const db = drizzle(connection);

  const email = "gui@coins.ph";
  const password = "coins99!";

  console.log(`Testing login for: ${email}`);
  console.log(`Password: ${password}\n`);

  // Find user
  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (!user) {
    console.log("❌ User not found!");
    await connection.end();
    return;
  }

  console.log("✓ User found:");
  console.log(`  - Email: ${user.email}`);
  console.log(`  - Has password hash: ${!!user.passwordHash}`);
  console.log(`  - Approval status: ${user.approvalStatus}`);
  console.log(`  - Must change password: ${user.mustChangePassword}`);
  console.log(`  - Password hash (first 50 chars): ${user.passwordHash?.substring(0, 50)}...\n`);

  // Test password
  if (!user.passwordHash) {
    console.log("❌ User has no password hash!");
    await connection.end();
    return;
  }

  const isValid = await bcrypt.compare(password, user.passwordHash);
  console.log(`Password validation result: ${isValid ? "✓ VALID" : "❌ INVALID"}`);

  if (!isValid) {
    // Test if maybe the hash was created with different password
    console.log("\nTrying to hash the password and compare formats...");
    const newHash = await bcrypt.hash(password, 10);
    console.log(`New hash: ${newHash.substring(0, 50)}...`);
    console.log(`Stored hash: ${user.passwordHash.substring(0, 50)}...`);
  }

  await connection.end();
}

testLogin().catch(console.error);
