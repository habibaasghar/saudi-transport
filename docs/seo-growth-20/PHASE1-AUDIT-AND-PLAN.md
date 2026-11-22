# RideSaudi 20-article growth project: audit and plan (for approval)

Date: 2026-11-23. Base: `vercel-repo/main` @ 96317e3 (production). Nothing has been built or published yet.

## 1. What already exists (audit summary)

- **Stack:** Next.js 16, next-intl (EN/AR, same slug in both locales, `/en/…` and `/ar/…` with trailing slash), content in TypeScript files (`src/content/…`), sitemap index with grouped child sitemaps, Supabase Postgres leads, Gmail/Resend alerts. The lead pipeline was fixed on 2026-11-23 (live test RS-2611-0002).
- **Blog:** 12 guides at `/en/blog/<slug>/`, one flat list with no categories. Each guide has a direct answer, sections, an optional table, FAQs and at least three registry links.
- **Heavy transport (live since 2026-11-22):** a hub `/services/recovery-heavy-transport/`, 11 service pages (satha, car-between-cities, heavy-equipment, excavator, wheel-loader, forklift, crane, lowbed, flatbed, oversized, industrial relocation) and 6 city pages. There is a separate `HeavyQuoteForm` that posts to `/api/heavy-quote/`. Contact is WhatsApp only, with no call number.
- **Private transfers:** about 48 route pages under `/services/intercity-transfers/`, airport pages (RUH, JED, MED, DMM, Taif and others), cross-border pages (Qatar, Bahrain, UAE, Kuwait), the luxury SUV page, the chauffeur hub and Umrah pages.
- **Tracking:** `quote_form_start`, `quote_form_submit`, `generate_lead` and `whatsapp_click` already exist. `quote_form_view` and `phone_click` don't exist yet, and there's no phone number to track.

## 2. Cannibalization: 12 of your 20 suggested topics already have a page

Writing those 12 as suggested would make the blog post compete with the service page for the same keyword, and Google would pick one of the two. Instead, every blog post is re-angled to the **planning or comparison question** a customer asks before booking, and it links to the service page as the place to book.

| # | Your topic | Existing page targeting the same keyword | Decision |
|---|---|---|---|
| T1 | Car towing service | satha-car-recovery (+3 city pages) | Keep, but re-angle: how towing/satha booking works and what to send |
| T3 | Heavy machinery transportation | heavy-equipment-transport | Re-angle: planning checklist (dimensions, weight, permits) |
| T4 | Lowbed trailer transport | lowbed-transport | Re-angle: lowbed vs flatbed vs extendable trailer |
| T5 | Excavator transportation | excavator-transport | Re-angle: how to prepare an excavator for transport |
| T6 | Bulldozer and wheel loader | wheel-loader-transport | Re-angle: tracked vs wheeled loading and securing |
| T7 | Crane and industrial equipment | crane-transport, industrial-machinery-relocation | Re-angle: dismantled loads, site survey, multi-truck moves |
| T9 | Intercity car transport | car-transport-between-cities | Re-angle: satha vs car carrier vs driving it yourself |
| P1 | Private airport transfers | airport-transfers hub + blog airport-pickup-tips | Re-angle: airport-by-airport guide (RUH/JED/MED/DMM) |
| P2 | Riyadh to Jeddah private car | route riyadh-to-jeddah + blog car-vs-flight | **New slug:** Riyadh–Jeddah by road guide |
| P3 | Jeddah to Makkah | route, Umrah page **and** an existing guide (3 pages) | **Replace:** full Umrah transport plan (airport → Makkah → Madinah → airport) |
| P5 | Makkah to Madinah | route + existing guide makkah-to-madinah-train-bus-or-private-car | **Replace:** Makkah to Taif day trip (route page exists, no guide) |
| P6 | Private chauffeur / private driver | chauffeur hub + 2 guides. You also had the "driver" pages removed for job-seeker leads | Re-angle: chauffeur for business trips in Riyadh (no "driver" keyword) |

T2, T8, T10, P4, P7, P8, P9 and P10 have no competing guide. The cross-border ones get crossing-specific angles so they don't repeat the existing cross-border checklist.

## 3. Proposed 20 articles

Search volume and difficulty are **not** listed: there's no Ahrefs/Semrush/GSC keyword export for these terms yet (see section 6), and the brief forbids made-up numbers.

### Towing and heavy transport (hub: `/en/blog/towing-heavy-transport/`)

| # | URL `/en/blog/…/` | Working title | Primary keyword | Intent | Supports |
|---|---|---|---|---|---|
| T1 | car-towing-service-saudi-arabia | Car Towing in Saudi Arabia: How Satha Booking Works | car towing Saudi Arabia | Commercial/how-to | satha-car-recovery + Riyadh/Jeddah/Dammam |
| T2 | flatbed-vs-hydraulic-towing-saudi-arabia | Flatbed vs Hydraulic Satha vs Wheel-Lift Towing | flatbed vs hydraulic towing | Comparison | satha, flatbed-trailer |
| T3 | heavy-machinery-transportation-saudi-arabia | Heavy Machinery Transport: What to Prepare Before You Book | heavy machinery transport Saudi Arabia | Commercial planning | heavy-equipment + 3 cities, oversized |
| T4 | lowbed-trailer-transport-saudi-arabia | Lowbed vs Flatbed vs Extendable Trailer: Which One? | lowbed trailer Saudi Arabia | Comparison | lowbed, flatbed, oversized |
| T5 | excavator-transportation-saudi-arabia | How to Prepare an Excavator for Transport in KSA | excavator transport | How-to → quote | excavator, lowbed |
| T6 | bulldozer-wheel-loader-transport-saudi-arabia | Moving Bulldozers and Wheel Loaders Safely | bulldozer transport Saudi Arabia | How-to → quote | wheel-loader, heavy-equipment |
| T7 | crane-industrial-equipment-transport-saudi-arabia | Crane and Factory Machine Transport: Planning Guide | crane transportation Saudi Arabia | Commercial planning | crane, industrial-relocation, forklift |
| T8 | roadside-assistance-vehicle-recovery-saudi-arabia | Car Broke Down on a Saudi Highway? What to Do | vehicle recovery Saudi Arabia | Urgent/informational | satha + cities (**needs your confirmation, see section 4**) |
| T9 | intercity-car-transport-saudi-arabia | Moving Your Car Between Saudi Cities: 3 Options | car transport between cities Saudi Arabia | Commercial comparison | car-transport-between-cities |
| T10 | choose-heavy-equipment-transport-company-saudi-arabia | How to Choose a Heavy Equipment Transport Provider | heavy equipment transport company Saudi Arabia | Commercial investigation | hub, heavy-equipment, lowbed |

### Private transfers (hub: `/en/blog/private-transfers/`)

| # | URL `/en/blog/…/` | Working title | Primary keyword | Intent | Supports |
|---|---|---|---|---|---|
| P1 | private-airport-transfers-saudi-arabia | Private Airport Transfers in Saudi Arabia, Airport by Airport | private airport transfer Saudi Arabia | Commercial | airport hub + RUH/JED/MED/DMM pages |
| P2 | riyadh-to-jeddah-by-road-guide | Riyadh to Jeddah by Private Car: Road, Stops and Planning | Riyadh to Jeddah by road | Planning → book | route riyadh-to-jeddah, jeddah-to-riyadh, riyadh-to-taif |
| P3 | umrah-private-transport-plan-jeddah-makkah-madinah | Planning Private Transport for Umrah: Every Leg | Umrah private transport | Commercial planning | umrah pages, jeddah-to-makkah, makkah-to-madinah, ziyarat |
| P4 | riyadh-to-dammam-private-transfer | Riyadh to Dammam and Al Khobar for Business by Private Car | Riyadh to Dammam private transfer | Commercial | riyadh-to-dammam, -al-khobar, -jubail, DMM airport |
| P5 | makkah-to-taif-private-car-day-trip | Makkah to Taif Day Trip by Private Car | Makkah to Taif private car | Commercial/leisure | makkah-to-taif, taif-to-makkah, taif airport |
| P6 | private-chauffeur-service-saudi-arabia | Chauffeur Service for Business Trips in Riyadh | chauffeur service Riyadh | Commercial | chauffeur hub, business-chauffeur, executive-transport |
| P7 | luxury-suv-gmc-transfer-saudi-arabia | When to Book a GMC Yukon With Chauffeur in Saudi Arabia | GMC with driver Saudi Arabia | Commercial | luxury-suv, VIP airport, fleet |
| P8 | saudi-arabia-to-qatar-private-transfer | Saudi Arabia to Qatar by Road: Salwa Crossing Guide | Riyadh to Doha by car | Commercial planning | cross-border/qatar, riyadh-to-doha, dammam-to-doha |
| P9 | saudi-arabia-to-bahrain-private-transfer | Saudi to Bahrain by Car via King Fahd Causeway | Dammam to Bahrain transfer | Commercial planning | cross-border/bahrain, riyadh-to-manama, dammam-to-bahrain |
| P10 | saudi-arabia-to-uae-private-transfer | Saudi Arabia to UAE by Road: Riyadh to Dubai and Abu Dhabi | Riyadh to Dubai by car | Commercial planning | cross-border/uae, riyadh-to-dubai, riyadh-to-abu-dhabi, dammam-to-dubai |

**Arabic:** the same slug under `/ar/blog/…/`, with researched Saudi terms (سطحة، سحب سيارات، لوبد، نقل معدات ثقيلة، نقل حفارات، توصيل مطار، ليموزين، جمس مع سائق), written natively rather than translated. "نقل خاص" and "سائق خاص" are avoided, as decided in Phase 1.

**Hubs:** two new category pages at `/en/blog/towing-heavy-transport/` and `/en/blog/private-transfers/` (and AR), plus category sections on `/blog/`. Existing service pages get a "Planning guides" block linking to the new posts.

## 4. Risky claims to confirm with you before publishing

1. **Towing scope (T1, T2, T8):** does the partner network do only satha and flatbed transport, or also on-site help (jump start, tyre change, fuel delivery)? If it's only satha, T8 will say clearly that RideSaudi arranges recovery transport, not roadside repairs.
2. **Wheel-lift towing (T2):** is it available, or only flatbed and hydraulic satha?
3. **Lowbed and crane (T4, T7):** you said "I have drivers". Are lowbed and crane moves really available? If not, those articles will say "subject to partner availability".
4. **Cities:** heavy and satha coverage beyond Riyadh, Jeddah and Dammam (for example Makkah, Madinah, Jubail, Yanbu)?
5. **Call number:** is there one for click-to-call, or is it still WhatsApp only?
6. **Cross-border (P8–P10):** which crossings have partners actually done: Salwa (Qatar), King Fahd Causeway (Bahrain), Batha (UAE)? Nothing will be promised about border times or visas either way.
7. **GMC Yukon (P7):** a seat count and luggage figure are still unconfirmed, so no numbers will be published until you give them.
8. **Author:** is there a real author or reviewer name to show? If not, the byline stays "RideSaudi editorial team".

## 5. Images

See `IMAGE-CHECKLIST.csv` in this folder: **27 new images needed**, plus about 20 existing images reused in the body text. Every article gets its own hero, so no hero image is repeated.

Rules for supplied photos:
- landscape;
- at least 1600×900 for heroes and 1200×800 for in-body images;
- no other company's logo, name or phone number on trucks;
- no readable number plates;
- no identifiable faces without permission.

I'll recrop, rename, convert to WebP, strip metadata and write EN/AR alt text. If you can't supply some photos, I can draw original illustrations for those articles, as on the heavy pages. They'll be labelled as illustrations.

## 6. Data I need for keyword research

- A GSC Performance export (Queries + Pages, last 3 months) and the current Coverage export, if newer than the ones in `ahref reports`.
- Ahrefs or Semrush keyword exports, if you have access, for: car towing / satha, lowbed, excavator transport, heavy equipment transport, Riyadh to Doha / Bahrain / Dubai by car, GMC with driver. The same in Arabic: سطحة, لوبد, نقل معدات, نقل حفارات.
- 3–5 competitor URLs you see ranking for towing/heavy transport and for cross-border transfers.

Without these, priority falls back to Google Autocomplete and People Also Ask, and no volumes will be claimed.
