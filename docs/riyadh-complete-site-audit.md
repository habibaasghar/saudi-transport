# Riyadh complete site audit (2026-11-08)

Repo: Next.js App Router + next-intl (en/ar), content-driven (`src/content/*.ts`, validated at build by `validateRegistry()`), URL `/{locale}/{path}/` with trailing slash, same English slugs in both languages. Sitemap, robots, `llms.txt`, JSON-LD (`src/lib/schema.ts`), canonicals and hreflang are all generated from the registry, so every registered page gets them automatically. Rules: `SEO-RULES.md`.

Findings that shape the work:
- **No analytics system exists** (no gtag/GTM/dataLayer). Only a prefill event (`PREFILL_EVENT`) and a server route `/api/enquiry`. Route-level tracking needs an owner decision on a provider first.
- **No image assets** in the repo (`public/` absent). Hero is the SVG placeholder `HeroArt.tsx`. No `og:image` anywhere.
- `confirmed.airports / routes / fleet` in `src/lib/site.ts` are intentionally empty, so no route, airport or vehicle is "verified" in code. Pages use "availability is confirmed in the quotation".
- `ahref reports/` is empty, and no TaxiSaudiArabia asset folder exists, so there is no keyword data and no reusable photography.
- Both competitor sites could not be fetched (taxisaudiarabia.com returned HTTP 402, www.taxiserviceksa.com did not resolve), so competitor structure is **not** analysed. See `riyadh-competitor-gap-analysis.md`.
- Business model on the site is enquiry-first, quote-based. The old static home page (ride-hailing, fixed fares) no longer exists on `main`.

## Riyadh-relevant pages (each exists in EN and AR)
| URL path | Purpose / intent | Quality | Schema / meta / index | Cannibalisation risk | Action |
|---|---|---|---|---|---|
| services/city-transport/riyadh | Riyadh city authority hub | Rewritten in batch 8: districts, planning, 12 related links | Auto: WebPage, Service, Breadcrumb; indexable | Low (only city page) | **IMPROVE further** (hub sections below) |
| services/airport-transfers/riyadh-airport | RUH pickup/drop | Good, dedicated | Auto, indexable | Medium vs generic airport hub | KEEP, add hub link (done) |
| services/event-transportation/riyadh | Riyadh events | Good | Auto | Low | KEEP, add sightseeing link (done) |
| services/intercity-transfers/riyadh-to-dammam | Route | Good, bidirectional | Auto | Low | KEEP; link to Al Khobar city page |
| services/intercity-transfers/riyadh-to-jeddah | Route | Good | Auto | Low | KEEP |
| services/intercity-transfers/riyadh-to-makkah | Route (Umrah) | New in batch 8 | Auto | Low vs jeddah-airport-to-makkah | KEEP; business must verify route |
| services/intercity-transfers/riyadh-to-madinah | Route (ziyarah) | New in batch 8 | Auto | Low | KEEP; business must verify route |
| services/intercity-transfers/riyadh-to-al-ahsa | Route | New in batch 8 | Auto | Low | KEEP; business must verify route |
| services/tourism-transport/riyadh-sightseeing | Sightseeing | New in batch 8 | Auto | Low vs private-sightseeing-driver | KEEP |
| services/cross-border-transfers (+ bahrain, qatar, uae, kuwait) | Country-level cross-border, starting "Riyadh or Eastern Province" | Good; generic to origin | Auto | **High** if riyadh-to-doha etc. are added with the same intent | KEEP; see strategy for how to differentiate |
| services/chauffeur-services/hourly-driver, full-day-driver, business-chauffeur | Chauffeur by time | Generic (national) | Auto | High if Riyadh clones were added | KEEP; link from hub (done) |
| luxury-transportation/luxury-chauffeur, services/special-transportation/business-travel, hotel-transportation | VIP, business, hotel | Generic (national) | Auto | High if cloned | KEEP; no Riyadh clones |
| services/city-transport/{dammam,al-khobar,jeddah,makkah,madinah,abha,tabuk,hail,buraidah,yanbu,jubail,najran,jazan} and tourism alula, taif | Destination city pages | Good | Auto | Low | KEEP; use as link targets from route pages |

Inbound links to the Riyadh hub (before this project): 4 pages. After batch 8: airport, event, to-dammam, to-jeddah, to-makkah, to-madinah, sightseeing, plus services/city-transport child cards.

## Gaps
- No Riyadh-specific business, VIP, hotel, hourly page (deliberately: duplicates national pages).
- No route page for AlUla, Taif, Al Khobar, Jubail, Yanbu, Buraydah, Hail, Abha, Tabuk, Doha, Dubai, Abu Dhabi, Manama, Kuwait City, Sharjah, Al Ain.
- Destination-to-Riyadh direction is covered inside each route page, not as separate URLs.
