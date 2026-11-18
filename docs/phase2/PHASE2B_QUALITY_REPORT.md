# Phase 2B: website quality, trust, technical SEO and conversion report

Date: 2026-11-19. Branch `claude/ridesaudi-phase-2-quality-9b876c`, based on production `vercel-repo/habiba` = `vercel-repo/main` (`d49853e`). **Nothing is committed, pushed or deployed.** The live site is unchanged.

Per-URL data (308 URLs, EN + AR): [URL_AUDIT_2026-11-19.csv](URL_AUDIT_2026-11-19.csv). Legal items needing sign-off: [LEGAL_REVIEW_FLAGS.md](LEGAL_REVIEW_FLAGS.md).

## 1. Critical issues

| # | Issue | Status |
|---|---|---|
| C1 | **Live enquiry API returns 502 `delivery_failed`.** A controlled test on 2026-11-19 (dummy "QA TEST" data) was rejected: no database row, no email. Validation passes, so a configured channel fails. Likely causes: `DATABASE_URL` wrong or not the Supabase pooler string, migration `drizzle/0000_core.sql` not applied, or Resend key/sender domain not verified. The form shows the WhatsApp fallback, so customers are not blocked, but no lead is stored. | **OPEN. Needs Vercel env/log access (not available here).** Check Vercel function logs for `[enquiry] database write failed`. |
| C2 | Privacy Policy and Terms returned 404 and the footer said "To be published". | Fixed in code; needs legal review, then deploy. |
| C3 | Homepage fleet section said vehicle information "will be shown here" while `/fleet/` named three vehicles. | Fixed. |

The brief says the root page shows a waitlist. **That is not what production serves.** `https://www.ridesaudi.com/` returns `308 -> /en/` (verified 2026-11-19), `/en/` and `/ar/` are the real business, and the waitlist code only exists in `legacy/`. No root change was needed (section 2, P1).

## 2. Work done, by priority

### P1: root homepage, language architecture, canonicals
Verified, not changed (it was already correct):
- `/` -> 308 `/en/`; `ridesaudi.com` -> 308 `www`; `/en/` and `/ar/` are 200, index/follow, self-canonical.
- hreflang `en`, `ar`, `x-default` (-> `/en/`) is reciprocal in the HTML and in the sitemap; there is no conflicting `Link` header; `localeDetection` is off, so both languages stay crawlable and no visitor is bounced by IP or Accept-Language.
- Indexability audit (`scripts/indexability-audit.mjs`) over 308 sitemap URLs: status, robots, X-Robots-Tag, canonical, hreflang, Link header, inlinks and sitemap-href buckets are **all 0**.
- Redirects tested: `/en` -> `/en/`; unknown unprefixed path -> 301 `/en/...`; unknown `/en/x/` -> 404.

Decision: keep `/` as a permanent redirect to `/en/`. A root language chooser would create a second indexable homepage, split `/en/` equity and conflict with `x-default`.

Fixed: the **footer language switcher always linked to the other language's homepage** from every inner page. It now keeps the current page (`Footer` takes `switchHref`, as the header already did).

Known, left alone: unprefixed no-slash URLs (`/services`, `/fleet`) take 2 hops (slash, then locale). Both are permanent and Google follows them; removing the extra hop means disabling Next's trailing-slash redirect site-wide, which is riskier than the benefit.

### P2: legal and trust pages
New pages (EN + AR, indexable, in the sitemap with hreflang, linked from the footer and from the quote section on every page): `/{en,ar}/privacy-policy/`, `/{en,ar}/terms-and-conditions/`, `/{en,ar}/contact/`. Contact shows only the confirmed phone, WhatsApp and email; no address, registration or licence is claimed. Content covers every item in the brief (collection, partner sharing, retention, rights; enquiry vs confirmation, quotation validity, availability, confirmation steps, responsibilities, pickup, changes and cancellation with the confirmed 24 hours, delays, payment methods, cross-border, complaints). Open items: LEGAL_REVIEW_FLAGS.md.

### P3: fleet and vehicle consistency
`src/content/fleet.ts` is now the single source for the homepage section, the `/fleet/` cards and the form's vehicle list. Only Sedan, GMC Yukon and Hyundai Staria are shown. Capacity is printed only where owner-confirmed (Staria: up to 7 passengers, 10+ bags); sedan and GMC say "confirmed for the actual vehicle in your quotation". Every card says availability is confirmed in the quotation and that vehicles are supplied by transport partners. **No photos are shown: no verified photograph of a vehicle used for bookings exists in the repo.** The data type has an optional `photo` field; add files under `public/images/fleet/` with alt text and the card renders them. Chevrolet Tahoe, Yukon XL, Suburban, Camry, Taurus, Hiace, VIP vans and executive sedans stay out until the owner confirms each (tracked in `docs/phase1/FLEET_VERIFICATION_MATRIX.csv`); adding one is a single entry in `fleet.ts`. The fleet page title was shortened from 69 to 57 characters.

### P4: quote form, email, CRM, tracking
Already present and kept: client and server validation, honeypot, 3 s minimum fill time, origin check, body size cap, per-IP and per-contact rate limits, server-side dedupe window, Resend email and webhook channels, honest `not_configured` / `delivery_failed` states and the WhatsApp fallback. Added:
- **Child seats** field (0-10) end to end: validation (client and server), email row, CRM `child_seat` flag plus a "Child seats requested: N" line in notes (the count is not a DB column, so no migration is needed).
- Label "Special requirements"; the vehicle list is built from the fleet data.
- Consent text links to the Privacy Policy; a note links to the Terms.
- **Double-submit guard** (ref lock) in addition to the disabled button and the server dedupe.
- Events `quote_form_start`, `quote_form_submit`, `quote_form_success` (plus the existing `generate_lead`, `form_error`, `whatsapp_click`, `phone_click`, `email_click`). Parameters are only service, trip type, language and page path; no name, phone, email or free text. GA loads only if `NEXT_PUBLIC_GA_ID` is set (it is not in `.env.example`), so the events are **implemented but not observed in GA**.

### P5: homepage conversion
Hero rewritten (EN/AR) to the pre-booked, private positioning: H1 "Private Chauffeur & Intercity Transfers Across Saudi Arabia" (AR: سائق خاص ومشاوير بين المدن في أنحاء المملكة), supporting copy per the brief, primary CTA "Request a Private Transfer Quote" (AR: اطلب عرض سعر لتوصيل خاص), meta description updated. The `<title>` was **kept** to protect current rankings. The fleet section now shows real cards. The quote form, services, routes, airports, how-it-works, trust and FAQ sections already existed and were left unchanged ("no unrelated design changes"). Not done: no visual redesign, and no testimonials, ratings or review markup (none are real).

### P6/P7: commercial pages, technical SEO, Arabic
Findings come from the crawl of the built site (CSV) plus the Phase 2A/2B route audit (distances and times were sourced there; **not re-verified against maps in this session**).
- All 11 priority routes (both directions) exist in EN and AR with unique content. All 8 airports exist; the IATA codes in copy (RUH, JED, MED, DMM, TIF, ULH, ELQ, HOF) are correct. Qassim is called "Qassim Airport/Regional" in copy; its official name is Prince Naif bin Abdulaziz International Airport, worth adding.
- 308 URLs: 271 KEEP, 37 IMPROVE. The 37 are metadata length only: 33 titles over 65 characters including the brand suffix (mostly guides, event and luxury pages; a truncation risk, not an indexing risk), 5 descriptions under 100 characters, 1 thin Arabic guide (402 words, `ar/blog/airport-pickup-tips-saudi-arrivals`). None is NOINDEX or REDIRECT. The build-time registry check found no CONSOLIDATE case (no duplicate titles, H1s, FAQs or orphans); Phase 2A measured route-to-route similarity at 0.09 to 0.17.
- Every page: one H1, self-canonical, reciprocal hreflang, JSON-LD (Organization, WebSite, WebPage, BreadcrumbList, plus Service/FAQPage on content pages; no ratings, reviews, addresses or certifications), alt text on images, at least 3 contextual inlinks.
- Arabic: `dir="rtl"`, Arabic titles and descriptions on all pages, the language switcher keeps the page. The Arabic legal and fleet copy was written natively, not translated literally; a native reviewer should still read the legal text.

## 3. Before and after URL architecture

| URL | Before | After |
|---|---|---|
| `/` | 308 -> `/en/` | unchanged |
| `/en/`, `/ar/` | 200, self-canonical | unchanged (new hero copy) |
| `/{en,ar}/fleet/` | 200, text only | 200, text + category cards |
| `/{en,ar}/privacy-policy/` | 404 | **new**, 200 |
| `/{en,ar}/terms-and-conditions/` | 404 | **new**, 200 |
| `/{en,ar}/contact/` | 404 (nav "Contact" pointed to `/#quote`) | **new**, 200 |
| Sitemap | 302 `<loc>` entries on live | 308 (+6) |
| Redirects, canonicals, hreflang | consistent | unchanged |

## 4. Test results (local production build, `next start`)

| Check | Result |
|---|---|
| `tsc --noEmit`, `eslint .` | pass |
| `next build` | pass, 315 static pages, registry integrity check passed |
| `vitest run` | 14 pass (3 new child-seat tests), 10 fail: the same database tests as before ("DATABASE_URL is not set") |
| Indexability audit, 308 URLs | all buckets 0 |
| Enquiry API, local, capture webhook | valid -> 200 and payload (incl. `childSeats`) received; no consent -> 422; bad phone -> 422; child seats 99 -> 422; honeypot -> 400; too fast -> 400; foreign origin -> 403; oversize -> 413 |
| **Live API controlled test** | **502 delivery_failed (C1)** |
| Database insert path | not testable locally (no Postgres); the `child_seat` column exists in `0000_core.sql` |
| Browser check | fleet cards, Arabic contact page (RTL), homepage hero and form fields (child seats, vehicle list, consent and Terms links) render correctly |
| Not measured | Core Web Vitals (LCP, CLS, INP), JS console errors on every page, real email receipt, GA events |

## 5. Files changed

- Homepage and messages: `messages/en.json`, `messages/ar.json` (hero, meta description, fleet, footer, form, legal, contact keys).
- Fleet: `src/content/fleet.ts` (new), `src/components/Fleet.tsx`, `src/components/ServicePageView.tsx` (cards on `/fleet/`), `src/content/batch5-events-groups-special.ts` (fleet title), `src/app/globals.css`.
- Legal and contact: `src/content/legal.ts`, `src/components/LegalPageView.tsx`, `src/app/[locale]/{privacy-policy,terms-and-conditions,contact}/page.tsx` (all new); `src/components/Footer.tsx`, `src/components/QuoteSection.tsx`, `src/components/BlogView.tsx`, `src/app/sitemap.ts`, `src/app/llms.txt/route.ts`.
- Form, CRM, tracking: `src/components/EnquiryForm.tsx`, `src/lib/enquiry.ts`, `src/lib/deliver.ts`, `src/lib/analytics.ts`, `src/app/api/enquiry/route.ts`, `src/server/services/inquiry.ts`, `tests/enquiry-validation.test.ts`.
- Tooling and docs: `scripts/url-audit.mjs`, `docs/phase2/*`.

## 6. Remaining issues and recommendations (in order)

1. **Fix C1** (live 502). Until then leads depend on the WhatsApp fallback. Send the Vercel function log line or the env status and the cause can be pinned down.
2. Owner: decide the LEGAL_REVIEW_FLAGS items, then deploy. After deploy: submit the sitemap, request indexing for the 6 new URLs, and re-run the controlled test (expect 200, a CRM row and an email to inforidesaudi@gmail.com).
3. Owner: supply real vehicle photos (sedan model, GMC Yukon or XL, Staria) and confirm sedan and GMC capacities; then fill `fleet.ts`.
4. Set `NEXT_PUBLIC_GA_ID`, mark `quote_form_success` as a key event, and verify the six events in GA DebugView.
5. Shorten the 33 long titles (listed in the CSV) one batch at a time, since title changes can shift rankings.
6. Measure Core Web Vitals in PageSpeed Insights or CrUX once deployed; the hero image already uses `priority`.
7. Native-Arabic review of the legal pages and the 5 short descriptions.

## 7. New pages: genuine keyword gaps

None recommended now. The site already has 150+ commercial pages and Search Console showed 220 "Discovered, not indexed", so more URLs would dilute rather than help. Candidates (for example the Qassim airport official-name wording, Taif and Abha routes) are already scored in `docs/phase1/NEW_ROUTE_OPPORTUNITIES.csv`; revisit after the existing pages are indexed.
