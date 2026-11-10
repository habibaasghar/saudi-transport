# Master SEO / lead-gen execution report (2026-11-09)

Branch `claude/ridesaudi-seo-lead-gen-8ef589`, based on `vercel-repo/main` (the real Next.js site; the old worktree was a static stub). Nothing deployed or pushed.

## 1. Audit result (what already existed)
97 bilingual (EN/AR) content pages, registry-validated at build (unique title/description/H1/FAQ, no orphans, Arabic present), sitemap with hreflang, robots, `/llms.txt`, JSON-LD, DB-backed enquiry API (Supabase/Postgres), Resend email alert, webhook, honeypot + min-fill-time + rate limits, WhatsApp/call/email CTA components, admin CRM skeleton.
Contact details in `src/config/contact.ts` already match the official ones (+966543544560, inforidesaudi@gmail.com).

## 2. Changes made
| Area | Change |
|---|---|
| Form | Trip type (one way / return) + return date/time (validated, stored in existing DB columns, shown in the alert email); success state shows the reference number and a pre-filled WhatsApp follow-up link (EN/AR) |
| Tracking | `Analytics.tsx` loads GA4 only if `NEXT_PUBLIC_GA_ID` is set; events `whatsapp_click`, `phone_click`, `email_click`, `form_start`, `form_error`, `generate_lead` (the only qualified-lead event) |
| New pages (EN+AR each, 12 URLs) | see §3 |
| Tests | `tests/enquiry-validation.test.ts` (5 passing); typecheck, lint and production build pass (239 static pages) |
| llms.txt | Auto-includes the new pages; Riyadh coverage line mentions Hafar Al Batin |

## 3. New URLs and keyword targets (one distinct intent each)
| URL (under /en/ and /ar/) | Primary intent | Linked from |
|---|---|---|
| services/intercity-transfers/jeddah-to-yanbu/ | Jeddah (airport) to Yanbu private car | intercity hub, Yanbu city, Riyadh to Yanbu |
| services/intercity-transfers/makkah-to-taif/ | Makkah to Taif private car (Muslim-only route; non-Muslims pointed to Jeddah to Taif) | intercity hub, Jeddah to Taif, Taif airport/tourism |
| services/intercity-transfers/madinah-to-alula/ | Madinah to AlUla private car | intercity hub, Riyadh to AlUla, AlUla tourism |
| services/intercity-transfers/jeddah-to-alula/ | Jeddah to AlUla private car | intercity hub, Madinah to AlUla |
| services/airport-transfers/alula-airport/ | AlUla (ULH) airport transfer | airport hub, AlUla pages |
| services/intercity-transfers/riyadh-to-hafar-al-batin/ | Riyadh to Hafar Al Batin private car | intercity hub, Kuwait pages, Riyadh |
Keyword volumes are NOT in this table: the Ahrefs folder (`Saudi ride/ahref reports`) is empty and I have no Ahrefs/GSC access. Targets are intent-based; fill volume/KD once exports are supplied.

## 4. Not built, with reasons (SEO-RULES.md §1, §3)
- **Fleet vehicle pages (Yukon, Staria, Hiace, S-Class…)**: `confirmed.fleet` is empty; capacities and availability are unverified. Needs owner-confirmed fleet list.
- **Hajj Conference & Exhibition 2026 page**: the event date has passed as of today; no capacity confirmed. Not published.
- **Blog (10 articles)**: not started; needs Ahrefs/GSC question data first. Highest-value next step after the data arrives.
- **City pages Dhahran, Hafar Al Batin, NEOM, Al Ahsa**: not created; need verified local facts. (Riyadh to Al Ahsa route page exists.)
- **Other missing routes** (Makkah to Jeddah Airport reverse variants, Madinah to Jeddah Airport, Riyadh to Abu Dhabi, Riyadh to Doha reverse): reverse directions are served by the existing both-direction pages by design; Abu Dhabi is covered by the UAE cross-border page. Create separate pages only if GSC shows separate demand (cannibalisation risk).
- Competitor page-by-page analysis (taxiserviceksa.com, taxisaudiarabia.com) was not performed this session; it needs live fetches and Ahrefs.

## 5. Blockers needing the owner (cannot be fixed in code)
1. Vercel env: `DATABASE_URL` and/or `RESEND_API_KEY` + `LEAD_NOTIFY_EMAIL=inforidesaudi@gmail.com` + a verified sender domain (default `onboarding@resend.dev` only delivers to the Resend account owner). Until then the form honestly returns "not open yet" (503).
2. `NEXT_PUBLIC_GA_ID` (GA4) and Search Console verification.
3. Fleet, distances/durations, airport/route availability, payment/cancellation policy, privacy/terms text.
4. Ahrefs + GSC exports.

## 6. Known remaining issues
- The enquiry form renders client-side only (it uses `useSearchParams`); the page copy, FAQs and links are server-rendered HTML.
- Form submit end-to-end was not tested against a live DB/email in this environment; validation and UI were verified in the browser, API validation by unit test.
- Arabic copy for the 6 new pages should get a native-speaker review.

## 7. Next-step roadmap
1. Set env vars (§5.1–2) and send a real test enquiry; confirm the email arrives.
2. Provide Ahrefs/GSC exports; build the keyword-to-URL sheet with volumes and prune/merge by cannibalisation.
3. Confirm fleet and routes; then publish `/fleet/` vehicle pages and the owner-verified specs.
4. Write 10 blog articles from GSC questions, each linking to a route/service page.
5. Add real licensed photos (current images are illustrations/placeholders) and an OG image.
