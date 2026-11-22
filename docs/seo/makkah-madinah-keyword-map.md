# Makkah & Madinah — keyword-to-URL map

Date: 2026-11-23. One primary URL per intent. EN URLs are shown; the AR twin at `/ar/…` owns the Arabic phrases.

## 1. What evidence exists (and what does not)

| Source | Status | Use in this map |
|---|---|---|
| Google Search Console | Exports in `Saudi ride/ahref reports` cover only the **28 days to 2026-11-18**. Site total: 2 clicks, 37 impressions. The only queries are "airport transfers saudi arabia" (11 impressions, position 15.6), "saudi airport transfers", "airport pickup saudi arabia" and "premium chauffeur service saudi". **No Makkah or Madinah query has any impression yet.** There is no 16-month, 3-month or per-page device data, because the domain only started getting impressions in November 2026. | Recorded as "GSC: none". Positions 4–20, CTR gaps and wrong-URL ranking cannot be measured yet. |
| Ahrefs / Semrush | No access in this environment. | No search volume or difficulty is stated anywhere. |
| Google Autocomplete (gl=sa) | Collected 2026-11-15 (`docs/phase1/KEYWORD_MASTER.csv`, `ARABIC_KEYWORD_RESEARCH.csv`). | Marked "AC": the phrase is observed demand, but not measured. |
| Competitor page targeting | Checked 2026-11-23 on taxiserviceksa.com (sitemaps and 12 pages) and the sitemap of taxisaudiarabia.com. | Marked "Comp". |

**Needed from the owner:** a fresh GSC Performance export (Queries + Pages, last 3 months, filtered to queries containing makkah, madinah, مكة, المدينة, jeddah airport) about 4 weeks after this deploy, so this map can be re-ranked on real data.

## 2. English map

| Keyword (seed or observed) | Intent | Primary URL | Class | Evidence | Content now on the page | Supporting links in |
|---|---|---|---|---|---|---|
| makkah private transfer · private transfer in makkah · private car service makkah | Transactional | /en/services/city-transport/makkah/ | Primary | AC (route variants), Comp (/locations/makkah/) | H1, answer, 9 journey types, vehicle classes, table | Umrah hub, JED → Makkah, ziyarat, makkah-to-madinah |
| makkah hotel transfer · makkah hotel to hotel transfer | Transactional | /en/services/city-transport/makkah/ (section "Hotel-to-hotel moves") | Secondary | Comp (district pages) | Section + checklist | hotel-transportation |
| makkah gmc transfer · gmc with driver makkah · makkah suv transfer · makkah sedan transfer · makkah private car with driver | Transactional | /en/services/city-transport/makkah/ (section "Sedan, SUV or GMC") | Secondary | AC: GMC demand is attached to routes, not city-only phrases | Vehicle list, 3 FAQs | /en/fleet/ |
| makkah haramain station transfer · makkah train station taxi | Transactional | /en/services/city-transport/makkah/ (section "Arriving at Jeddah airport or the Haramain station") | Secondary | Comp (/makkah-train-station-taxi/, 411 words) | al-Rusaifa, ~3 km, FAQ | — |
| makkah chauffeur service · makkah private taxi | Commercial | /en/services/city-transport/makkah/ | Secondary (not in title: "taxi" pulls low-value leads, owner feedback 2026-11-14) | AC | Covered by "private car" wording | — |
| jeddah airport to makkah private transfer · jeddah airport to makkah | Transactional | /en/services/umrah-transport/jeddah-airport-to-makkah/ | Primary | AC (many variants) | Existing page + new vehicle section | Makkah hub, JED airport, jeddah-to-makkah |
| jeddah to makkah private car | Transactional | /en/services/intercity-transfers/jeddah-to-makkah/ | Primary | AC | Hotel/city pickup page | Makkah hub |
| makkah to jeddah private transfer · makkah to jeddah airport | Transactional | /en/services/intercity-transfers/makkah-to-jeddah/ | Primary | AC, Comp | Flight-time planning | Makkah hub, JED → Makkah |
| makkah to madinah private transfer / car / taxi | Transactional | /en/services/intercity-transfers/makkah-to-madinah/ | Primary | AC (top corridor) | 12 FAQs, 436 km | both hubs (new), madinah-to-riyadh |
| madinah to makkah private transfer | Transactional | /en/services/intercity-transfers/madinah-to-makkah/ | Primary | AC, Comp | Miqat angle | Madinah hub, MED |
| makkah to riyadh / riyadh to makkah private transfer | Transactional | /en/services/intercity-transfers/makkah-to-riyadh/ · /riyadh-to-makkah/ | Primary each | AC | Verified 871 km | Makkah hub |
| makkah family transfer · makkah group transportation | Commercial | /en/services/umrah-transport/family-umrah-transport/ · /group-umrah-transport/ | Primary each | — | Existing | Both hubs (new in-text links) |
| madinah private transfer · private transfer in madinah · madinah private car with driver | Transactional | /en/services/city-transport/madinah/ | Primary | AC (AR equivalents), Comp | H1, answer, 8 journey types, table | MED, ziyarat, alula, routes |
| madinah airport transfer · madinah airport to hotel · prince mohammad bin abdulaziz airport transfer · hotel to madinah airport | Transactional | /en/services/airport-transfers/madinah-airport/ | Primary | Comp | 20.7 km section, departure section | Madinah hub |
| madinah hotel transfer · madinah hotel pickup | Transactional | /en/services/city-transport/madinah/ | Secondary | Comp | "Staying near the Prophet's Mosque" | — |
| madinah gmc / suv / sedan transfer | Transactional | /en/services/city-transport/madinah/ (vehicle section) | Secondary | — | Vehicle list, 2 FAQs | /en/fleet/ |
| madinah hotel to railway station · madinah train station transfer | Transactional | /en/services/city-transport/madinah/ (arrivals section) | Secondary | Comp (/routes/madinah-train-station-taxi/, 484 words) | Knowledge Economic City, ~7 km | — |
| madinah to jeddah private transfer · madinah to jeddah airport | Transactional | /en/services/intercity-transfers/madinah-to-jeddah/ | Primary | AC, Comp | Existing | Madinah hub, MED |
| jeddah to madinah private transfer · jeddah airport to madinah | Transactional | /en/services/intercity-transfers/jeddah-to-madinah/ | Primary (covers the airport start; no separate page) | AC | Section "Starting at Jeddah airport" + FAQ | Madinah hub |
| madinah to riyadh private transfer | Transactional | /en/services/intercity-transfers/madinah-to-riyadh/ **(new)** | Primary | Comp (both competitors have it), AC for the reverse | 823 km, Qassim break, RUH timing | riyadh-to-madinah, Madinah hub, MED, makkah-to-riyadh |
| riyadh to madinah private transfer | Transactional | /en/services/intercity-transfers/riyadh-to-madinah/ | Primary | AC | Existing | — |
| makkah ziyarat car · madinah ziyarat car | Transactional | /en/services/umrah-transport/makkah-ziyarat/ · /madinah-ziyarat/ | Primary each | AC, Comp | Existing | Both hubs |
| private van transfer makkah / madinah | Transactional | Not targeted | — | — | Only the Hyundai Staria is a confirmed van-type vehicle; no Hiace or minibus is confirmed. It is mentioned as "Staria" in the vehicle lists. | — |

## 3. Arabic map (natural Saudi phrasing, not translated)

Phase 1 found that Saudi searchers use **توصيل**, **سيارة خاصة**, **حجز سيارة**, **سيارات توصيل** and **ليموزين**. It also found that **نقل خاص** reads as a licence-plate category, and that **سائق خاص** pulls household-driver and job intent. Titles therefore use "سيارة خاصة مع سائق" for the city hubs and "توصيل من X إلى Y" for routes.

| Arabic keyword | Intent | Primary URL | Evidence | Note |
|---|---|---|---|---|
| سيارة خاصة مع سائق في مكة · توصيل خاص مكة · سيارة مع سائق في مكة | Transactional | /ar/services/city-transport/makkah/ | AC (pattern), Comp | Title + H1 + answer |
| جمس مع سائق مكة · سيارة سيدان مع سائق · سيارة دفع رباعي مع سائق | Transactional | /ar/services/city-transport/makkah/ (vehicle section) | — | "جمس يوكن", "ستاريا", "سيدان" in H1 |
| سيارة مع سائق في المدينة المنورة · تأجير سيارة مع سائق في المدينة المنورة | Transactional | /ar/services/city-transport/madinah/ | AC (both observed) | Title "سيارة خاصة مع سائق في المدينة المنورة والمطار" |
| توصيل من مطار المدينة إلى الفندق · توصيل مطار المدينة | Transactional | /ar/services/airport-transfers/madinah-airport/ | Comp | New AR sections |
| توصيل من مطار جدة إلى مكة · حجز سيارة من مطار جدة الى مكة · حجز تاكسي من مطار جدة الى مكة | Transactional | /ar/services/umrah-transport/jeddah-airport-to-makkah/ | AC | — |
| سيارة خاصة من جدة الى مكة · سيارات توصيل من جدة الى مكة | Transactional | /ar/services/intercity-transfers/jeddah-to-makkah/ | AC | — |
| شركة توصيل من مكة الى جدة · حجز سيارة من مكة الى مطار جدة | Transactional | /ar/services/intercity-transfers/makkah-to-jeddah/ | AC | — |
| حجز سيارة من مكة الى المدينة · توصيل من مكة الى المدينة | Transactional | /ar/services/intercity-transfers/makkah-to-madinah/ | AC | — |
| سيارة خاصة من المدينة الى مكة · شركات توصيل من المدينة الى مكة | Transactional | /ar/services/intercity-transfers/madinah-to-makkah/ | AC | — |
| توصيل من المدينة الى الرياض · سيارة خاصة من المدينة الى الرياض | Transactional | /ar/services/intercity-transfers/madinah-to-riyadh/ **(new)** | Comp; AC pattern | Title "توصيل من المدينة إلى الرياض بسيارة خاصة" |
| ليموزين جدة مكة · ليموزين مطار جدة | Transactional | Not mapped yet | AC | The word "ليموزين" is not used on the site. It needs an owner decision on whether "limousine" fits the brand. |

## 4. Cannibalisation check

| Pair | Risk | Resolution |
|---|---|---|
| Makkah hub vs JED → Makkah | Medium (both mention JED) | The hub's title and H1 target the city and its vehicles, and the JED page targets the airport route. The hub links to the JED page with "Jeddah Airport to Makkah". |
| JED → Makkah vs Jeddah → Makkah | Medium | Airport arrival vs Jeddah hotel; each links to the other with a different anchor. |
| Madinah hub vs Madinah airport | Medium | The hub covers the city and its routes; the airport page owns "Madinah airport transfer / to hotel". The hub links there in its first list item. |
| Riyadh → Madinah vs Madinah → Riyadh | Low | Each page is written for one direction (5-word similarity 0.18), and they link to each other. |
| Makkah hub vs Madinah hub | Low | Similarity 0.195; different titles, entities and sections. |
| ridesaudi.com vs taxisaudiarabia.com (owner's sister site) | Brand-level | Both sites target the same Makkah/Madinah routes. Per the owner's rules the sites stay separate: no copied text, no cross-links, different positioning. Ranking competition between them is a business decision for the owner. |
