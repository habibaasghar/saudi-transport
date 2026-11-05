# Implementation notes — homepage (phase 1)

Docs 00–16 named in the brief did **not exist** in the repository (it contained only a static `index.html`, `config.js`, `supabase.sql`, `README.md`). This file and `02-competitor-analysis.md` are the only docs created so far; the confirmed facts come from the project brief.

## Stack
Next.js 15 (App Router), React 19, TypeScript, next-intl 4 (`/en`, `/ar`, `localePrefix: always`, no locale auto-detection), plain CSS with logical properties (`src/app/globals.css`), zod for shared client/server validation. Fonts via `next/font/google` (Fraunces, Inter, IBM Plex Sans Arabic).

## Where things live
- `src/lib/site.ts` — canonical URL, verified-contact object (empty = not rendered), **service registry** (`services[].page` flips a card/footer link to a real page later), **fleet array** (empty = "coming soon" state).
- `messages/en.json`, `messages/ar.json` — all copy.
- `src/app/api/quote/route.ts` — server-side validation, origin check, honeypot, timing check, in-memory rate limit, optional Turnstile, Supabase REST insert with the service-role key (server only). Returns 503 `not_configured` when env is missing; the UI says the request was **not sent**.
- `supabase/quote_requests.sql` — table with RLS on and no anon/authenticated access. Not yet applied.
- `src/lib/schema.ts` — JSON-LD (Organization, WebSite, WebPage, FAQPage) with no unverified facts.
- `legacy/` — original static page and its `config.js` kept for reference. `supabase.sql` (waitlist, anon insert policy `with check (true)`) was left unchanged at the root; review before using it publicly.

## Known limitations
- Rate limiting is per server instance (in-memory). Use a shared store (Upstash/Vercel KV) before relying on it at scale.
- No photography: hero/section art is original SVG. Licensed or owned photos must replace/add to it (never imply a pictured car is RideSaudi's).
- Privacy/Terms pages are noindex placeholders; legal text must be supplied.
- Quote delivery is store-only (Supabase). No email/WhatsApp notification to staff yet.
- GA4 loads only if `NEXT_PUBLIC_GA_ID` is set and the visitor accepts the banner. Consent text is a placeholder pending legal review.
