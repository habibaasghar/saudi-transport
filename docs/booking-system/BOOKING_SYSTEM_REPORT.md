# Booking & quotation system (2026-11-27)

Branch `claude/ridesaudi-booking-system-1ad9b1`, based on `vercel-repo/main` ab56d16. Not deployed.

## What changed
- **Booking form** (`src/components/EnquiryForm.tsx`, used by `QuoteSection` on the homepage, every service, airport, city, route, cross-border and blog page with route prefill): 2 steps (journey & vehicle → your details), one way / round trip toggle (return fields only on round trip), large + small bags, vehicle cards from owner-confirmed fleet only, flight field when the route mentions an airport, email now required, field-level errors, focus on first error, return-before-departure check, phone must have 8-15 digits, loading state + double-submit guard, data kept on failure, WhatsApp fallback, success screen with reference.
- **Alert email** (`src/lib/deliver.ts`): subject `NEW BOOKING REQUEST – {pickup} to {dropoff} – RS-YYMM-NNNN`, HTML sections (journey, passengers & vehicle, customer, tracking), KSA submission time, "RETURNING CUSTOMER" flag, WhatsApp + "Open in CRM" buttons. Duplicates (same details within 10 min) are not re-alerted.
- **Customer confirmation** now lists vehicle, bags and return.
- **CRM** (`/admin`): dashboard by group, inquiry list with tabs (New / Pending quotation / Quotation sent / Confirmed / Cancelled), search (name, email, phone, reference, place), inquiry detail page with customer, journey, status change, internal notes, activity + email history, earlier inquiries of the same customer.
- **Quotations**: create (vehicle, SAR amount, validity, inclusions, exclusions, notes) → `QT-YYMM-NNNN`; PDF view/download (`/api/admin/quotations/{id}/pdf/`); email to customer with PDF attached; mark accepted / declined / cancelled. Prices are only typed by staff; nothing public reads them.

## Database
Migration `drizzle/0001_quotations.sql` (additive: enum `quotation_status`, table `quotations`, RLS on). **Already applied** to the Supabase DB on 2026-11-27. Existing tables unchanged (`small_bags` column already existed).

## Environment variables (Vercel → Production)
Already used by the site; needed for the new parts:
- `DATABASE_URL`, `IP_HASH_SALT`
- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` — **required for /admin login** (live /admin/login returned 500 on 2026-11-24, consistent with these being missing in Vercel)
- `EMAIL_PROVIDER=gmail`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USERNAME`, `SMTP_PASSWORD` (Gmail app password), `EMAIL_FROM`, `EMAIL_REPLY_TO`
- `ADMIN_NOTIFY_EMAIL=inforidesaudi@gmail.com` (or `LEAD_NOTIFY_EMAIL`)
- Admin users: a Supabase Auth user with confirmed email **and** an active row in `admin_users` (`scripts/seed-admin.mjs`).

## Tests run (2026-11-27)
- `vitest`: 86/86 pass (incl. new `crm.test.ts` DB flow and `quotation-pdf.test.ts`).
- `tsc` clean, `eslint` 0 errors, `next build` OK, PDF fonts + logo traced into the serverless bundle.
- Local production build: indexability audit 410 URLs, 0 issues. Admin pages 307 → login, admin APIs 401 without a session, admin `noindex`.
- Browser: empty submit, return before departure, invalid phone/email, round trip submit → RS-2611-0017 stored; mobile (375 px) EN + AR, no overflow, no console errors.
- Email: customer confirmation for RS-2611-0017 and quotation QT-2611-0001 (with PDF) **accepted by Gmail SMTP**; business alert raised no error. Arrival in the inbox still to be confirmed by the owner. RS-2611-0017 / QT-2611-0001 are TEST records (status cancelled).
- Not tested: signing in to /admin (needs the owner's credentials).

## Deploy
1. Merge this branch into `main` on `vercel-repo` (or push `HEAD:main` with the owner's OK).
2. Check Vercel env above, then sign in at `/admin/login/`, open an inquiry, create a quotation, view the PDF.
