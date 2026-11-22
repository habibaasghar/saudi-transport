# Makkah & Madinah — competitor gap report

Date: 2026-11-23. Method: each competitor's XML sitemaps were read in full and 12 key pages fetched (title, meta, H1/H2, word count, JSON-LD types, form/WhatsApp, prices shown). Competitor text was **not** copied; the summaries below are our own. No search volume or difficulty is stated, because no Ahrefs or Semrush access was available.

## 1. taxiserviceksa.com (main competitor)

**Scale:** 450 guide/blog URLs, 303 route URLs, 126 location URLs, 63 "distance" pages, 28 service pages, and 78 Arabic URLs (Arabic covers only about 7% of the site). It also has Urdu pages.

| Page | Title / H1 | Words | What is strong | What is weak |
|---|---|---|---|---|
| /routes/makkah-madinah/ | "Makkah to Madinah Private Car \| Route, Prices & Travel Guide" | ~2,160 | A car-or-train decision section, a per-vehicle price table (sedan from 400 SAR to Hiace 800 SAR), hour-by-hour road detail, Umrah planning | Many FAQs repeat price content |
| /routes/madinah-makkah/ | "Madinah to Makkah Taxi & Private Transfer" | ~1,690 | Miqat stop planning, the >7 passengers case, a train comparison | — |
| /locations/makkah/ | "Makkah Taxi & Private Transfer Service" | ~1,580 | A hub that routes the visitor: JED, Haramain station, hotel transfers, ziyarat, family, vehicles, onward travel | "Taxi" positioning |
| /locations/madinah/ | "Madinah Taxi & Private Transfer Service" | ~1,520 | Same hub pattern for Madinah | — |
| /locations/madinah/madinah-airport/ | "Madinah Airport Taxi & Private Transfer \| MED Airport" | ~1,530 | Arrival and departure, a pre-booked vs airport-taxi comparison | — |
| /makkah-train-station-taxi/ | "Makkah Train Station Taxi" | ~410 | Owns the station intent | Thin: one H2 |
| /routes/madinah-train-station-taxi/ | "Madinah Train Station Taxi" | ~480 | Owns the station intent | Thin |
| /locations/makkah/aziziyah/ (and kudai, misfalah, jabal-omar…) | District → Haram pages | ~470 | Hyper-local entities | Thin, templated |
| /routes/jeddah-to-{hotel}-makkah-taxi/ (~45 hotel pages) | Airport → named-hotel pages | ~730 | Long-tail hotel names | Template pages; uses unverified claims such as "24/7" |
| /madinah-to-jeddah-airport-departures/ | | ~130 | — | Very thin |

**Schema:** TaxiService, Organization, WebSite, BreadcrumbList, ItemList and FAQPage on every page. **Hreflang:** present only on the hub pages; the route pages have none. **Conversion:** a form plus WhatsApp on every page, and prices shown on most commercial pages.

## 2. taxisaudiarabia.com (the owner's sister site, not a third-party competitor)

The owner runs this site (owner rules, 2026-11). It was inspected at sitemap level only, to spot overlap. Pattern: `/routes/` pages for every Makkah/Madinah direction, including `madinah-to-riyadh`, `madinah-airport-to-makkah`, `makkah-to-madinah-airport`, `jeddah-to-haramain-station` and hotel-named pages; `/locations/makkah|madinah/` with district pages; `/fleet/gmc-yukon-xl`; and an Arabic `/ar/routes/` set.

**Rules respected:** no text reused, no links between the sites, no shared JSON-LD identity. RideSaudi keeps its premium private-car, enquiry-first positioning (no "taxi" titles, no fixed fares).

## 3. Gap opportunities

| # | Keyword / intent | Competitor URL | Our target URL | Why it matters | Content required | Internal links | Conversion action | Status |
|---|---|---|---|---|---|---|---|---|
| 1 | makkah private transfer (hub) | taxiserviceksa /locations/makkah/ | /en/services/city-transport/makkah/ | Our hub was a short "inside Makkah" page with one-word FAQs; theirs routes every visitor need | Journey list, vehicles, JED and station arrivals, hotel moves, families, quotation | 13 in-text + 11 cards | Checklist → form / WhatsApp | **Done** |
| 2 | madinah private transfer (hub) | /locations/madinah/ | /en/services/city-transport/madinah/ | Same gap | Same, with Madinah-specific entities | 11 in-text + 9 cards | Same | **Done** |
| 3 | madinah to riyadh private car | taxiserviceksa (via Madinah routes); sister site /routes/madinah-to-riyadh | /en/services/intercity-transfers/madinah-to-riyadh/ | We only had Riyadh → Madinah ("either direction") | Departure-side planning, 823 km verified, Qassim break, RUH timing | 4+ inbound | Prefilled route form | **Done (new page)** |
| 4 | madinah airport to hotel / hotel to madinah airport | /locations/madinah/madinah-airport/ (~1,530 words) | /en/services/airport-transfers/madinah-airport/ | Ours had 4 short sections and no distance | MED → Haram distance, departures, onward options | Madinah hub, ziyarat, routes | Form | **Done** |
| 5 | makkah / madinah haramain station transfer | /makkah-train-station-taxi/, /routes/madinah-train-station-taxi/ | Hub sections (no separate pages) | They own the intent with thin pages | Verified station location and distance (al-Rusaifa ~3 km; Knowledge Economic City ~7 km) | — | FAQ + checklist | **Section done**; dedicated pages held (see roadmap) |
| 6 | Jeddah airport → named Makkah hotel | ~45 hotel pages | None | Long-tail, but every page would be a find-and-replace clone and break SEO-RULES §2 | — | — | — | **Not pursued** |
| 7 | Makkah district → Haram (Aziziyah, Kudai…) | /locations/makkah/aziziyah/ etc. | Makkah hub "Getting to and from the Haram area" | Same thin-template risk | Districts named in hub copy | — | — | **Section only** |
| 8 | Prices ("makkah to madinah taxi price") | Price tables | Not published | Owner has not approved fares; SEO-RULES §3 | — | — | Quotation | **Blocked on owner** |
| 9 | Arabic coverage | 78 AR URLs | All 354 URLs exist in EN and AR | Advantage: full native Arabic site with reciprocal hreflang | Keep | — | — | Advantage |
| 10 | Trust signals (reviews, ratings) | Some pages show ratings | None | We have no verified reviews to publish | Owner to supply a Google Business Profile or real reviews | — | — | **Blocked on owner** |
| 11 | "limousine" (ليموزين جدة مكة) | Not targeted by either competitor | Not mapped | Observed in Arabic autocomplete | Decide brand fit first | — | — | Owner decision |

## 4. Where RideSaudi is now ahead
- A complete EN + AR pair for every page, with reciprocal hreflang. The competitor's route pages have no hreflang at all.
- Verified distances with source and check date on hubs, airport and route pages.
- Clear private-only, enquiry-first wording, with no unverified 24/7, fixed-rate or "never late" claims.
- Contextual in-text links between hubs, airports and routes, not only menus and cards.
