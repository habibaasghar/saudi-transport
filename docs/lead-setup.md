# Getting leads: 10-minute setup

The form already validates, blocks spam (honeypot, timing, rate limit) and delivers to every channel you configure. Nothing is sent until you add at least one channel; until then visitors are told honestly that enquiries are not open yet.

## 1. Store every lead in Supabase (recommended)
> Updated 2026-11-22: the old `supabase/enquiries.sql` (an `enquiries` table) is **no longer used**. Both the passenger form (`/api/enquiry`) and the heavy transport form (`/api/heavy-quote`) write to the CRM tables in `drizzle/0000_core.sql` via `DATABASE_URL`.
1. Supabase dashboard -> your project -> SQL Editor. Check whether the tables `inquiries`, `customers` and `rate_limits` exist (Table Editor). If not, paste and run `drizzle/0000_core.sql` once (it fails if the tables already exist; that is fine).
2. Supabase -> Project Settings -> Database -> Connection string (URI, **Transaction pooler**, port 6543), with the database password filled in.
3. Vercel -> saudi-transport -> Settings -> Environment Variables (Production): `DATABASE_URL` = that string. It must point to the same project where step 1 created the tables.
4. Read leads in the CRM at `/admin/inquiries/` (or Supabase -> Table Editor -> `inquiries`).
5. If leads still fail, Vercel -> Logs -> filter `/api/enquiry` or `/api/heavy-quote`: the line `database write failed:` now ends with the Postgres reason (e.g. `42P01 relation ... does not exist` = step 1 missing; `28P01 password authentication failed` = wrong password in `DATABASE_URL`; `ENOTFOUND` = wrong host).

## 2. Get an email for every lead (Resend)
1. resend.com -> create API key.
2. Vercel env: `RESEND_API_KEY`, `LEAD_NOTIFY_EMAIL` (your email, comma-separate for several).
3. Optional: verify ridesaudi.com in Resend and set `LEAD_FROM_EMAIL` (e.g. `RideSaudi Leads <leads@ridesaudi.com>`). Without it the Resend test sender is used.

## 3. WhatsApp button
Vercel env: `NEXT_PUBLIC_WHATSAPP_NUMBER` = digits with country code (e.g. `9665XXXXXXXX`). The "Book on WhatsApp" button on every service page appears only when this is set.

## 4. Redeploy
Env changes apply on the next deployment: Vercel -> Deployments -> Redeploy.

## Test
Submit the form on any page. You should see the row in Supabase and/or the email within seconds. If both channels fail the visitor sees an error instead of a false success.

## 5. Acknowledgement email to the customer (optional)
When a customer gives an email address, they can get an automatic "we received your enquiry" email (English or Arabic, matching the page). It says plainly that the enquiry is not a confirmed booking. It needs the database (step 1) and one sender:
- **Gmail (simplest):** in the inforidesaudi@gmail.com Google account, turn on 2-Step Verification and create an App Password. Vercel env: `EMAIL_PROVIDER=gmail`, `SMTP_USERNAME=inforidesaudi@gmail.com`, `SMTP_PASSWORD=<the 16-character app password>`.
- **Resend:** `EMAIL_PROVIDER=resend` plus `RESEND_API_KEY` and a verified sender domain in `EMAIL_FROM`.
Leave `EMAIL_PROVIDER` unset (or `none`) to send nothing. The business alert in step 2 is separate and unchanged, so you never get two alerts for one lead.

## What each enquiry now records
- Service-specific details: duration (hourly, chauffeur, event), company name (corporate), number of vehicles (event, corporate). Stored in the inquiry's special requirements and shown in the alert email.
- Where the lead came from: first page opened, referring website (host name only), and any `utm_*` tags or ad click IDs (`gclid`, `gbraid`, `wbraid`, `msclkid`, `fbclid`) in the link. Stored on the inquiry's "created" activity and shown in the alert email as "Came from". Never sent to analytics.
