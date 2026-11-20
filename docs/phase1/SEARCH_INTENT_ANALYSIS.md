# Search Intent Analysis (Phase 1)

Research date: 2026-11-15.

## 1. What the data is, and is not

| Data | Status |
|---|---|
| Search volume, keyword difficulty, CPC | **Not available.** No Keyword Planner, Ahrefs, Semrush or Search Console access. Every such cell in the CSVs says "not available". |
| Google Autocomplete, Saudi Arabia (`gl=sa`), English and Arabic | **Collected.** 128 generic seed phrases and 6 phrasings for each of 74 routes. This is real evidence that people type these phrases; it is not a volume figure. |
| Search results pages | Checked for 6 queries with a US-located tool. Indicative only. |
| Competitor pages | 13 pages fetched and read. |

Autocomplete counts are used as a **demand proxy** in the route scores. A route with many distinct commercial suggestions is searched in more ways than one with none. It cannot say how many searches there are.

Files: `KEYWORD_MASTER.csv` (1,113 phrases), `ARABIC_KEYWORD_RESEARCH.csv` (429), `ROUTE_KEYWORD_MAPPING.csv` (52 routes, one primary keyword each).

## 2. Findings

### 2.1 English route searches are led by "taxi" and price
For every major route the suggestions are dominated by "taxi", "taxi fare", "taxi price". "Private car", "private transfer", "car service" and "car with driver" appear as a second layer on the strongest routes only:

- Riyadh to Dammam: "riyadh to dammam private car", "private taxi from riyadh to dammam", "car service riyadh to dammam".
- Makkah to Madinah: "makkah to madinah private car with driver", "private car price", "private transfer".
- Jeddah to Makkah: "jeddah to makkah private transfer", "private car", "jeddah airport to makkah private transfer".

Implication: the site cannot ignore the word "taxi" (it is how people search), but it should not lead with it. Use "private car" in the title and H1, and answer the "taxi" and "price" questions in the body and FAQ.

### 2.2 Vehicle demand is attached to routes, not to "with driver" phrases
- Observed: "makkah to madinah gmc", "book gmc from makkah to madinah", "gmc car from makkah to madinah", "jeddah airport to makkah gmc", "staria makkah to madinah", "hyundai staria makkah".
- Not observed: any chauffeur intent for "gmc yukon with driver", "lexus with driver" or "suburban with driver" (suggestions are about seats, mirrors and driver-assist systems).

Implication: GMC and Staria belong as sections on the Makkah, Madinah and Jeddah route pages. Standalone "GMC with driver" or "Lexus with driver" pages have no observed demand; build them only as fleet pages for conversion, after verification.

### 2.3 Arabic searchers use "توصيل", not "نقل خاص"
- The dominant Arabic pattern is **"توصيل من [مدينة] الى [مدينة]"**, with the commercial variants **"سيارات توصيل"**, **"شركة توصيل"**, **"تاكسي من … الى …"** and **"سيارة خاصة من … الى …"**.
- For hire-with-driver the pattern is **"تأجير / ايجار سيارة مع سائق" + city** (Riyadh, Jeddah, Dammam, Madinah).
- **"ليموزين"** is widely used ("ليموزين الرياض", "ليموزين الرياض الدمام", "ليموزين جدة مكة", "شركة ليموزين"). The site does not use this word at all.
- **"مشاوير خاصة"**, **"توصيل مشاوير بين المدن"** and **"سيارات VIP للسفر بين المدن"** are natural colloquial phrasings for exactly this service.
- **"نقل خاص"** mostly means the private-transport licence-plate category ("نقل خاص لوحه", "نقل خاص ونقل عام"). Avoid it as a head term; "نقل خاص بين المدن" is the only relevant form.
- **"سائق خاص"** is mostly household-driver and sponsorship-transfer intent ("سائق خاص للتنازل", "نقل كفالة", "بالشهر"). This matches the owner's earlier complaint about driver-only enquiries. Do not target it.
- Several phrases proposed in the brief returned **no** suggestions: "سائق خاص بين المدن", "سيارة VIP مع سائق", "جمس مع سائق", "سوبربان مع سائق", "لكزس مع سائق", "سيارة عائلية مع سائق", "سيارة مع سائق للمسافات الطويلة". They may still be searched, but there is no evidence; treat them as hypotheses.
- "توصيل" is also used for parcels and furniture ("توصيل اغراض", "توصيل اثاث", "مندوب"). Pair it with "سيارة خاصة" or "مع سائق" in titles so the page is clearly about passengers.

The 39 live Arabic pages are well written, but 22 of 39 Arabic titles do not contain "توصيل".

### 2.4 Intent classes

| Class | Typical phrases | Share of collected phrases | Treatment |
|---|---|---|---|
| Transactional, private hire | private car, car service, car with driver, GMC, شركة توصيل, مع سائق, ليموزين | 232 of 1,113 marked High | Title, H1, primary target |
| Transactional, generic ride | taxi, توصيل, تاكسي | 697 marked Medium, together with price queries | Capture in body and FAQ |
| Price investigation | taxi price, fare, سعر | within Medium | Needs an owner decision on prices (see competitor report) |
| Journey planning | distance, by car how many hours, كم ساعة | 153 marked Low | Answer in the facts block; good for AI answers |
| Excluded | share taxi, driver salary, driver jobs, سائق للتنازل | 13 | Never target |

### 2.5 Where the demand concentrates (distinct commercial suggestions per city pair)

| Rank | City pair | EN | AR |
|---|---|---|---|
| 1 | Makkah and Jeddah (incl. airport) | 26 | 28 |
| 2 | Jeddah to Makkah | 25 | 24 |
| 3 | Madinah and Makkah | 27 | 16 |
| 4 | Dammam and Riyadh | 19 | 17 |
| 5 | Jeddah and Madinah | 20 | 11 |
| 6 | Jeddah and Riyadh | 18 | 11 |
| 7 | Dammam and Bahrain | 14 | 12 |
| 8 | Riyadh and Makkah | 16 | 8 |
| 9 | Makkah and Taif | 15 | 8 |
| 10 | Khobar and Bahrain | 10 | 9 |

At the other end: AlUla to Dammam (0), AlUla to Riyadh (1), Riyadh to Buraydah (1), Jeddah to KAEC (1), Riyadh to AlUla (2).

Pilgrimage and airport corridors carry far more search variety than the long desert routes that make up most of the current 39 pages.

### 2.6 Destination naming
Searchers type "Bahrain", not "Manama", and "Kuwait", not "Kuwait City". The live slugs stay as they are, but titles and H1s should lead with the country name.

## 3. One keyword, one page

`ROUTE_KEYWORD_MAPPING.csv` gives every route one primary English keyword (`[Origin] to [Destination] private car`) and one primary Arabic keyword (`توصيل من … إلى …`), and marks whether each was observed or is a hypothesis. Overlaps to settle before content work:

| Intent | Pages competing | Recommendation |
|---|---|---|
| Jeddah (city or airport) to Makkah | `intercity-transfers/jeddah-to-makkah/`, `umrah-transport/jeddah-airport-to-makkah/` | Route page owns city-to-city and hotel pickups; the Umrah page owns airport arrival. State this in both titles. |
| Riyadh to the Eastern Province | `riyadh-to-dammam/`, `riyadh-to-al-khobar/` | Dammam page stops targeting Al Khobar and Dhahran in its description, or the two are consolidated. Owner decision in Phase 2. |
| Saudi to Bahrain | `dammam-to-bahrain/`, `riyadh-to-manama/`, `cross-border-transfers/bahrain/` | Country page explains the crossing; each route page owns its origin. Retitle Riyadh page to "Riyadh to Bahrain". |
| Saudi to UAE | three routes plus the country page | Same model: country page for rules, routes for origin-specific journeys. |
| Premium intercity (generic) | intercity hub, `private-intercity-chauffeur/`, `luxury-intercity-transfers/` | Hub owns "intercity private transfer Saudi Arabia"; the other two need distinct angles or consolidation. |

## 4. What would turn hypotheses into measurements

1. Search Console: 90 days of queries and pages (shows what the live 272 URLs already receive).
2. Keyword Planner or Ahrefs/Semrush volumes for the 52 primary keywords.
3. GA4 live, so route pages can be judged on enquiries.

Until then, every priority in Phase 1 is a ranked judgment based on observed search phrasing, competitor behaviour and business fit.
