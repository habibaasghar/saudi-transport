import type { EnquiryInput } from "./enquiry";

type Lead = Omit<EnquiryInput, "website" | "startedAt"> & { receivedAt: string };

export type DeliveryResult = { configured: boolean; delivered: boolean };

/**
 * Lead delivery. Any combination of channels may be configured; the enquiry counts as
 * delivered if at least one configured channel accepted it. Nothing configured => the API
 * reports "not_configured" and never pretends success.
 *
 *  (The database is the system of record and is written by the API route, not here.)
 *  1. Email alert via Resend       (RESEND_API_KEY + LEAD_NOTIFY_EMAIL [+ LEAD_FROM_EMAIL])
 *  2. Generic JSON webhook         (ENQUIRY_WEBHOOK_URL [+ ENQUIRY_WEBHOOK_SECRET])
 */
export async function deliverLead(lead: Lead): Promise<DeliveryResult> {
  const jobs: Promise<boolean>[] = [];

  const resendKey = process.env.RESEND_API_KEY;
  const notify = process.env.LEAD_NOTIFY_EMAIL;
  if (resendKey && notify) jobs.push(toEmail(lead, resendKey, notify));

  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  if (webhook) jobs.push(toWebhook(lead, webhook));

  if (!jobs.length) return { configured: false, delivered: false };
  const results = await Promise.all(jobs);
  return { configured: true, delivered: results.some(Boolean) };
}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

async function toEmail(lead: Lead, key: string, to: string): Promise<boolean> {
  const from = process.env.LEAD_FROM_EMAIL || "RideSaudi Leads <onboarding@resend.dev>";
  const rows: [string, string][] = [
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
    ["Vehicle", lead.vehicle],
    ["Flight", lead.flight],
    ["Notes", lead.notes],
    ["Language", lead.locale],
    ["Sent from", lead.source],
  ];
  const html = `<h2>New RideSaudi enquiry</h2><table cellpadding="6" style="border-collapse:collapse">${rows
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${esc(v)}</td></tr>`)
    .join("")}</table>`;
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "content-type": "application/json", authorization: `Bearer ${key}` },
      body: JSON.stringify({
        from,
        to: to.split(",").map((x) => x.trim()),
        subject: `New enquiry: ${lead.service} · ${lead.name}`,
        html,
        ...(lead.email ? { reply_to: lead.email } : {}),
      }),
      signal: AbortSignal.timeout(8000),
    });
    return res.ok;
  } catch {
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
