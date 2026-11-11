# RideSaudi site audit — 2026-11 (technical crawl + gap analysis)

Method (crawl run before the Eastern Province pages and blog guides landed, so the URL count and CSV predate them): production build (`next build` + `next start`) crawled locally; every URL in `/sitemap.xml` fetched and parsed. Per-URL data: [url-audit.csv](url-audit.csv) (status, inbound internal links, title/description length, title, H1).

## Result: technical baseline is clean
| Check | Result |
|---|---|
| Sitemap URLs | 220 (EN + AR, incl. 2 home) |
| HTTP status | all 200 |
| Canonical | all self-canonical; no AR to EN canonicalising |
| hreflang | en / ar / x-default present (sampled; generated from registry) |
| noindex | none in sitemap |
| H1 | exactly one per page |
| Duplicate titles / descriptions | none |
| Description length | all within 70–165 chars |
| Broken internal links | none |
| Orphan pages | none (every page has at least 2 inbound internal links) |
| Parameter links | none (`?service=` links removed) |
| robots.txt | `Allow /`, `Disallow /api/ /admin/`, sitemap declared |
| Typecheck / build | pass |

## Defects found and fixed in this pass
1. **`/{locale}/?service=x` duplicates.** Service cards linked to `/?service=x` (canonicalised to home). Cards now link to the real service pages (`servicePath` in `src/lib/site.ts`); legacy URLs 301 to those pages.
2. **Proxy never ran.** The `matcher` regex in `src/proxy.ts` lost its backslash (`.*\..*` in a JS string), so the exclusion matched almost every path and the proxy only ran on `/`. Consequences: locale-less URLs such as `/services/airport-transfers/` returned 404 (docs claimed redirect), and the `/admin` auth gate in the proxy never executed (pages/APIs still enforce auth themselves). Fixed; locale-less paths now 301 to `/en/…`.
3. Legacy `?service=` redirects now drop the query string on the destination (Next config redirects kept it).

## Remaining technical items (not blocking)
- 22 EN/AR pages have titles of 66–78 characters (see `title_len` in the CSV; template adds the brand suffix). Likely truncated in SERPs; shorten the page `title` field on those entries.
- No analytics was installed. Added GA4 (env-gated) — see below.
- Homepage `/` returns 307 to `/en/` (temporary). Acceptable; switch to 308 only if you want it cached as permanent.
- `docs/*.md` still quote 176 sitemap URLs; actual is 220.

## Analytics
GA4 lead tracking (`generate_lead`, env `NEXT_PUBLIC_GA_ID`) and global WhatsApp/call/email CTAs were added on `habiba` separately and are kept as-is. Remaining: mark `generate_lead` as a GA4 key event and confirm whether a consent banner is required.

## Structure decision: no `/locations/`, `/routes/`, `/airport-transfers/` tree
The brief proposed these top-level hubs. The site already covers the same intents under stable URLs:
- Cities: `/services/city-transport/` + 14 cities (Riyadh, Jeddah, Makkah, Madinah, Dammam, Al Khobar, Tabuk, Abha, Yanbu, Jubail, Najran, Jazan, Hail, Buraidah).
- Routes: `/services/intercity-transfers/` (Riyadh to Jeddah, Dammam, Makkah, Madinah, Al Ahsa, Taif, Buraydah, Jubail, Abha, Tabuk, Hail, Yanbu, AlUla; Jeddah to Makkah, Madinah, Taif; Makkah to Madinah), plus cross-border to Doha, Dubai, Manama, Kuwait City.
- Airports: `/services/airport-transfers/` (Jeddah, Riyadh, Madinah, Dammam, Taif).
A parallel tree would duplicate these pages and make them compete for the same queries, and moving them would need ~170 redirects. Not done.

## Real gaps (need data or owner input before building)
| Gap | Why not built yet |
|---|---|
| Keyword volumes / KD / CPC / competitor URLs | No Ahrefs or Search Console export available in this environment. Provide exports; do not estimate. |
| Airport pages: AlUla (ULH), Tabuk (TUU), Abha (AHB), Red Sea (RSI) | Need owner confirmation that RideSaudi serves them and real demand data. |
| Reverse routes (jeddah-to-riyadh, etc.) | Currently merged on purpose (bidirectional pages). Split only if Search Console shows separate demand and there is direction-specific content. |
| Vehicle pages (Yukon, Tahoe, S-Class…) | Fleet unverified (`confirmed.fleet` is empty). SEO-RULES forbids unverified vehicles. |
| District pages (Olaya, KAFD, Al Hamra…) | Doorway risk without demand data and local verification. |
| Verified distances / durations / border rules | Must come from the owner or a cited source. |
| Blog (10 guides) | No blog content type exists; guides need verified facts (train, fares, border). Needs its own build plus owner-supplied facts. |
| Fix 22 over-long titles | Small content edit; can be done next. |

## Next 30 days
1. Set `NEXT_PUBLIC_GA_ID` in Vercel; mark `generate_lead` as key event; verify events in GA4 DebugView.
2. Deploy to main after preview check; submit sitemap in Search Console; inspect 10 URLs (5 EN, 5 AR); confirm `?service=` URLs drop out.
3. Pull Search Console queries (90 days) + Ahrefs exports; build the keyword-to-URL sheet from real numbers.
4. Shorten the 22 long titles; fill `missing-business-info.md` (fleet, airports served, distances).
5. Build the blog content type and first 3 guides once facts are supplied.
