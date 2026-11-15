# RideSaudi.com — Technical SEO Audit (Phase 0)

Date: 2026-11-15 · Commit audited: `1ba9ec0` (`vercel-repo/main`, live).
Evidence: local production build crawled at all 272 sitemap URLs, plus live checks with `curl`. Per-URL data is in `EXISTING_URL_INVENTORY.csv`.

## 1. Build health

| Check | Result |
|---|---|
| `tsc --noEmit` | Pass |
| `eslint .` | Pass, no errors |
| `next build` | Pass, 279 static pages generated |
| `vitest run` | 11 pass, 10 fail. All 10 failures are "DATABASE_URL is not set" (database tests need a Postgres connection that this machine does not have). Not a code defect, but the tests cannot prove the lead pipeline here. |

## 2. Crawl results (272 URLs)

| Check | Result |
|---|---|
| HTTP status | 272 × 200 |
| Self-referencing canonical | 272 of 272 |
| Canonical with query string (`?utm=1`) | Points to the clean URL |
| hreflang `en`, `ar`, `x-default` | Present on all |
| `noindex` on sitemap URLs | None |
| Exactly one H1 | All |
| Duplicate titles | None |
| Duplicate meta descriptions | None |
| Broken internal links | None |
| Orphans | None; minimum inbound internal links is 2 |
| Images missing alt text | None |
| `lang` / `dir` | `en`/`ltr` and `ar`/`rtl` correct |

## 3. Findings

### Titles and descriptions
- 55 titles are longer than 60 characters; 12 are longer than 70 (worst: 85, the "private car vs flight vs rental" guide). Likely truncated in results.
- 6 descriptions are 161 to 167 characters; slightly long.

### Content depth (words inside `<main>`, which includes the shared form and "how it works" block)
- English route pages: 570 to 1,017 words, median 807.
- 71 URLs are under 500 words. Most are Arabic versions (Arabic uses fewer words for the same meaning, so this is not automatically thin) and 13 are English service pages just under 500. The two blog index pages are about 200 words.
- Word count is an indicator only; Phase 4 should judge usefulness per page.

### Similarity (5-word shingles, English route, city and airport pages, whole `<main>`)
- 11 page pairs exceed 0.30 Jaccard similarity; the highest is 0.36 (Riyadh to Jubail vs Riyadh to Yanbu). The shared form and "how it works" text is included in that number, so body-copy overlap is lower.
- Pairs to review by hand: Riyadh→Jubail/Yanbu, Riyadh→Buraydah/Hail, Riyadh→Abha/Tabuk/AlUla/Taif, Najran/Jazan city pages, Dammam/Al Khobar city pages.

### Keyword overlap risks (same intent, more than one URL)
| Intent | Competing URLs |
|---|---|
| Jeddah (airport) to Makkah | `intercity-transfers/jeddah-to-makkah/` and `umrah-transport/jeddah-airport-to-makkah/` |
| Riyadh to Eastern Province | `riyadh-to-dammam/` and `riyadh-to-al-khobar/` |
| Saudi to Bahrain | `dammam-to-bahrain/`, `riyadh-to-manama/`, `cross-border-transfers/bahrain/` |
| Premium intercity | `intercity-transfers/` hub, `private-intercity-chauffeur/`, `luxury-transportation/luxury-intercity-transfers/` |
| Dubai / UAE | `riyadh-to-dubai/`, `riyadh-to-abu-dhabi/`, `dammam-to-dubai/`, `cross-border-transfers/uae/` |

These are not proven cannibalisation (no Search Console data). They need a one-keyword-one-page mapping in Phase 1.

### Redirects and 404
- `http://ridesaudi.com/` reaches `/en/` in 4 hops (http → https → www → `/en/`). The last hop is a 307 (temporary).
- A URL with no locale and no trailing slash takes 2 hops (308 then 301).
- Any unknown path without a locale (for example `/routes/riyadh-to-dammam/`) returns 301 to `/en/…` and then 404. A redirect into a 404 is a wasted hop and can be reported as a soft error.
- `/EN/` redirects to `/en/EN/` and then 404 (uppercase locale is not normalised).
- Removed driver pages redirect correctly (308) to the chauffeur hub.
- The 404 page returns status 404 with `noindex`.
- `/admin/` returns HTTP 500 on the live site. It is blocked in robots and noindexed, so no SEO impact, but it indicates the CRM environment is not configured in production.

### Robots, sitemap, llms.txt
- `robots.txt`: allow all, disallow `/api/` and `/admin/`, sitemap declared. Correct.
- `sitemap.xml`: 272 URLs with hreflang alternates. Home entries have no `lastmod`; content entries do.
- `/llms.txt` exists and is generated from the registry. It says distances and durations are not published; this will need updating if route facts are added.

### Structured data
- Content pages: Organization, WebSite, WebPage, BreadcrumbList, Service, FAQPage in one `@graph`. Home: Organization, WebSite, WebPage, ItemList. Blog: Article + FAQPage.
- All JSON-LD parses. No ratings, reviews or prices are emitted.
- Organization has name, URL, phone, email and contactPoint, but no `logo`, no `sameAs`, no address. Address and social profiles are unverified, so leaving them out is correct; `logo` can be added.
- `Service.areaServed` is "Saudi Arabia" on every page, including route pages. Route pages could name the two cities.
- FAQPage markup is valid, but Google now shows FAQ rich results only for well-known government and health sites. It is harmless and may help AI systems read the Q&A; it should not be counted as a rich-result win.
- Entity inconsistency: `SITE_URL` is `https://www.ridesaudi.com` while `CONTACT.website` is `https://ridesaudi.com/`.

### Images and performance (measured locally, not field data)
- 30 destination images, all WebP, 4.2 MB in total; largest 228 KB. Served through `next/image` (AVIF/WebP, responsive sizes, hero preloaded).
- 82 of 272 URLs have no image in the main content.
- Several source images are low resolution (Yanbu 597 px, Manama 796 px, Kuwait City 768 px) and several airport pictures are illustrations, noted in code.
- No vehicle photos exist on production.
- Route page HTML: about 120 KB raw, 19 KB compressed; 12 script tags; total JS chunks 714 KB on disk for the whole app.
- Core Web Vitals: no field data available (needs Search Console or PageSpeed Insights). Not measured.

### Rendering and indexability
- Every public page is prerendered static HTML; content, links, FAQ and JSON-LD are in the initial HTML. No client-side rendering dependency for indexing.

### Security headers
`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy` are set. No Content-Security-Policy.

## 4. Not verifiable from here
- Index coverage, queries, impressions, real cannibalisation (Search Console).
- Whether GA4 exists and receives data (no tag in live HTML).
- Whether live enquiries reach the database or an inbox.
- Field Core Web Vitals.
