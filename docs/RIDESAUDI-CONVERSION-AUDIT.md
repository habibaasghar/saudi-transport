# RideSaudi — Conversion & Lead Capture Audit

Date: 2026-11-22

## 1. CRITICAL: the live quote form does not deliver leads

A controlled test on production (clearly labelled `TEST Claude audit - ignore`, phone `+966500000000`, no email so no customer email was sent):

```
POST https://www.ridesaudi.com/api/enquiry/  ->  502 {"error":"delivery_failed"}
```

Same result as the tests on 2026-11-18 and 11-19. **Every quote request submitted on the website since at least 2026-11-18 has failed to save and failed to email.** Visitors see the error message and a WhatsApp button pre-filled with their journey, so some may have continued on WhatsApp, but the online lead itself was lost.

### Root cause analysis

The API (`src/app/api/enquiry/route.ts`) returns 502 only when **`DATABASE_URL` is set** and **both** of these fail:

1. **Database write** (`createInquiry`) throws. Cause not visible without Vercel logs. Likely candidates: wrong/rotated password, the direct `db.<ref>.supabase.co` host (IPv6-only, unreachable from Vercel) instead of the pooler host, or migrations in `drizzle/` not applied to the production database (`inquiries` table missing).
2. **Business alert channel**: the email alert only supported **Resend** (`RESEND_API_KEY` + `LEAD_NOTIFY_EMAIL`). The project's own email configuration (`.env.local` in the CRM worktree) uses **Gmail SMTP** (`EMAIL_PROVIDER`, `SMTP_*`, `ADMIN_NOTIFY_EMAIL`) — which the alert code ignored. With no Resend key, there was no working fallback, so one database problem lost every lead. **This part was a code defect and is fixed.**

### Fixed in code

| Fix | File |
|---|---|
| Business alert now also sends through the existing Gmail/SMTP setup (`EMAIL_PROVIDER=gmail|smtp`, `SMTP_*`, `ADMIN_NOTIFY_EMAIL` or `LEAD_NOTIFY_EMAIL`). Reuses the SMTP transport of the customer-ack mailer (no second email system) and sends directly, so it works **even when the database is down**. | `src/lib/deliver.ts`, `src/server/email/send.ts` (export only) |
| If every channel fails, the full lead is written to the server log as `[enquiry] UNDELIVERED LEAD {...}` so it can be recovered from Vercel logs instead of disappearing. | `src/lib/deliver.ts`, both API routes |
| Duplicate "Child seats" row in the alert email removed; plain-text version added (better Gmail deliverability). | `src/lib/deliver.ts` |
| Same for the heavy-transport quote API. | `src/app/api/heavy-quote/route.ts` |
| Unit tests for the SMTP alert path (configured / success / failure). | `tests/deliver.test.ts` |

### Owner actions required (cannot be done from code)

1. **Vercel → Settings → Environment Variables (Production)**: confirm `EMAIL_PROVIDER=gmail`, `SMTP_USERNAME`, `SMTP_PASSWORD` (Google App Password), `ADMIN_NOTIFY_EMAIL=inforidesaudi@gmail.com` are set. With the new code this alone makes leads reach the inbox.
2. **Fix the database**: check `DATABASE_URL` uses the Supabase **pooler** host (`aws-0-<region>.pooler.supabase.com`), then run `npm run db:migrate` against production once. Check Vercel → Logs for `[enquiry] database write failed <message>` to see the exact error.
3. After deploy: send one test enquiry and confirm (a) HTTP 200 with a reference `RS-YYMM-NNNN`, (b) the row in `/admin/inquiries`, (c) the alert in the inbox. Then delete the test rows, including the 2026-11-22 test if it reached any channel.

## 2. Form and funnel review

| Item | Finding | Status |
|---|---|---|
| Fields | Service, pickup, drop-off, date, time, trip type (+ return date/time), passengers, luggage, child seats, vehicle preference, flight number, name, WhatsApp/phone, optional email, notes, consent. Extra fields only for services that need them. Matches the brief without over-asking. | OK |
| Validation | Shared client/server validator (`src/lib/enquiry.ts`); errors shown per field, focus moves to the first error. | OK |
| Duplicate submissions | Client lock on double-tap; server idempotency (identical resubmission returns the same reference). | OK |
| Spam | Honeypot, 3 s minimum fill time, origin check, per-IP and per-contact rate limits. | OK |
| Failure handling | Clear message + WhatsApp button pre-filled with the journey. Now also server-log recovery. | Improved |
| Success message | Shows reference, says it is an enquiry, not a confirmed booking; WhatsApp follow-up pre-filled with reference. | OK |
| Phone calls | WhatsApp-only number (`src/config/contact.ts`); no `tel:` links. Correct per owner. | OK |
| Contact data | One source of truth `src/config/contact.ts`. `website` was `https://ridesaudi.com/` (non-canonical host) — changed to `https://www.ridesaudi.com/`. | Fixed |
| Home hero | EN H1 now "Private Airport, Intercity & Chauffeur Transfers in Saudi Arabia"; subtitle says "never a shared ride" and names the confirmed vehicle types. AR H1/title no longer use "سائق خاص" (driver-job intent per Phase 1 research) or "نقل خاص" (licence-plate meaning). | Fixed |
| Home "routes" block | Said "We do not publish a fixed route list" although 59 route pages exist. Now lists the 10 top corridors as links. | Fixed |
| Home "airports" block | Empty list. Now links to 6 airport pages. | Fixed |

## 3. Analytics

| Item | Finding | Status |
|---|---|---|
| GA4 | Code ready (`src/components/Analytics.tsx`), loads only when `NEXT_PUBLIC_GA_ID` is set. **Not set on production** → no data. | Owner: create a GA4 property, set `NEXT_PUBLIC_GA_ID=G-…` in Vercel, redeploy. Never invent an ID. |
| `generate_lead` | Fires only after the backend returns 200 (never on click). | OK |
| PII | `quote_request` sent `route: "<pickup> > <dropoff>"` — free text that can be a home address. | **Fixed**: removed |
| `quote_submission_error` | Missing | **Added** (HTTP status only) on both forms |
| `quote_form_view` | Missing | **Added** (once per page view, 33 % visible) |
| Existing | `quote_form_start`, `quote_form_submit`, `quote_form_success`, `form_error`, `whatsapp_click`, `phone_click`, `email_click` (with location header/footer/floating/content) | OK |

### GA4 setup guide (after the ID is set)
1. Admin → Events → mark **`generate_lead`** as a key event (conversion). Do not mark `quote_form_submit`.
2. Mark `whatsapp_click` as a secondary key event (contact intent, not a lead).
3. Create a funnel exploration: `quote_form_view` → `quote_form_start` → `quote_form_submit` → `generate_lead`; break down by `language` and `page_path`.
4. Watch `quote_submission_error` by `status`: any 502/503 means leads are failing again.
5. Link GA4 to Search Console (Admin → Product links).
