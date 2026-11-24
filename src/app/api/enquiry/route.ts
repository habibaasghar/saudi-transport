import { createHash } from "node:crypto";
import { after, NextResponse } from "next/server";
import { extrasSummary, sanitizeEnquiry, validateEnquiry } from "@/lib/enquiry";
import { sendInquiryAck } from "@/server/email/inquiry-emails";
import { deliverLead, logUndelivered } from "@/lib/deliver";
import { rateLimit } from "@/lib/rate-limit";
import { SITE_URL } from "@/lib/site";
import { createInquiry } from "@/server/services/inquiry";
import { allow } from "@/server/services/ratelimit";
import { errorDetail } from "@/lib/error-detail";
import { checkLead, leadCheckLine } from "@/lib/lead-quality";
import { quickToEnquiry, sanitizeQuick, validateQuick } from "@/lib/quick-quote";

export const runtime = "nodejs";

const MIN_FILL_MS = 3000;
/** The quick form has three fields, so a real person can finish it faster than the full form. */
const QUICK_MIN_FILL_MS = 1500;
const MAX_BODY = 10_000;

/**
 * The database (inquiries table) is the system of record. An enquiry is reported as received
 * only after the row is committed, or - if the database is down - after another configured
 * channel (email/webhook) accepted it. We NEVER pretend success.
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

  let data;
  let quick = false;
  try {
    const json: unknown = JSON.parse(text);
    // Three-field quick quote (route, date, WhatsApp): validated on its own fields, then stored as a normal enquiry.
    const q = sanitizeQuick(json);
    quick = q !== null;
    data = q ? quickToEnquiry(q) : sanitizeEnquiry(json);
  } catch {
    data = null;
  }
  if (!data) return NextResponse.json({ error: "invalid" }, { status: 400 });

  // Spam: honeypot filled or form submitted implausibly fast. Respond like a normal failure.
  if (data.website || !data.startedAt || Date.now() - data.startedAt < (quick ? QUICK_MIN_FILL_MS : MIN_FILL_MS)) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const errors = quick ? validateQuick({ route: data.pickup, date: data.date, phone: data.phone }) : validateEnquiry(data);
  if (Object.keys(errors).length) return NextResponse.json({ error: "validation", fields: errors }, { status: 422 });

  const { website: _h, startedAt: _s, ...payload } = data;
  void _h; void _s;
  // Completeness of the details, never a claim that the lead is qualified (that is a staff decision in the CRM).
  const check = checkLead(payload);

  const dbConfigured = !!process.env.DATABASE_URL;
  let reference: string | undefined;
  let duplicate = false;
  let stored = false;

  if (dbConfigured) {
    try {
      // Shared (cross-instance) limits: per IP, and per phone/email to stop one person flooding us.
      const subject = (payload.email || payload.phone).toLowerCase();
      if (!(await allow("enq-ip", ip, 8, 600)) || !(await allow("enq-contact", subject, 5, 3600))) {
        return NextResponse.json({ error: "rate_limited" }, { status: 429 });
      }
      const salt = process.env.IP_HASH_SALT || "";
      const result = await createInquiry({
        name: payload.name, phone: payload.phone, email: payload.email || undefined,
        serviceKey: payload.service, pickup: payload.pickup, dropoff: payload.dropoff,
        pickupDate: payload.date, pickupTime: payload.time,
        tripType: payload.tripType === "round_trip" ? "round_trip" : "one_way",
        returnDate: payload.tripType === "round_trip" ? payload.returnDate || undefined : undefined,
        returnTime: payload.tripType === "round_trip" ? payload.returnTime || undefined : undefined,
        adults: Number(payload.passengers) || 1,
        largeBags: Number(payload.luggage) || 0,
        childSeats: Number(payload.childSeats) || 0,
        vehiclePref: payload.vehicle || undefined, flightNo: payload.flight || undefined,
        customerNotes: payload.notes || undefined, locale: payload.locale, sourcePage: payload.source,
        specialRequirements: [leadCheckLine(check), extrasSummary(payload)].filter(Boolean).join("\n"), attribution: payload.attribution,
        source: "website",
      }, { ipHash: createHash("sha256").update(ip + salt).digest("hex").slice(0, 32) });
      reference = result.reference;
      duplicate = result.duplicate;
      stored = true;

      // Customer acknowledgement: only for a new, stored enquiry with an email address. Sent after the
      // response so the visitor never waits; the outcome is recorded in email_logs and never fails the enquiry.
      if (!duplicate && payload.email) {
        const job = () => sendInquiryAck(result.id, payload.email, {
          reference: result.reference, name: payload.name, pickup: payload.pickup, dropoff: payload.dropoff,
          date: payload.date, time: payload.time, passengers: Number(payload.passengers) || 1, locale: payload.locale,
        }).catch(() => undefined);
        try { after(job); } catch { await job(); }
      }
    } catch (err) {
      console.error("[enquiry] database write failed:", errorDetail(err));
    }
  }

  // Secondary channels (email alert / webhook). Skipped for duplicates so retries never re-alert.
  let other = { configured: false, delivered: false };
  if (!duplicate) other = await deliverLead({ ...payload, receivedAt: new Date().toISOString() });

  if (stored || other.delivered || (duplicate && stored)) {
    return NextResponse.json({ ok: true, complete: check.complete, ...(reference ? { reference } : {}), ...(duplicate ? { duplicate: true } : {}) });
  }
  if (!dbConfigured && !other.configured) { logUndelivered({ ...payload, receivedAt: new Date().toISOString() }); return NextResponse.json({ error: "not_configured" }, { status: 503 }); }
  // Never silently discard a lead: keep it recoverable from the server log, then let the client show the WhatsApp fallback.
  logUndelivered({ ...payload, receivedAt: new Date().toISOString() });
  return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
}
