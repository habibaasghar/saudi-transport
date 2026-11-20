import "server-only";
import { allow } from "../services/ratelimit";
import { emailConfig, sendEmail, type SendOutcome } from "./send";
import { inquiryAck, type AckEmailData } from "./templates";

/**
 * Customer acknowledgement, sent AFTER the inquiry row is committed and only when the customer gave
 * an email. Never throws: an email problem must not lose or fail an inquiry.
 *
 * The business alert is NOT sent here: it stays in src/lib/deliver.ts, which also works when the
 * database is down. Keeping one alert path means the owner never receives two alerts per lead.
 */
export async function sendInquiryAck(inquiryId: string, to: string, d: AckEmailData): Promise<SendOutcome> {
  const cfg = emailConfig();
  try {
    if (cfg.provider === "none") return { status: "skipped", reason: "EMAIL_PROVIDER is not configured" };
    // At most 3 acknowledgements per address per hour, so the form cannot be used to spam someone.
    if (!(await allow("ack-email", to.toLowerCase(), 3, 3600))) return { status: "skipped", reason: "rate limited" };
    const m = inquiryAck(d);
    return await sendEmail({
      template: "inquiry_ack", to, subject: m.subject, html: m.html, text: m.text,
      relatedType: "inquiry", relatedId: inquiryId, idempotencyKey: `inquiry_ack:${inquiryId}`,
    }, cfg);
  } catch (err) {
    console.error("[email] acknowledgement crashed", err instanceof Error ? err.message : err);
    return { status: "skipped", reason: "error" };
  }
}
