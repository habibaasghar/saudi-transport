# Makkah & Madinah — existing page audit

Date: 2026-11-23 · Base: `vercel-repo/main` at 9373fca (the live site) · Branch: `claude/ridesaudi-seo-growth-70eb32`

## 1. How the site is built (what this audit inspected)

| Area | Finding |
|---|---|
| Framework | Next.js 16 App Router, TypeScript, next-intl. Locales `/en/` and `/ar/` (RTL), trailing slash; `/` and unprefixed paths 308 to `/en/`. |
| Routing | Every service, city, airport and route page is one entry in the content registry (`src/content/registry.ts`), rendered by `[locale]/[...slug]` through `ServicePageView`. Blog guides live in `src/content/blog/`. 160 registry pages after this pass (354 public URLs). |
| Header / nav | `DesktopNav` and `MobileNav` dropdowns from `src/lib/nav.ts`; Umrah and the main intercity routes are in the menus. |
| Breadcrumbs | Rendered from the registry `parent` chain, plus `BreadcrumbList` JSON-LD. |
| Internal links | Until now only the `related` cards, the city-hub "routes from this city" chips and the guide chips were links. Section text such as "(see Makkah ziyarat)" was **plain text, not a link**. Fixed in this pass with inline links (see the internal link map). |
| Metadata | `${title} \| RideSaudi`, unique descriptions, self-canonical, `en`/`ar`/`x-default` hreflang in the HTML and the sitemap; the next-intl Link header is off. |
| Schema | `pageSchema()` emits Organization, WebSite, WebPage, BreadcrumbList, Service and FAQPage (the FAQs are visible on every page). |
| Sitemap / robots | `/sitemap.xml` is an index with 14 grouped child sitemaps and a real `lastmod` per page. robots.txt allows all and blocks `/api/` and `/admin/`. Machine files carry `X-Robots-Tag: noindex`. |
| Images | `next/image`. The hero is `priority` with `fetchPriority="high"` (the LCP image); cards use `loading="lazy"` with width and height. The Makkah and Madinah heroes are owner-supplied landmark photos (~200 KB WebP source, resized by Next). |
| Forms / tracking | `EnquiryForm` posts to `/api/enquiry/` (database row plus email alert, fixed 2026-11-23), with a WhatsApp fallback. `RouteTracker` and `src/lib/analytics.ts` fire events, but Vercel still has no `NEXT_PUBLIC_GA_ID`, so no events are collected yet. |

## 2. Inventory of every Makkah / Madinah / Umrah related page

The EN URL is shown; each page has an AR twin at `/ar/…`. "Related / inbound" = links this page lists / registry pages that link to it. Words = answer + sections + FAQs (EN).

| URL | Title before | Title now | H1 (EN) | AR title now | Sections | FAQs | Related / inbound | Words | Change |
|---|---|---|---|---|---|---|---|---|---|
| /en/services/airport-transfers/jeddah-airport/ | Jeddah Airport Transfer: Private Car with Driver | Jeddah Airport Transfer: Private Car with Driver | Jeddah airport transfer, arranged before you land | التوصيل من مطار جدة بسيارة خاصة مع سائق | 4 | 4 | 9 / 27 | ~412 | kept |
| /en/services/airport-transfers/madinah-airport/ | Madinah Airport (MED) Private Transfer to Hotel | Madinah Airport (MED) Private Transfer to Hotel | Madinah airport transfer to your hotel | التوصيل من مطار المدينة المنورة بسيارة خاصة | 7 | 6 | 8 / 14 | ~626 | kept |
| /en/services/umrah-transport/ | Private Umrah Taxi & Transport in Saudi Arabia | Private Umrah Taxi & Transport in Saudi Arabia | Private Umrah taxi and transport, planned in advance | تاكسي وتوصيل خاص للمعتمرين في السعودية | 4 | 5 | 6 / 15 | ~477 | changed |
| /en/services/umrah-transport/jeddah-airport-to-makkah/ | Jeddah Airport to Makkah: Private Transfer | Jeddah Airport to Makkah: Private Transfer | Jeddah airport to Makkah, in one private journey | من مطار جدة إلى مكة المكرمة: توصيل خاص | 7 | 6 | 7 / 6 | ~628 | kept |
| /en/services/umrah-transport/makkah-ziyarat/ | Makkah Ziyarat Private Car with Driver | Makkah Ziyarat Private Car with Driver | Private transport for Makkah ziyarat | نقل زيارات مكة المكرمة بسيارة خاصة مع سائق | 6 | 6 | 6 / 4 | ~544 | kept |
| /en/services/umrah-transport/madinah-ziyarat/ | Madinah Ziyarat Private Car: Quba & Uhud | Madinah Ziyarat Private Car: Quba & Uhud | Private transport for Madinah ziyarat | نقل زيارات المدينة المنورة بسيارة خاصة مع سائق | 6 | 6 | 6 / 9 | ~501 | kept |
| /en/services/airport-transfers/taif-airport/ | Taif Airport Transfer: Private Car with Driver | Taif Airport Transfer: Private Car with Driver | Taif airport transfer into the Sarawat mountains | التوصيل من مطار الطائف بسيارة خاصة مع سائق | 3 | 4 | 5 / 6 | ~280 | kept |
| /en/services/umrah-transport/family-umrah-transport/ | Family Umrah Transportation in Saudi Arabia | Family Umrah Transportation in Saudi Arabia | Family Umrah transportation, planned around every generation | نقل العائلات المعتمرة في السعودية | 5 | 6 | 4 / 5 | ~341 | kept |
| /en/services/umrah-transport/group-umrah-transport/ | Group Umrah Transportation in Saudi Arabia | Group Umrah Transportation in Saudi Arabia | Group Umrah transportation for travellers who arrive together | نقل مجموعات المعتمرين في السعودية | 5 | 6 | 4 / 4 | ~329 | kept |
| /en/services/umrah-transport/private-umrah-chauffeur/ | Private Umrah Chauffeur in Saudi Arabia | Private Umrah Chauffeur in Saudi Arabia | A private Umrah chauffeur for the whole trip | سيارة مع سائق للعمرة في السعودية | 5 | 6 | 4 / 1 | ~357 | kept |
| /en/services/city-transport/makkah/ | Makkah Private Car with Driver for Pilgrims | Makkah Private Transfer: Sedan, GMC or Staria | Makkah private transfers by sedan, GMC Yukon or Hyundai Staria | سيارة خاصة مع سائق في مكة: سيدان وجمس وستاريا | 9 | 9 | 11 / 11 | ~1094 | changed |
| /en/services/city-transport/madinah/ | Madinah Private Car with Driver for Visitors | Madinah Private Transfer: Airport & Ziyarat | Madinah private transfers from the airport, the station and your hotel | سيارة خاصة مع سائق في المدينة المنورة والمطار | 7 | 9 | 9 / 12 | ~919 | changed |
| /en/services/tourism-transport/taif/ | Taif Sightseeing Transportation with a Driver | Taif Sightseeing Transportation with a Driver | Taif sightseeing transportation, roses and mountain views | نقل سياحي في الطائف بسيارة مع سائق | 5 | 6 | 6 / 8 | ~333 | kept |
| /en/services/city-transport/yanbu/ | Private Car with Driver in Yanbu | Private Car with Driver in Yanbu | A private car with a driver in Yanbu, an industrial port on the Red Sea | سيارة خاصة بسائق في ينبع | 6 | 6 | 5 / 3 | ~387 | kept |
| /en/services/intercity-transfers/riyadh-to-madinah/ | Riyadh to Madinah Private Car with Driver | Riyadh to Madinah Private Car with Driver | Riyadh to Madinah by private car, for ziyarah and family travel | الرياض إلى المدينة المنورة بسيارة خاصة مع سائق | 9 | 11 | 7 / 5 | ~737 | kept |
| /en/services/intercity-transfers/riyadh-to-taif/ | Riyadh to Taif Private Car with Driver | Riyadh to Taif Private Car with Driver | Riyadh to Taif by private car, from the capital to the Sarawat mountains | الرياض إلى الطائف بسيارة خاصة مع سائق | 4 | 5 | 5 / 5 | ~341 | kept |
| /en/services/intercity-transfers/riyadh-to-yanbu/ | Riyadh to Yanbu Private Car with Driver | Riyadh to Yanbu Private Car with Driver | Riyadh to Yanbu by private car, from the capital to the Red Sea port | الرياض إلى ينبع بسيارة خاصة مع سائق | 6 | 7 | 5 / 4 | ~592 | kept |
| /en/services/intercity-transfers/jeddah-to-yanbu/ | Jeddah to Yanbu Private Car Transfer | Jeddah to Yanbu Private Car Transfer | Jeddah to Yanbu by private car with a driver | جدة إلى ينبع: توصيل بسيارة خاصة مع سائق | 4 | 5 | 6 / 2 | ~462 | kept |
| /en/services/intercity-transfers/makkah-to-taif/ | Makkah to Taif Private Car by the Mountain Road | Makkah to Taif Private Car by the Mountain Road | Makkah to Taif by private car, up the Sarawat mountains | توصيل من مكة إلى الطائف بسيارة خاصة عبر الجبال | 4 | 6 | 6 / 6 | ~557 | kept |
| /en/services/intercity-transfers/madinah-to-alula/ | Madinah to AlUla Private Transfer with a Driver | Madinah to AlUla Private Transfer with a Driver | Madinah to AlUla by private car with a driver | المدينة المنورة إلى العلا: توصيل خاص مع سائق | 4 | 5 | 6 / 4 | ~453 | kept |
| /en/services/intercity-transfers/madinah-to-makkah/ | Madinah to Makkah Private Car with Miqat Stop | Madinah to Makkah Private Car with Miqat Stop | Madinah to Makkah by private car, with a Miqat stop at Dhul Hulaifah | توصيل من المدينة إلى مكة مع الوقوف بالميقات | 7 | 10 | 6 / 8 | ~839 | kept |
| /en/services/intercity-transfers/taif-to-makkah/ | Taif to Makkah Private Car with a Miqat Stop | Taif to Makkah Private Car with a Miqat Stop | Taif to Makkah by private car, down from the mountains | توصيل من الطائف إلى مكة بسيارة خاصة مع الميقات | 4 | 5 | 5 / 4 | ~525 | kept |
| /en/services/intercity-transfers/makkah-to-madinah/ | Makkah to Madinah Private Car: GMC or Staria | Makkah to Madinah Private Car: GMC or Staria | Makkah to Madinah by private car, hotel to hotel | توصيل من مكة إلى المدينة: جمس أو ستاريا مع سائق | 10 | 12 | 11 / 13 | ~1085 | kept |
| /en/services/intercity-transfers/jeddah-to-makkah/ | Jeddah to Makkah Private Car from Your Hotel | Jeddah to Makkah Private Car from Your Hotel | Jeddah to Makkah by private car, from your hotel or address | توصيل من جدة إلى مكة بسيارة خاصة من فندقك | 9 | 12 | 10 / 10 | ~942 | kept |
| /en/services/intercity-transfers/jeddah-to-madinah/ | Jeddah to Madinah Private Car with Driver | Jeddah to Madinah Private Car with Driver | Jeddah to Madinah by private car, from the city or the airport | توصيل من جدة إلى المدينة بسيارة خاصة مع سائق | 10 | 11 | 9 / 4 | ~924 | kept |
| /en/services/intercity-transfers/riyadh-to-makkah/ | Riyadh to Makkah Private Car for Umrah | Riyadh to Makkah Private Car for Umrah | Riyadh to Makkah by private car, from your door to your hotel | توصيل من الرياض إلى مكة بسيارة خاصة للعمرة | 9 | 12 | 8 / 6 | ~877 | kept |
| /en/services/intercity-transfers/jeddah-to-taif/ | Jeddah to Taif Private Car with Driver | Jeddah to Taif Private Car with Driver | Jeddah to Taif by private car, from the coast to the mountains | توصيل من جدة إلى الطائف بسيارة خاصة مع سائق | 5 | 6 | 9 / 8 | ~539 | kept |
| /en/services/intercity-transfers/madinah-to-jeddah/ | Madinah to Jeddah Airport Private Car | Madinah to Jeddah Airport Private Car | Madinah to Jeddah by private car, timed around your flight | توصيل من المدينة إلى جدة ومطار جدة بسيارة خاصة | 9 | 11 | 8 / 2 | ~892 | kept |
| /en/services/intercity-transfers/makkah-to-jeddah/ | Makkah to Jeddah Airport Private Transfer | Makkah to Jeddah Airport Private Transfer | Makkah to Jeddah by private car, to the airport or your address | توصيل من مكة إلى مطار جدة بسيارة خاصة | 9 | 11 | 8 / 6 | ~868 | kept |
| /en/services/intercity-transfers/makkah-to-riyadh/ | Makkah to Riyadh Private Car After Umrah | Makkah to Riyadh Private Car After Umrah | Makkah to Riyadh by private car, the drive home after Umrah | توصيل من مكة إلى الرياض بسيارة خاصة بعد العمرة | 5 | 6 | 9 / 2 | ~577 | kept |
| /en/services/intercity-transfers/taif-to-jeddah/ | Taif to Jeddah Private Car and Airport Transfer | Taif to Jeddah Private Car and Airport Transfer | Taif to Jeddah by private car, down from the mountains to the coast | توصيل من الطائف إلى جدة ومطار جدة بسيارة خاصة | 5 | 6 | 8 / 2 | ~517 | kept |
| /en/services/intercity-transfers/alula-to-madinah/ | AlUla to Madinah Private Car with Driver | AlUla to Madinah Private Car with Driver | AlUla to Madinah by private car, from the resort to the Prophet's Mosque | توصيل من العلا إلى المدينة المنورة بسيارة خاصة | 6 | 6 | 8 / 1 | ~587 | kept |
| /en/services/intercity-transfers/yanbu-to-jeddah/ | Yanbu to Jeddah Airport Private Car with Driver | Yanbu to Jeddah Airport Private Car with Driver | Yanbu to Jeddah by private car, down the Red Sea coast to the airport or the city | توصيل من ينبع إلى مطار جدة بسيارة خاصة مع سائق | 6 | 6 | 7 / 2 | ~574 | kept |
| /en/services/intercity-transfers/madinah-to-riyadh/ | — | Madinah to Riyadh Private Car with Driver | Madinah to Riyadh by private car, from the Prophet's Mosque to your door | توصيل من المدينة إلى الرياض بسيارة خاصة | 7 | 7 | 8 / 4 | ~775 | NEW |

## 3. Priority page analysis

### 3.1 `/en/services/city-transport/makkah/` + `/ar/…` — Critical

| Field | Analysis |
|---|---|
| Page purpose / intent | Should be the commercial hub for "Makkah private transfer"; it was a short "transport inside Makkah" page. Transactional. |
| Primary keyword | makkah private transfer · AR: سيارة خاصة مع سائق في مكة |
| Secondary | private car service makkah, makkah hotel transfer, makkah gmc / suv / sedan transfer, makkah hotel to hotel transfer, makkah haramain station transfer · AR: توصيل خاص مكة، جمس مع سائق مكة، توصيل من محطة قطار الحرمين مكة |
| Title | "Makkah Private Car with Driver for Pilgrims" → "Makkah Private Transfer: Sedan, GMC or Staria". AR "نقل خاص داخل مكة المكرمة للمعتمرين والزوار" → "سيارة خاصة مع سائق في مكة: سيدان وجمس وستاريا" |
| Meta description | Rewritten around the journey types and the three vehicle categories (156 characters). |
| H1 | "Private transport inside Makkah, planned around the Haram" → "Makkah private transfers by sedan, GMC Yukon or Hyundai Staria" |
| Content gaps (before) | No vehicle section, no airport or Haramain station detail, no hotel-to-hotel moves, no route overview, one-word FAQ answers ("No."), no quotation process. All added. |
| Internal links | Before: 5 related cards, 0 in-text links. Now: 11 related cards and 13 contextual in-text links (every route out of Makkah, JED, ziyarat, family and group Umrah, hotel transportation, fleet). |
| Images | Hero = the Grand Mosque at dusk (owner photo, alt text EN + AR). Gap: no real vehicle photo in a Makkah setting (fleet photos are model photos only). |
| Schema | WebPage, Service, BreadcrumbList, FAQPage (9 visible FAQs). JSON parses. |
| Technical | 200, index/follow, self-canonical, reciprocal hreflang, in the `cities` sitemap. No issues. |
| Conversion | The quote form and WhatsApp were present, but the page gave no help choosing a vehicle or knowing what to send. The checklist now lists the six things the form asks for. |
| Priority | Critical (done) |

### 3.2 `/en/services/city-transport/madinah/` + `/ar/…` — Critical

| Field | Analysis |
|---|---|
| Primary keyword | madinah private transfer · AR: سيارة خاصة مع سائق في المدينة المنورة |
| Secondary | madinah airport to hotel, madinah hotel transfer, madinah ziyarat car, madinah gmc / suv / sedan, madinah station transfer · AR: توصيل من مطار المدينة إلى الفندق، سيارة مع سائق في المدينة المنورة |
| Title | "Madinah Private Car with Driver for Visitors" → "Madinah Private Transfer: Airport & Ziyarat". AR → "سيارة خاصة مع سائق في المدينة المنورة والمطار" |
| H1 | → "Madinah private transfers from the airport, the station and your hotel" |
| Gaps (before) | No vehicle choice, no MED distance, no list of routes out of Madinah, no Madinah → Riyadh page. |
| Uniqueness | Written differently from the Makkah hub (Markaziyah, the Miqat at Dhul Hulaifah, the ziyarat circuit, the station in Knowledge Economic City). The 5-word-shingle similarity between the two hubs is 0.195 (target under 0.30). |
| Links | Before: 4 related cards. Now: 9 related cards and 11 in-text links. |
| Priority | Critical (done) |

### 3.3 `/en/services/airport-transfers/madinah-airport/` — High
- **Primary keyword:** madinah airport transfer / prince mohammad bin abdulaziz airport transfer · AR: توصيل من مطار المدينة.
- **Title and H1:** kept, because the title already targets MED → hotel.
- **Gaps:** no distance, no "hotel to airport" departure intent, no link to the Madinah hub.
- **Added:**
  - three sections: MED → Prophet's Mosque is 20.7 km and about 25 minutes (Google Maps, 2026-11-23); hotel → MED departures; airport → ziyarat or another city;
  - two FAQs;
  - four related links.

### 3.4 `/en/services/umrah-transport/jeddah-airport-to-makkah/` — High
- **Primary keyword:** jeddah airport to makkah private transfer · AR: توصيل من مطار جدة إلى مكة.
- **Title:** kept.
- **Overlap with `/intercity-transfers/jeddah-to-makkah/`:** handled by intent. This page is the airport arrival; that page is a Jeddah hotel pickup, and it already has an FAQ "I am landing at Jeddah airport. Is this the right page?".
- **Gaps:** no vehicle guidance, and no link to the Makkah hub, the return page or the Jeddah-city page.
- **Added:** two sections, one FAQ, three related links.

### 3.5 Intercity route pages — Medium (already strong)

These route pages were enriched in earlier passes with Google Maps distances, comparison tables and direction-specific FAQs:
- `makkah-to-madinah` (12 FAQs, ~1,700 words, verified 436 km)
- `madinah-to-makkah` (Miqat angle)
- `jeddah-to-makkah` and `jeddah-to-madinah`
- `makkah-to-jeddah` and `madinah-to-jeddah`
- `makkah-to-riyadh`, `riyadh-to-makkah` and `riyadh-to-madinah`
- `makkah-to-taif` and `taif-to-makkah`
- `madinah-to-alula` and `alula-to-madinah`

Only two gaps were found, and both are fixed:
- `makkah-to-madinah` did not link to either city hub.
- `riyadh-to-madinah` said "both directions" instead of linking to a reverse page.

No titles were changed. They were rewritten and verified live on 2026-11-21, and changing them again would reset what Google has seen.

### 3.6 Umrah hub and ziyarat pages — Medium
The Arabic titles and H1s used "نقل خاص". Phase 1 research found that this phrase reads as a licence-plate category in Saudi usage. It is now "توصيل خاص" on:
- `/ar/services/umrah-transport/` (title and H1)
- `/ar/…/makkah-ziyarat/` (H1)
- `/ar/…/madinah-ziyarat/` (H1)

The same phrase remains on 10 pages outside Makkah and Madinah (events, family, tourism). They are listed as a follow-up in the implementation report.

## 4. Search Console status (see keyword map §1)
The only exports available (in `ahref reports`, 28 days to 2026-11-18) show 37 impressions site-wide and no Makkah or Madinah query. There is no 16-month history (the domain is new), and there is no per-page device or Core Web Vitals data. No ranking claims are made from these exports.
