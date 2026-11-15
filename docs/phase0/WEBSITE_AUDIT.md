# RideSaudi.com — Website Audit (Phase 0)

Date: 2026-11-15 · Nothing on the website was changed during this audit.

## 1. What was audited and how

| Item | Detail |
|---|---|
| Production code | Repo `habibaasghar/saudi-transport` (git remote `vercel-repo`), branch `main` = `habiba` = commit `1ba9ec0` (2026-11-15) |
| Method | Code read; `tsc`, `eslint`, `vitest`, `next build` run on a copy of that commit; the built site crawled locally (all 272 sitemap URLs); spot checks against the live site `www.ridesaudi.com` |
| Live match | Live sitemap has 272 URLs, the same as the local build of `1ba9ec0` |
| Not accessible | Google Search Console, GA4 property, Vercel dashboard, Ahrefs/Semrush accounts, real-user Core Web Vitals. Nothing in this audit is based on them. |
| Not tested | A real enquiry on the live form (it would create a real lead). Lighthouse was not run. |

Important: the folder this session opened in (`origin/main`) is an old 4-file static "waitlist" page. It is not the live site. All findings below are about the Next.js app.

## 2. Architecture

- Next.js 16 (App Router), React 19, TypeScript, next-intl. English (`/en/`) and Arabic (`/ar/`, RTL). Locale prefix is mandatory on every public URL.
- All content pages are statically generated (SSG) from a typed content registry: `src/content/*.ts` → `src/content/registry.ts` → one template `src/components/ServicePageView.tsx`, served by the catch-all `src/app/[locale]/[...slug]/page.tsx`.
- The build fails on purpose if the registry has duplicate titles/descriptions/H1s/FAQs, missing Arabic, unknown links or orphan pages (`validateRegistry()`).
- Trailing slash on every URL. `ridesaudi.com` → `www.ridesaudi.com`.
- CRM (in progress): `/admin` (Supabase Auth), Postgres via Drizzle, `inquiries` table. Not indexed.
- Project rules already exist and are strict: `CLAUDE.md`, `SEO-RULES.md` (no thin/duplicate pages, EN+AR together, no invented facts, enquiry-first).

## 3. Pages and URLs

272 indexable URLs (136 EN + 136 AR). Full list with status, title, H1, canonical, word count, schema and inbound links: `EXISTING_URL_INVENTORY.csv`.

| Type | URLs (EN+AR) |
|---|---|
| Home | 2 |
| Hubs (services, intercity, airport, city, luxury, fleet, etc.) | 44 |
| Route pages `…/intercity-transfers/x-to-y/` | 78 (39 routes) |
| City pages `…/city-transport/{city}/` | 34 (17 cities) |
| Airport pages | 22 |
| Cross-border country pages | 10 |
| Other service pages (luxury, events, groups, Umrah, special, tourism) | 72 |
| Blog (index + 4 guides) | 10 |

The 39 existing routes: Riyadh to Dammam, Al Khobar, Jubail, Al Ahsa, Hafar Al Batin, Jeddah, Makkah, Madinah, Taif, Abha, Tabuk, Hail, Buraydah, Yanbu, AlUla, Doha, Dubai, Abu Dhabi, Manama, Kuwait City; Dammam to Riyadh, Al Ahsa, Jubail, Bahrain, Doha, Dubai; Jeddah to Riyadh, Makkah, Madinah, Taif, Yanbu, AlUla; Makkah to Madinah, Taif; Madinah to Makkah, AlUla; Taif to Makkah; AlUla to Riyadh, Dammam.

Pages that do not exist: About, Contact, Privacy Policy, Terms, Cancellation Policy (all return 404 on the live site), individual vehicle pages, and any `/routes/` URL.

## 4. Header, footer, navigation

- Header: Services, Airport Transfers, Riyadh, Umrah Transport, Luxury, Events, Contact (anchor to the home form), Call, WhatsApp, language switch, Get a Quote.
- There is no "Routes" or "Intercity" item in the header. Intercity is reachable only from the footer and the services hub.
- Footer: 12 service links, 4 Riyadh links and 6 Riyadh routes. Jeddah, Makkah, Madinah and Dammam have no footer or header presence.
- Breadcrumbs are on every content page (visible and in schema).

## 5. Design system

Navy and sky blue (`#0B1F3A`, `#174A78`, `#38BDF8`, `#EAF6FF`), Manrope + IBM Plex Sans Arabic, one global stylesheet with shared classes (`btn`, `card`, `section`, `prose`, `faq`). Reusable components are in place for hero, answer block, cards, tables, checklist, FAQ, how-it-works and the quote form. New route work should reuse them; no redesign is needed.

## 6. Mobile and desktop

Checked at 375 px on a route page: no horizontal overflow (page width equals viewport), header collapses to a menu, CTAs stack correctly, floating WhatsApp button present. Arabic renders `dir="rtl"`. Only one page was checked visually; a full device pass belongs in Phase 10.

## 7. Enquiry form and WhatsApp

- One form component (`EnquiryForm.tsx`) on the home page and at the bottom of every content page. Route pages pre-fill pickup and drop-off.
- Fields: service*, pickup*, drop-off*, one way / return (+ return date and time), date*, time*, passengers*, luggage, preferred vehicle (Any, Sedan, GMC Yukon, Hyundai Staria, Other), name*, phone/WhatsApp*, email, notes, consent*.
- Validation runs in the browser and again on the server (same rules). Spam controls: honeypot, minimum fill time, rate limits, origin check.
- Backend `POST /api/enquiry`: writes to the database (`DATABASE_URL`), then alerts by email (Resend) and/or webhook. If nothing is configured it returns an error and the form says so; it never shows a fake success.
- WhatsApp: `wa.me/966543544560` with a pre-filled message naming the page topic. Phone: +966 54 354 4560. Email: inforidesaudi@gmail.com.

Gaps against the brief: luggage is one number (brief wants large and small bags separately); email is optional (brief lists it as a field, not stated as required); CTA text is "Get a Quote" / "WhatsApp Us" (brief wants "Request a Private Transfer Quote" / "WhatsApp Our Team"); the form sits only at the bottom of route pages, with an anchor button above the fold.

## 8. Positioning check against the brief

| Brief requirement | Current state |
|---|---|
| "Not a shared ride / no carpooling" stated clearly | Almost absent. The words "shared", "carpool", "exclusively for your party" do not appear in page content. |
| Not a taxi brand | "taxi" appears 23 times in content (mostly Arabic keyword usage and comparisons). No "cheap/affordable/budget" positioning found. |
| Fleet: Lexus, GMC Yukon, Suburban, Tahoe, Land Cruiser, vans | Site names only Sedan, GMC Yukon and Hyundai Staria. No Lexus, Suburban, Tahoe or Land Cruiser anywhere. `confirmed.fleet` in code is empty; no vehicle photos on production. |
| Route distance, duration, road corridor | Present only on the newest route batches. Most routes, including Riyadh to Dammam, publish no distance, time or highway. `llms.txt` states that distances and durations are not published. |
| Vehicle-to-route relationship | None. There is one `/fleet/` page and no vehicle pages. |

## 9. Analytics and Search Console

- GA4 code exists and tracks `form_start`, `form_error`, `generate_lead`, `whatsapp_click`, `phone_click`, `email_click`. It loads only if `NEXT_PUBLIC_GA_ID` is set.
- The live home page HTML contains no Google tag, so tracking is not running in production.
- No Search Console verification tag in the HTML (it may be verified by DNS; not visible from here).

## 10. Work that exists but is not live

| Branch | Content | State |
|---|---|---|
| `claude/ridesaudi-jeddah-routes` | Jeddah route cluster (Dammam, Jazan, Abha, AlUla, Madinah, Yanbu, Taif to Jeddah; Abha to Riyadh), 3 location pages, destination photos | 5 commits ahead of production, not merged |
| `claude/ridesaudi-seo-leads-dd9a32` | 6 fleet photos, policies data, Terms and Cancellation pages | 1 commit ahead, 9 behind, not merged |

These must be reviewed before Phase 2 so route work is not done twice or lost.

## 11. Verdict

The technical base is sound: clean build, static rendering, unique metadata, correct canonicals and hreflang, no broken links, valid sitemap and robots. The work the brief asks for is mostly content and positioning: exclusivity messaging, verified fleet, route facts, route discovery, and switching on measurement. See `EXISTING_ISSUES.md` for the prioritised list.
