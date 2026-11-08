# EMAIL_SYSTEM

## Current state
`src/lib/deliver.ts#toEmail`: Resend `fetch`, admin alert only, from `onboarding@resend.dev` (Resend's sandbox sender: delivers only to the Resend account's own address), no customer mail, no templates, no webhooks, success = HTTP 2xx.

## Two separate directions (must be verified independently)
1. **Outbound** (system → admin, system → customer): Resend API from a verified `ridesaudi.com` sender.
2. **Inbound** (customers/people → business Gmail): plain Gmail mailbox. The Resend send API does **not** read Gmail. Options: (a) keep Gmail as a human inbox, set `Reply-To` to it so replies land there (default, zero code); (b) later, Resend inbound / Gmail forwarding to a webhook if replies should be logged in the CRM.

## Addresses (configuration, not code)
| Setting | Value | Status |
|---|---|---|
| `ADMIN_NOTIFY_EMAIL` | `inforidesaudi@gmail.com` (confirmed by owner 2026-11-08) | Comma-separated list supported. |
| `EMAIL_FROM` | `RideSaudi <bookings@ridesaudi.com>` | Needs domain verified in Resend. |
| `EMAIL_REPLY_TO` | the confirmed Gmail above | |
| `RESEND_API_KEY`, `RESEND_WEBHOOK_SECRET` | secrets | Vercel env only. |

## DNS checklist (owner/registrar)
SPF (`include:amazonses.com` per Resend's shown record), 2x DKIM CNAME/TXT from Resend, DMARC `v=DMARC1; p=none; rua=mailto:<admin>` → tighten to `quarantine` after 2 clean weeks, MX for Resend return-path subdomain. Verify in Resend dashboard, then send a test and check headers show `spf=pass dkim=pass dmarc=pass`.

## Templates (HTML + plain text, shared brand layout, EN, customer mails also AR by inquiry locale)
| Key | To | Trigger |
|---|---|---|
| `inquiry_admin` | admin | inquiry created (all fields, link to CRM) |
| `inquiry_ack` | customer (if email) | inquiry created; states it is a request, **not** a confirmed booking; includes reference |
| `quotation_sent` | customer | admin clicks Send; PDF attached; no internal data |
| `booking_confirmation` / `booking_update` / `booking_cancelled` | customer | admin action |
| `followup` | customer | admin action (never automatic) |
| `admin_alert` | admin | bounce, failed send, overdue follow-up |

## Delivery pipeline
1. Service builds message from **allow-listed fields**, renders HTML+text, escapes all user data.
2. Insert `email_logs` row `queued` with a unique `idempotency_key` (`quotation:{id}:v{version}:sent`) — duplicate clicks hit the unique constraint and are rejected, not re-sent.
3. Call Resend with the same idempotency key header. Store `provider_message_id`, status `accepted` (**not** delivered).
4. `POST /api/webhooks/resend` (Svix-signature verified, raw body) maps `email.delivered|delayed|bounced|complained|failed` → `email_logs.status`, appends to `events`, writes inquiry/quote activity, raises an admin notification on bounce/complaint.
5. UI shows the true state ("Accepted by provider", "Delivered", "Bounced"). Failures are retryable from `/admin/email`; retries reuse a new attempt number, never silently.
6. Quotation emails: only for `approved` quotes, only by an authenticated admin, only to an address validated and **not** auto-filled from AI without admin confirmation.

## Abuse prevention
Public form: honeypot, min fill time, per-IP and per-email DB rate limits, max one customer-ack per email per 10 min, no user-controlled headers/subject injection (strip CR/LF), body size caps.

## Verification plan (Phase 4)
Send real mail to an authorised test address; check admin + customer receipt, headers (SPF/DKIM/DMARC), webhook round-trip, bounce simulation (`bounced@resend.dev`), and Python `email_health_check.py`. Results recorded in TESTING_REPORT.md. Cannot be completed until owner supplies Resend key + DNS access.
