# Service page architecture, keyword map and completion checklist

Rules: [SEO-RULES.md](../SEO-RULES.md). Content lives in `src/content/*.ts` (EN + AR side by side). `validateRegistry()` runs at build and fails on: missing Arabic, duplicate title/description/H1, fewer than 4 FAQs, broken parent/related links, orphan pages.

## URL convention
`/{en|ar}/{path}/` (locale prefix always, trailing slash, same English slugs in both languages so hreflang pairs are exact). `/services/...` without a locale redirects to `/en/...`.

## Implemented (batch 1): 15 pages x 2 languages = 30 URLs
| Path | Intent | Ahrefs evidence (KD / monthly volume, SA) |
|---|---|---|
| services | Directory hub | n/a (navigational) |
| services/airport-transfers | Airport transfer, parent | "airport transfer riyadh" 40, "airport transfer jeddah" 10 |
| services/airport-transfers/jeddah-airport | Jeddah airport pickup | "jeddah airport transfer" 60 |
| services/airport-transfers/riyadh-airport | Riyadh airport pickup | "airport transfer riyadh" / "riyadh airport transfer" 40 / 20 |
| services/airport-transfers/madinah-airport | Madinah airport pickup | "airport transfer madinah" (in AI-overview set) |
| services/airport-transfers/dammam-airport | Dammam airport pickup | "airport transfer dammam" (in AI-overview set) |
| services/umrah-transport | Umrah taxi, parent | "umrah taxi service" KD57 vol300; "umrah taxi" KD29 vol250; "private umrah taxi" 70 |
| services/umrah-transport/jeddah-airport-to-makkah | Airport to Makkah | "airport transfer jeddah to makkah" 40; "jeddah airport to makkah taxi fare" |
| services/intercity-transfers | Intercity, parent | "private driver saudi arabia" 30 |
| services/intercity-transfers/makkah-to-madinah | Both directions (one page) | "makkah to madinah taxi" KD0 vol150; "madinah to makkah taxi" KD0 vol150; fare/price variants 250/90/50 |
| services/event-transportation | Event transport, parent | Ahrefs export for events still missing (see below) |
| services/event-transportation/wedding-transport | Wedding guest transport | as above |
| luxury-transportation | Luxury / VIP chauffeur, parent | "luxury chauffeur saudi arabia", "vip transportation saudi arabia" (AI-overview set) |
| luxury-transportation/luxury-chauffeur | Chauffeur for a set time | as above |
| services/chauffeur-services | Chauffeur / private driver, parent (has comparison table) | "private driver saudi arabia" 30; "corporate chauffeur riyadh" |

Data source: `ahref reports/taxiserviceksa/*matching-terms*.csv` (UTF-8 tab-separated). Volumes are small, so the plan favours fewer, deeper pages over many thin ones.

## Deliberately NOT published yet (and why)
- **madinah-to-makkah** as its own page: same route as makkah-to-madinah, near-duplicate intent. Covered on the single bidirectional page; reconsider only with genuinely different content.
- **Arabic "مطلوب سائق خاص ..." keywords** (the largest Arabic volumes, 150 to 250): these are job-seeker searches ("driver wanted"), not customers. Not targeted.
- **Fare / price / distance pages** ("makkah to madinah taxi fare", "riyadh to makkah distance"): would require invented fares/distances. Not published until RideSaudi supplies verified numbers.
- **Other airport/route/city pages** (Taif, Riyadh to Jeddah, Riyadh to Dammam, Al Khobar, AlUla, Tabuk, Abha, etc.): coverage not confirmed, and no unique verified content yet. Add per the pre-publish gate once confirmed.
- **Vehicle pages in /fleet/** (S-Class, V-Class, Sprinter, Escalade, Yukon, Land Cruiser, Staria...): no verified fleet. `/fleet/` not created.
- **Special transportation (wheelchair, women-only, senior-friendly...)**: only publishable once the capability is real; never describe an ordinary vehicle as accessible.
- **Tourism, group (Hiace/minibus), city transport, most other event sub-pages** (corporate, conference, exhibition, concert, festival, delegation, per-city events): need verified capability and unique content, so queued for the next batches.
- **Competitor pages with 28 near-identical service names**: not replicated.

## Remaining queue (priority order, each must pass the pre-publish gate)
1. Event sub-pages with real differentiation: corporate-events, conference-transport, event-airport-transfers.
2. Luxury: vip-car-service, executive-transport, luxury-airport-transfers (only if content differs from the existing pages).
3. Umrah: makkah-ziyarat, madinah-ziyarat, family/group Umrah (needs confirmed group capacity wording).
4. Intercity: riyadh-to-jeddah, jeddah-to-madinah (after route confirmation).
5. Chauffeur children: hourly-driver, full-day-driver, business-chauffeur.
6. `/fleet/` once vehicles are verified.
7. Event enquiry fields (event type, venue, guest count, vehicle quantity, schedule) and luxury fields (trip type, hours): the shared form currently only has general fields; extra fields are not built yet.

## Ahrefs exports that would help next
Keyword Explorer for "event transportation saudi arabia", "luxury car / chauffeur saudi arabia", "airport transfer / umrah taxi / intercity taxi" in Arabic (current files are mostly English), plus Content Gap vs both competitors.

## Batch 2 (implemented): 6 pages x 2 languages
services/event-transportation/corporate-events, conference-transport (exhibitions merged in on purpose, no separate thin page), event-airport-transfers; services/chauffeur-services/hourly-driver; services/umrah-transport/makkah-ziyarat, madinah-ziyarat (transport only, no guide claims). Total now 21 pages = 42 URLs. Remaining queue above, minus these.

## Full build (owner confirmed all-KSA and cross-border coverage on 2026-11-06)
87 pages x 2 languages = 174 content URLs (+ 2 home) = 176 sitemap URLs. Categories: airport (7), intercity (8), cross-border (5: hub, Bahrain, Qatar, UAE, Kuwait), Umrah (7), luxury (11), events (14), chauffeur (8), city transport (9), tourism (6), group (4), special (7), fleet (1), services hub.
Intentionally merged (no thin/duplicate pages): madinah-to-makkah, madinah-to-jeddah, makkah-to-jeddah (covered bidirectionally on the primary route pages); airport-to-makkah / airport-to-madinah / madinah-airport-transfer (covered by Jeddah-airport-to-Makkah and Madinah airport pages); private-car-with-driver (= luxury-chauffeur); vip-chauffeur (= luxury-chauffeur / VIP car service); airport-chauffeur; exhibition-transport (inside conference-transport); delegation-transport (inside vip-delegation-transport); alula and taif city pages (inside tourism pages); sightseeing pages per city (inside city pages + private-sightseeing-driver); large-family / Hiace / large-group / private-van pages (inside family-transport and van-and-minibus).
Not built until capability is confirmed: wheelchair-accessible and women's private transportation (special hub states honestly what is requested vs confirmed), vehicle-model pages.
Cross-border: border names (King Fahd Causeway, Salwa, Batha, Khafji) are stated as geography only; which countries/vehicle permits RideSaudi actually handles must be confirmed by the owner.
Build guards (registry.ts): missing AR, duplicate title/description/H1, duplicate FAQs (generic ones are auto-scoped to the page), <4 FAQs, broken links, orphans, Latin text in Arabic answers.

## Batch 7 (2026-11-07): 6 more city pages
city-transport/yanbu, jubail, najran, jazan, hail, buraidah (EN + AR). Total 93 pages = 186 content URLs. Najran and Jazan state that border-region access is confirmed, not promised; Farasan ferry is arranged separately with its operator.

## Batch 8 (2026-11-08): Riyadh cluster
URL structure kept as-is: the Riyadh pillar is `services/city-transport/riyadh` (no separate /locations/ tree, which would duplicate it). Rewritten with a districts list (Olaya, KAFD, Diplomatic Quarter, Al Malqa/Al Yasmin/Al Narjis, Diriyah, Riyadh Front, RUH) and 12 related links to the whole cluster.
New pages (EN + AR): `services/tourism-transport/riyadh-sightseeing`, `services/intercity-transfers/riyadh-to-makkah`, `riyadh-to-madinah`, `riyadh-to-al-ahsa`. Existing Riyadh pages (airport, event, to-dammam, to-jeddah) now link into the cluster. Total 98 pages = 196 content URLs.
Intentionally not built (generic pages already cover the intent; a Riyadh clone would be a near-duplicate): riyadh hourly / full-day chauffeur (see chauffeur-services/hourly-driver, full-day-driver), riyadh corporate (business-chauffeur, corporate-events), riyadh VIP/luxury (luxury-chauffeur), riyadh hotel transfers (airport-to-hotel, hotel-transportation), riyadh family/group (group-transportation), riyadh to AlUla/Bahrain/Qatar/UAE/Kuwait (alula in tourism; cross-border pages exist).
Needs owner confirmation: that Riyadh to Makkah / Madinah / Al Ahsa are routes RideSaudi will actually run (pages state availability is confirmed per quotation; no distances, times or fares published).
