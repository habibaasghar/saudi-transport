# CRM_ARCHITECTURE

Status: **proposed, awaiting owner sign-off on the decisions in IMPLEMENTATION_PLAN §Decisions.**

## Goal
One inquiry → one CRM record → one quotation → one click to email → one confirmed booking. Everything inside the existing Next.js app on Vercel; no second backend.

## Decision log

| ID | Decision | Alternatives rejected | Why |
|---|---|---|---|
| D1 | Build the CRM **inside the existing Next.js app** (`src/app/admin`, `src/app/api`, `src/server`). | Revive the Flask+SQLite CRM (branch `claude/keen-mirzakhani-511ed5`). | Flask CRM needs a separate host (README admits Vercel can't run it), uses SQLite (not durable on serverless), duplicates the backend, and targets another domain. Brief forbids duplicate backends. Its **business rules are reused** (VAT modes, statuses, follow-up triggers, profit definitions) and ported to TypeScript with tests. |
| D2 | **PostgreSQL on Supabase** (project `nxparehkrztumdjecint`, already in repo). | Neon/Vercel Postgres, SQLite. | Already provisioned and referenced; managed backups/PITR; Storage for PDFs in the same product. |
| D3 | **Drizzle ORM** + `postgres` driver, SQL migrations in `drizzle/`. Server-only, via Supavisor pooler URL (`DATABASE_URL`). | Prisma (heavier cold starts), raw REST calls (current). | No ORM exists to preserve. Drizzle is light for serverless, type-safe, generates plain SQL migrations. |
| D4 | **Admin auth: Supabase Auth** (email+password, optional TOTP) verified server-side; role from our `admin_users` table (`owner`, `admin`, `staff`). Session cookie HttpOnly/Secure/SameSite=Lax. | Hand-rolled password hashing; Auth.js. | Strong hashing, rate limiting, MFA, password reset provided; we still enforce authorization on every server action/route ourselves. No self-signup (admin users created by owner only). |
| D5 | **RLS enabled on every table with no public policies**; all access via server using DB role. Anon key never touches CRM tables. | Client-side Supabase queries. | Public users can never read admin data even if a route bug exists. |
| D6 | **Email: Resend** (API + webhooks), verified `ridesaudi.com` domain. | Gmail SMTP, SES. | Already the integration in `deliver.ts`; webhooks give real delivery/bounce events. Inbound Gmail is a *separate* concern (see EMAIL_SYSTEM). |
| D7 | **PDF: server-side `@react-pdf/renderer`** (Node runtime) with embedded fonts; stored in a **private Supabase Storage bucket**, served via short-lived signed URLs. | Puppeteer (too heavy for Vercel), Flask ReportLab. | Pure JS, works in Vercel Node functions, branded layout in React. Arabic shaping risk is tested in Phase 6 (fallback: pdf-lib + pre-shaped text). |
| D8 | **AI: Anthropic API** (`claude-sonnet-5-5`) with a tool/JSON-schema output, validated by Zod, no side effects. | Free-text parsing, regex-only. | Extraction only; every field flagged with confidence + "missing"; admin must review and Save. AI cannot send email or set prices. |
| D9 | **Python only in `/automation`** (cron/CI scripts). Business logic stays in TypeScript. | Python microservice. | Brief: no duplicate backends. |
| D10 | **Keep Desert Dusk** on the public site; admin gets a neutral navy/slate dashboard theme. | Re-skin public site to navy/cyan from the brief. | SEO-RULES.md and the live brand fix the palette; a re-skin risks the existing site. Owner can override. |
| D11 | Money stored as **integer minor units (halalas)** + currency code; VAT computed server-side only; client-sent prices ignored. | Floats (Flask CRM used floats). | Rounding correctness. |
| D12 | Admin routes live at **`/admin/*` outside next-intl** (English-only UI), `noindex`, excluded from sitemap, `Disallow: /admin/`. Public booking modal is **EN + AR**. | Locale-prefixed admin. | Internal tool; avoids touching SEO routing. Public forms must be bilingual per SEO-RULES §4. |
| D13 | Rate limiting & dedupe in the **database** (and optionally Upstash later), not in-memory. | Current in-memory map. | Serverless instances don't share memory. |
| D14 | Idempotency keys on inquiry submit, email send and booking conversion (unique constraints + `FOR UPDATE`). | Client-side button disabling only. | Required by brief ("prevent duplicate sends/conversions"). |

## Module layout (target)
```
src/
  app/
    api/enquiry/route.ts          # keep path; now writes via inquiry service
    api/webhooks/resend/route.ts  # signed delivery events
    admin/(auth)/login/           # public
    admin/(app)/{dashboard,inquiries,customers,quotations,bookings,
                  vehicles,partners,invoices,expenses,reports,email,
                  ai-assistant,settings}/
  components/booking/             # BookingModal, steps (EN/AR)
  components/admin/               # DataTable, StatusBadge, ...
  server/
    db/{schema.ts,client.ts}      # drizzle
    auth/                         # session, requireRole()
    services/{inquiry,customer,quotation,booking,finance,email,ai,pdf}.ts
    validation/                   # zod schemas shared with client
    audit.ts
drizzle/                          # SQL migrations
automation/                       # python
```

## Request flow
```
Browser (modal) -> POST /api/enquiry -> validate(zod) -> idempotency+dedupe
   -> TX: upsert customer, insert inquiry (ref RS-YYMM-NNNN), activity, outbox rows
   -> after(): send admin email + customer ack (logged in email_logs)
   -> 200 {ok, reference}        (never "ok" unless the DB write committed)
Admin UI -> server actions / route handlers -> requireRole() -> services -> DB
Resend webhook -> verify signature -> update email_logs + activity
```
Email sending happens after the DB commit; an email failure never loses an inquiry and is visible in the CRM (retry button).

## Security model
- Auth on **every** `/admin` page *and* every admin API/server action (middleware is only a convenience, never the gate).
- Roles: owner (all, settings, users), admin (all business data), staff (inquiries/quotes/bookings; no finance reports/settings).
- Customer-facing outputs (emails/PDFs/API) are built from explicit allow-lists of fields; vendor cost, margin, internal notes are never selected.
- CSRF: Server Actions (origin-checked) + SameSite cookies; JSON admin routes require same-origin + custom header.
- Rate limits: public inquiry (per IP + per email), login (per IP + per account), AI endpoint, send-quotation.
- Input: zod on every boundary; HTML-escape in templates; CSV export formula-injection guard (carry over from Flask CRM).
- Audit log for every admin write (who, what, before/after summary, IP).
- Secrets: server env only; `import "server-only"`; secret scanning in CI.
- Backups: Supabase PITR/daily + `automation/database_backup.py` logical dumps to private storage.

## Phase mapping
P2 db+auth+inquiry API · P3 booking modal · P4 email · P5 admin CRM · P6 quotations/PDF · P7 bookings/finance · P8 AI · P9 python · P10 SEO · P11 test · P12 deploy.
