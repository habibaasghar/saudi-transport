# RideSaudi — Google Search Console Action Plan

These steps need the owner's Search Console / Vercel access. Do them **after** this branch is deployed to production.

## Day 0 (deploy day)

1. **Vercel → Project → Domains**: make `ridesaudi.com` redirect directly to `https://www.ridesaudi.com` (308). Confirm `curl -I http://ridesaudi.com/` ends at `https://www.ridesaudi.com/` in as few hops as Vercel allows. Google currently indexes the old non-www root.
2. **Sitemaps report**: remove nothing. Submit `https://www.ridesaudi.com/sitemap.xml` again — it is now a **sitemap index**. GSC will list the 14 child sitemaps (`/sitemaps/routes-en.xml`, `/sitemaps/airports-ar.xml`, …). From now on, use *Pages → filter by sitemap* to see indexing per cluster and language.
3. **URL Inspection → Test live URL** on `/en/` and `/ar/`. Expect "URL is available to Google", canonical = inspected URL. Then **Request indexing** for both.

## Request-indexing batches (GSC quota is roughly 10–12 per day per property)

Request only after "Test live URL" passes. Order = commercial priority (from `RIDESAUDI-URL-INDEXABILITY-MAP.csv`, class 1).

| Day | URLs |
|---|---|
| 1 | `/en/`, `/ar/`, `/en/services/airport-transfers/`, `/en/services/intercity-transfers/`, `/en/services/intercity-transfers/makkah-to-madinah/`, `/en/services/intercity-transfers/jeddah-to-makkah/`, `/en/services/umrah-transport/jeddah-airport-to-makkah/`, `/en/services/airport-transfers/jeddah-airport/`, `/en/services/intercity-transfers/riyadh-to-jeddah/`, `/en/services/intercity-transfers/riyadh-to-dammam/` |
| 2 | Arabic twins of day 1 (`/ar/...`) |
| 3 | `/en/services/intercity-transfers/jeddah-to-madinah/`, `riyadh-to-makkah/`, `riyadh-to-madinah/`, `/en/services/airport-transfers/riyadh-airport/`, `madinah-airport/`, `dammam-airport/`, `/en/services/chauffeur-services/`, `/en/fleet/`, `/en/services/city-transport/riyadh/`, `/en/services/city-transport/jeddah/` |
| 4 | Arabic twins of day 3 |
| 5+ | Remaining class-1 pages, then class-6 pages with ≤ 4 inlinks, then the rest |

## Weekly checks (every Monday)

- **Pages report**: record counts for *Indexed*, *Discovered – not indexed*, *Crawled – not indexed* per child sitemap. Movement from "Discovered" to "Crawled" means Google started fetching; "Crawled – currently not indexed" is the signal that a page's content needs work (it will name the page).
- **Crawl stats** (Settings → Crawl stats): requests/day, response time, % 200. Expect requests/day to rise after the home-page link change.
- **Performance**: queries and pages; add the GSC queries to `RIDESAUDI-KEYWORD-TO-URL-MAP.csv`.
- Re-download the Coverage drilldown and re-run the crawl script against it.

## Off-site signals (the main lever for a new domain)

Google crawls a new site faster when other sites point to it. None of this can be done in code:
- Create/verify a **Google Business Profile** only if RideSaudi has a genuine eligible business presence (do not invent an address).
- List the business in relevant Saudi/GCC travel and transport directories with the exact name, URL `https://www.ridesaudi.com/` and WhatsApp number.
- Link to `https://www.ridesaudi.com/` from the owner's social profiles (not from taxisaudiarabia.com — the sister-site rule forbids cross-links).

## What NOT to do

- Do not use the Removals tool on any content URL.
- Do not resubmit the sitemap daily; once per deploy is enough.
- Do not request indexing for the 6 redirected `*-driver` URLs.
- Do not judge success by "200 + in sitemap". Only URL Inspection "URL is on Google" counts as indexed.
