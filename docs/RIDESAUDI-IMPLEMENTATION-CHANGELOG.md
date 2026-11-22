# RideSaudi — Implementation Changelog (SEO recovery pass, 2026-11-22)

Base: `vercel-repo/main` @ 3f85755 (identical to production). Branch: `claude/ridesaudi-seo-recovery-ed1262`. **Not committed, not deployed** (deploy only on owner request).

## Code changes

| # | Severity | Change | Files | Status |
|---|---|---|---|---|
| 1 | Critical | Lead alert email now also works with the project's Gmail/SMTP config (`EMAIL_PROVIDER`, `SMTP_*`, `ADMIN_NOTIFY_EMAIL`/`LEAD_NOTIFY_EMAIL`), independent of the database. Previously only Resend was supported, so a DB failure lost every lead. | `src/lib/deliver.ts`, `src/server/email/send.ts` (export `smtpTransport`) | Fixed in code; effective once SMTP env vars are set in Vercel |
| 2 | Critical | Undeliverable leads are logged in full (`[enquiry] UNDELIVERED LEAD`) instead of being lost; applies to the passenger and heavy-transport APIs. | `src/app/api/enquiry/route.ts`, `src/app/api/heavy-quote/route.ts` | Fixed |
| 3 | Low | Duplicate "Child seats" row removed from the alert email; plain-text alternative added. | `src/lib/deliver.ts` | Fixed |
| 4 | High | Home page "Intercity" block: placeholder ("We do not publish a fixed route list") replaced by links to the 10 highest-demand route pages; "Airport" block now links to 6 airport pages (EN + AR). | `src/components/Intercity.tsx`, `src/components/Airport.tsx`, `messages/*.json` | Fixed |
| 5 | High | Home title/description/H1/subtitle lead with private transfers, say "never a shared ride", name confirmed vehicle types. Arabic: removed "سائق خاص" (driver-job intent) and "نقل خاص" (licence-plate meaning) from home meta/hero, footer tagline, service-card title, form label, Riyadh nav label, WhatsApp/email pre-fill text. | `messages/en.json`, `messages/ar.json` | Fixed |
| 6 | Medium | `/sitemap.xml` is now a sitemap index pointing to 14 grouped child sitemaps (`/sitemaps/{pages,routes,airports,cities,luxury,heavy,guides}-{en,ar}.xml`). Same 366 URLs, same hreflang alternates, same truthful `lastmod` from each page's `updated` date. | `src/lib/sitemap-entries.ts`, `src/app/sitemap.xml/route.ts`, `src/app/sitemaps/[file]/route.ts`; removed `src/app/sitemap.ts` | Fixed |
| 7 | Low | `X-Robots-Tag: noindex` on `/sitemap.xml` and `/sitemaps/*` (the sitemap was ranking for brand queries). | `next.config.ts` | Fixed |
| 8 | Low | Mixed-case URLs (`/EN/Fleet/`) now 301 to the lowercase URL in one hop; previously they became `/en/EN/fleet/` (404). | `src/proxy.ts` | Fixed |
| 9 | Low | Contact config `website` uses the canonical `https://www.ridesaudi.com/`. | `src/config/contact.ts` | Fixed |
| 10 | Medium | Analytics: removed free-text pickup/drop-off from the `quote_request` event (possible PII); added `quote_submission_error` (status only) and `quote_form_view`. | `src/components/EnquiryForm.tsx`, `src/components/HeavyQuoteForm.tsx`, `src/lib/analytics.ts` | Fixed |
| 11 | — | Indexability audit script follows the sitemap index. | `scripts/indexability-audit.mjs` | Done |
| 12 | — | Unit tests for the SMTP alert path. | `tests/deliver.test.ts` | Done |

## Documents added

`docs/RIDESAUDI-COMPLETE-SEO-AUDIT.md`, `-INDEXING-RECOVERY-REPORT.md`, `-URL-INDEXABILITY-MAP.csv` (220 rows), `-KEYWORD-TO-URL-MAP.csv`, `-COMPETITOR-GAP-ANALYSIS.md`, `-INTERNAL-LINK-REPORT.md`, `-CONVERSION-AUDIT.md`, `-IMAGE-ASSET-PLAN.md`, `-GOOGLE-SEARCH-CONSOLE-ACTION-PLAN.md`, this changelog.

## Not changed (deliberately)

- No URL added, removed, redirected or noindexed. Consolidation candidates are documented for owner approval.
- No prices, capacities (except the confirmed Staria), reviews, ratings, addresses, hours or availability claims added.
- No database migration.

## Tests run

| Test | Result |
|---|---|
| `npx tsc --noEmit` | Pass |
| `npx eslint src scripts tests` | Pass |
| `npx next build` | Pass — 388 static pages, 14 sitemap files prerendered |
| `node scripts/indexability-audit.mjs http://localhost:3457` | 366 URLs; status 0, robots 0, X-Robots-Tag 0, canonical 0, hreflang 0, Link header 0, < 3 inlinks 0, sitemap hreflang 0 |
| `npx vitest run` | 32 pass; 10 fail — all need a real Postgres (`DATABASE_URL` from `.env.local`, absent in this worktree). Same tests failed before these changes. New `deliver.test.ts` 3/3 pass. |
| Local API without env | `POST /api/enquiry/` → 503 `not_configured`, lead written to log (verified) |
| Live API (production, before deploy) | `POST /api/enquiry/` → **502 delivery_failed** (one labelled test lead) |
| Browser check (local build) | EN + AR home, route page, Arabic airport page on mobile: render OK, no console errors, new route/airport chips visible |
| Live crawl of 220 GSC URLs + 366 sitemap URLs | See Indexing Recovery Report §3 |
