# Location pages strategy 2026 (RideSaudi)

Date: 2026-11-15. Branch `claude/ridesaudi-jeddah-routes`. Nothing deployed.
Path note: the brief asked for `seo/location-pages-strategy-2026.md`; the repo already keeps SEO documents in `docs/seo/`, so it lives here.

## 0. Method, evidence and limits
- **Competitors actually fetched/searched:** taxisaudiarabia.com, taxiserviceksa.com, Blacklane, Transfeero, Daytrip (5 with evidence). Rideon Chauffeur was seen only as a third-party directory listing and is unverified (not counted).
- **Not available this session:** Ahrefs and keyword tools. Search Console exports (28 days and 24 h) hold 15 impressions and 1 click, all on the homepage, generic queries only. **No search volumes, difficulty or rankings are stated anywhere in this document.** Prioritisation uses competitor coverage, intent and business fit instead.
- **Existing architecture is kept.** Location pages already live at `/{locale}/services/city-transport/<city>/` (AlUla and Taif under `/services/tourism-transport/`). Adding a parallel `/locations/` tree would create duplicate URLs, so it was not done. No existing URL was changed.

## 1. Competitor comparison
| Competitor | Location structure | What they do well | Weaknesses / gaps we can exploit |
|---|---|---|---|
| taxisaudiarabia.com | `/locations/<city>/` for 12 cities (Makkah, Madinah, Jeddah, Riyadh, Dammam, Al Khobar, Taif, Yanbu, AlUla, NEOM, Abha, Tabuk) plus Dhahran, Jubail, Abu Dhabi in the footer; `/airports/...` pages (9); `/routes/...` | Wide airport and route coverage; quote form with trip type, luggage, vehicle class; WhatsApp prefill on every route | No visible JSON-LD or breadcrumbs; its own page shows inconsistent journey times for the same route; "licensed" and "partner" wording conflicts; large unverified claims (thousands of bookings, 135+ routes) |
| taxiserviceksa.com | `/locations/<city>/` and district level (`/locations/jeddah/corniche/`); `/routes/<a>-<b>/` | District pages; trust claims (TGA, 25,000+); route cards | Unsupported licence and traveller-count claims; some images reused on unrelated routes; slug inconsistencies; only one price shown |
| Blacklane | `/city-to-city/` and `/long-distance-<a>-<b>` pages, includes Buraidah and Hofuf routes | Clear, premium positioning | Route-led, not location-led; no local detail |
| Transfeero | `/city/<city>/` for Riyadh, Jeddah, Dammam, Abha | Airport meet-and-greet focus | Thin local content |
| Daytrip | Route listings including Jeddah to Khamis Mushait | Shows demand for Khamis Mushait | Marketplace listing, no local content |

**Common weaknesses we avoid:** invented credentials and counts, reused images across cities, template pages. **Gaps identified:** no competitor had a dedicated page for Al Baha or King Abdullah Economic City, and Khamis Mushait appeared only as a Daytrip route listing.

## 2. Location evaluation (30 locations) and decisions
Decision key: **Exists** = already has a dedicated page (kept, not duplicated); **Created** = built in this run; **Consolidate** = covered inside another page; **Postpone** = not enough verified information or service evidence.

| # | Location | URL (existing convention) | Primary keyword (intent) | Decision | Reason |
|---|---|---|---|---|---|
| 1 | Riyadh | /services/city-transport/riyadh/ | private car with driver Riyadh (transactional) | Exists | Largest page in the site; Riyadh cluster already deep |
| 2 | Jeddah | /services/city-transport/jeddah/ | private car with driver Jeddah | Exists | Now linked to the whole Jeddah route cluster |
| 3 | Dammam | /services/city-transport/dammam/ | Dammam private chauffeur | Exists | |
| 4 | Al Khobar | /services/city-transport/al-khobar/ | Al Khobar private car | Exists | |
| 5 | Dhahran | /services/city-transport/dhahran/ | Dhahran private car | Exists | |
| 6 | Makkah | /services/city-transport/makkah/ | Makkah private car (Umrah) | Exists | Keep respectful, no religious endorsement |
| 7 | Madinah | /services/city-transport/madinah/ | Madinah private car | Exists | |
| 8 | Taif | /services/tourism-transport/taif/ | Taif private car | Exists | Under tourism; moving it needs a redirect plan, not worth the risk |
| 9 | AlUla | /services/tourism-transport/alula/ | AlUla private car | Exists | Same as Taif |
| 10 | Abha | /services/city-transport/abha/ | Abha private car | Exists | |
| 11 | Khamis Mushait | /services/city-transport/khamis-mushait/ | Khamis Mushait private car (airport and long routes) | **Created** | Competitor gap; distinct intent from Abha (airport use, between-city, long routes) |
| 12 | Jazan | /services/city-transport/jazan/ | Jazan private car | Exists | |
| 13 | Yanbu | /services/city-transport/yanbu/ | Yanbu private car | Exists | |
| 14 | Jubail | /services/city-transport/jubail/ | Jubail private car | Exists | |
| 15 | Buraydah | /services/city-transport/buraidah/ | Buraydah private car | Exists | Spelled "buraidah" in the URL; kept |
| 16 | Unaizah | none | Unaizah car | Consolidate | Same region as Buraydah; no evidence of separate intent. Mention inside Buraydah/Qassim pages |
| 17 | Hail | /services/city-transport/hail/ | Hail private car | Exists | |
| 18 | Tabuk | /services/city-transport/tabuk/ | Tabuk private car | Exists | |
| 19 | Najran | /services/city-transport/najran/ | Najran private car | Exists | |
| 20 | Hafr Al Batin | /services/city-transport/hafar-al-batin/ | Hafar Al Batin car | Exists | |
| 21 | Al Ahsa | /services/city-transport/al-ahsa/ | Al Ahsa private car | Exists | |
| 22 | Hofuf | none | Hofuf car | Consolidate | Hofuf is covered by the Al Ahsa page and airport page; Blacklane lists Hofuf-Riyadh as a route, which our Riyadh/Al Ahsa pages cover |
| 23 | Al Qassim | /services/airport-transfers/qassim-airport/ + Buraydah | Qassim airport transfer | Consolidate | Region covered by the Qassim airport and Buraydah pages |
| 24 | Al Baha | /services/city-transport/al-baha/ | private car Jeddah to Al Baha | **Created** | Competitor gap; mountain destination reached from Jeddah |
| 25 | Sakaka | none | Sakaka car | Postpone | No verified service or route evidence in this run |
| 26 | Arar | none | Arar car | Postpone | Same |
| 27 | Umluj | none | Umluj car | Postpone | Not enough verified local facts gathered |
| 28 | NEOM / Tabuk region | none | NEOM transfer | Postpone | taxisaudiarabia lists it, but project status and access are fast-changing and unverified; revisit with owner-confirmed service |
| 29 | King Abdullah Economic City | /services/city-transport/king-abdullah-economic-city/ | KAEC private car from Jeddah | **Created** | Business destination about 100 km from Jeddah; not covered by competitors |
| 30 | Others discovered | none | Rabigh / KAUST, Khaybar | Postpone | Candidates for later, need research |

**Sub-location (district) pages:** taxiserviceksa has district pages (for example Jeddah Corniche). Not created: without keyword data they risk doorway content. Revisit for Riyadh and Jeddah once Search Console shows district queries.

## 3. Keyword mapping (intent only, no volumes)
| Page | Primary | Secondary | Intent | Distinct from |
|---|---|---|---|---|
| Khamis Mushait | Khamis Mushait private car with driver | Abha airport to Khamis Mushait, Khamis Mushait to Riyadh | Transactional, local | Abha page (hotels, highland sights) |
| Al Baha | private car Jeddah to Al Baha | Raghadan Forest transport, Al Baha chauffeur | Transactional, travel planning | Jeddah-Taif routes |
| KAEC | King Abdullah Economic City private transfer | Jeddah airport to KAEC | Transactional, business | Jeddah city page |

## 4. Page content summary (created pages, EN + AR each)
Unique title, description, H1, answer-first paragraph, 5 location-specific sections (not template: each follows the real traveller of that place), checklist, 5 FAQs, vehicle guidance with the owner-confirmed models, related links, breadcrumbs, enquiry form (existing `/api/enquiry` into the CRM), JSON-LD from the existing `pageSchema`. Facts used and caveats are in the header comment of `src/content/batch18-locations.ts`. Distances are published only where public sources agreed; where they disagreed (Abha airport to Khamis Mushait, Al Baha airport) no number is shown.

## 5. Image requirements
| Page | Needed images (filename plan) | Status |
|---|---|---|
| Khamis Mushait | `khamis-mushait-private-car-hero.webp` (city/road in Asir), `abha-airport-private-pickup.webp` | **Missing.** `abha.webp` and `airport-abha.webp` exist in `/public/images` but show Abha, so they are not used on this page |
| Al Baha | `al-baha-raghadan-forest-hero.webp`, `dhee-ain-village.webp`, `jeddah-to-al-baha-mountain-road.webp` | **Missing** |
| KAEC | `kaec-private-transfer-hero.webp`, `kaec-haramain-station.webp` | **Missing** |
| Existing city pages without an image | Dhahran, Jazan, Najran, Hail, Buraydah, Jubail, Al Ahsa, Hafar Al Batin | **Missing** (existing gap) |
**Blocker:** no image-generation or licensed-photo access in this session, and the brief forbids unrelated or competitor images. The pages render correctly without a hero (as the other 8 imageless city pages do). Needs owner-supplied licensed photos or generated imagery (no logos, no fake branding). Image specs when added: WebP, hero 1600x900, `priority` on the hero only, descriptive alt in EN and AR, explicit width/height.

## 6. Internal linking
- New pages link out to: Abha, Riyadh-Abha, Jeddah-Abha, Najran, Jazan (Khamis Mushait); Jeddah-Taif, Taif tourism, Jeddah city, Jeddah airport, Abha (Al Baha); Jeddah city, Jeddah airport, Jeddah-Makkah, Jeddah-Yanbu, Makkah (KAEC).
- Inbound links added from: Abha, Riyadh to Abha, Abha to Riyadh, Najran, Jeddah city, Taif tourism, Jeddah to Taif, Jeddah airport, Jeddah to Yanbu, Jeddah to Makkah, plus the City Transport hub lists them automatically.
- Matrix (existing + new): Riyadh → Dammam, Jeddah, AlUla, Abha, Qassim airport; Jeddah → Riyadh, Dammam, Makkah, Madinah, Taif, AlUla, Abha, Jazan, Yanbu, Al Baha, KAEC; Dammam → Riyadh, Jeddah, Jubail, Al Khobar; Abha → Khamis Mushait, Riyadh, Jeddah.
- Registry validation (no orphans, no missing targets) passes at build.

## 7. Structured data and tracking
Existing `pageSchema`: Organization, WebSite, WebPage, Service, BreadcrumbList, FAQPage from visible FAQs. No LocalBusiness, addresses or ratings were added (RideSaudi is an enquiry and partner-arrangement platform). Tracking reuses the existing events (`generate_lead`, `form_submit`, `quote_request`, `whatsapp_click`, `phone_click`); the requested name `location_form_submit` was not added, to avoid duplicate events with `form_submit`. Schema was **not** run through Google's validators (needs a public URL).

## 8. Final summary
| Metric | Result |
|---|---|
| Competitors researched | 5 with evidence (taxisaudiarabia, taxiserviceksa, Blacklane, Transfeero, Daytrip); 1 listing-only |
| Locations evaluated | 30 |
| Already had a dedicated page | 19 |
| Pages approved and created | 3 |
| Consolidated / postponed | 3 consolidated, 5+ postponed (Sakaka, Arar, Umluj, NEOM, others) |
| English pages / Arabic pages created | 3 / 3 |
| Images added | 0 (blocked, see section 5) |
| Internal links added | 11 inbound links from existing pages plus 18 outbound from the new pages |
| Schema validated | No (needs public URL); generated by the existing tested schema builder |
| Forms tested | No live submission (no DATABASE_URL on this machine); form is the existing CRM-connected component |
| Build status | Pass (tsc, eslint, next build, registry duplicate/orphan checks) |

Created URLs (EN and AR):
- /{en,ar}/services/city-transport/khamis-mushait/
- /{en,ar}/services/city-transport/al-baha/
- /{en,ar}/services/city-transport/king-abdullah-economic-city/
