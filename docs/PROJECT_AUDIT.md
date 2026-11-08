# PROJECT_AUDIT — Phase 1

Audit date: 2026-11-08. Method: read every tracked file on every branch/remote, installed dependencies, ran `typecheck`, `lint` and `next build`. Nothing was changed in application code.

## 1. Headline finding: the repository is fragmented

`main` (and `origin/main`) is a **4-file static stub** (`index.html`, Supabase waitlist). The real site lives elsewhere:

| Ref | Files | What it is |
|---|---|---|
| `vercel-repo/main` (`0d09067`) | 73 | **Production.** Next.js bilingual site, 93 content pages x EN/AR, enquiry API. CLAUDE.md: Vercel builds ridesaudi.com from `vercel-repo/main` (GitHub `habibaasghar/saudi-transport`). |
| `claude/keen-mirzakhani-511ed5` | 49 | Standalone **Flask + SQLite CRM** (`crm/`) + a static page. Never merged. Targets `taxisaudiarabia.com`. |
| `claude/ridesaudi-riyadh-seo-hub-b073cb` | 12 | Static Riyadh hub (EN/AR) off the stub. Superseded by the Next.js site. |
| `claude/ridesaudi-premium-redesign-92789c`, `...premium-homepage-b35d45`, `...strategy-research-e859f5` | 15 / 50 / 40 | Earlier homepage experiments, superseded. |

**This worktree branch (`claude/ridesaudi-crm-audit-1a7ba1`) was fast-forwarded from the stub to `vercel-repo/main`** (no unique commits were lost; the stub is an ancestor). All CRM work builds on the production Next.js site.

## 2. Audit checklist

| # | Area | Finding |
|---|---|---|
| 1 | Frontend | Next.js App Router, TypeScript, plain global CSS (`src/app/globals.css`), no UI library, no Tailwind. 20 components in `src/components`. Fully static (SSG) except `/api/enquiry`. |
| 2 | Versions | next `^16.4.5`, react `^19.3.1`, next-intl `^4.14.9`, typescript `^6.0.3`, eslint 9. Lockfile present; `npm ci` installs 373 packages cleanly. |
| 3 | Routing | `/[locale]` and `/[locale]/[...slug]` (content registry in `src/content/*.ts`). `localePrefix: "always"`, `localeDetection: false`, `trailingSlash: true`. `src/proxy.ts` (next-intl middleware) matches everything except `api`, `_next`, `_vercel`, files with a dot. **Risk:** `/admin/*` would be locale-redirected; matcher must exclude it. |
| 4 | Forms | One `EnquiryForm.tsx` (209 lines, single step): service, pickup, drop-off, date, time, passengers, luggage, vehicle, flight, name, phone, email (optional), notes, consent. Honeypot + min-fill-time. Client+server share `validateEnquiry`. No trip type, no return leg, no children/infants, no country code, no contact preference, no reference number, no success screen with reference. |
| 5 | Backend/API | Single route `POST /api/enquiry`: origin check, in-memory rate limit (5/10 min/IP), 10 KB cap, sanitise, validate, `deliverLead()`. Honest `503 not_configured` if no channel set. |
| 6 | Database / ORM | **No ORM, no migrations.** `deliver.ts` POSTs to Supabase REST (`/rest/v1/enquiries`) with the service-role key. Table SQL in `supabase/enquiries.sql` (status text, no FKs, no customer entity, RLS on, no policies). Supabase project `nxparehkrztumdjecint`. Unknown whether the SQL has been run or the key set in Vercel. |
| 7 | Email | Resend via raw `fetch` in `deliver.ts`: admin alert only. Default sender `onboarding@resend.dev` (Resend test sender — can only deliver to the account owner). No customer acknowledgement, no templates, no delivery tracking, no webhooks, no plain-text part. Delivery success = HTTP 2xx only. |
| 8 | Env vars | `.env.example` lists SUPABASE_*, RESEND_API_KEY, LEAD_NOTIFY_EMAIL, LEAD_FROM_EMAIL, ENQUIRY_WEBHOOK_*, NEXT_PUBLIC_WHATSAPP_NUMBER, NEXT_PUBLIC_CONTACT_EMAIL. `.env*` git-ignored. No secrets found in tracked files (the Supabase URL and anon placeholder in `legacy/` are public by design). |
| 9 | Auth/admin | **None.** No admin routes, users or sessions. |
| 10 | SEO | Strong base — see SEO_AUDIT.md / TECHNICAL_SEO.md. |
| 11 | Design | "Desert Dusk" system (navy `#0F1B2D`, ivory `#F3ECE0`, sand `#C9A877`, palm `#1F4D3A`, clay `#A4543B`). See FRONTEND_DESIGN.md. |
| 12 | Mobile | Responsive CSS with `clamp()` gutters and mobile nav (`MobileNav.tsx`). Not yet verified in a real browser at phone widths (Phase 3 task). |
| 13 | Performance | All content pages prerendered (194 static pages, 6.7 s). No images at all (no `public/` dir), so LCP is text. No Lighthouse data yet. In-memory rate limiter will not hold across serverless instances. |

## 3. Baseline health (this worktree, 2026-11-08)

| Check | Result |
|---|---|
| `npm ci` | OK (stale `node_modules`/`.next` from an older build were present; Next 15.5 vs required 16 — rebuilt) |
| `npm run typecheck` | **Pass** (after deleting stale untracked `.next`) |
| `npm run lint` | **Pass** (no output) |
| `npm run build` | **Pass** — 194 static pages, `/api/enquiry` dynamic, sitemap 188 `<loc>` |
| Automated tests | **None exist** |

## 4. Gaps between the brief and reality

1. No admin, auth, customers, quotations, bookings, finance, PDF, AI — all greenfield.
2. Email is a one-way alert on a test sender; customer-facing mail needs a verified domain.
3. Existing public content deliberately avoids unverified claims (fleet, prices, contact). `src/lib/site.ts#confirmed` ships empty. The CRM must not contradict this: vehicle list in the form must stay "request", never "available".
4. Brief mentions the product as "Taxi Saudi Arabia / Ride Saudi" and a Flask CRM exists for `taxisaudiarabia.com`; the live site brand is **RideSaudi**. Needs owner confirmation (see IMPLEMENTATION_PLAN §Decisions).
5. **Brief inconsistency:** notification address is `inforidesaudi@gmail.com` in §3 but `inforidesa@gmail.com` in §7 and the acceptance criteria (the Flask CRM also uses both). Must be confirmed before Phase 4; it is configuration (`ADMIN_NOTIFY_EMAIL`), not hard-coded.

## 5. Risks

| Risk | Mitigation |
|---|---|
| Breaking indexed URLs/SEO | Additive routes only; admin under `/admin` with `noindex`, excluded from sitemap, disallowed in robots; no changes to registry/sitemap logic except adding `/book` entry points as UI (no new indexable pages). |
| Middleware locale-redirecting `/admin` | Update `proxy.ts` matcher to exclude `admin`. |
| Serverless PDF/Arabic shaping | Evaluate in Phase 6; embed fonts; keep PDFs English-first with Arabic names/addresses rendered. |
| Secrets/PII exposure | Server-only modules (`import "server-only"`), RLS on, service-role key never in client bundle, `.env*` ignored. |
| Existing `/api/enquiry` consumers | Keep path and response contract (`{ok:true}`); extend additively. |
| Duplicate backends | Flask CRM is **not** deployed; retire it (reference only). |
| Unverified Supabase state | First Phase 2 step is to connect and inspect the real DB before migrating. |

## 6. Dependencies on the owner (cannot be done by code)

Supabase DB password/service key and Vercel env access; Resend account + DNS access for ridesaudi.com (SPF/DKIM/DMARC); Anthropic API key; confirmed notification address; confirmed WhatsApp number; business legal details/terms/payment/cancellation policy text for PDFs; decision on Flask CRM retirement.
