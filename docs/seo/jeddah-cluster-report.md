# Jeddah cluster — audit, keywords, changes and verification

Date: 2026-11-23 · Branch `claude/ridesaudi-seo-growth-70eb32`, based on `vercel-repo/main` a8a5c80 · Code: `src/content/jeddah-cluster.ts`

## 1. Audit of the existing Jeddah pages (before)

26 pages mention Jeddah (each in EN + AR). The two money pages were the thinnest:

| Page | Before | Problem |
|---|---|---|
| /services/airport-transfers/jeddah-airport/ | ~410 words, 4 sections, 4 FAQs, last reviewed 2026-11-06 | No distances, no terminal names, no vehicle advice, no in-text links to the onward and return routes |
| /services/city-transport/jeddah/ | ~360 words, FAQ answers such as "No." | No district timings, no port or station detail, no vehicle section |
| jeddah-to-yanbu, jeddah-to-alula | ~430–460 words | Both said "we do not publish a distance"; no route-facts table |
| jeddah-to-riyadh | ~475 words | No route-facts table |
| Strong already (left alone) | jeddah-to-makkah, jeddah-to-madinah, makkah-to-jeddah, madinah-to-jeddah, riyadh-to-jeddah (870–940 words, verified distances) | — |

## 2. Keywords people search (evidence, not volumes)

Source: Google Autocomplete (gl=sa) in `docs/phase1/KEYWORD_MASTER.csv`, collected 2026-11-15. Search Console has no Jeddah queries yet, and there is no Ahrefs access, so no volumes or difficulty scores are given.

| Keyword cluster | Language | Primary URL now |
|---|---|---|
| car service jeddah · private transfer jeddah · car with driver jeddah · chauffeur service jeddah · driver service jeddah | EN | /en/services/city-transport/jeddah/ |
| car service jeddah airport · jeddah airport transfer · limo service jeddah airport | EN | /en/services/airport-transfers/jeddah-airport/ |
| سيارة مع سائق جدة · تأجير سيارة مع سائق جدة · ايجار سيارة مع سائق جدة · ليموزين جدة · شركة ليموزين جدة | AR | /ar/services/city-transport/jeddah/ (title "سيارة مع سائق في جدة"; "ليموزين جدة" in the opening section) |
| ليموزين مطار جدة · حجز تاكسي مطار جدة · شركة تاكسي مطار جدة · توصيل مطار جدة | AR | /ar/services/airport-transfers/jeddah-airport/ (title "توصيل وليموزين مطار جدة بسيارة خاصة مع سائق") |
| jeddah to al baha private car · توصيل من جدة الى الباحة | EN/AR | **new** /services/intercity-transfers/jeddah-to-al-baha/ |
| al baha to jeddah airport · توصيل من الباحة الى مطار جدة | EN/AR | **new** /services/intercity-transfers/al-baha-to-jeddah/ |
| jeddah to riyadh private car · سيارة خاصة من جدة الى الرياض · حجز سيارة من جدة الى الرياض | EN/AR | /services/intercity-transfers/jeddah-to-riyadh/ |

**On "ليموزين":** in everyday Saudi Arabic this word means a pre-booked car with a driver, and it is the most frequent Jeddah phrasing in autocomplete (six variants). It is used to describe the service in the Arabic copy and in the airport title. It is not used as a brand name or as a claim of a luxury vehicle class. "تاكسي" stays out of titles, following the owner's lead-quality feedback.

## 3. Competitor check

**taxiserviceksa.com.** Checked 2026-11-23 via its sitemaps. Its Jeddah pages are:
- a Jeddah airport page;
- taxi-in-jeddah;
- jeddah-corniche-hotel-taxi;
- jeddah-port-taxi-transfer;
- district pages: Al Balad, Al Hamra, Corniche, Obhur, Islamic Port, KAEC;
- jeddah-train-station-taxi;
- about 45 "Jeddah airport to named hotel" template pages;
- no Al Baha route.

**The owner's sister site (taxisaudiarabia.com).** It has jeddah-airport-to-jeddah-city and jeddah-to-haramain-station. Nothing was copied from it and nothing links to it.

**Decisions:**
- District, port and station intents → sections and a distance table on the Jeddah hub and the airport page. No thin district pages.
- Hotel-name pages → not built: they would be template clones (SEO-RULES §2).
- Al Baha → built. Distinct intent, the Al Baha city page already promised it, both directions differ, and no competitor has it.

## 4. Changes

| Page | Change |
|---|---|
| Jeddah city hub (EN + AR) | New title, meta, H1 and answer. 8 sections: journey list with 15 in-text links, districts with timings, vehicles, business, Haramain stations and port, events, evening traffic, quotation. Distance table (9 rows). 9 FAQs. |
| Jeddah airport (EN + AR) | EN title kept (it is the page's equity); new AR title, meta, H1 and answer. 8 sections: destinations with 18 in-text links, Terminal 1 / North Terminal / Hajj terminal, meeting the driver, vehicles, car vs Haramain train, departures (links to all 5 "to Jeddah" routes), families, quotation. Distance table (8 rows). 9 FAQs. |
| **New:** Jeddah to Al Baha (EN + AR) | Two-road planning (coast Route 5 vs highland Route 15 via Taif), airport start, mountain mist, arrival, vehicles, onward to Abha. Facts table, 7 FAQs. |
| **New:** Al Baha to Jeddah (EN + AR) | Flight-first planning, the descent, Jeddah districts vs the airport, a last morning or a Taif stop, vehicles. Facts table, 6 FAQs. |
| Jeddah to Yanbu | Unverified-distance paragraph replaced (324 km to JED, 343 km to Al Balad); facts table; KAEC stop section; 2 FAQs |
| Jeddah to AlUla | Unverified-distance paragraph replaced (665 km coast vs 724 km via Madinah); facts table; "coast or via Madinah" section; 2 FAQs |
| Jeddah to Riyadh | Facts table (955 km, Route 40); family-moving section; 1 FAQ |
| Links | Related cards added on the hub, airport, Al Baha city, Taif, Abha, Yanbu, AlUla, Riyadh and cruise-port pages; form prefill added for both new routes |

## 5. Facts and sources

- **Google Maps, checked 2026-11-23:**
  - JED → Jeddah Waterfront 22.9 km / 24 min
  - JED → Historic Jeddah 25.6–27.8 km / about 30 min
  - JED → Obhur Al Shamaliyah 28.8 km / 24–26 min
  - JED → Jeddah Islamic Port 30–32 km / 29–33 min
  - Historic Jeddah → Al Baha: 394 km / 4 h 42 min (Route 5) or 387 km / 4 h 49 min (Route 15)
  - Al Baha → JED: 396 km / 4 h 37 min (Route 15), alternative 411 km
  - JED → AlUla: 665 km / 7 h 31 min (Route 5 + 328) or 724 km / 7 h 26 min (Route 15)
- **Already sourced in the repo:**
  - JED → Haram 98 km
  - Jeddah → Taif 171 km
  - Jeddah → Prophet's Mosque 404 km
  - Yanbu ↔ JED 324 km and ↔ Al Balad 343 km
  - Riyadh ↔ Al Balad 955 km
  - JED Terminal 1 and North Terminal
  - Haramain stations in Sulaymaniyah and at the airport
  - Raghadan 4–5 km and Dhee Ain 24 km from Al Baha
- **Not claimed:** prices, flight tracking, free waiting time, 24/7 availability, meet-and-greet signs, Hajj terminal access, reviews.

## 6. Verification (local production build)

- `tsc`, ESLint: 0 errors. `next build`: 424/424 static pages.
- Indexability audit: **402 URLs, every bucket 0** (status, robots, X-Robots-Tag, canonical, hreflang, Link header, fewer than 3 inlinks, sitemap/hreflang mismatch).
- All 14 changed or new URLs (EN + AR) return 200 and are self-canonical. JSON-LD parses, no raw link markup remains, and 0 in-text links point to the other language.
- 5-word similarity (limit 0.30):

  | Pair | EN | AR |
  |---|---|---|
  | Jeddah → Al Baha vs Al Baha → Jeddah | 0.233 | 0.241 |
  | Jeddah → Al Baha vs Al Baha city page | 0.208 | 0.218 |
  | Jeddah → Al Baha vs Jeddah → Taif | 0.183 | 0.188 |
  | Jeddah hub vs airport | 0.212 | 0.221 |
  | AlUla vs Yanbu | 0.210 | 0.228 |

- The Arabic airport page was checked on a 375 px mobile viewport: RTL and no page overflow.

## 7. Open items for the owner

1. Approval to commit and deploy. After deploy:
   - request indexing for the hub, the airport page and both Al Baha routes (EN + AR);
   - resubmit the sitemap.
2. A better Al Baha photo. The only one is 596×335, which is soft as a full-width hero.
3. Confirm whether drivers hold a name sign in JED arrivals, and how long they wait after a delayed landing. This would unlock a stronger "meeting your driver" section.
4. Not built, on purpose:
   - Jeddah ↔ Tabuk (about 1,000 km, little evidence of road demand);
   - Jeddah hotel-name pages (template risk);
   - separate Jeddah station or port pages (covered as sections until Search Console shows demand).
