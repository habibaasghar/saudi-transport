# Getting leads: 10-minute setup

The form already validates, blocks spam (honeypot, timing, rate limit) and delivers to every channel you configure. Nothing is sent until you add at least one channel; until then visitors are told honestly that enquiries are not open yet.

## 1. Store every lead in Supabase (recommended)
1. Supabase dashboard -> project `nxparehkrztumdjecint` -> SQL Editor -> paste and run `supabase/enquiries.sql`.
2. Settings -> API -> copy the **service_role** key (secret; never put it in code or `config.js`).
3. Vercel -> saudi-transport -> Settings -> Environment Variables (Production): `SUPABASE_SERVICE_ROLE_KEY` = that key. (`SUPABASE_URL` is optional; the project URL is the default.)
4. Read leads in Supabase -> Table Editor -> `enquiries`. Change `status` as you work them (new / contacted / quoted / won / lost).

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
