# RideSaudi — Indexing Recovery Report

Date: 2026-11-22 · Code base: `vercel-repo/main` @ 3f85755 (live production) · Branch: `claude/ridesaudi-seo-recovery-ed1262`

## 1. Evidence used

| Source | What it shows |
|---|---|
| `ridesaudi.com-Coverage-Drilldown-2026-11-22.zip` (Table, Chart, Metadata CSVs) | 220 URLs (110 `/en/`, 110 `/ar/`), issue **Discovered – currently not indexed**, sitemap filter **All known pages**, every *Last crawled* = `1970-01-01` (never fetched). The chart goes from 0 to 220 on **2026-11-10** and its last data point is **2026-11-16**. |
| `ridesaudi.com-Performance-on-Search-2026-11-22.zip` (last 24 h) | 8 impressions, 2 clicks. Pages with impressions: `https://www.ridesaudi.com/sitemap.xml`, `https://ridesaudi.com/`, `/en/blog/madinah-to-alula-by-road-guide/`. |
| `Performance-on-Search-2026-11-18` (28 days, in `ahref reports/`) | Pages with impressions: `http://ridesaudi.com/` (30 impr., pos 39), `https://ridesaudi.com/` (7), `https://www.ridesaudi.com/sitemap.xml` (3, pos 2.7). Queries: "airport transfers saudi arabia" (11 impr., pos 15.6), "saudi airport transfers", "airport pickup saudi arabia", "premium chauffeur service saudi". |
| Live crawl, 2026-11-22, Googlebot UA, all 220 GSC URLs + all 366 sitemap URLs | See section 3 and `RIDESAUDI-URL-INDEXABILITY-MAP.csv`. |

## 2. What the evidence means

1. **Google has not fetched a single one of the 220 URLs.** "Discovered – not indexed" with a 1970 crawl date is a *crawl scheduling* state: Google knows the URL (from the sitemap and links) but has decided not to spend crawl on it yet. It is not a verdict on page quality, because Google has never seen the page.
2. **The export is 6 days old.** Its last data point is 2026-11-16. The indexing fixes deployed on 2026-11-18 (single hreflang source, permanent 308s, 3+ contextual links) are not reflected in it at all.
3. **Google's picture of the site is still the old root.** The only URLs Google shows in results are `http://ridesaudi.com/` and `https://ridesaudi.com/` (the pre-Next.js root) and the sitemap file. Even `/en/` and `/ar/` are in the "never crawled" list. Google has not yet re-crawled the root deeply enough to replace the old site with the new one.
4. **Sitemap submission alone will not fix this.** The sitemap already lists all URLs; that is how Google discovered them.

## 3. URL-level findings (live, 2026-11-22)

| Check (220 GSC URLs) | Result |
|---|---|
| HTTP status | 214 × **200** direct; 6 × single-hop **308** (the removed `hourly-driver`, `full-day-driver`, `personal-driver` pages, EN+AR) to `/services/chauffeur-services/` |
| Redirect loops / chains | None on content URLs |
| `noindex` (meta or `X-Robots-Tag`) | None |
| robots.txt | Allows everything except `/api/` and `/admin/` |
| Canonical | 214/214 self-referencing, absolute `https://www.` |
| hreflang | 214/214 have `en`, `ar`, `x-default`; all reciprocal; no conflicting `Link` header |
| `lang` / `dir` | EN `lang="en"`; AR `lang="ar" dir="rtl"` on every page |
| In sitemap | 214/214 yes; the 6 redirects correctly absent |
| Server-rendered content | All main content in the initial HTML (prerendered static, `X-Nextjs-Prerender: 1`, CDN HIT); 701–2,325 words in `<main>` (median 902) |
| One H1 | 214/214 |
| Internal links | 0 orphans; every page ≥ 3 contextual links from other pages; click depth ≤ 2 from the home page via navigation |
| Duplication | Highest 5-word-shingle overlap after removing shared page furniture: 0.24 (Riyadh→Jubail vs Riyadh→Yanbu). Site target < 0.30 is met; 13 pages ≥ 0.19 flagged for enrichment |
| Structured data | All JSON-LD parses; no ratings, reviews, prices or addresses |

**Conclusion: no technical block exists on any of the 220 URLs today.** The cause is crawl prioritisation for a new, low-authority domain, made worse by the earlier problems below.

## 4. Root causes (ranked)

| # | Root cause | Evidence | Severity | Status |
|---|---|---|---|---|
| 1 | **New domain, almost no external signals.** ~300 URLs appeared at once (2026-11-06 → 11-10) on a domain with no backlinks or brand searches. Google throttles crawl demand for such sites. | 0 → 220 discovered on 11-10; zero crawls; total impressions < 50 in 28 days. | Critical | Needs owner actions (GSC request-indexing batches, Google Business Profile, directory citations, links). See GSC action plan. |
| 2 | **Google still treats the old root as the site.** It indexed `http(s)://ridesaudi.com/`, which now redirects in 3 hops: `http://ridesaudi.com/` → `https://ridesaudi.com/` → `https://www.ridesaudi.com/` → `/en/`. | Performance exports; live `curl`. | High | The first two hops are Vercel domain-level redirects (owner: set `ridesaudi.com` to redirect straight to `https://www.ridesaudi.com` in Vercel → Domains). Inspect and request indexing of `/en/` and `/ar/`. |
| 3 | **Weak home-page links to money pages.** The home page's main content linked to only 19 URLs and to none of the top corridors (Makkah–Madinah, Jeddah–Makkah, Jeddah–Madinah, Riyadh–Jeddah) or the airport pages. The intercity block showed "We do not publish a fixed route list" although 59 route pages exist. | Live crawl of `/en/` `<main>`. | High | **Fixed**: home page now links to 10 top corridors and 6 airport pages in both languages. |
| 4 | **Technical noise before 2026-11-18** (conflicting hreflang `Link` header, temporary 307s on unprefixed URLs, legacy `?service=` URLs). Google formed its first view of the site while these existed. | Previous commit d49853e; coverage chart ends 11-16. | Medium | Fixed on 11-18 (verified again today). Effect not yet visible in GSC. |
| 5 | **Overlapping intents** in the Luxury section vs Services (e.g. Luxury Airport Transfers vs VIP Airport Transfer). Google may defer crawling URLs it predicts add little. | 7 proposals covering 18 URLs, section 6. | Medium | Documented for owner decision; no URL changed. |
| 6 | **Sitemap file itself ranks** (pos 2.7 for brand queries) instead of the home page. | 28-day export. | Low | **Fixed**: `X-Robots-Tag: noindex` on `/sitemap.xml` and `/sitemaps/*` (Google still reads noindexed sitemaps). |
| 7 | **One 366-URL sitemap** gives no per-cluster indexing feedback. | — | Low | **Fixed**: sitemap index + 14 grouped sitemaps (pages, routes, airports, cities, luxury, heavy, guides × EN/AR). |

## 5. Classification of the 220 URLs

Full list with per-URL reasons: `RIDESAUDI-URL-INDEXABILITY-MAP.csv`.

| Class | Count | Decision |
|---|---|---|
| 1 – Important commercial page, must be indexed | 60 | Keep; first request-indexing batches |
| 2 – Needs unique content enrichment | 13 | **Enriched 2026-11-23** with verified distances, tables and page-specific sections |
| 3 – Overlapping intent, consolidation candidate | 18 | **14 consolidated (308) 2026-11-23**; the other 4 (destinations / business-travel) kept |
| 4 – Should be noindexed | 0 | None found. No page is thin (min. 701 words) or duplicate enough to justify noindex |
| 5 – Redirected | 6 | Already 308; leave |
| 6 – Keep unchanged, monitor | 123 | Request indexing after the High batch |

No URL was deleted, noindexed or redirected in this pass.

## 6. Consolidations (IMPLEMENTED 2026-11-23 on owner instruction; one-hop 308, see `src/content/consolidated.ts`)

| Source URL (EN + AR) | Proposed destination | Reason | Impact if approved |
|---|---|---|---|
| `/luxury-transportation/luxury-airport-transfers/` ↔ `/services/airport-transfers/vip-airport-transfer/` | Keep one (recommend VIP airport page under airport hub) | Same intent: premium car meeting a flight | -2 URLs; links + sitemap updated; 301 one hop |
| `/luxury-transportation/executive-transport/`, `/services/special-transportation/business-travel/` | `/services/chauffeur-services/business-chauffeur/` | Three pages for "business/executive car with driver" | -4 URLs |
| `/luxury-transportation/luxury-intercity-transfers/` | `/services/intercity-transfers/private-intercity-chauffeur/` | Same intent; luxury page has only 3 inlinks | -2 URLs |
| `/luxury-transportation/luxury-family-transport/` | `/services/group-transportation/family-transport/` | Same family-travel intent | -2 URLs |
| `/luxury-transportation/premium-group-transport/` | `/services/group-transportation/` | Same group intent | -2 URLs |
| `/luxury-transportation/luxury-event-transport/` | `/services/event-transportation/vip-event-chauffeur/` | Same VIP-event intent | -2 URLs |
| `/services/event-transportation/group-event-transport/` | `/services/event-transportation/` | Hub already covers group logistics | -2 URLs |

Alternative to redirecting: rewrite each luxury page around the vehicle class (what makes it luxury, which vehicles, which use cases) so it no longer competes with the general service page. SEO-RULES.md names Luxury as a first-class category, so this is an owner decision.

## 7. What changed in code (this pass)

See `RIDESAUDI-IMPLEMENTATION-CHANGELOG.md`. Indexing-relevant items: home-page links to top routes/airports; placeholder text removed; Arabic home title/H1 no longer use "سائق خاص" (driver-job intent); grouped sitemaps; sitemap noindex; one-hop lowercase redirect; canonical `www` in the contact config.

## 8. Verification

- `next build` passes (388 static pages); `tsc` clean; ESLint clean.
- `node scripts/indexability-audit.mjs http://localhost:3457` on the production build: 366 URLs, **every bucket 0** (status, robots, X-Robots-Tag, canonical, hreflang, Link header, < 3 inlinks, sitemap hreflang).
- Not verifiable without GSC access: whether Google crawls/indexes. **Nothing here claims any URL is indexed.** A URL is indexed only when GSC URL Inspection says "URL is on Google".
