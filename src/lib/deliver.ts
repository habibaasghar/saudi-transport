import type { EnquiryInput } from "./enquiry";

type Lead = Omit<EnquiryInput, "website" | "startedAt"> & { receivedAt: string };

export type DeliveryResult = { configured: boolean; delivered: boolean };

const DEFAULT_SUPABASE_URL = "https://nxparehkrztumdjecint.supabase.co";

/**
 * Lead delivery. Any combination of channels may be configured; the enquiry counts as
 * delivered if at least one configured channel accepted it. Nothing configured => the API
 * reports "not_configured" and never pretends success.
 *
 *  1. Supabase table `enquiries`   (SUPABASE_SERVICE_ROLE_KEY, server-only)
 *  2. Email alert via Resend       (RESEND_API_KEY + LEAD_NOTIFY_EMAIL [+ LEAD_FROM_EMAIL])
 *  3. Generic JSON webhook         (ENQUIRY_WEBHOOK_URL [+ ENQUIRY_WEBHOOK_SECRET])
 */
export async function deliverLead(lead: Lead): Promise<DeliveryResult> {
  const jobs: Promise<boolean>[] = [];

  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (serviceKey) jobs.push(toSupabase(lead, serviceKey));

  const resendKey = process.env.RESEND_API_KEY;
  const notify = process.env.LEAD_NOTIFY_EMAIL;
  if (resendKey && notify) jobs.push(toEmail(lead, resendKey, notify));

  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  if (webhook) jobs.push(toWebhook(lead, webhook));

  if (!jobs.length) return { configured: false, delivered: false };
  const results = await Promise.all(jobs);
  return { configured: true, delivered: results.some(Boolean) };
}

async function toSupabase(lead: Lead, key: string): Promise<boolean> {
  const base = (process.env.SUPABASE_URL || DEFAULT_SUPABASE_URL).replace(/\/$/, "");
  try {
    const res = await fetch(`${base}/rest/v1/enquiries`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        apikey: key,
        authorization: `Bearer ${key}`,
        prefer: "return=minimal",
      },
      body: JSON.stringify({
        service: lead.service,
        pickup: lead.pickup,
        dropoff: lead.dropoff,
        travel_date: lead.date,
        travel_time: lead.time,
        passengers: Number(lead.passengers) || 1,
        luggage: Number(lead.luggage) || 0,
        vehicle: lead.vehicle || null,
        flight: lead.flight || null,
        name: lead.name,
        phone: lead.phone,
        email: lead.email || null,
        notes: lead.notes || null,
        locale: lead.locale,
        source: lead.source || null,
      }),
      signal: AbortSignal.timeout(8000),
    });
    return res.ok;
  } catch {
    return false;
  }
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
