import "server-only";
import { CONTACT } from "@/config/contact";
import { money } from "@/lib/quotation";
import { renderQuotationPdf, quotationFilename } from "../pdf/quotation";
import type { QuotationBundle } from "../services/crm";
import { emailConfig, sendEmail, type SendOutcome } from "./send";
import { quotationEmail } from "./templates";

/**
 * Emails a quotation PDF to the customer. Each send gets its own idempotency key (quotation id + attempt time), so a
 * double click is caught by the UI guard while a deliberate re-send still works.
 */
export async function sendQuotationEmail(b: QuotationBundle, opts: { attemptKey: string }): Promise<SendOutcome> {
  const to = b.customer.email;
  if (!to) return { status: "skipped", reason: "customer has no email address" };
  const cfg = emailConfig();
  if (cfg.provider === "none") return { status: "skipped", reason: "EMAIL_PROVIDER is not configured" };
  const pdf = await renderQuotationPdf(b, new Date());
  const m = quotationEmail({
    quoteRef: b.quote.reference, inquiryRef: b.inquiry.reference, name: b.customer.name,
    pickup: b.inquiry.pickup, dropoff: b.inquiry.dropoff, date: b.inquiry.pickupDate, time: b.inquiry.pickupTime,
    vehicle: b.quote.vehicle, price: money(b.quote.amount, b.quote.currency), validUntil: b.quote.validUntil,
    locale: b.inquiry.locale, whatsapp: CONTACT.whatsappDisplay,
  });
  return sendEmail({
    template: "quotation", to, subject: m.subject, html: m.html, text: m.text,
    relatedType: "quotation", relatedId: b.quote.id, idempotencyKey: `quotation:${b.quote.id}:${opts.attemptKey}`,
    attachments: [{ filename: quotationFilename(b.quote.reference), content: pdf, contentType: "application/pdf" }],
  }, cfg);
}
