import { extrasSummary, type EnquiryInput } from "./enquiry";
import { checkLead, leadCheckLine } from "./lead-quality";
import { smtpTransport } from "@/server/email/send";

type Lead = Omit<EnquiryInput, "website" | "startedAt"> & { receivedAt: string };

/** Heavy transport leads bring their own check (a lowbed job has no passengers or luggage) and an urgency tag. */
export type LeadLabel = { complete: boolean; line: string; tag?: string };

export type DeliveryResult = { configured: boolean; delivered: boolean };

/**
 * Lead delivery. Any combination of channels may be configured; the enquiry counts as
 * delivered if at least one configured channel accepted it. Nothing configured => the API
 * reports "not_configured" and never pretends success.
 *
 *  (The database is the system of record and is written by the API route, not here.)
 *  1. Email alert via Resend       (RESEND_API_KEY + LEAD_NOTIFY_EMAIL [+ LEAD_FROM_EMAIL])
 *  2. Email alert via Gmail / SMTP (EMAIL_PROVIDER=gmail|smtp + SMTP_* + ADMIN_NOTIFY_EMAIL or LEAD_NOTIFY_EMAIL).
 *     This reuses the SMTP transport of the customer-acknowledgement mailer, but sends directly (no email_logs row),
 *     so the business alert still goes out when the database is unreachable.
 *  3. Generic JSON webhook         (ENQUIRY_WEBHOOK_URL [+ ENQUIRY_WEBHOOK_SECRET])
 *
 * If every configured channel fails, the full lead is written to the server log under "[enquiry] UNDELIVERED LEAD"
 * so it can be recovered from the Vercel logs; the visitor is shown the WhatsApp fallback with their details.
 */
export async function deliverLead(lead: Lead, label?: LeadLabel): Promise<DeliveryResult> {
  const jobs: Promise<boolean>[] = [];

  const resendKey = process.env.RESEND_API_KEY;
  const notify = process.env.LEAD_NOTIFY_EMAIL;
  if (resendKey && notify) jobs.push(toEmail(lead, resendKey, notify, label));

  const provider = (process.env.EMAIL_PROVIDER || "").toLowerCase();
  const smtpTo = process.env.LEAD_NOTIFY_EMAIL || process.env.ADMIN_NOTIFY_EMAIL;
  if ((provider === "gmail" || provider === "smtp") && process.env.SMTP_USERNAME && smtpTo && !(resendKey && notify)) {
    jobs.push(toSmtp(lead, smtpTo, label));
  }

  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  if (webhook) jobs.push(toWebhook(lead, webhook));

  if (!jobs.length) return { configured: false, delivered: false };
  const results = await Promise.all(jobs);
  return { configured: true, delivered: results.some(Boolean) };
}

/** Last resort when the database AND every alert channel failed: keep the lead recoverable from the server log. */
export function logUndelivered(lead: Lead | Record<string, unknown>) {
  console.error("[enquiry] UNDELIVERED LEAD", JSON.stringify(lead));
}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

function alertContent(lead: Lead, label?: LeadLabel) {
  const check = label ?? checkLead(lead);
  const rows: [string, string][] = [
    ["Lead check", label ? label.line : leadCheckLine(checkLead(lead)).replace("Lead check: ", "")],
    ["Name", lead.name],
    ["Phone / WhatsApp", lead.phone],
    ["Email", lead.email],
    ["Service", lead.service],
    ["Pickup", lead.pickup],
    ["Drop-off", lead.dropoff],
    ["Date", lead.date],
    ["Time", lead.time],
    ["Trip type", lead.tripType === "round_trip" ? "Return (round trip)" : "One way"],
    ["Return date", lead.returnDate],
    ["Return time", lead.returnTime],
    ["Passengers", lead.passengers],
    ["Luggage", lead.luggage],
    ["Child seats", lead.childSeats && lead.childSeats !== "0" ? lead.childSeats : ""],
    ["Vehicle", lead.vehicle],
    ["Flight", lead.flight],
    ["Details", extrasSummary(lead)],
    ["Notes", lead.notes],
    ["Language", lead.locale],
    ["Sent from", lead.source],
    ["Came from", Object.entries(lead.attribution ?? {}).map(([k, v]) => `${k}=${v}`).join(", ")],
  ];
  const html = `<h2>New RideSaudi enquiry</h2><table cellpadding="6" style="border-collapse:collapse">${rows
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${esc(v).replace(/\n/g, "<br>")}</td></tr>`)
    .join("")}</table>`;
  const text = rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join("\n");
  return { html, text, subject: `${label?.tag ? `${label.tag} ` : ""}${check.complete ? "New enquiry" : "Incomplete enquiry"}: ${lead.service} · ${lead.name}`.replace(/[\r\n]+/g, " ").slice(0, 200) };
}

async function toEmail(lead: Lead, key: string, to: string, label?: LeadLabel): Promise<boolean> {
  const from = process.env.LEAD_FROM_EMAIL || "RideSaudi Leads <onboarding@resend.dev>";
  const { html, subject } = alertContent(lead, label);
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "content-type": "application/json", authorization: `Bearer ${key}` },
      body: JSON.stringify({
        from,
        to: to.split(",").map((x) => x.trim()),
        subject,
        html,
        ...(lead.email ? { reply_to: lead.email } : {}),
      }),
      signal: AbortSignal.timeout(8000),
    });
    // Resend explains rejections in the body (unverified domain, test-sender limits); it contains no lead data.
    if (!res.ok) console.error("[enquiry] Resend alert failed", res.status, (await res.text().catch(() => "")).slice(0, 300));
    return res.ok;
  } catch (err) {
    console.error("[enquiry] Resend alert failed", err instanceof Error ? err.message : err);
    return false;
  }
}

async function toSmtp(lead: Lead, to: string, label?: LeadLabel): Promise<boolean> {
  const user = process.env.SMTP_USERNAME || "";
  const from = process.env.LEAD_FROM_EMAIL || process.env.EMAIL_FROM || `RideSaudi Leads <${user}>`;
  const { html, text, subject } = alertContent(lead, label);
  try {
    const info = await smtpTransport().sendMail({
      from, to: to.split(",").map((x) => x.trim()).filter(Boolean), subject, html, text,
      ...(lead.email ? { replyTo: lead.email } : {}),
    });
    if (!info.accepted?.length) { console.error("[enquiry] SMTP alert rejected"); return false; }
    return true;
  } catch (err) {
    console.error("[enquiry] SMTP alert failed", err instanceof Error ? err.message : err);
    return false;
  }
}

async function toWebhook(lead: Lead, url: string): Promise<boolean> {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        ...(process.env.ENQUIRY_WEBHOOK_SECRET ? { "x-ridesaudi-secret": process.env.ENQUIRY_WEBHOOK_SECRET } : {}),
      },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(8000),
    });
    return res.ok;
  } catch {
    return false;
  }
}
