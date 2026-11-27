import { extrasSummary, type EnquiryInput } from "./enquiry";
import { checkLead, leadCheckLine } from "./lead-quality";
import { smtpTransport } from "@/server/email/send";
import { SITE_URL } from "./site";

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
export async function deliverLead(lead: Lead, label?: LeadLabel, meta: AlertMeta = {}): Promise<DeliveryResult> {
  const jobs: Promise<boolean>[] = [];

  const resendKey = process.env.RESEND_API_KEY;
  const notify = process.env.LEAD_NOTIFY_EMAIL;
  if (resendKey && notify) jobs.push(toEmail(lead, resendKey, notify, label, meta));

  const provider = (process.env.EMAIL_PROVIDER || "").toLowerCase();
  const smtpTo = process.env.LEAD_NOTIFY_EMAIL || process.env.ADMIN_NOTIFY_EMAIL;
  if ((provider === "gmail" || provider === "smtp") && process.env.SMTP_USERNAME && smtpTo && !(resendKey && notify)) {
    jobs.push(toSmtp(lead, smtpTo, label, meta));
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

/** Known after the database write: the reference, and whether this customer has enquired before. */
export type AlertMeta = { reference?: string; returning?: boolean; inquiryId?: string };

const KSA = (iso: string) => {
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? iso : `${d.toLocaleString("en-GB", { timeZone: "Asia/Riyadh", dateStyle: "medium", timeStyle: "short" })} (KSA)`;
};

export function alertContent(lead: Lead, label?: LeadLabel, meta: AlertMeta = {}) {
  const check = label ?? checkLead(lead);
  const ref = meta.reference || "NOT STORED (database unavailable)";
  const bags = [lead.luggage ? `${lead.luggage} large` : "", lead.smallBags ? `${lead.smallBags} small` : ""].filter(Boolean).join(", ");
  const sections: [string, [string, string][]][] = [
    ["Journey", [
      ["Trip type", lead.tripType === "round_trip" ? "ROUND TRIP" : "One way"],
      ["Pickup", lead.pickup],
      ["Drop-off", lead.dropoff],
      ["Pickup date", lead.date],
      ["Pickup time", lead.time],
      ["Return date", lead.tripType === "round_trip" ? lead.returnDate : ""],
      ["Return time", lead.tripType === "round_trip" ? lead.returnTime : ""],
      ["Flight", lead.flight],
    ]],
    ["Passengers & vehicle", [
      ["Service", lead.service],
      ["Vehicle", lead.vehicle || "Not sure - recommend one"],
      ["Passengers", lead.passengers],
      ["Bags", bags],
      ["Child seats", lead.childSeats && lead.childSeats !== "0" ? lead.childSeats : ""],
      ["Details", extrasSummary(lead)],
      ["Special requirements / notes", lead.notes],
    ]],
    ["Customer", [
      ["Name", lead.name],
      ["WhatsApp / phone", lead.phone],
      ["Email", lead.email],
      ["Language", lead.locale === "ar" ? "Arabic" : lead.locale === "en" ? "English" : lead.locale],
      ["Customer", meta.returning ? "RETURNING CUSTOMER (has enquired before)" : meta.reference ? "New customer" : ""],
    ]],
    ["Tracking", [
      ["Reference", ref],
      ["Submitted", KSA(lead.receivedAt)],
      ["Lead check", label ? label.line : leadCheckLine(checkLead(lead)).replace("Lead check: ", "")],
      ["Sent from page", lead.source],
      ["Came from", Object.entries(lead.attribution ?? {}).map(([k, v]) => `${k}=${v}`).join(", ")],
    ]],
  ];
  const wa = lead.phone.replace(/\D/g, "").replace(/^00/, "");
  const banner = meta.returning ? "RETURNING CUSTOMER" : "NEW INQUIRY";
  const html = `<!doctype html><html><body style="margin:0;background:#EAF6FF;font-family:Segoe UI,Arial,sans-serif;color:#0B1F3A">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:20px 10px">
<table role="presentation" width="640" cellpadding="0" cellspacing="0" style="max-width:640px;width:100%;background:#fff;border-radius:8px;overflow:hidden">
<tr><td style="background:#0B1F3A;color:#fff;padding:18px 22px"><div style="font-size:12px;letter-spacing:.08em;color:#38BDF8;font-weight:700">${banner}${check.complete ? "" : " · INCOMPLETE DETAILS"}${label?.tag ? ` · ${esc(label.tag)}` : ""}</div>
<div style="font-size:20px;font-weight:700;margin-top:4px">${esc(lead.pickup)} &rarr; ${esc(lead.dropoff)}</div>
<div style="font-size:14px;color:#cbd5e1;margin-top:4px">${esc(ref)} · ${esc(lead.date)} ${esc(lead.time)}</div></td></tr>
<tr><td style="padding:8px 22px 4px">${sections.map(([title, rows]) => {
    const r = rows.filter(([, v]) => v);
    return r.length ? `<h3 style="font-size:13px;text-transform:uppercase;letter-spacing:.06em;color:#4a5b70;margin:18px 0 6px">${title}</h3><table role="presentation" width="100%" cellpadding="0" cellspacing="0">${r.map(([k, v]) => `<tr><td style="padding:6px 10px 6px 0;color:#4a5b70;width:38%;vertical-align:top;border-bottom:1px solid #eef2f7">${esc(k)}</td><td style="padding:6px 0;font-weight:600;border-bottom:1px solid #eef2f7">${esc(v).replace(/\n/g, "<br>")}</td></tr>`).join("")}</table>` : "";
  }).join("")}</td></tr>
<tr><td style="padding:18px 22px 22px">${wa.length >= 8 ? `<a href="https://wa.me/${wa}" style="display:inline-block;background:#16a34a;color:#fff;text-decoration:none;padding:10px 16px;border-radius:6px;font-weight:700;margin-right:8px">WhatsApp customer</a>` : ""}${meta.reference ? `<a href="${esc(SITE_URL)}/admin/inquiries/${meta.inquiryId ? `${meta.inquiryId}/` : `?q=${encodeURIComponent(meta.reference)}`}" style="display:inline-block;background:#1d4ed8;color:#fff;text-decoration:none;padding:10px 16px;border-radius:6px;font-weight:700">Open in CRM &amp; quote</a>` : ""}
<p style="font-size:12px;color:#64748b;margin:16px 0 0">Reply to this email to answer the customer directly${lead.email ? "" : " (no email given: use WhatsApp)"}.</p></td></tr>
</table></td></tr></table></body></html>`;
  const text = [`${banner}: ${lead.pickup} to ${lead.dropoff} (${ref})`, ""].concat(
    sections.flatMap(([title, rows]) => { const r = rows.filter(([, v]) => v); return r.length ? [`-- ${title} --`, ...r.map(([k, v]) => `${k}: ${v}`), ""] : []; }),
  ).join("\n");
  const route = `${lead.pickup} to ${lead.dropoff}`.slice(0, 90);
  const subject = label
    ? `${label.tag ? `${label.tag} ` : ""}${check.complete ? "New enquiry" : "Incomplete enquiry"}: ${lead.service} · ${lead.name}${meta.reference ? ` · ${meta.reference}` : ""}`
    : `${meta.returning ? "RETURNING CUSTOMER - " : ""}NEW BOOKING REQUEST – ${route} – ${meta.reference || "NOT STORED"}${check.complete ? "" : " (incomplete)"}`;
  return { html, text, subject: subject.replace(/[\r\n]+/g, " ").slice(0, 200) };
}

async function toEmail(lead: Lead, key: string, to: string, label?: LeadLabel, meta?: AlertMeta): Promise<boolean> {
  const from = process.env.LEAD_FROM_EMAIL || "RideSaudi Leads <onboarding@resend.dev>";
  const { html, text, subject } = alertContent(lead, label, meta);
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "content-type": "application/json", authorization: `Bearer ${key}` },
      body: JSON.stringify({
        from,
        to: to.split(",").map((x) => x.trim()),
        subject,
        html,
        text,
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

async function toSmtp(lead: Lead, to: string, label?: LeadLabel, meta?: AlertMeta): Promise<boolean> {
  const user = process.env.SMTP_USERNAME || "";
  const from = process.env.LEAD_FROM_EMAIL || process.env.EMAIL_FROM || `RideSaudi Leads <${user}>`;
  const { html, text, subject } = alertContent(lead, label, meta);
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
