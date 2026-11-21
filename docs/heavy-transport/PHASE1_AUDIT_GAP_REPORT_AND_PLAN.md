# Heavy Transport, Satha & Machinery Haulage: Phase 1 Audit, Gap Report and Plan

Date: 2026-11-22 · Branch: `claude/ridesaudi-heavy-transport-seo-bf313e` (based on `vercel-repo/main` 4ff0fc8)
Status: **research only. Nothing has been built yet; the owner must approve this first.** Every claim that is not verified is marked **[OWNER]**.

---

## 0. Blocking decisions (read first)

| # | Blocker | Why it blocks | Needed from owner |
|---|---|---|---|
| B1 | **Real service capability** | SEO-RULES §1 and §9 say a page needs a real business capability behind it. RideSaudi is a booking platform for private passenger transfers that works with partners. Nothing in the repo, docs or memory mentions satha, lowbed or machinery partners. | Do you have transport partners (satha operators, lowbed or flatbed carriers) who will actually take these jobs? Which services, and in which cities? |
| B2 | **No keyword data for this category** | No Ahrefs access in this session, and the Search Console export in `ahref reports/` has no heavy-transport queries (expected, since the site has no such pages). | An Ahrefs Keywords Explorer export (EN + AR, Saudi Arabia) for the seed list in §4, or approval to prioritise from SERP and autocomplete evidence only, as in Phase 1. |
| B3 | **Phone calls** | `src/config/contact.ts` says the number is WhatsApp only, no calls. Satha and breakdown customers want to call. | Is there a number that takes calls for recovery jobs? If not, satha pages must not imply urgent dispatch. |
| B4 | **Live enquiry API** | `/api/enquiry/` returned 502 `delivery_failed` in production (2026-11-18 and 2026-11-19). A new quote form would lose leads the same way. | Check `DATABASE_URL`, the migration and the Resend domain in Vercel, or allow me to run a controlled live test after deploy. |
| B5 | **Brand fit** | ridesaudi.com is positioned as premium private transfers (chauffeur, Umrah, luxury). A heavy-haulage section dilutes that topic and confuses the nav. | Confirm you want this on ridesaudi.com and not a separate domain. If it stays here, keep it as a separate top-level category, out of the airport, Umrah and luxury pages. |
| B6 | **URL convention** | The brief proposes flat `/services/satha-car-recovery/`, plus `/locations/` and `/routes/` trees. The site nests children under their hub (`/services/airport-transfers/jeddah-airport/`). City pages live at `/services/city-transport/<city>/`. You rejected a `/routes/` tree on 2026-11-15. | Choose: nested URLs under the hub (recommended, §3) or the brief's flat URLs. |

---

## 1. Existing website audit (repo facts)

**Stack.** Next.js App Router, TypeScript, next-intl (`/en/`, `/ar/`, RTL), deployed from `vercel-repo/main`.

**Page system.** Almost every content page is a `ServicePage` object (`src/content/types.ts`) registered in `src/content/registry.ts` and rendered by one catch-all route, `src/app/[locale]/[...slug]/page.tsx`, through `src/components/ServicePageView.tsx`. A page has: hero, answer-first block, sections (H2 + paragraphs + list), one optional table, an optional checklist, related cards, FAQs, and an enquiry form pre-set to `service`. New heavy-transport pages can reuse this. They need:
- a new `variant` ("industrial") for a distinct visual style;
- new `service` keys;
- support for more than one table per page (needed for the lowbed vs flatbed comparison and the machine weight guide).

**Scale.** About 160 registry pages, so about 320 URLs with EN + AR. All passed `scripts/indexability-audit.mjs`. The sitemap (`src/app/sitemap.ts`) is generated from the registry with hreflang alternates and real `updated` lastmod. `robots.ts` allows everything except `/api/` and `/admin/`. `/llms.txt` is maintained by hand.

**Navigation.** `src/lib/nav.ts` has 8 top items: services, routes, airports, cities, umrah, luxury, events, contact. All are passenger transport.

**Overlap check.** A repo-wide search for satha, سطحة, tow, lowbed, heavy, excavator, شيول, cargo, freight, haulage and recovery found **0 matches**. There is no existing page to cannibalise and no URL to redirect. `special-transportation` covers people (hotel, cruise, senior), not goods.

**Forms and CRM.**
- `EnquiryForm.tsx` → `/api/enquiry` → `createInquiry` (Supabase Postgres via Drizzle) → a reference ID (the existing enquiry ID) → Resend alert and customer acknowledgement, with a WhatsApp fallback.
- Validation (`src/lib/enquiry.ts`) **requires** date, time, passengers, pickup and dropoff, and checks `service` against `formServiceKeys`.
- The `inquiries` table has passenger columns only: no weight, dimensions or loading method, and no file storage.
- Analytics events exist in `src/lib/analytics.ts` and `events.ts`. GA4 has been reported as off.

**Schema.** `src/lib/schema.ts` emits Organization, WebSite, WebPage, Service and BreadcrumbList. FAQ rich results were retired by Google in 2026, so visible FAQs stay but FAQPage markup brings no rich result.

**Consequence.** Heavy transport needs its own form variant and new stored fields (§6). It cannot reuse the passenger form unchanged.

---

## 2. Competitor gap report

Pages read on 2026-11-22: 4 to 5 per site. Nothing was copied; structure only.

| | SathaPro (sathaproksa.com) | MASAR (masaralriyadah.sa) | SIAAM (siaamco.com) | AMT (amtlogistic.com) |
|---|---|---|---|---|
| Focus | Car towing / satha | Lowbed, flatbed, heavy projects | General trucking, Jeddah | Lowbed and heavy loads, Riyadh |
| State | **Site shows "temporarily closed"**; inner pages are empty shells | Live | Live | Live, strongest SEO |
| Languages | EN only | AR primary + EN | EN + partial AR | AR primary + EN |
| Depth per page | about 350 words on the homepage, inner pages empty | about 150 to 250 words, thin | about 600 words | about 500 to 1,100 words |
| City pages | Riyadh and Jeddah (empty) | None (16 city chips, not linked) | None (lists 117 cities) | 9 city pages, 2 to 3 sentences each |
| Route pages | 3 (empty) | None | 12 under `/routes/` (not read) | Generic route bullets |
| FAQs | 2 | None | 3 per page | 4 to 6, generic answers |
| Quote form | Link only | `/contact` only | Prefilled `/quote/` with weight, dimensions and loading method | Widget: cargo, from/to, **weight band**, lowbed type → WhatsApp |
| Specs | n/a | Lowbed 40–150 t, deck 60–90 cm; contradicts itself on deck length | Trailer spec cards ("for reference") | Axle → tonnage bands per lowbed type, about 20 type pages |
| Trust | Explicitly excludes repairs, fuel and jump-starts (honest) | Unsourced "98% on-time", "+120 trucks" | CR, VAT, TGA licences, client logos | Office address, project gallery, reviewer byline |
| Weak spots | Closed | Thin, no FAQs, no form | No city targeting, generic renders | Images reused across pages, mislabelled slugs, vague permits |

**Gaps RideSaudi can win honestly, without owning a fleet:**
1. **Machine-led pages written correctly.** No competitor explains which trailer suits an excavator, a wheel loader (شيول), a forklift or a crane, or the machine weight ranges a customer must state. This is the strongest original-value angle, and it fits a booking platform: we help pick the right carrier.
2. **A real quote form.** Only AMT captures weight. Nobody captures length, width and height, the loading method, whether the machine runs, and photos, all in one conditional form.
3. **Permits explained with a source.** Everyone says "permits handled" without naming the authority. The Roads General Authority (RGA) published standard limits in 2024: 23 m long, 2.6 m wide, 4.8 m high, and axle-based weights up to 45 t ([SPA, RGA](https://www.spa.gov.sa/en/N2177202)). A 2025 report cites different width and height figures ([Lexis Middle East](https://www.lexismiddleeast.com/news/2025-09-10_37/en/index.html)). **We must verify against the RGA or TGA primary source before publishing any figure.**
4. **Native Arabic plus solid English.** MASAR and AMT are Arabic-first with thin English, which leaves English demand from EPC contractors and expat procurement teams underserved.
5. **Satha (car recovery) is the softest SERP.** It is dominated by classifieds (Haraj, OpenSooq, mstaml), and the one dedicated competitor read is closed. The risk: the demand is urgent and local, and needs phone dispatch (B3).

Note: the AMT homepage contained text addressed to AI tools. The research agent ignored it, and nothing was acted on.

---

## 3. Proposed architecture: merged, cannibalisation-safe

The brief lists 17 service pages, 11 or more city pages and 4 or more route pages. Several of these target the same intent:
- satha car recovery, vehicle towing and flatbed car transport: in Saudi usage, سطحة *is* the flatbed tow truck;
- heavy equipment haulage vs construction equipment transport;
- bulldozer and road-roller pages, which would have low, unverified demand.

SEO-RULES §1 forbids building pages because a list names them. I recommend **12 pages in Wave 1**. Everything else is merged into these or deferred until there is keyword data.

URLs follow the site's nested convention (decision B6). Every page ships in both `/en/` and `/ar/`.

| # | Proposed URL (under `/en/` and `/ar/`) | Intent | Absorbs from the brief |
|---|---|---|---|
| H | `services/recovery-heavy-transport/` | Category hub: choose your vehicle or machine | — |
| 1 | `…/satha-car-recovery/` | Breakdown and accident car moved by satha | vehicle-towing, accident-vehicle-recovery (as sections) |
| 2 | `…/car-transport-between-cities/` | Scheduled car shipping between cities | flatbed-car-transport, long-distance-car-transport |
| 3 | `…/lowbed-transport/` | Lowbed hire and transport | extendable lowbed section |
| 4 | `…/flatbed-trailer-transport/` | Flatbed (سطحة تريلا) for steel, containers-free cargo, cabins | — |
| 5 | `…/heavy-equipment-transport/` | Machinery transport, generic | heavy-equipment-haulage, construction-equipment-transport, bulldozer, road-roller, grader, backhoe (as machine sections) |
| 6 | `…/excavator-transport/` | Excavators, including mini excavators | — |
| 7 | `…/wheel-loader-transport/` | Wheel loader (شيول) | — |
| 8 | `…/forklift-transport/` | Forklifts, telehandlers, scissor and boom lifts | — |
| 9 | `…/crane-transport/` | Mobile crane moves and crane components | — |
| 10 | `…/oversized-load-transport/` | Exceptional loads, permits, escorts | — |
| 11 | `…/industrial-machinery-relocation/` | Factory or plant machinery moves | — |

**Deferred, each needs evidence first:**
- **City pages.** Build only for cities where you confirm partner coverage. Put them under the hub, not under `services/city-transport/` (that tree is passenger transport), e.g. `services/recovery-heavy-transport/riyadh/`, with **one page per city**, not three. Candidates: Riyadh, Jeddah, Dammam/Jubail.
- **Route pages.** None in Wave 1. Heavy-haul routes have negligible search demand compared with passenger routes, and you rejected `/routes/`.
- **Blog guides.** Wave 3: lowbed vs flatbed, preparing an excavator for transport, what a lowbed quote needs, and satha vs tow truck. The cost guide waits until you can supply real price drivers.
- **Bulldozer, road roller and boom lift as their own pages.** Only if Ahrefs shows separate demand.

**Navigation.** Add one new top-level item, "Heavy transport / نقل ثقيل", with a dropdown of the hub plus the 6 most important children. Add hub links from the footer and the services hub. No links from airport, Umrah or luxury pages (brief §11 agrees).

---

## 4. Keyword map (seed): volumes and difficulty **unverified** until Ahrefs

Arabic terms come from Saudi SERPs and the competitor titles read above, not from translating the English.

| Page | Primary EN | Primary AR | Secondary / long-tail (EN · AR) |
|---|---|---|---|
| Hub | heavy transport Saudi Arabia | نقل ثقيل في السعودية | heavy equipment transport KSA · نقل معدات ثقيلة |
| Satha | satha service Saudi Arabia | سطحة نقل سيارات | car towing Riyadh, car recovery Jeddah, hydraulic satha · سطحة هيدروليك، سطحة الرياض، سطحة جدة، نقل سيارة معطلة، نقل سيارة مصدومة |
| Car between cities | car transport Riyadh to Jeddah | نقل سيارات بين المدن | ship car Saudi, enclosed car transport · سطحة من الرياض إلى جدة، سطحة مغلقة، شحن سيارة |
| Lowbed | lowbed transport Saudi Arabia | لوبد نقل معدات | lowbed trailer rental, extendable lowbed · تأجير لوبد، لوبد هيدروليك، لوبد الرياض |
| Flatbed | flatbed trailer transport | سطحة تريلا | flatbed truck hire KSA · نقل بالسطحات، تريلا سطحة ١٢ متر (verify) |
| Heavy equipment | heavy machinery transport Saudi Arabia | نقل المعدات الثقيلة | construction equipment transport · نقل آليات، نقل معدات البناء، نقل دركتر، نقل قريدر |
| Excavator | excavator transport | نقل حفار / نقل بوكلين | mini excavator transport · نقل بوكلين صغير |
| Wheel loader | wheel loader transport | نقل شيول | shovel transport · نقل شيول كتربلر (brand terms: verify) |
| Forklift | forklift transport | نقل رافعة شوكية / نقل فوركلفت | telehandler transport · نقل سيزر ليفت، نقل مان ليفت |
| Crane | crane transport | نقل كرين / نقل رافعة | mobile crane relocation · نقل ونش كرين |
| Oversized | oversized load transport | نقل حمولات استثنائية | permits, escort · تصريح حمولة استثنائية |
| Machinery relocation | industrial machinery relocation | نقل مصانع / نقل معدات المصانع | factory relocation KSA · نقل خطوط إنتاج |

Rules applied:
- **One primary term per URL.** Satha and car-between-cities are split by intent: urgent or broken-down vs scheduled shipping.
- "ونش" is used for a crane in Gulf usage and for a tow truck in Egyptian usage. Use it only on the crane page, after SERP verification.
- Forklift (رافعة شوكية) is never mixed with crane (رافعة / كرين), and wheel loader (شيول) never with forklift.

---

## 5. Content model per page (truth-safe)

Each page follows the brief's 19-part structure, adapted to the `ServicePage` model:
- answer-first block;
- "what we move" machine list;
- trailer-fit table;
- "what we need for your quote" checklist;
- loading methods: ramp, crane, self-drive, winch;
- securing;
- permits, citing the primary source;
- industries;
- coverage, **only confirmed cities**;
- booking steps;
- related links;
- page-specific FAQs.

Allowed without owner input:
- general engineering facts with a cited source (trailer types, why a lowbed suits tall loads, RGA standard limits once verified);
- the information a customer must provide.

**Never** allowed without owner input: our own fleet, capacities, axle counts we offer, prices, response times, 24/7, insurance, licences, cities served, or "our drivers".

Wording model, consistent with memory: *"RideSaudi arranges your transport with partner carriers; we confirm the trailer type, permits and availability in your quote."*

---

## 6. Quote form and CRM plan

- **Form.** Add a `HeavyQuoteForm` variant, used on the heavy-transport pages only. The passenger form stays untouched.
  - Step 1: service (the 10 options from the brief).
  - Step 2: conditional fields:
    - **Car / satha:** vehicle make and model, condition (runs / doesn't run / accident), pickup and drop-off, date. No dimensions.
    - **Machinery / lowbed / flatbed / crane / forklift:** machine type, make and model, approximate weight (t), L×W×H (m), loading method, unloading method, whether it runs, date, and site access notes.
  - Step 3: name, company (optional), WhatsApp, email.
- **Validation.** Write a new `validateHeavyQuote`. It must not require time, passengers or luggage.
- **Storage.**
  - Add a migration with a nullable `cargo jsonb` column on `inquiries`, holding type, make and model, weight, dimensions, loading and unloading, and condition.
  - Add new `serviceKey` values.
  - Reuse the reference ID and the alert and acknowledgement emails, with new email template lines.
  - The CRM admin inquiry view shows the cargo block.
- **Photo and document upload.** Not in Wave 1. There is no storage bucket and no virus or size policy. The form will offer "send photos on WhatsApp" with a prefilled message containing the service, route and reference. Upload (Supabase Storage, signed URLs, size and type limits) can be added in Wave 2 if you approve it.
- **Tracking.** Track these `analytics.ts` events: `heavy_quote_start`, `heavy_quote_submit`, `heavy_quote_success`, `whatsapp_click` (with the service), and `tel_click` (only if B3 gives a call number). GA4 must be switched on for any of this to be measured.
- **Prices.** No prices are shown anywhere.

---

## 7. Image plan (you supply the photos)

A per-page sheet will be delivered with Wave 1, covering placement, subject, 16:9 hero at 1600×900 and 4:3 at 1200×900, filename, EN and AR alt text, caption, and WebP format. Rules:
- no repeated hero images;
- no generic trucks;
- never present partner or stock photos as RideSaudi-owned.

Examples:
- `lowbed-trailer-excavator-secured-chains.webp`
- `hydraulic-satha-loading-sedan.webp`
- `wheel-loader-shuwel-on-lowbed.webp`
- `forklift-on-flatbed-trailer-strapped.webp`
- `mobile-crane-boom-folded-highway.webp`

Pages can launch without photos: the template has a no-image hero.

---

## 8. Implementation stages (after approval)

1. **Wave 1a: foundation.**
   - Hub + lowbed + heavy-equipment + excavator + wheel-loader + satha.
   - New `industrial` variant, multi-table support, nav item, sitemap and llms.txt entries.
   - Heavy quote form, `cargo` migration, analytics events.
   - `tsc`, lint, build, indexability audit, similarity check under 0.30.
2. **Wave 1b.** Car-between-cities, flatbed, forklift, crane, oversized, machinery relocation.
3. **Wave 2.** City pages for confirmed cities only, file upload, contextual links from the services hub and fleet pages.
4. **Wave 3.** Guides, and the 30/60/90-day report.

Each wave ends with the full QA report the brief asks for (§15). Deploy happens only when you say so.

---

## 9. Sources (2026-11-22)
- RGA truck dimension and weight limits: https://www.spa.gov.sa/en/N2177202
- Exceptional load guidelines, 2025 report: https://www.lexismiddleeast.com/news/2025-09-10_37/en/index.html
- Competitor sites: sathaproksa.com, masaralriyadah.sa, siaamco.com, amtlogistic.com (read, not copied)
- Classifieds shaping the Arabic satha SERP: haraj.com.sa, sa.opensooq.com, mstaml.com
