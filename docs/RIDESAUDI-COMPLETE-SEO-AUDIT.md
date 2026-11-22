# RideSaudi — Complete SEO Audit (baseline + status)

Date: 2026-11-22 · Site: https://www.ridesaudi.com/ · Code: `vercel-repo/main` @ 3f85755

Related: Indexing Recovery Report, URL Indexability Map (CSV), Keyword→URL Map (CSV), Internal Link Report, Conversion Audit, Image Asset Plan, Competitor Gap Analysis, GSC Action Plan, Implementation Changelog (all in `docs/`).

## 1. Project baseline

| Area | Finding |
|---|---|
| Framework | Next.js 16 App Router, React 19, TypeScript, next-intl 4 (EN default, AR RTL), `trailingSlash: true` |
| Rendering | All content pages statically prerendered (SSG) from typed content files in `src/content/`; served from the Vercel CDN (`X-Nextjs-Prerender: 1`, cache HIT). Main content is in the initial HTML; no client-only content. |
| Routing | `/[locale]/[...slug]` resolves against `src/content/registry.ts`; blog under `/[locale]/blog/`; legal/contact pages; `/admin` CRM outside i18n |
| Middleware | `src/proxy.ts`: admin auth, legacy `?service=` 301s, unprefixed → `/en/` 301, now lowercase 301 |
| Data / CRM | Supabase Postgres via Drizzle (`inquiries`, `customers`, `email_logs`, …), Supabase Auth for `/admin` |
| Email | Gmail SMTP or Resend via `src/server/email/send.ts` (customer ack) and `src/lib/deliver.ts` (business alert) |
| Hosting / deploy | Vercel builds production from `vercel-repo/main` |
| Inventory | 366 indexable URLs = 183 pages × EN/AR: 49 core/service pages, 59 routes, 13 airport pages, 20 city pages, 11 luxury, 18 heavy transport, 13 guides (incl. blog index) |
| Contact | One config (`src/config/contact.ts`): WhatsApp-only +966 53 854 7672, inforidesaudi@gmail.com |
| Analytics | GA4 code present, **no ID set on production** |

## 2. Findings by severity

| # | Severity | Issue | Evidence | Status |
|---|---|---|---|---|
| 1 | **Critical** | Live quote API returns 502; leads are neither stored nor emailed | Controlled production test 2026-11-22 | Code defect (SMTP not used for alerts) **fixed**; DB + env need **owner** |
| 2 | **Critical** | 220 URLs "Discovered – not indexed", never crawled | GSC coverage export | Root causes diagnosed; on-site fixes done; off-site + GSC actions need **owner** |
| 3 | High | Google indexes the old `http(s)://ridesaudi.com/` root; 3-hop redirect chain to `/en/` | GSC performance; curl | Vercel domain setting needs **owner** |
| 4 | High | Home page did not link to top routes/airports; placeholder "no fixed route list" text | Live HTML | **Fixed** |
| 5 | High | Arabic home title/H1 used "سائق خاص" (driver-job intent), against owner lead-quality goal | Live HTML + Phase 1 research | **Fixed** on home/nav/footer/form; 22 body-text mentions in older pages remain (contextual use, low risk) |
| 6 | High | GA4 not active → no conversion data | Live HTML | **Owner** (provide GA4 ID) |
| 7 | Medium | 7 overlapping-intent groups (18 URLs, mostly luxury vs services) | Titles + inlinks | Documented; **owner decision** |
| 8 | Medium | 13 pages with the highest template overlap (0.19–0.24) | Shingle analysis | Pending (needs verified route facts) |
| 9 | Medium | Analytics event sent free-text addresses | Code | **Fixed** |
| 10 | Medium | Airport heroes are illustrations; several low-res images; no real vehicle photos | `images.ts` notes | Image plan for **owner** photos |
| 11 | Medium | Heavy-transport city pairs overlap 0.35 (above 0.30 target), e.g. AR satha Jeddah vs Dammam | Shingle analysis | Pending (not in the 220 list) |
| 12 | Low | Sitemap file ranked for brand queries | GSC | **Fixed** (noindex header) |
| 13 | Low | Single 366-URL sitemap; no per-cluster reporting | — | **Fixed** (sitemap index + 14 groups) |
| 14 | Low | `/EN/...` produced `/en/EN/...` 404 | curl | **Fixed** |
| 15 | Low | Contact config used non-www URL | Code | **Fixed** |

## 3. Checks that passed (no change needed)

robots.txt (allows all but `/api/`, `/admin/`); no noindex anywhere public; self-canonical on all 366 URLs; reciprocal hreflang EN/AR/x-default in HTML and sitemap, no conflicting Link header; correct `lang`/`dir`; one H1 per page; unique titles and descriptions (the only duplicates belong to redirected URLs); JSON-LD parses on every page with Organization, WebSite, WebPage, Service, BreadcrumbList, FAQPage (matching visible FAQs), Article for guides — no ratings, reviews, prices or fake addresses; every image has alt text; no "24/7", fleet-size, licence, award or review claims in the copy; legal pages (privacy, terms, contact) live in EN + AR; 0 orphan pages; every page ≥ 3 contextual inlinks.

## 4. Core Web Vitals / performance (lab observations only)

No CrUX field data exists yet (too little traffic). Observed: static HTML from CDN; HTML weight 110–210 KB per page (RSC payload duplicates content — normal for App Router); fonts via `next/font`; images via `next/image` with explicit sizes; GA4 loads `afterInteractive` only when configured. No obvious render-blocking third parties. Recommendation: after GA4/traffic exists, check PageSpeed Insights field data for `/en/` and a route page before optimising further.

## 5. Items requiring the owner

1. Vercel env: SMTP vars for lead alerts; fix `DATABASE_URL` / run migrations; then a live test enquiry.
2. Vercel Domains: `ridesaudi.com` → `https://www.ridesaudi.com` directly.
3. GA4 measurement ID.
4. Search Console: deploy-day steps and request-indexing batches (GSC Action Plan).
5. Decide the 7 consolidation proposals (Indexing Recovery Report §6).
6. Confirm sedan model, GMC Yukon seats/luggage; supply real vehicle and airport photos (Image Asset Plan).
7. Off-site signals: genuine directory listings / profiles linking to the site.
8. Approve deploy of this branch.
