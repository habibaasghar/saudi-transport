import { NextResponse } from "next/server";
import { sanitizeEnquiry, validateEnquiry } from "@/lib/enquiry";
import { rateLimit } from "@/lib/rate-limit";
import { SITE_URL } from "@/lib/site";

export const runtime = "nodejs";

const MIN_FILL_MS = 3000;
const MAX_BODY = 10_000;

/**
 * INTEGRATION POINT
 * Validated enquiries are POSTed as JSON to ENQUIRY_WEBHOOK_URL (server-side env var).
 * Point it at your CRM, email relay, or a server-only Supabase edge function.
 * If it is not configured we answer 503 "not_configured" — we NEVER pretend success.
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

  const url = process.env.ENQUIRY_WEBHOOK_URL;
  if (!url) return NextResponse.json({ error: "not_configured" }, { status: 503 });

  try {
    const { website: _h, startedAt: _s, ...payload } = data;
    void _h; void _s;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        ...(process.env.ENQUIRY_WEBHOOK_SECRET ? { "x-ridesaudi-secret": process.env.ENQUIRY_WEBHOOK_SECRET } : {}),
      },
      body: JSON.stringify({ ...payload, receivedAt: new Date().toISOString() }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  } catch {
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
