import { createHash } from "node:crypto";
import { after, NextResponse } from "next/server";
import { cargoSummary, sanitizeHeavy, validateHeavy } from "@/lib/heavy-quote";
import { emptyEnquiry } from "@/lib/enquiry";
import { sendInquiryAck } from "@/server/email/inquiry-emails";
import { deliverLead, logUndelivered } from "@/lib/deliver";
import { rateLimit } from "@/lib/rate-limit";
import { SITE_URL } from "@/lib/site";
import { createInquiry } from "@/server/services/inquiry";
import { allow } from "@/server/services/ratelimit";

export const runtime = "nodejs";

const MIN_FILL_MS = 3000;
const MAX_BODY = 10_000;

/**
 * Heavy transport / satha quotation. Same guarantees as /api/enquiry: the inquiries table is the
 * system of record, the same RS-YYMM-NNNN reference is issued, and success is never faked.
 * Service keys are stored as `heavy_<service>` so the CRM can filter this category.
 */
export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(SITE_URL).origin && origin !== new URL(request.url).origin) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!rateLimit(ip)) return NextResponse.json({ error: "rate_limited" }, { status: 429 });

  const text = await request.text();
  if (text.length > MAX_BODY) return NextResponse.json({ error: "too_large" }, { status: 413 });
  let d;
  try {
    d = sanitizeHeavy(JSON.parse(text));
  } catch {
    d = null;
  }
  if (!d) return NextResponse.json({ error: "invalid" }, { status: 400 });
  if (d.website || !d.startedAt || Date.now() - d.startedAt < MIN_FILL_MS) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }
  const errors = validateHeavy(d);
  if (Object.keys(errors).length) return NextResponse.json({ error: "validation", fields: errors }, { status: 422 });

  const cargo = cargoSummary(d);
  const serviceKey = `heavy_${d.service}`;
  let reference: string | undefined;
  let duplicate = false;
  let stored = false;

  if (process.env.DATABASE_URL) {
    try {
      const subject = (d.email || d.phone).toLowerCase();
      if (!(await allow("enq-ip", ip, 8, 600)) || !(await allow("enq-contact", subject, 5, 3600))) {
        return NextResponse.json({ error: "rate_limited" }, { status: 429 });
      }
      const result = await createInquiry({
        name: d.name, phone: d.phone, email: d.email || undefined, serviceKey,
        pickup: d.pickup, dropoff: d.dropoff, pickupDate: d.date, pickupTime: "",
        vehiclePref: d.loadType + (d.makeModel ? ` (${d.makeModel})` : ""),
        customerNotes: d.notes || undefined, locale: d.locale, sourcePage: d.source,
        specialRequirements: cargo, attribution: d.attribution, source: "website",
      }, { ipHash: createHash("sha256").update(ip + (process.env.IP_HASH_SALT || "")).digest("hex").slice(0, 32) });
      reference = result.reference;
      duplicate = result.duplicate;
      stored = true;
      if (!duplicate && d.email) {
        const job = () => sendInquiryAck(result.id, d.email, {
          reference: result.reference, name: d.name, pickup: d.pickup, dropoff: d.dropoff,
          date: d.date, time: "", passengers: 0, locale: d.locale,
          load: d.loadType + (d.makeModel ? ` (${d.makeModel})` : ""),
        }).catch(() => undefined);
        try { after(job); } catch { await job(); }
      }
    } catch (err) {
      console.error("[heavy-quote] database write failed", err instanceof Error ? err.message : err);
    }
  }

  // Alert email / webhook reuse the passenger lead channel, with the cargo block in the notes.
  let other = { configured: false, delivered: false };
  if (!duplicate) {
    other = await deliverLead({
      ...emptyEnquiry(),
      service: serviceKey, pickup: d.pickup, dropoff: d.dropoff, date: d.date, time: "", passengers: "", luggage: "", childSeats: "",
      vehicle: d.loadType, name: d.name, phone: d.phone, email: d.email, company: d.company,
      notes: [cargo, d.notes].filter(Boolean).join("\n\n"), consent: true, locale: d.locale, source: d.source,
      attribution: d.attribution, receivedAt: new Date().toISOString(),
    });
  }

  if (stored || other.delivered) {
    return NextResponse.json({ ok: true, ...(reference ? { reference } : {}), ...(duplicate ? { duplicate: true } : {}) });
  }
  if (!process.env.DATABASE_URL && !other.configured) { logUndelivered({ ...d, receivedAt: new Date().toISOString() }); return NextResponse.json({ error: "not_configured" }, { status: 503 }); }
  // Never silently discard a lead: keep it recoverable from the server log, then let the client show the WhatsApp fallback.
  logUndelivered({ ...d, receivedAt: new Date().toISOString() });
  return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
}
