# Owner Access and Approval Checklist (Phase 1)

Date: 2026-11-15. Nothing below has been assumed or fixed. Items are ordered by how much they block.

## A. Access needed

| # | Item | What to provide | What it unlocks | Status |
|---|---|---|---|---|
| A1 | Google Search Console | Add a user to the `ridesaudi.com` property, or export 90 days of Queries and Pages (CSV) | Real demand per page; proof of cannibalisation; index coverage | Not available |
| A2 | GA4 | Measurement ID (`G-…`) set as `NEXT_PUBLIC_GA_ID` in Vercel; viewer access to the property | Form, WhatsApp and call tracking by route page | Not active on live pages |
| A3 | Google Keyword Planner | Read access to a Google Ads account, or exported ideas for the 52 primary keywords in `ROUTE_KEYWORD_MAPPING.csv` | Search volumes and CPC | Not available |
| A4 | Ahrefs or Semrush | Login, or exports: organic keywords for ridesaudi.com and for the 5 main competitors | Keyword difficulty, competitor rankings, backlinks | Not available (the `ahref reports` folder on this computer is empty) |
| A5 | Vercel | Confirmation of which env vars are set in Production: `DATABASE_URL`, `RESEND_API_KEY`, `LEAD_NOTIFY_EMAIL`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `NEXT_PUBLIC_GA_ID` | Explains the `/admin/` 500 error and whether leads are delivered | Unknown |
| A6 | Test database | A separate Postgres connection string for tests | Lets the 10 database tests run before any form change | Not available |

## B. Tests the owner must run or authorise

| # | Test | How | Why |
|---|---|---|---|
| B1 | Live lead delivery | Submit one enquiry on a live route page with the note "TEST"; report whether the success message showed and where the lead arrived (email, CRM, nowhere) | Production lead delivery is unverified |
| B2 | WhatsApp and phone | Confirm +966 54 354 4560 is monitored on WhatsApp and by phone | All CTAs point there |
| B3 | Admin | Open `https://www.ridesaudi.com/admin/` and report what appears | It returned HTTP 500 on 2026-11-15 |

## C. Business facts to confirm (see `FLEET_VERIFICATION_MATRIX.csv`)

| # | Question |
|---|---|
| C1 | Final vehicle list. For each: exact model, seats offered to customers, large and small bags, and whether RideSaudi owns it or sources it |
| C2 | "GMC Suburban" in the brief: is this the Chevrolet Suburban, the GMC Yukon XL, or both? |
| C3 | Is the Hyundai Staria part of the premium offer, or family and group only? |
| C4 | Are Lexus, Chevrolet Tahoe and Toyota Land Cruiser really available? In which cities? |
| C5 | The unmerged branch lists Camry (4 seats / 2 bags), Staria (7/4), Yukon XL (7/5), S-Class (3/2), Sprinter (9/8), coach (25/30). Which of these numbers are correct? |
| C6 | Which routes are actually operated today, and from which base cities? |
| C7 | Cross-border: does a RideSaudi vehicle cross into Bahrain, Qatar, the UAE and Kuwait directly? Which vehicles and what permits? |
| C8 | Price policy on the website: quote only, "from" prices, or ranges (competitors publish prices; see `COMPETITOR_INTELLIGENCE.md`, section 7) |
| C9 | Still-unconfirmed policies: what happens after the 24-hour cancellation window, when payment is due, airport waiting time, flight tracking, tolls and fuel included, reply time, operating hours |
| C10 | Company identity for About and Contact pages: legal name, commercial registration, transport licence, city, any real reviews or profiles |
| C11 | CORSA Saudi: website address (it could not be found) |

## D. Approvals needed before Phase 2

| # | Decision | Recommendation |
|---|---|---|
| D1 | Branch `claude/ridesaudi-jeddah-routes` (5 commits; 11 route pages, 3 location pages, photo mapping) | Preserve. Merges cleanly into production. Review content against Phase 1 priorities first: it includes `madinah-to-jeddah` and `taif-to-jeddah` (P1) but also low-scoring pages (Jazan, KAEC, Al Baha). Merge selectively or hold the low-scoring pages out of the sitemap. |
| D2 | Branch `claude/ridesaudi-seo-leads-dd9a32` (1 commit, 66 files; fleet photos, Terms and Privacy pages, route data model, form upgrades, rewritten Jeddah to Makkah and Makkah to Madinah pages) | Preserve the ideas, do not merge as is. It is 9 commits behind production, conflicts with production in 14 files (including the enquiry form, sitemap, layout and analytics), links to driver pages that were since removed, uses "taxi" slugs and alt text, and publishes seat numbers the owner has not confirmed. Re-apply the useful parts (policy pages, route data model with build-time guard, 6 photos) on top of current production. |
| D3 | Riyadh to Dammam and Riyadh to Al Khobar | Keep both URLs live; separate their targeting (Dammam page stops naming Al Khobar and Dhahran in its description), then review with Search Console data |
| D4 | Jeddah to Makkah (route page) versus Jeddah Airport to Makkah (Umrah page) | Keep both; route page owns city and hotel pickups, Umrah page owns airport arrival |
| D5 | Use of the word "taxi" | Remove from titles and H1s; keep in body and FAQ |
| D6 | Reverse-direction pages | Approve only the P1 list in `NEW_ROUTE_OPPORTUNITIES.csv` |
| D7 | Exclusivity statement wording | Approve the sentence in `CUSTOMER_INTENT_AND_CRO_STRATEGY.md`, section 5 |

## E. Phase 0 open issues: current state

| Issue | State on 2026-11-15 |
|---|---|
| Live admin returns HTTP 500 | Still open; not investigated further (no Vercel access) |
| Production lead delivery | Still unverified |
| GA4 on live pages | Still inactive |
| Search Console | No access |
| Keyword tools | No access; Google Autocomplete used instead |
| Fleet verification | Matrix prepared; all specifications pending |
| Jeddah route branch | Inspected read-only; not merged |
| Fleet photo and policy branch | Inspected read-only; not merged |
| Privacy, Terms, Contact, About pages | Still missing on live; Terms and Privacy drafts exist on the unmerged branch |
| 10 database tests | Still cannot run without a database |
