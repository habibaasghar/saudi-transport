# Ride Saudi transformation: Phase 1 audit, 2026-11-13

Scope: repository (`vercel-repo/main`, commit `8d8bf42`), live site www.ridesaudi.com, two competitor sitemaps, six sampled search results. No code was changed. Keyword map: [keyword-map-2026-11-13.csv](keyword-map-2026-11-13.csv).

## Research limits
- No Google Search Console access and no Ahrefs access. The `ahref reports` folder is empty. Volumes in the keyword map exist only for the handful of terms recorded from an earlier Ahrefs export; everything else is marked "not verified".
- Search results were sampled with a US-based search tool, not from Saudi Arabia, so the ranking order may differ locally.
- Lighthouse / Core Web Vitals were not measured.
- Whether production is actually storing and emailing enquiries was not tested (it needs a real form submission).

## 1. What exists today
| Area | State |
|---|---|
| Stack | Next.js 16 App Router, TypeScript, next-intl, Supabase Postgres + Drizzle, Resend, Vercel |
| Pages | 118 content pages + blog index + 4 guides, each in English and Arabic: 248 sitemap URLs, identical on the live site |
| URL pattern | `/{en,ar}/…/` with trailing slash; same slugs in both languages |
| Technical | Self-canonical, reciprocal hreflang (en, ar, x-default), one H1, Open Graph + Twitter cards, RTL on Arabic, robots allows all but `/api/` and `/admin/`, 404s return 404, locale-less paths 301 to `/en/` |
| Schema | Organization, WebSite, WebPage, Service, BreadcrumbList, FAQPage (matches visible FAQs), ItemList on home, Article on blog. No ratings or prices |
| Content guard | Build fails on missing Arabic, duplicate title / description / H1 / FAQ, under 4 FAQs, broken links, orphans |
| Lead capture | One quote form on every page posting to `/api/enquiry`: server validation, honeypot, minimum fill time, rate limits, database storage with reference number, Resend alert, optional webhook. Never reports a false success |
| Other | `/llms.txt`, floating WhatsApp, call / email / WhatsApp CTAs, admin login and inquiry list, GA4 events in code |

Sampled depth on live pages: Riyadh hub 1,396 words, event hub 1,158, Riyadh to Jeddah 826, hourly driver 819, conference 805, fleet 700.

## 2. Problems found
| # | Finding | Evidence | Severity |
|---|---|---|---|
| 1 | GA4 is not loading in production | No `googletagmanager` in live HTML; `NEXT_PUBLIC_GA_ID` unset | High: no conversions are measured |
| 2 | Lead delivery in production is unverified | API returns 503 unless `DATABASE_URL` or Resend is set in Vercel; not tested live | High |
| 3 | No About, Contact, Privacy, Terms or Cancellation pages | `/en/about/` and `/en/privacy-policy/` return 404 | High: trust, and needed for Google Ads |
| 4 | That work exists but is stranded | Worktree `ridesaudi-seo-leads-dd9a32` holds 46 uncommitted files (those five pages, 6 fleet photos, sticky bar, trust bar) on a base 5 commits behind production | High: risk of loss or conflict |
| 5 | Customer acknowledgement email is also stranded | Worktree `ridesaudi-homepage-build-9b23ab` has uncommitted `src/server/email/` | Medium |
| 6 | Form lacks the conditional fields in the brief | Only the flight number is conditional. No hours, itinerary, guest count, vehicle count, company name | Medium |
| 7 | No UTM / click-ID capture | Only `sourcePage` is stored | Medium |
| 8 | No sticky mobile quote CTA | Floating WhatsApp only | Medium |
| 9 | Quote form is not in server HTML | It renders client-side because of `useSearchParams` | Low |
| 10 | Titles over 60 characters | e.g. event hub 72, conference 68, fleet 68; earlier audit counted 22 | Low |
| 11 | Imagery is illustration, not photography | Social image alt text says "Illustration of…" | Medium for a premium brand |
| 12 | No vehicle pages | `/fleet/` is one category page; `confirmed.fleet` is empty | Content gap, see section 4 |
| 13 | Corporate intent is split over three pages | `business-chauffeur`, `special-transportation/business-travel`, `luxury-transportation/executive-transport`; no "corporate transportation" hub | Cannibalisation risk |
| 14 | `/` answers 307 to `/en/` | Temporary redirect | Low |
| 15 | Brand spelling | Site, schema and rules say "RideSaudi"; the brief says "Ride Saudi" | Decide once |

## 3. Brief's proposed URLs against what is live
The brief's flat tree would duplicate pages that already rank-compete for the same queries. Recommendation: keep the live URLs, no redirects.

| Brief proposes | Already live at |
|---|---|
| /airport-transfers/, /airports/{city}-airport-transfer/ | /services/airport-transfers/ + riyadh, jeddah, dammam, madinah, taif, alula |
| /hourly-chauffeur-service/, /full-day-chauffeur-service/ | /services/chauffeur-services/hourly-driver/, full-day-driver/ |
| /private-car-with-driver/, /luxury-chauffeur-service/ | /luxury-transportation/luxury-chauffeur/ (merged on purpose) |
| /vip-transportation/ | /luxury-transportation/vip-car-service/ |
| /event-transportation/ + corporate, conference, wedding, VIP, group | /services/event-transportation/ + corporate-events, conference-transport, wedding-transport, vip-event-chauffeur, group-event-transport, plus riyadh, jeddah, dammam |
| /exhibition-transportation/ | Merged into conference-transport |
| /group-transportation/, /hotel-transfers/, /sightseeing-transfers/, /umrah-transportation/ | /services/group-transportation/, special-transportation/hotel-transportation/, tourism-transport/, umrah-transport/ |
| /intercity-transfers/, /long-distance-transfers/, /routes/… | /services/intercity-transfers/ + 29 route pages (reverse directions share a page) |
| /cross-border-transfers/ | /services/cross-border-transfers/ + bahrain, qatar, uae, kuwait |
| /locations/{city}/ | /services/city-transport/ + 14 cities; AlUla and Taif sit under tourism-transport |
| /corporate-transportation/ | **Missing** (finding 13) |
| /locations/hafr-al-batin/ | Route page only |

## 4. Competitors
| Site | Indexable URLs in sitemap | Shape |
|---|---|---|
| taxiserviceksa.com | about 1,236 | 303 routes, 126 locations, 450 blog posts, 63 distance pages, 28 services, 12 border pages, Arabic 78, Urdu 48 |
| taxisaudiarabia.com (owner's sister site) | 487 | 131 routes, 61 locations, 39 blog, 32 services, 22 event pages (14 for named events such as LEAP), 20 vehicle pages, 16 guides, 16 distance, 11 airports, Arabic about 125 |
| ridesaudi.com | 248 | 29 routes, 14 cities, 6 airports, 5 blog URLs per language, 0 vehicle pages |

Who shows up for the sampled queries:
- Chauffeur / hourly Riyadh, English and Arabic: OneClickDrive vehicle-with-driver listings, Blacklane, Transfeero.
- Riyadh airport transfer: Blacklane, Transfeero, Rayna Tours.
- Event transport Riyadh: Yelo Plus, Swvl (LEAP shuttle page), Chabé, taxiserviceksa.
- Riyadh to Jeddah: Daytrip, 12Go, taxiserviceksa.
- GMC Yukon with driver: OneClickDrive model pages, taxiserviceksa.

Gaps Ride Saudi can close, in order of lead value:
1. **Vehicle-with-driver pages** (Yukon, S-Class, Staria, V-Class). The search results for these are model-level pages; Ride Saudi has none.
2. **Named-event transport** (LEAP, Cityscape and similar). Real B2B demand; must be worded as independent transport, no affiliation.
3. **A single corporate transportation page.**
4. **Airports not covered**: Qassim, Al Ahsa, Tabuk, Abha, Red Sea.
5. **Guides**: 4 against 39 and 450. Quality over count, but 4 is thin support.
6. Distance and fare pages are not recommended: they need published prices, which the brief rules out.

## 5. Recommended order of work
**Batch A: make leads measurable and complete (no new pages)**
1. Rebase and land the stranded legal / about / contact pages and the acknowledgement email.
2. Conditional form fields per service; UTM, click-ID and landing-page capture stored with each enquiry.
3. Sticky mobile quote bar; server-render the form.
4. Owner: set `NEXT_PUBLIC_GA_ID`, confirm database and Resend variables in Vercel, send one live test enquiry.

**Batch B: fix overlap and on-page**
5. Corporate transportation hub; fold the three overlapping pages into clear roles.
6. Shorten over-long titles; change `/` to a permanent redirect.

**Batch C: new pages that pass the publish gate**
7. Vehicle-class pages, once the partner vehicle list is confirmed.
8. Named-event pages (start with 3 Riyadh events), exhibition split only if data supports it.
9. Extra airports and cities once service is confirmed.

**Batch D: content and measurement**
10. Six to eight guides tied to commercial pages.
11. Search Console and Ahrefs exports, then re-prioritise routes and reverse-direction pages from real data.
12. Lighthouse pass on mobile for the home page, one service page and one Arabic page.

## 6. Needed from the owner
- Search Console access or a 90-day export; Ahrefs exports if available.
- Which partner vehicles can be named (models and cities).
- Which extra airports and cities are served.
- "Ride Saudi" or "RideSaudi".
- Permission to send one test enquiry through the live form.
- Whether the stranded work in the two other worktrees should be landed as it is.
