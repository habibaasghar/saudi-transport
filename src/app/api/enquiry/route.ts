import { NextResponse } from "next/server";
import { sanitizeEnquiry, validateEnquiry } from "@/lib/enquiry";
import { deliverLead } from "@/lib/deliver";
import { rateLimit } from "@/lib/rate-limit";
import { SITE_URL } from "@/lib/site";

export const runtime = "nodejs";

const MIN_FILL_MS = 3000;
const MAX_BODY = 10_000;

/**
 * Delivery channels (Supabase, Resend email, webhook) live in src/lib/deliver.ts.
 * If none is configured we answer 503 "not_configured"; we NEVER pretend success.
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
  const result = await deliverLead({ ...payload, receivedAt: new Date().toISOString() });
  if (!result.configured) return NextResponse.json({ error: "not_configured" }, { status: 503 });
  if (!result.delivered) return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
