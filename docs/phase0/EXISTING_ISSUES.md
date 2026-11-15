# RideSaudi.com — Existing Issues (Phase 0)

Date: 2026-11-15 · Evidence for each item is in `WEBSITE_AUDIT.md` and `TECHNICAL_SEO_AUDIT.md`.

## MUST FIX

| # | Issue | Why it matters | Needs |
|---|---|---|---|
| M1 | Live lead delivery is unverified. `/admin/` returns 500 on production, which suggests the CRM environment variables are not set. If neither the database nor email/webhook is configured, the form returns an error to every customer. | Every route page exists to produce enquiries. | Owner: send one test enquiry on the live site and confirm where it arrives, or allow a test submission. Check Vercel env vars (`DATABASE_URL`, `RESEND_API_KEY`, `LEAD_NOTIFY_EMAIL`). |
| M2 | No analytics in production. The GA4 code is built but `NEXT_PUBLIC_GA_ID` is not set, so no form, WhatsApp or call events are recorded. | Route-level conversions cannot be measured, so P1/P2 decisions would be blind. | Owner: GA4 measurement ID. |
| M3 | No Search Console access. | Keyword demand, indexing and cannibalisation cannot be measured; Phase 1 would rest on estimates. | Owner: add access or export 90 days of queries and pages. |
| M4 | Fleet in the brief does not match the site. Brief: Lexus, GMC Yukon, Suburban, Tahoe, Land Cruiser. Site and earlier owner confirmation: Sedan, GMC Yukon, Hyundai Staria. `confirmed.fleet` is empty. | Vehicle pages and "GMC Yukon Riyadh to Dammam" targeting cannot be written on unverified vehicles. | Owner: final vehicle list, which models are really available, seats and luggage per vehicle. |
| M5 | "Private, not shared" is not stated. The words shared, carpool and "exclusively for your party" do not appear in content. | It is the main positioning requirement in the brief and filters low-value enquiries. | Content change in Phase 4/6 (template block + per-page copy, EN and AR). |
| M6 | Most route pages publish no distance, driving time or road corridor (Riyadh to Dammam included). | Required by the brief; these are the facts searchers and AI answers look for. | Phase 3 route research with cited sources, then content. |
| M7 | URL convention conflict. The brief asks for `/routes/origin-to-destination/`. 39 routes are already live at `/{locale}/services/intercity-transfers/origin-to-destination/`. | Building `/routes/` beside them would duplicate 78 URLs; moving them needs 78 redirects and loses the current parent hub. | Owner decision; see `PROPOSED_ARCHITECTURE.md`. |
| M8 | Two unmerged branches hold finished work: Jeddah route cluster (`claude/ridesaudi-jeddah-routes`) and fleet photos + policy pages (`claude/ridesaudi-seo-leads-dd9a32`). | Risk of redoing or losing work; route planning must start from the true page list. | Review and decide merge or discard before Phase 2. |
| M9 | No Privacy Policy, Terms, Contact or About page on production (404). The form collects personal data with a consent checkbox. | Trust for premium and corporate customers; consent has nothing to link to. | Terms and Cancellation exist on the unmerged branch; Privacy, Contact and About need owner facts. |

## SHOULD IMPROVE

| # | Issue | Suggested action |
|---|---|---|
| S1 | No route discovery in the header; footer links only Riyadh routes. Jeddah, Makkah, Madinah and Dammam have no hub-level visibility. | Add a Routes entry and city route hubs (Phase 7). |
| S2 | Reverse directions are incomplete: no Makkah to Jeddah, Madinah to Riyadh, Makkah to Riyadh, Madinah to Jeddah, among others. | Decide per pair in Phase 2 using demand data; create only where the direction has different content. |
| S3 | Overlapping intents across URLs (Jeddah to Makkah ×2, Bahrain ×3, UAE ×4, premium intercity ×3, Dammam vs Al Khobar). | One primary keyword per page in the Phase 1 mapping; merge or differentiate. |
| S4 | 11 page pairs above 0.30 similarity (long-distance Riyadh routes, small city pages). | Rewrite with route-specific facts in Phase 4. |
| S5 | Form does not split large and small bags; CTA labels differ from the brief. | Add two bag fields and rename CTAs. This touches the API and database field mapping, so it needs a careful, tested change. |
| S6 | 55 titles over 60 characters, 12 over 70. | Shorten. |
| S7 | Unknown locale-less URLs redirect to `/en/…` and then 404; uppercase `/EN/` mishandled; home redirect chain is 4 hops with a 307 at the end. | Return 404 directly for unknown paths; make `/` → `/en/` permanent. |
| S8 | No vehicle photos and 82 URLs without any image; some images are low resolution or illustrations. | Phase 8 image inventory. |
| S9 | Organization schema has no `logo`; `Service.areaServed` is the whole country on route pages; `CONTACT.website` is non-www. | Small schema fixes. |
| S10 | "taxi" appears 23 times in content. | Review each use; keep only where it is a deliberate Arabic search term or comparison. |
| S11 | Database tests cannot run locally (no `DATABASE_URL`). | Provide a test database so form changes can be verified. |

## OPTIONAL IMPROVEMENTS

| # | Issue |
|---|---|
| O1 | Inline form or short quick-quote near the top of route pages instead of only an anchor button. |
| O2 | 6 meta descriptions slightly over 160 characters. |
| O3 | Blog index pages are about 200 words; only 4 guides. |
| O4 | Home sitemap entries have no `lastmod`. |
| O5 | No Content-Security-Policy header. |
| O6 | `logo.png` (109 KB) is kept alongside `logo.webp` (22 KB). |
| O7 | Update `llms.txt` wording once distances and vehicles are published. |

## Risks

- Moving existing route URLs risks a temporary ranking drop on the only route pages that have had time to be indexed.
- Publishing vehicle or distance claims before the owner verifies them breaks the site's own truthfulness rules and the brief.
- Adding many reverse-direction pages without distinct content invites a scaled-content problem; the registry already has 11 similar pairs.
- Every page must ship in English and Arabic, which doubles content and QA effort per route.
