# Heavy Transport Wave 1: Build and QA Report

Date: 2026-11-22. Branch: `claude/ridesaudi-heavy-transport-seo-bf313e` (based on `vercel-repo/main` 4ff0fc8). **Not committed and not deployed.**

**Owner input (2026-11-22):**
- target the whole of Saudi Arabia, with a focus on Riyadh, Jeddah, Dammam and their nearby areas;
- "I have drivers";
- images supplied in Downloads.

Decisions taken because the owner left them open:
- nested URLs under the hub;
- WhatsApp-only contact (no call number);
- no specific legal limits published, because the official figures could not be verified.

## 1. New URLs (EN + AR, 36 total)

Arabic URLs are the same paths under `/ar/`.

| EN URL | EN title | AR title |
|---|---|---|
| `/en/services/recovery-heavy-transport/` | Heavy Transport & Satha Recovery in Saudi Arabia | نقل ثقيل وسطحات ولوبد في السعودية |
| `/en/services/recovery-heavy-transport/satha-car-recovery/` | Satha Car Recovery & Towing in Saudi Arabia | سطحة نقل سيارات ونقل السيارات المعطلة |
| `/en/services/recovery-heavy-transport/car-transport-between-cities/` | Car Transport Between Saudi Cities by Satha | نقل سيارات بين المدن بالسطحة |
| `/en/services/recovery-heavy-transport/lowbed-transport/` | Lowbed Transport & Lowbed Trailer Hire in KSA | نقل معدات باللوبد وتأجير لوبد في السعودية |
| `/en/services/recovery-heavy-transport/flatbed-trailer-transport/` | Flatbed Trailer Transport in Saudi Arabia | نقل بتريلا سطحة في السعودية |
| `/en/services/recovery-heavy-transport/oversized-load-transport/` | Oversized & Exceptional Load Transport in KSA | نقل الحمولات الاستثنائية والمقاسات الكبيرة |
| `/en/services/recovery-heavy-transport/industrial-machinery-relocation/` | Industrial Machinery & Factory Relocation KSA | نقل معدات المصانع وخطوط الإنتاج في السعودية |
| `/en/services/recovery-heavy-transport/heavy-equipment-transport/` | Heavy Equipment Transport in Saudi Arabia | نقل المعدات الثقيلة والآليات في السعودية |
| `/en/services/recovery-heavy-transport/excavator-transport/` | Excavator Transport in Saudi Arabia | نقل حفارات وبوكلينات في السعودية |
| `/en/services/recovery-heavy-transport/wheel-loader-transport/` | Wheel Loader (Shuwel) Transport in Saudi Arabia | نقل شيول في السعودية |
| `/en/services/recovery-heavy-transport/forklift-transport/` | Forklift Transport in Saudi Arabia | نقل رافعة شوكية (فوركلفت) في السعودية |
| `/en/services/recovery-heavy-transport/crane-transport/` | Crane Transport & Crane Relocation in KSA | نقل كرينات ورافعات في السعودية |
| `/en/services/recovery-heavy-transport/satha-car-recovery/riyadh/` | Satha Riyadh: Car Recovery & Towing | سطحة الرياض لنقل السيارات المعطلة |
| `/en/services/recovery-heavy-transport/satha-car-recovery/jeddah/` | Satha Jeddah: Car Recovery & Transport | سطحة جدة لنقل السيارات |
| `/en/services/recovery-heavy-transport/satha-car-recovery/dammam/` | Satha Dammam & Al Khobar Car Recovery | سطحة الدمام والخبر لنقل السيارات |
| `/en/services/recovery-heavy-transport/heavy-equipment-transport/riyadh/` | Lowbed & Heavy Equipment Transport Riyadh | لوبد ونقل معدات ثقيلة في الرياض |
| `/en/services/recovery-heavy-transport/heavy-equipment-transport/jeddah/` | Lowbed & Heavy Equipment Transport Jeddah | لوبد ونقل معدات ثقيلة في جدة |
| `/en/services/recovery-heavy-transport/heavy-equipment-transport/dammam/` | Heavy Equipment Transport Dammam & Jubail | نقل معدات ثقيلة ولوبد الدمام والجبيل |

**Merged into other pages rather than built separately, to avoid cannibalisation:**
- vehicle towing and accident recovery are sections of the satha page;
- flatbed car transport and long-distance car transport became the car-transport-between-cities page;
- bulldozer, road roller, grader, backhoe and boom lift are covered on the heavy-equipment and forklift pages;
- heavy-equipment-haulage and construction-equipment-transport are the heavy-equipment page.

**Not built:** route pages (no proven heavy-haul route demand) and blog guides (Wave 3).

**Nearby areas covered inside the city pages:**
- **Riyadh:** Al Kharj, Diriyah, Al Uyaynah, Al Muzahmiyah, Huraymila, Sudair, Qiddiya.
- **Jeddah:** Makkah, Bahra, Al Jumum, Thuwal, KAEC, Rabigh, Yanbu.
- **Dammam:** Al Khobar, Dhahran, Qatif, Saihat, Safwa, Ras Tanura, Jubail, Abqaiq, Al Ahsa.

## 2. What was built

**Pages.** 18 pages × EN/AR in `src/content/heavy/`: `shared.ts`, `hub-and-cars.ts`, `trailers.ts`, `machines.ts` and `cities.ts`. Each page has:
- an answer-first block;
- 3 or 4 sections;
- a comparison table;
- a quote checklist;
- 4 or 5 unique FAQs;
- related links.

**Template.** `ServicePageView` has a new `industrial` variant, which brings:
- the heavy CTA "Request Heavy Transport Quote";
- a heavy WhatsApp message;
- heavy process steps;
- no passenger "private car" line;
- multi-table support;
- a darker steel hero with an amber accent (`globals.css`).

**Quote form.** `HeavyQuoteForm` and `HeavyQuoteSection` show conditional fields:
- **Cars:** vehicle type and condition (no dimensions).
- **Machinery:** weight (required), L/W/H, loading and unloading method.

Every form collects service, make/model, both locations, date, name, company, WhatsApp number, email and notes. After a successful submit, the reference number and a WhatsApp link for sending photos are shown.

**API.** `POST /api/heavy-quote/` is in `src/app/api/heavy-quote/route.ts`.
- It uses the same database, the same `RS-YYMM-NNNN` reference, the same alert email or webhook, and the same customer acknowledgement as the passenger form.
- `service_key` is stored as `heavy_<service>`, so the CRM can filter the category.
- Cargo details go into `special_requirements`, so **no database migration is needed**.
- The passenger `/api/enquiry` is untouched.

**Acknowledgement email.** It shows a "Load" row for heavy requests.

**Tracking.** These events reuse `analytics.ts`, tagged `form: "heavy_quote"`: `quote_form_start`, `quote_form_submit`, `quote_form_success`, `generate_lead`, `quote_request` and `form_error`. WhatsApp clicks are already tracked site-wide. There is no phone tracking because there is no call number.

**Navigation.** A new top-level "Heavy Transport / النقل الثقيل" dropdown with 9 links. The hub is also a child of `/services/`.

**Other.**
- A `/llms.txt` section for the category.
- The sitemap updates automatically from the registry.
- Unit tests in `tests/heavy-quote.test.ts`.

## 3. QA results (local production build)

| Check | Result |
|---|---|
| `next build` (includes registry checks: unique titles, descriptions, H1s and FAQs; 4+ FAQs; no orphans; no Latin text in Arabic answers) | Pass |
| `tsc` | Pass |
| ESLint on new and changed files | 0 errors, 0 warnings |
| Unit tests: `heavy-quote.test.ts` | 5/5 pass |
| Other tests | 10 database tests fail **without a `DATABASE_URL`**. This was already the case before this change: there is no Postgres on this machine. |
| Indexability audit, all 366 sitemap URLs | 0 problems in every bucket (status, robots, canonical, hreflang, Link header, fewer than 3 inlinks) |
| Titles of 60 characters or fewer, exactly one H1 | 36/36 |
| 5-word shingle similarity to the closest page | Highest 0.257 (Jeddah vs Dammam satha, AR), all under 0.30 |
| `/api/heavy-quote` | Validation returns 422; honeypot returns 400; a valid request returns 503 `not_configured` locally (no database or email here). Success is never faked. |
| Browser: EN desktop (1366 px) | Nav fits on one line |
| Browser: AR mobile | RTL layout correct; the form switches fields between satha and lowbed; no console errors |

**Not verified:**
- **Live lead delivery.** Production `/api/enquiry` returned 502 earlier, and the new endpoint uses the same database and email settings. Run one controlled live test after deploy.
- Core Web Vitals on the live site.
- Rich Results Test. FAQ markup is present, but Google no longer shows FAQ rich results.

## 4. Images

**Used.** Both were re-cropped, renamed, converted to WebP and stripped of metadata.
- `public/images/heavy-transport/hydraulic-satha-sports-car-loaded.webp` (572×317): satha page hero.
- `public/images/heavy-transport/flatbed-car-carrier-suv-highway.webp` (311×251, likely AI-generated): car-transport page hero.

**Rejected.**
- `images (1).jpeg`: shows "Harvey's Towing" branding.
- `images (3).jpeg`: shows "TOWMAN" branding.
- `images (4).jpeg`: SITRAK manufacturer promo.
- `Tow-Truck-Type.jpg`: Chinese police cones and signage.
- Mercedes Actros reefer: wrong service, watermark, 300 px.

**Still needed.** Landscape, at least 1600×900, no other company's logo, ideally real Saudi jobs:

| Page | Subject |
|---|---|
| Hub | Lowbed carrying an excavator on a Saudi highway |
| Lowbed | Multi-axle lowbed with a crawler excavator chained down, ramps visible |
| Heavy equipment | Bulldozer or grader on a lowbed |
| Excavator | Crawler excavator tracking up lowbed ramps |
| Wheel loader | Shuwel (wheel loader) secured on a lowbed |
| Forklift | Forklift strapped on a flatbed |
| Crane | Crawler crane or crane boom sections on an extendable trailer |
| Flatbed | Flatbed trailer loaded with steel or pipes, strapped |
| Oversized | Wide load with escort vehicle |
| Machinery relocation | Factory machine being lifted onto a flatbed |
| Satha Riyadh, Jeddah, Dammam | Satha with a car in each city (a different photo for each) |
| Heavy equipment Riyadh, Jeddah, Dammam | Machinery move at a site or port (a different photo for each) |

**Image rules:**
- filenames like `wheel-loader-shuwel-on-lowbed.webp`;
- alt text in EN and AR;
- never captioned as RideSaudi-owned vehicles.

## 5. Owner to confirm (logged, nothing claimed on the site)

- Which services the drivers and trucks actually cover: satha, flatbed and lowbed are all advertised. If lowbed or crane transport is not available, say so and those pages will be unpublished.
- A number that takes calls for satha jobs. Without one, the pages stay WhatsApp-only and urgent jobs may be lost.
- Enclosed car carrier availability (currently "on request").
- Fix the production database and Resend configuration before or right after deploy.

## 6. Next 30 / 60 / 90 days

- **30 days.**
  - Deploy.
  - Submit the sitemap in Search Console and request indexing for the hub plus the 6 city pages.
  - Run one controlled live heavy-quote test.
  - Add real photos.
  - Watch the queries for سطحة, لوبد, شيول and نقل معدات.
- **60 days.**
  - Use the first Search Console data (and an Ahrefs export if available) to decide on Jubail, Yanbu or Makkah as their own city pages.
  - Write guides: lowbed vs flatbed, what a lowbed quote needs, preparing an excavator for transport, and satha vs tow truck.
- **90 days.**
  - Consider a photo upload in the form (Supabase Storage).
  - Expand to the cities that show demand.
  - Build links from equipment-rental and contractor directories (no paid links).
