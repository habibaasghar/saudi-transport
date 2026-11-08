# IMPLEMENTATION_PLAN

Priority (agreed): **Inquiry → DB → email first.** No dashboards/AI until a website inquiry is saved in Postgres and the admin email arrives. Each phase ends with: run the app, real browser check, real DB record, tests green, docs updated. A phase is not "done" if any step fails.

## Decisions needed from the owner (blockers marked ⛔)
| # | Question | Needed by |
|---|---|---|
| Q1 ⛔ | Which admin notification address: `inforidesaudi@gmail.com` or `inforidesa@gmail.com`? (brief uses both) | P4 |
| Q2 ⛔ | Approve D1–D14 in CRM_ARCHITECTURE (esp. D1 Next.js-only and retiring the Flask/SQLite CRM; D10 keep Desert Dusk public theme). | P2 |
| Q3 ⛔ | Supabase: is project `nxparehkrztumdjecint` yours and has `supabase/enquiries.sql` been run? Provide `DATABASE_URL` (pooler) + service-role key via Vercel/`.env.local` (never in chat/git). | P2 |
| Q4 ⛔ | Resend account + DNS access for `ridesaudi.com`; sending address (e.g. `bookings@ridesaudi.com`). | P4 |
| Q5 | Brand naming: site is "RideSaudi"; brief says "Taxi Saudi Arabia / Ride Saudi". Use RideSaudi in PDFs/emails? | P4 |
| Q6 | Company details for PDFs (legal name, address, VAT number, phone/WhatsApp), payment terms, cancellation policy, T&Cs. None exist in the repo and none will be invented. | P6 |
| Q7 | VAT rule: default 15%? applied after discount? tax-inclusive or exclusive default? | P6 |
| Q8 | OK to send pasted WhatsApp text (PII) to the Anthropic API? Provide `ANTHROPIC_API_KEY`. | P8 |
| Q9 | Privacy Policy / Terms text (EN/AR) for the booking form. | P3 |
| Q10 | Admin user list + roles; MFA required? | P2 |

## Decisions recorded (2026-11-08)
- Q1 resolved: admin notification address = `inforidesaudi@gmail.com` (`ADMIN_NOTIFY_EMAIL`), corrected by the owner on 2026-11-08 (earlier "inforidesa" approval superseded).
- Q2 resolved: D1–D14 in CRM_ARCHITECTURE approved (Next.js-only, Supabase Postgres, Flask CRM retired as reference).
- Still open and blocking: Q3 (Supabase access), Q4 (Resend/DNS), Q10 (admin users).

## Phases

### P1 — Audit & planning ✅ (this commit)
11 docs in `/docs`. Baseline: typecheck/lint/build pass; no tests exist. Branch moved onto production code.
Exit: owner answers Q1–Q4, Q10 (Q5–Q9 can follow).

### P2 — Database, auth, inquiry API
1. Add deps: `drizzle-orm`, `drizzle-kit`, `postgres`, `zod`, `@supabase/ssr`, `server-only`, `vitest`, `@playwright/test`.
2. `src/server/db/schema.ts` + migrations 0001 (core: customers, inquiries, messages, activities, email_logs, audit_logs, admin_users, system_settings, counters, rate_limits). Inspect live DB first; migrate legacy `enquiries` safely.
3. Reference generator (transactional counter), dedupe (idempotency key + same email/phone/route/date within 10 min).
4. Rewrite `/api/enquiry` internals (same path, same `{ok:true}`, adds `reference`); keep honeypot/min-time; DB rate limit; **200 only after commit**; keep Resend/webhook channels as secondary until P4.
5. Auth: Supabase Auth login, `requireRole()`, `/admin/login`, `/admin/dashboard` shell, middleware matcher fix, noindex headers.
6. Tests: vitest (validation, refs, dedupe, authz), integration against a real Postgres (local container or Supabase branch).
Exit: submit via real browser → row in Postgres → visible to admin via authenticated API; unauth gets 401/redirect.

### P3 — Booking modal
Per FRONTEND_DESIGN. EN/AR strings, 4 steps, all entry points, API v2 fields (trip type, return leg, children/infants, bags, country code, contact preference, vehicle pref, child seat, hotel). Server validation mirrors client. Playwright: valid, invalid email, missing fields, one-way vs round trip, mobile viewport, double submit. Screenshots at 360/768/1280 and in RTL.
Exit: real submission from the site creates inquiry with reference; Lighthouse/CWV not regressed.

### P4 — Email
Resend client wrapper, templates (HTML+text), outbox with idempotency, `email_logs`, webhook route, admin + customer-ack emails, retry. Verify domain, send to authorised test address, inspect headers, simulate bounce.
Exit: both emails received; log shows accepted → delivered via webhook. **Blocked on Q1, Q4.**

### P5 — Admin CRM core
Dashboard metrics from SQL, inquiries list/detail/edit/notes/assign/status/archive/export, customers, activity timeline, notifications, settings. DataTable with server pagination/search/filters.

### P6 — Quotations & PDF
Calculation engine (pure functions, unit-tested incl. rounding, VAT modes), create from inquiry/manual, edit/version, approve, preview/download, **send** (guards: approved, valid recipient, idempotent), resend, accept/reject, duplicate, expiry. PDF stored in private bucket with hash. **Blocked on Q6, Q7 for real content** (placeholders clearly marked "set in Settings", not invented).

### P7 — Bookings & finance
Conversion transaction, status machine, partners/drivers/vehicles, payments, expenses, invoices, reports (daily/weekly/monthly, route, vehicle, P&L), CSV + PDF export.

### P8 — AI assistant
Per AI_AUTOMATION §A. **Blocked on Q8.**

### P9 — Python automation
Per AI_AUTOMATION §B + GitHub Actions workflows + pytest.

### P10 — SEO & performance
Live crawl, GSC/Ahrefs-based docs (7 remaining SEO docs), regression diff vs baseline, targeted technical fixes only.

### P11 — Production testing & security
Full E2E acceptance (all 18 steps), authz matrix, rate-limit tests, secret scan, dependency audit, CSP report-only, restore drill.

### P12 — Deployment
`.env.example` update, migration runbook, Vercel env + cron, domain DNS, backup schedule, go-live checklist, rollback plan.

## Working rules
Small commits per task; one branch (`claude/ridesaudi-crm-audit-1a7ba1`) until owner approves a PR; **no pushes/deploys** unless the owner asks (CLAUDE.md: deploy target is `vercel-repo`); TESTING_REPORT updated each phase; no fake data in production paths (test fixtures live under `tests/`).
