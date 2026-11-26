# Task A — Conversion fixes (sitewide)

Branch: `claude/ridesaudi-seo-cro-overhaul-d0b5f6` (based on `vercel-repo/main` a8a5c80). Not deployed.

## What changed

| # | Brief item | Done in code | Where |
|---|---|---|---|
| 1 | "Starting from SAR ___" per vehicle on every route/airport page | Yes, 68 pages wired: every A-to-B intercity route, each named airport, each cross-border country page, and Jeddah Airport to Makkah | `src/content/prices.ts` (fill in), `src/components/PriceFrom.tsx` |
| 2 | 3-field quick quote above the fold + reply line | Yes: route, date, WhatsApp number in the hero of every non-heavy service page and the homepage (replaces the old 4-field "Begin your enquiry" panel, which sent nothing). It posts a real enquiry. The full form stays below | `src/components/QuickQuoteForm.tsx`, `src/lib/quick-quote.ts`, `src/app/api/enquiry/route.ts` |
| 2b | "We reply within 15 minutes on WhatsApp (8am–12am KSA)" | Yes: under the quick form, in its success state, and in the quote section intro (EN + AR) | `messages/*.json` → `quickQuote.reply` |
| 3 | Disclaimer once, near submit | Yes. Removed from the service-page hero, homepage hero, blog index hero, the quote-section intro and the "How it works" note. Kept only as `form.legal` directly above the full form's submit button. Heavy pages keep their own quotation wording | `ServicePageView`, `Hero`, `QuoteSection`, `HowItWorks`, `BlogView` |
| 4 | Trust block (CR/VAT/address, partner vetting, reviews, domain email) | Yes, as a config-driven block on service pages (before the FAQ) and the homepage | `src/config/company.ts` (fill in), `src/components/TrustDetails.tsx` |
| 5 | Hide the unexplained "Website" field | Yes. It was a honeypot moved off-screen, but its "Website" label still showed in reader mode, text extractors and the accessibility tree. Now `display: none` with no label, on the quote, quick and heavy forms. Spam check unchanged | `EnquiryForm`, `HeavyQuoteForm`, `globals.css` `.hp` |
| 6 | GA4 events | Yes, see spec below | `src/lib/analytics.ts` callers |

### Why the price and trust blocks show nothing yet
SEO-RULES.md §1 and §3 forbid publishing placeholders or invented prices or company facts. So:
- **Production:** a vehicle row or trust item appears only once it has a real value. With everything `null`, both blocks are left out.
- **`npm run dev`:** empty slots show as highlighted `SAR ___` / `[Commercial Registration (CR)]` so you can see where they go.

### What you need to send me (or edit directly)
1. **Prices.** In `src/content/prices.ts`, replace `null` with the lowest one-way SAR price for each page and vehicle (`sedan`, `gmc`, `staria`), then set `PRICES_UPDATED` to today's date. A page can show one, two or all three vehicles.
2. **Company details** in `src/config/company.ts`: registered name (EN/AR), CR number, VAT number, address (EN/AR).
3. **Domain email**, e.g. `bookings@ridesaudi.com`. It needs a working mailbox first. Then I change `CONTACT.email` as well, so the footer, schema and mailto links all match.
4. **Partner vetting.** Confirm which checks really happen. A suggested wording is in the file comment, and it is **not** published.
5. **Reviews.** A link to a real public profile (Google Business Profile or similar). No star ratings will be hard-coded or put in schema.

### Reply-time claim
"Within 15 minutes, 8am–12am KSA" came from you in this brief, so I treated it as owner-confirmed. Before, it was on the do-not-claim list. If the team can't hold it at weekends, tell me the real hours.

## Quick quote: how it behaves
- **Fields:** route (pre-filled on route and airport pages, e.g. "Jeddah to Makkah"), travel date, WhatsApp number.
- **Submit:** `POST /api/enquiry/` with `quick: true`. It is stored as a normal enquiry: the route goes in `pickup`, `dropoff` and `time` are `TBC`, the name is "Quick quote (WhatsApp)", and a note asks the team to collect time, passengers and luggage on WhatsApp. It uses the same rate limits, honeypot and minimum fill time (1.5 s instead of 3 s) as the full form.
- **Success:** shows the reference number, the reply promise and a link down to the full form.
- **Failure (e.g. the open 502):** shows a WhatsApp button with route and date pre-filled, so the lead is not lost.
- **Consent:** sending counts as consent, and the privacy-policy line sits next to the button. If you want an explicit checkbox, it becomes a 4th field.

## GA4 event spec

GA4 loads only when `NEXT_PUBLIC_GA_ID` is set (it is currently off). No names, phone numbers, routes, addresses or free text are ever sent.

| Event | Fires when | Parameters | Mark as key event? |
|---|---|---|---|
| `whatsapp_click` | Any click on a `wa.me` link (hero, quick-form fallback, quote section, floating button, footer) | `location`: `header` / `footer` / `floating` / `content`; `page_path` | Yes (contact intent) |
| `form_submit` | The **full** quote form was **accepted by the backend** (not on button click) | `form: "quote"`, `service`, `language`, `page_path` | Yes |
| `quick_form_submit` | The **3-field quick form** was **accepted by the backend** | `form: "quick"`, `service`, `language`, `page_path` | Yes |
| `phone_copy` | Someone copies the WhatsApp number from the page (no voice calls, so copying it is contact intent) | `location: "selection"` | Yes (secondary) |
| `generate_lead` | Either form accepted (already used, now also sent by the quick form with `form: "quick"`) | `form`, `service`, `language` | Optional: use it as the single "all leads" key event |
| `quote_submission_error` | Backend refused or failed (incl. 502) | `form` (`quote`/`quick`), `status` | No (diagnostics) |
| `form_error` | Client validation stopped a submit | `form`, `field` (name only) | No |

**GA4 setup steps:**
1. Admin → Events → mark `whatsapp_click`, `form_submit`, `quick_form_submit` and `phone_copy` as key events. An event appears in this list only after it has fired once, so trigger each one on the live site first (DebugView shows them straight away).
2. Register custom dimensions (event scope): `form`, `service`, `location`, `language`.
3. In Explore, build a funnel: `page_view` (route/airport pages) → `quick_form_submit` OR `form_submit` OR `whatsapp_click`.
4. If you use Google Ads, import `quick_form_submit` and `form_submit` as conversions. Keep `whatsapp_click` as a secondary conversion, because a click is not a sent message.

## Not verified yet
- Production build and a local render check: see the session report.
- Live delivery is still blocked by the open `/api/enquiry/` 502 (DB/Resend env on Vercel). The quick form's WhatsApp fallback covers it, but leads will not reach the CRM until that is fixed.
- 10 DB-backed tests (`tests/inquiry.test.ts`, `tests/enquiry-api.test.ts`) need `DATABASE_URL`. That is unavailable on this machine, and those tests fail the same way without these changes.

## Added 2026-11-23 (master brief, Phase 1)
Ported onto branch `claude/ridesaudi-seo-lead-gen-c68a57` (fresh `vercel-repo/main` a8a5c80). Gaps closed:
- **Prefilled WhatsApp format** (hero button and quick-form fallback, EN + AR): `Hi RideSaudi, I need {route} on {date} for [number] people, vehicle: [GMC / Staria / sedan / not sure].` On route pages the route comes from the page; the visitor fills in the brackets.
- **Price line**: "From SAR {amount}" plus "Final quote confirmed on WhatsApp based on date, vehicle and stops."
- **Contact page corporate option**: a "Company or monthly contract enquiry" section. One button opens the full form with Corporate Transportation selected (the Company field appears). The other opens WhatsApp with a corporate template: company, city, vehicles, duration, start date.
- **`phone_copy`** GA4 event.
- **Vehicle pages** get the same price block when they are built (Phase 3A). Hiace and Coaster price slots get added then.
