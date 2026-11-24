# Recovery trucks and lowbed: audit, keyword map and implementation (2026-11-24)

Branch `claude/recovery-lowbed-seo`, based on production (`vercel-repo/main` c659bb8). Not deployed.

## 1. URL inventory (all under `/{en,ar}/services/recovery-heavy-transport/`)

18 service pages existed in each language (36 URLs). 2 were added (4 URLs). All are 200, index/follow, self-canonical, hreflang-paired and in the sitemap. They were technically clean before this pass; the problems were wording, missing intents and no in-text links.

| Page | Problem found | Action |
|---|---|---|
| hub | no "recovery truck" wording; no recovery vs lowbed answer | retitled, section, FAQ, 6 in-text links |
| satha-car-recovery | title/H1 only "satha"; no price answer; 572 px hero | retitled, price section, truck-choice table, links, real photo |
| satha-car-recovery/hydraulic-satha | **missing** | **new EN + AR** |
| truck-recovery | **missing** | **new EN + AR** |
| satha riyadh, jeddah, dammam | no "tow truck"; AR missing هيدروليك | retitled, local section, price FAQ |
| car-transport-between-cities | AR missing سطحة بين المدن / مغلقة; 311 px likely-AI hero | AR retitled, cost section, hero removed |
| lowbed-transport | no rental, low loader or cost answer | retitled, 3 sections, cost table, 2 FAQs |
| heavy-equipment-transport | no bulldozer or intercity answer | 2 sections, 2 FAQs |
| lowbed city pages (3) | no price answer; AR missing للإيجار; Dammam EN missing lowbed | price FAQ, AR titles, Dammam title |
| excavator, flatbed, oversized | no lowbed/rental/heavy haulage wording | retitled (EN or AR), section, FAQ |
| crane, forklift, relocation, loader | no in-text links | unique section with links |
| 10 guides + guide hub | intent distinct (informational) | text unchanged; 4 guides link to the new pages |

## 2. Keyword map (one primary intent per page)

Sources: Google autocomplete for Saudi Arabia (57 EN/AR seeds, 2026-11-24), live competitor pages, Search Console exports of 2026-11-24. **No Ahrefs access, so there are no volume or difficulty numbers here.** Search Console shows no impressions yet for this category.

| Page | English primary (secondary) | Arabic primary (secondary) | Intent |
|---|---|---|---|
| hub | heavy transport Saudi Arabia (recovery trucks) | نقل ثقيل (سطحات ولوبد) | category |
| satha-car-recovery | recovery truck / car towing Saudi Arabia (vehicle recovery, tow truck) | سطحة / ونش سحب سيارات (سعر السطحة) | urgent |
| hydraulic-satha | hydraulic recovery truck (full-down satha) | سطحة هيدروليك (فل داون، مغلقة) | urgent/planned |
| truck-recovery | truck recovery, heavy vehicle recovery | سحب شاحنات، سطحة نقل شاحنات (ونش سحب شاحنات) | urgent B2B |
| satha city pages | satha / tow truck / car recovery + city | سطحة + المدينة (هيدروليك، سعر) | urgent local |
| car-transport | car transport between Saudi cities | سطحة بين المدن (مغلقة) | planned |
| lowbed-transport | lowbed transport / rental Saudi Arabia (low loader) | لوبد للإيجار (سعر لوبد) | planned B2B |
| lowbed city pages | lowbed + city, heavy equipment transport + city | لوبد + المدينة (للإيجار) | planned local |
| heavy-equipment | heavy equipment / machinery transport (bulldozer) | نقل معدات ثقيلة (دركتر) | planned B2B |
| excavator / loader / forklift / crane | machine + transport | نقل حفارات، شيول، رافعة شوكية، كرين | planned B2B |
| flatbed | flatbed trailer transport | تريلا سطحة (للإيجار) | planned B2B |
| oversized | heavy haulage, oversized load | حمولات استثنائية | planned B2B |
| relocation | industrial machinery relocation | نقل معدات المصانع | planned B2B |

Deliberately not built: bulldozer page (same intent as heavy equipment and a guide); Makkah, Madinah, Al Khobar, Jubail, Yanbu, Tabuk, Abha, NEOM pages. Autocomplete shows real demand for سطحة مكة, سطحة المدينة, سطحة الخبر and سطحة الجبيل, but service there is not confirmed.

## 3. Competitors reviewed

sathaexpress.com, riyadhtowservices.com, sathagroup.com, towriyadh.com (recovery); lobad-sa.com, lobadsaudia.com, lobed-sa.com, lowpd.com, namajed.sa (lowbed). Most lead with a phone number, 24/7 and a price table; several have hydraulic pages and city pages; lowbed sites are short (400–560 words; two run about 1,200–1,300). RideSaudi lacked hydraulic, truck, price and "tow truck" coverage. It now explains price factors instead of publishing unconfirmed prices. Two gaps content cannot close: a call number and real reviews/photos.

## 4. Conversion changes

- Form: hydraulic satha and truck recovery added; truck recovery asks condition plus optional weight; machinery needs weight **or** model; "needed today" button for recovery jobs; CTA and submit text match the service.
- WhatsApp: prefilled template per job type (EN/AR) in hero, quote section and, on these pages, the mobile sticky bar, which previously sent the passenger-transfer message.
- Unchanged: API route, CRM storage, reference number, email alert, rate limit, spam trap, GA4 events. Photos still go by WhatsApp with the reference (no storage exists).

## 5. Schema, GEO, technical

- City pages: `areaServed` now lists the cities named on the page. Hub: `OfferCatalog` of its services. No LocalBusiness (no confirmed address), ratings or prices.
- FAQ markup matches visible text on all 40 pages (checked by script).
- `llms.txt` updated. robots.txt blocks no search or AI crawler; it was left as is.

## 6. Test results

- Build and `tsc` pass; ESLint 0 errors (1 earlier warning in BlogView).
- Site audit: 406 URLs, every bucket 0. Heavy pages: 174 internal links, 0 broken or redirected. Highest similarity between two heavy pages 0.325 (AR crane/loader, mostly the shared form; the site target is under 0.30).
- Unit tests: 54 passed; 10 tests fail only because `DATABASE_URL` is not set on this machine (database tests).
- Form in browser: empty-submit errors, success (stubbed response) and real 503 fallback verified; API 422, 403 and 503 verified.
- **Not done:** live form submission, Google Rich Results Test and Schema.org validator (need the public URL), field Core Web Vitals.

## 7. Owner decisions and needs

1. Truck recovery: confirm partners can move trucks/buses. If not, unpublish that page.
2. Hydraulic, full-down and enclosed satha: confirm in which cities.
3. A call number: urgent recovery customers usually call.
4. Real photos: excavator on lowbed, dozer, truck being recovered, satha in each city. Excavator, heavy equipment, oversized, relocation, truck recovery and car transport have no hero photo; the hydraulic photo is only 572 px wide.
5. Service in Makkah, Madinah, Al Khobar, Jubail before adding city pages.
6. After deploy: submit the sitemap and request indexing for the hub, satha, hydraulic, truck recovery, lowbed and 6 city pages; export Ahrefs KSA data for real volumes.
