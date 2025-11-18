/**
 * Email notification system for access requests
 * Sends emails to admin team when new access requests are submitted
 */

// Admin email addresses to notify
const ADMIN_EMAILS = [
  "gui@coins.ph",
  "gui@base-xyz.com",
  "gui@coins.xyz",
  "geral@guilabird.com",
];

interface AccessRequestNotification {
  email: string;
  name: string;
  reason?: string;
  timestamp: Date;
}

/**
 * Send email notification to admins about new access request
 * Note: This is a placeholder implementation. In production, integrate with:
 * - SendGrid, AWS SES, Mailgun, or similar email service
 * - Or use Manus built-in notification system if available
 */
export async function sendAccessRequestNotification(data: AccessRequestNotification): Promise<void> {
  const { email, name, reason, timestamp } = data;

  // Email subject and body
  const subject = `[Coins.xyz DD] New Access Request from ${name}`;
  const body = `
New access request submitted:

Name: ${name}
Email: ${email}
Reason: ${reason || "Not provided"}
Timestamp: ${timestamp.toISOString()}

Please review and approve/reject this request in the Admin Dashboard:
https://base-xyz.com/admin

---
This is an automated notification from Coins.xyz Due Diligence platform.
  `.trim();

  console.log("=".repeat(80));
  console.log("📧 ACCESS REQUEST NOTIFICATION");
  console.log("=".repeat(80));
  console.log(`To: ${ADMIN_EMAILS.join(", ")}`);
  console.log(`Subject: ${subject}`);
  console.log("");
  console.log(body);
  console.log("=".repeat(80));

  // TODO: Integrate with actual email service
  // Example with SendGrid:
  // const sgMail = require('@sendgrid/mail');
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  // await sgMail.send({
  //   to: ADMIN_EMAILS,
  //   from: 'noreply@base-xyz.com',
  //   subject,
  //   text: body,
  // });

  // For now, just log to console
  // In production, uncomment the email service integration above
}

/**
 * Send approval notification to user
 */
export async function sendApprovalNotification(email: string, approved: boolean): Promise<void> {
  const subject = approved
    ? "[Coins.xyz DD] Access Approved"
    : "[Coins.xyz DD] Access Request Status";
  
  const body = approved
    ? `
Your access request to Coins.xyz Due Diligence has been approved!

You can now sign up and log in at:
https://base-xyz.com/signup

Thank you for your interest.

---
Coins.xyz Due Diligence Team
    `.trim()
    : `
Your access request to Coins.xyz Due Diligence has been reviewed.

For more information, please contact the team directly.

---
Coins.xyz Due Diligence Team
    `.trim();

  console.log("=".repeat(80));
  console.log("📧 APPROVAL NOTIFICATION");
  console.log("=".repeat(80));
  console.log(`To: ${email}`);
  console.log(`Subject: ${subject}`);
  console.log("");
  console.log(body);
  console.log("=".repeat(80));

  // TODO: Integrate with actual email service (same as above)
}
