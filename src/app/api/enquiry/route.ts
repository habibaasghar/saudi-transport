import { createHash } from "node:crypto";
import { NextResponse } from "next/server";
import { sanitizeEnquiry, validateEnquiry } from "@/lib/enquiry";
import { deliverLead } from "@/lib/deliver";
import { rateLimit } from "@/lib/rate-limit";
import { SITE_URL } from "@/lib/site";
import { createInquiry } from "@/server/services/inquiry";
import { allow } from "@/server/services/ratelimit";

export const runtime = "nodejs";

const MIN_FILL_MS = 3000;
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
  try {
    data = sanitizeEnquiry(JSON.parse(text));
  } catch {
    data = null;
  }
  if (!data) return NextResponse.json({ error: "invalid" }, { status: 400 });

  // Spam: honeypot filled or form submitted implausibly fast. Respond like a normal failure.
  if (data.website || !data.startedAt || Date.now() - data.startedAt < MIN_FILL_MS) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const errors = validateEnquiry(data);
  if (Object.keys(errors).length) return NextResponse.json({ error: "validation", fields: errors }, { status: 422 });

  const { website: _h, startedAt: _s, ...payload } = data;
  void _h; void _s;

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
        adults: Number(payload.passengers) || 1,
        largeBags: Number(payload.luggage) || 0,
        vehiclePref: payload.vehicle || undefined, flightNo: payload.flight || undefined,
        customerNotes: payload.notes || undefined, locale: payload.locale, sourcePage: payload.source,
        source: "website",
      }, { ipHash: createHash("sha256").update(ip + salt).digest("hex").slice(0, 32) });
      reference = result.reference;
      duplicate = result.duplicate;
      stored = true;
    } catch (err) {
      console.error("[enquiry] database write failed", err instanceof Error ? err.message : err);
    }
  }

  // Secondary channels (email alert / webhook). Skipped for duplicates so retries never re-alert.
  let other = { configured: false, delivered: false };
  if (!duplicate) other = await deliverLead({ ...payload, receivedAt: new Date().toISOString() });

  if (stored || other.delivered || (duplicate && stored)) {
    return NextResponse.json({ ok: true, ...(reference ? { reference } : {}), ...(duplicate ? { duplicate: true } : {}) });
  }
  if (!dbConfigured && !other.configured) return NextResponse.json({ error: "not_configured" }, { status: 503 });
  return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
}
