# Lead tracking plan

## Today
- **No GA4 ID was found on the live site**, so clicks and forms are not recorded anywhere except the enquiry itself.
- Each enquiry already stores: reference, service key (`heavy_...`), page it was sent from, language, landing page, referring site, campaign tags.

## Funnel and where each step is recorded
| Step | Recorded in | Status |
|---|---|---|
| Organic query and landing page | Search Console (filter page contains `recovery-heavy-transport`) | available |
| CTA / WhatsApp click | GA4 `whatsapp_click` with service, language, button position | built; needs GA4 ID |
| Form start, error, submit | GA4 `quote_form_start`, `form_error`, `quick_form_submit`, `quote_form_submit` | built; needs GA4 ID |
| Lead received | CRM row + email; GA4 `generate_lead` once per session | CRM live; GA4 needs ID |
| Complete / incomplete | Email subject, first line of CRM details; `inquiry_complete` / `inquiry_incomplete` | built |
| Urgent / business | Email subject tag and CRM details | built |
| WhatsApp conversation | Every template names the service and page heading | built |
| Qualified lead | CRM status checking_availability or preparing_quotation | staff |
| Supplier quotation sent | CRM status quotation_sent | staff |
| Customer confirmed | CRM status accepted / booked | staff |
| Job completed and value | CRM status; job value has no field yet | gap: use a sheet |
| Phone clicks | `phone_click` is ready, no call number exists | owner |

A WhatsApp click is contact intent. It is never counted as a lead or booking.

## You need to
1. Create a GA4 property and add `NEXT_PUBLIC_GA_ID` in Vercel (Production), then redeploy. Mark `generate_lead` as a key event.
2. Vercel also needs `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` if CRM login is still not working, and `IP_HASH_SALT` (noted missing on 23 Nov; not rechecked).
3. Use `?rs_test=1` on the URL when testing, so tests are not counted.
4. WhatsApp leads that skip the form: log them by hand (date, page heading in the message, service, from, to, qualified?, quoted SAR, booked?, partner, margin).

## Weekly review
Impressions, clicks, CTR, position (GSC); clicks and forms by service and language (GA4); qualified, quoted, booked and margin (CRM/sheet). Decide by booked margin, not by clicks.
