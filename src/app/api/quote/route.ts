import { NextResponse } from "next/server";
import { quoteSchema } from "@/lib/quote-schema";
import { rateLimit } from "@/lib/ratelimit";
import { SITE_URL } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const json = (body: Record<string, unknown>, status: number) =>
  NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });

function sameOrigin(req: Request): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return false;
  const allowed = new Set([new URL(SITE_URL).origin, new URL(req.url).origin]);
  if (SITE_URL.includes("://www.")) allowed.add(SITE_URL.replace("://www.", "://"));
  return allowed.has(origin);
}

async function verifyTurnstile(token: string | undefined, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // not configured -> rely on honeypot, timing and rate limit
  if (!token) return false;
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token, remoteip: ip }),
    });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  if (!sameOrigin(req)) return json({ ok: false, error: "forbidden" }, 403);

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!rateLimit(`quote:${ip}`)) return json({ ok: false, error: "rate_limited" }, 429);

  let raw: unknown;
  try {
    if (Number(req.headers.get("content-length") || 0) > 20_000) return json({ ok: false, error: "too_large" }, 413);
    raw = await req.json();
  } catch {
    return json({ ok: false, error: "bad_request" }, 400);
  }

  const parsed = quoteSchema.safeParse(raw);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) errors[String(issue.path[0])] ??= issue.message;
    return json({ ok: false, error: "validation", errors }, 422);
  }
  const q = parsed.data;

  // Honeypot filled or form submitted implausibly fast: pretend success, store nothing.
  if (q.website || (q.startedAt && Date.now() - q.startedAt < 3000)) return json({ ok: true }, 200);

  if (!(await verifyTurnstile(q.turnstile, ip))) return json({ ok: false, error: "captcha" }, 400);

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    // Never pretend an enquiry was delivered when no backend is configured.
    console.error("[quote] SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY not configured; enquiry NOT stored");
    return json({ ok: false, error: "not_configured" }, 503);
  }

  try {
    const res = await fetch(`${url.replace(/\/$/, "")}/rest/v1/quote_requests`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        locale: q.locale,
        service: q.service,
        pickup: q.pickup,
        destination: q.destination,
        travel_date: q.date,
        travel_time: q.time,
        passengers: q.passengers,
        luggage: q.luggage ?? null,
        vehicle: q.vehicle,
        flight: q.flight || null,
        full_name: q.name,
        phone: q.phone,
        email: q.email,
        notes: q.notes || null,
      }),
    });
    if (!res.ok) {
      console.error("[quote] storage failed", res.status);
      return json({ ok: false, error: "server" }, 502);
    }
  } catch (e) {
    console.error("[quote] storage error", e instanceof Error ? e.message : "unknown");
    return json({ ok: false, error: "server" }, 502);
  }

  return json({ ok: true }, 200);
}
