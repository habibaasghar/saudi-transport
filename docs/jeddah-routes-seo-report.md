# Jeddah route cluster: SEO implementation report (2026-11-14)

Branch `claude/ridesaudi-jeddah-routes`, based on `vercel-repo/main`. Nothing pushed or deployed.

## 1. What the audit found
- The live site is the Next.js app on `vercel-repo/main` (next-intl, EN `/en/` + AR `/ar/`, content registry in `src/content`). The worktree's old static `index.html` was not the real site, so the branch was rebuilt from `vercel-repo/main`.
- URL convention is `/{locale}/services/intercity-transfers/<from>-to-<to>/`, not `/en/routes/...`. I followed the existing convention (changing it would break existing pages and hreflang).
- Already existing: `jeddah-to-riyadh`, `riyadh-to-jeddah`, `jeddah-to-alula`, `jeddah-to-makkah`, `jeddah-to-madinah`, `jeddah-to-taif`, `jeddah-to-yanbu`, `riyadh-to-dammam`, `dammam-to-riyadh`, `riyadh-to-abha`, plus city pages for Jeddah, Dammam, Abha, Jazan, AlUla and the Jeddah airport page.
- Already in place and reused (not rebuilt): enquiry form + `/api/enquiry` into the CRM (Supabase/Drizzle) with admin notification, rate limiting, GA4 loader, WhatsApp/phone/email click tracking, registry integrity checks, dynamic sitemap with hreflang alternates, `/llms.txt`, robots.txt (allows all crawlers, blocks only `/api/` and `/admin/`).

## 2. Route inventory
| Pair | New pages | Notes |
|---|---|---|
| Jeddah ↔ Riyadh | none (exist) | cross-linked to the new cluster |
| Jeddah ↔ Dammam | `jeddah-to-dammam`, `dammam-to-jeddah` | new |
| Jeddah ↔ AlUla | `alula-to-jeddah` | `jeddah-to-alula` existed |
| Jeddah ↔ Jazan | `jeddah-to-jazan`, `jazan-to-jeddah` | new |
| Jeddah ↔ Abha | `jeddah-to-abha`, `abha-to-jeddah` | new |

7 new pages × EN + AR = 14 URLs. Airport variants (e.g. "Jeddah Airport to Riyadh") are deliberately covered inside the route pages (one strong page per direction) instead of thin pages. Each direction has its own angle: outbound pages cover leaving Jeddah / airport arrival; reverse pages cover timing back from a flight, remote or mountain pickups, port pickups (Jazan), onward Makkah/Umrah.

## 3. Keyword map (intent mapping only: no volumes were available)
| Keyword | Intent | Target URL | Priority |
|---|---|---|---|
| Jeddah to Dammam private transfer / car with driver | transactional | /services/intercity-transfers/jeddah-to-dammam/ | P1 |
| Dammam to Jeddah private transfer | transactional (reverse) | .../dammam-to-jeddah/ | P2 |
| Jeddah to Jazan private car | transactional | .../jeddah-to-jazan/ | P1 |
| Jazan to Jeddah taxi / private car | transactional (reverse) | .../jazan-to-jeddah/ | P2 |
| Jeddah to Abha car service | transactional | .../jeddah-to-abha/ | P1 |
| Abha to Jeddah private transfer | transactional (reverse) | .../abha-to-jeddah/ | P2 |
| AlUla to Jeddah private car | transactional (reverse) | .../alula-to-jeddah/ | P2 |
| Jeddah to AlUla private car / Jeddah airport to AlUla | transactional | existing `jeddah-to-alula` | existing |
| Jeddah to Riyadh private transfer, Riyadh to Jeddah | transactional | existing pages | existing |
| Jeddah airport to X | airport-origin variant | covered inside the route page above | merged |
| Arabic: نقل خاص من جدة إلى الرياض، سيارة خاصة من جدة إلى الدمام، نقل من جدة إلى العلا، سيارة من جدة إلى أبها، نقل خاص من جدة إلى جازان | Arabic transactional | AR version of each page | P1/P2 |

Columns "Existing ranking" and "Competitor gap" are **not filled**: I had no access to Search Console or Ahrefs in this session, and I did not invent numbers. See section 9.

## 4. Competitor analysis
Not performed with data (no Ahrefs/GSC/live crawl access). The earlier site docs (`docs/riyadh-competitor-gap-analysis.md`, `docs/SEO_STRATEGY_RUN_2026-11-10.md`) already hold competitor findings for the Riyadh cluster. Needed: pull taxisaudiarabia.com and taxiserviceksa.com Jeddah-route pages in Ahrefs and add rows here.

## 5. Page content (each of the 7 pages, EN and AR)
Unique title, description (≤175 chars, enforced by registry), H1, answer-first block, 4–5 sections written for that direction, enquiry checklist, 5 unique FAQs, related-route links, breadcrumbs, enquiry form pre-filled with the route (`route-prefill.ts`), private pre-arranged (not shared) framing, vehicle suggestions limited to the owner-confirmed sedan / GMC Yukon / Hyundai Staria, comparison tables on Jeddah→Dammam, Jeddah→Jazan and Jeddah→Abha.

Distances (public mapping sources checked 2026-11-14, stated as ranges "before stops"):
- Jeddah–Dammam about 1,350–1,365 km, 13–13.5 h
- Jeddah–Jazan about 710–725 km, 7–8 h
- AlUla–Jeddah about 670–690 km, 6.5–9 h (sources disagree on time)
- Jeddah–Abha: **no single reliable figure**; pages say roughly 620–700 km, 8–9 h and that sources vary.
Please spot-check these on Google Maps before launch.

## 6. Internal linking
`jeddahBacklinks` in `src/content/batch17-jeddah-routes.ts` adds the new pages to the "related" cards of: Jeddah city hub, Jeddah airport, intercity hub, Jeddah↔Riyadh, Riyadh↔Dammam, Riyadh→Abha, Dammam/Abha/Jazan city pages, AlUla tourism and AlUla→Riyadh. Forward and reverse pages link each other. Registry validation (no orphans, no broken related paths) passes at build.

## 7. Structured data
Existing `pageSchema` is used unchanged: Organization, WebSite, WebPage, Service, BreadcrumbList, FAQPage built from the visible FAQs. No ratings, reviews, prices or LocalBusiness address were added. **Not yet run through Google Rich Results Test / Schema Markup Validator** (needs a public URL).

## 8. Arabic
Every page has a full Arabic version written separately (not word-for-word): own title, description, H1, answer, sections, checklist, table, FAQs, `lang="ar" dir="rtl"`, self-canonical, hreflang en/ar/x-default. Terminology uses the user's targets (نقل خاص، سيارة خاصة، جمس، ستاريا، سيدان). **Recommend a native reviewer reads the Arabic before launch.**

## 9. Tracking
- `generate_lead` (existing), plus new `form_submit` and `quote_request`, all fired only after the backend accepts the enquiry (never on a button click).
- New `route_page_view` on intercity route pages (`RouteTracker`).
- `whatsapp_click`, `phone_click` already tracked site-wide. GA4 only loads if `NEXT_PUBLIC_GA_ID` is set.

## 10. Verification results
- `tsc --noEmit`: clean. `eslint`: clean. `next build`: passes (registry integrity: no duplicate titles/descriptions/H1/FAQs, no orphans, AR present).
- Production server check: all 14 URLs return 200, self-canonical, hreflang present, AR is `dir="rtl"`, JSON-LD (Service, FAQPage, BreadcrumbList, WebPage, Organization, WebSite) present, all 14 URLs in `sitemap.xml`, Jeddah pages and hub link to the new pages, `/llms.txt` updated.
- Tests: 5 validation tests pass; **10 DB-backed tests fail only because `DATABASE_URL` is not set** on this machine (known blocker). **A live form submission into the CRM was therefore not tested.**

## 11. Not done / remaining
- No Search Console, Ahrefs, Core Web Vitals, PageSpeed or live competitor crawl (no access here). Keyword volumes, rankings and competitor gap columns are empty by design.
- Rich Results Test / Schema Validator pending a deployed URL.
- Live form submit test pending a database.
- Vehicle names beyond sedan, GMC Yukon and Hyundai Staria (Camry, Sonata, Taurus, Suburban, Tahoe, Prado) were **not** published: ownership/availability is unconfirmed, and SEO-RULES forbid unverified fleet claims. Confirm with the owner if they should be added.
- Payment/cancellation mention (payment link, STC Pay, cash; 24 h cancellation) uses only owner-confirmed policies.
- Pre-existing `jeddah-to-alula` states no distance; AlUla→Jeddah publishes about 670–690 km. Consider adding the same to the outbound page.

## 12. Files changed
New: `src/content/batch17-jeddah-routes.ts`, `src/content/jeddah/{dammam,alula,jazan,abha}.ts`, `src/components/RouteTracker.tsx`, this report.
Edited: `src/content/registry.ts`, `src/content/route-prefill.ts`, `src/components/EnquiryForm.tsx`, `src/components/ServicePageView.tsx`, `src/app/llms.txt/route.ts`.

## 13. Deployment recommendation
Review the diff and Arabic, set DATABASE_URL in a preview, submit one test enquiry per page type, then push to a non-main branch on `vercel-repo` for a preview before merging to `main`. After launch: submit the sitemap in Search Console, request indexing for the 7 EN URLs, and run the Rich Results Test.
