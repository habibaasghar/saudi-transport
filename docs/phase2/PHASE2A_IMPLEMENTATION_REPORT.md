# Phase 2A Implementation Report

Date: 2026-11-15. Branch `claude/ridesaudi-seo-routes-020ac3`, fast-forwarded to production commit `1ba9ec0` and then changed locally. **Nothing is committed, pushed or deployed.** The live site is unchanged.

Phase 2 was approved for the top 8 existing route pages. This first batch delivers the site-wide foundation and the three highest-scoring pages, so the pattern can be reviewed before it is applied to the remaining five.

## 1. What changed

### Site-wide (all 130 content pages, English and Arabic)
| Change | Detail |
|---|---|
| Exclusivity statement | New line under every "Quick answer": "Private vehicle for your party only. RideSaudi does not sell shared seats or combine separate bookings in one car." Arabic: "السيارة مخصصة لك ولمرافقيك فقط…" |
| Primary button | "Get a Quote" → "Request a Private Transfer Quote" on service pages (Arabic: "اطلب عرض سعر لتوصيل خاص") |
| WhatsApp button | "WhatsApp Us" → "WhatsApp Our Team" everywhere (Arabic: "راسل فريقنا عبر واتساب") |
| `llms.txt` | Added the exclusivity fact; replaced "distances and durations are not published" with wording that matches the new pages |
| Tables | Two-column tables no longer force sideways scrolling on phones |

### Three route pages rewritten (URLs, canonicals and hreflang unchanged)
| Page | Old title | New title | Body + template words (EN) |
|---|---|---|---|
| `makkah-to-madinah` | Makkah to Madinah Private Car: GMC, Staria or Sedan | Makkah to Madinah Private Car: GMC or Staria | 1,438 |
| `riyadh-to-dammam` | Riyadh to Dammam Private Car: GMC, Staria or Sedan | Riyadh to Dammam Private Car with Driver | 1,403 |
| `jeddah-to-makkah` | Jeddah to Makkah Taxi: Private Transfer, Both Ways | Jeddah to Makkah Private Car from Your Hotel | 1,254 |

Arabic titles now lead with "توصيل من … إلى …". Each page has: a direct answer with distance, time and road; a route facts table; a private-not-shared section; pickup and drop-off guidance; vehicle guidance by group (types only, no seat numbers); a train or flight comparison where relevant; an enquiry checklist; and seven route-specific FAQs covering distance, time, shared or private, price, vehicle and booking.

### Facts used and their sources (checked 2026-11-15)
| Route | Distance | Driving time | Road |
|---|---|---|---|
| Makkah to Madinah | 436 km (Google Maps, Masjid al-Haram to the Prophet's Mosque; routing engine agrees) | 4 h 21 min (Google Maps) | Route 15 (Google Maps) |
| Riyadh to Dammam | 410 km (routing engine, centre to centre; Daytrip and Blacklane state the same) | 3 h 55 min (Google Maps, KAFD to Dammam Corniche) | Route 40 (routing data: 97% of the distance) |
| Jeddah to Makkah | 88 km (routing engine, central Jeddah to Masjid al-Haram) | 1 h 01 min (Google Maps, Al Balad to Masjid al-Haram) | Route 40 (Google Maps names it Makkah to Jeddah Highway / Route 40) |

Google Maps showed the kilometre figure only for Makkah to Madinah; for the other two it returned driving time only, so their distances rest on the routing engine and matching competitor figures.

Only owner-confirmed business facts are stated: vehicle types (sedan, GMC Yukon, Hyundai Staria), cancellation at least 24 hours before pickup, payment by link, STC Pay or cash. No prices, seat numbers, waiting times, reviews or availability claims.

### Content removed, and why
| Removed | Reason |
|---|---|
| "One route, two directions" section on Makkah to Madinah | A separate Madinah to Makkah page now exists; the page links to it instead |
| "and the same in reverse" on Riyadh to Dammam | A separate Dammam to Riyadh page exists |
| Al Khobar and Dhahran drop-offs in the Riyadh to Dammam title, description and answer | Overlap with the Riyadh to Al Khobar page; the page now points to it |
| "Taxi" in the Jeddah to Makkah title and in the answers | Positioning; "taxi" is kept in FAQ questions to match how people search |
| Miqat section on Makkah to Madinah | It applies to the Makkah-bound direction and is covered on that page |

Kept from the old pages: the check-out and timing advice, the Haram access note, the non-Muslim entry note, the train comparison, and the enquiry checklists.

### Files
`src/content/priority-routes.ts` (new), `src/content/batch3-routes.ts` and `src/content/umrah-intercity.ts` (old entries removed), `src/content/registry.ts`, `src/components/ServicePageView.tsx`, `src/app/globals.css`, `src/app/llms.txt/route.ts`, `messages/en.json`, `messages/ar.json`.

## 2. Test evidence

| Check | Result |
|---|---|
| `tsc --noEmit` | Pass |
| `eslint .` | Pass |
| `next build` | Pass. The build-time registry check also passed: no duplicate titles, descriptions, H1s or FAQs, no orphans, Arabic present |
| `vitest run` | 11 pass, 10 fail. The 10 failures are the same database tests as before ("DATABASE_URL is not set"); no new failure |
| Crawl of the built site, 272 sitemap URLs | 272 × 200; all self-canonical; one H1 each; no duplicate titles or descriptions; hreflang on all; no broken internal links; no image without alt text |
| Sitemap | 272 URLs, unchanged |
| Redirects | No-slash URL → 308; locale-less URL → 301 to `/en/`; removed driver page → 308; unknown page → 404 |
| The 6 changed URLs | Status 200; titles 52 to 58 characters; descriptions 138 to 159; JSON-LD parses with Organization, WebSite, WebPage, BreadcrumbList, Service, FAQPage; 7 FAQs each; exclusivity line and facts table present |
| Similarity (5-word shingles) | New pages against each other and against their reverse pages: 0.09 to 0.17 in English and Arabic |
| Phone width 375 px, 8 pages incl. Arabic | No horizontal page overflow; facts table fits its container; primary button 304 px (EN) and 250 px (AR) wide on one line; `dir="rtl"` on Arabic |
| Enquiry form | Pickup, drop-off and service still pre-filled on route pages; API returns 422 with field errors for an invalid request, as before |
| WhatsApp link | Still `wa.me/966543544560` with the page topic in the message |

Not tested: a real enquiry submission (no database or email configured locally), desktop visual review, the live site.

## 2B. Second batch (same day): the remaining seven priority pages

All eight priority items from Phase 1 are now done locally (ten pages, since the Taif item covers three).

### Rewritten in full (thin pages, 289 to 396 words before)
| Page | New title | Distance | Driving time (Google Maps) | Road |
|---|---|---|---|---|
| `jeddah-to-madinah` | Jeddah to Madinah Private Car with Driver | 404 km | 4 h 07 min | Mostly Route 15 |
| `riyadh-to-jeddah` | Riyadh to Jeddah Private Car with Driver | 955 km | 9 h 48 min | Route 40 |
| `riyadh-to-makkah` | Riyadh to Makkah Private Car for Umrah | 871 km | 9 h 03 min | Route 40 |
| `jeddah-to-taif` | Jeddah to Taif Private Car with Driver | 171 km | 1 h 55 min | Coast highway, then mountain climb |

"Taxi" was removed from the Jeddah to Madinah title and answer. The Riyadh to Jeddah page no longer says "we do not publish estimates". Riyadh to Makkah keeps its paperwork and entry notes and adds the Miqat of Qarn al-Manazil, with the instruction to confirm with a scholar.

### Upgraded in place (pages that were already detailed)
| Page | What changed |
|---|---|
| `riyadh-to-manama` | Retitled to "Riyadh to Bahrain Private Car via the Causeway" (searchers say Bahrain); 469 km and 4 h 40 min before border time replace "we do not publish a distance"; facts table; two FAQs added. The URL is unchanged. Cross-border wording is unchanged: whether a vehicle can cross is still confirmed per quotation. |
| `makkah-to-taif` | 89 km and 1 h 19 min added; facts table; one FAQ added; title now says "Private Car" |
| `taif-to-makkah` | 89 km by the Al Hada road and about 1 h 20 min replace "no reliable single figure"; facts table listing the Miqat on each road; one FAQ added |

These three stay in their original files. The changes are applied by `applyRoutePatches` in `src/content/priority-routes-b.ts`, which fails the build if a sentence it is meant to replace is not found.

Distances are from the routing engine between the named points; driving times are from Google Maps on 2026-11-15. Google Maps returned times only for these routes, not kilometres.

### Test evidence for the full set (final build)
| Check | Result |
|---|---|
| `tsc`, `eslint`, `next build` | Pass |
| `vitest` | 11 pass, 10 fail (same database tests as before) |
| Crawl, 272 URLs | All 200; self-canonical; one H1; no duplicate titles or descriptions; hreflang on all; no broken links; no missing alt text |
| Sitemap | 272 URLs |
| The 14 new URLs | Titles 50 to 61 characters; descriptions 127 to 158; old "do not publish" sentences gone; facts table and exclusivity line present; no FAQ was auto-renamed for duplication |
| Similarity | Highest pair among the ten pages and two reverse pages: 0.20 (EN) and 0.21 (AR), Makkah to Madinah vs Jeddah to Madinah |
| Phone width, 14 URLs | No horizontal overflow; tables fit; RTL correct |
| Titles over 60 characters site-wide | 47 (was 55 before Phase 2) |

Additional files: `src/content/priority-routes-b.ts` (new), `src/content/batch8-riyadh.ts` (old Riyadh to Makkah entry removed).

Not verified: form pre-fill was confirmed on one directly loaded page only (the pre-fill file was not changed); no real enquiry was submitted; desktop layout was not reviewed by eye.

## 3. Outstanding

- Commit, preview deployment and production deployment: not done; waiting for approval.
- Live lead delivery, GA4, Search Console, fleet specifications, price policy: still waiting on the owner (see `docs/phase1/OWNER_ACCESS_AND_APPROVAL_CHECKLIST.md`).
- Home page buttons still say "Get a Quote"; only service pages were renamed.
- The site-wide exclusivity line adds one shared sentence to every page, which raises boilerplate similarity slightly (pairs above 0.30 went from 11 to 17 among older pages). Those older pages are in the rewrite queue.

## 4. Risks

- Removing "taxi" from the Jeddah to Makkah title may reduce visibility for taxi-led searches. This is the intended trade for lead quality; watch it once Search Console access exists.
- Distances are measured between named landmarks; a customer's own hotels will differ. The pages say so.
- The exclusivity statement now appears on group, event and coach pages too. It is accurate only if RideSaudi never mixes separate customers on any service.

## 5. Recommended next step

Commit this work and push it to a preview branch on the `saudi-transport` repo, review the ten pages there in English and Arabic, then deploy to production. After that: the four new P1 routes (Madinah to Jeddah, Makkah to Jeddah, Makkah to Riyadh, Taif to Jeddah), a route directory in the header, and the remaining pages marked IMPROVE.

## 6. Deployment of 2A and 2B (2026-11-18)

Commits `8383d92` and `dce6fe9` (ten route pages, exclusivity line, dropdown menus) were pushed as a fast-forward to `vercel-repo/main` and `vercel-repo/habiba`. The live site served the new version about 45 seconds later. Checked on www.ridesaudi.com: pages return 200, the Riyadh to Dammam page shows the new title, canonical, facts table, exclusivity line, renamed CTA and five dropdown menus; sitemap 272 URLs; `llms.txt` carries the exclusivity sentence; unknown pages return 404.

## 7. Phase 2C: four new P1 routes (2026-11-18, not deployed)

| New page | Planned around | Facts (Google Maps times checked 2026-11-18) |
|---|---|---|
| `madinah-to-jeddah` | Departure day: pickup worked back from the flight | 399 km and 3 h 56 min to JED; 404 km and 4 h 13 min to central Jeddah |
| `makkah-to-jeddah` | Departure day, airport or Jeddah address (also covers "Makkah to Jeddah airport") | 98 km and 1 h 05 min to JED; 88 km and 1 h 02 min to central Jeddah |
| `makkah-to-riyadh` | The drive home after Umrah | 871 km; 8 h 59 min |
| `taif-to-jeddah` | Descent from the mountains; flights from Jeddah | 171 km; 2 h 01 min to central Jeddah, 2 h 04 min to JED |

- Written fresh in English and Arabic. The drafts on `claude/ridesaudi-jeddah-routes` were not used because they name unconfirmed vehicle models (Camry, Sonata, Taurus, Tahoe, Suburban).
- The four forward pages no longer claim to cover the return; they link to the new pages instead, so two URLs do not compete for the same direction.
- Added to the form pre-fill, the Routes dropdown (Makkah to Jeddah, Madinah to Jeddah) and, automatically, the sitemap, `llms.txt` and the intercity hub.

Test evidence: `tsc`, `eslint`, `next build` pass; `vitest` 11 pass, 10 fail (same database tests); crawl of 280 URLs all 200, self-canonical, one H1, no duplicate titles or descriptions, no broken links; similarity to each forward page 0.18 to 0.26 (EN and AR); no FAQ auto-renamed for duplication; 375 px phone width shows no overflow, tables fit, RTL correct, form pre-fill correct in both languages.
