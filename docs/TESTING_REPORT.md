# TESTING_REPORT

Living document. Updated at the end of every phase. Only results actually observed are recorded.

## Phase 1 — Audit (2026-11-08)

Environment: Windows 10, Node via npm, worktree `claude/ridesaudi-crm-audit-1a7ba1` @ `vercel-repo/main` (`0d09067`).

| Test | Result | Notes |
|---|---|---|
| `npm ci` | Pass | 373 packages, 1 min. Pre-existing `node_modules` was Next 15.5.29 (stale vs. lockfile's Next 16). |
| `npm run typecheck` | Pass | First run failed only because of a stale untracked `.next/types` from an older build (referenced removed `privacy`, `terms`, `api/quote`). Removing the git-ignored `.next` fixed it; no source change. |
| `npm run lint` | Pass | No findings. |
| `npm run build` | Pass | 194 static pages; routes: `/[locale]`, `/[locale]/[...slug]`, `/api/enquiry` (dynamic), `/llms.txt`, `/robots.txt`, `/sitemap.xml`. Sitemap has 188 `<loc>`. |
| Automated unit/integration/E2E tests | **None exist** | Introduced in Phase 2. |
| Flask CRM test (`crm/tests/test_e2e.py` on branch `keen-mirzakhani`) | Not run | Reference only; CRM is not being deployed. |
| Live site crawl / GSC / Lighthouse | Not run | No access in this session; required in Phase 10 and a baseline before Phase 3. |
| Enquiry delivery (Supabase/Resend) | Not run | No credentials available; behaviour per code: returns `503 not_configured` when no channel is configured. Whether production currently receives leads is **unverified**. |

### Open items
Everything in IMPLEMENTATION_PLAN §Decisions (Q1–Q10). No failed tests; no code was modified other than adding `docs/`.

### Template for later phases
| Phase | Test | Result | Evidence |
|---|---|---|---|

## Phase 2 — Database, auth, inquiry API (2026-11-08)

Environment: Supabase Postgres 17 (project `nxparehkrztumdjecint`, pooler `aws-0-ap-northeast-2`), Windows, Node 24, Next 16 production build served locally on :3100.

| Test | Result | Evidence |
|---|---|---|
| Migration `0000_core` applied to live DB | Pass | 10 tables created (`admin_users`, `audit_logs`, `counters`, `customers`, `email_logs`, `inquiries`, `inquiry_activities`, `inquiry_messages`, `rate_limits`, `system_settings`) |
| RLS enabled on all public tables, zero policies | Pass | `tests/inquiry.test.ts` |
| Inquiry saved with customer, activity, `RS-YYMM-NNNN` reference | Pass | vitest |
| Identical resubmission returns same reference | Pass | vitest + API test |
| 6 concurrent identical submissions create one row | Pass | vitest (advisory lock) |
| Customer reused by email; distinct references | Pass | vitest |
| DB check constraint rejects passengers < 1 | Pass | vitest |
| DB rate limiter blocks after limit | Pass | vitest |
| API: valid → 200 + reference; invalid email → 422; missing fields → 422; honeypot/too-fast → 400; foreign origin → 403; oversize → 413 | Pass | `tests/enquiry-api.test.ts` |
| `npm test` | **16/16 pass** (~63 s; remote DB latency) | |
| typecheck / lint / build | Pass | 188 sitemap URLs unchanged |
| Live HTTP on production build: `POST /api/enquiry/` | Pass | `{"ok":true,"reference":"RS-2611-0001"}`; row verified in Postgres (status new, 1 activity); test rows then deleted |
| `/admin/dashboard/` anonymous | Pass | 307 → `/admin/login` |
| `/admin/login/` headers | Pass | `X-Robots-Tag: noindex, nofollow, noarchive`, `Cache-Control: no-store` |
| `GET /api/admin/inquiries/` anonymous | Pass | 401 `{"error":"unauthorized"}` |
| robots.txt disallows `/admin/`; sitemap has 0 `/admin` URLs, 188 total | Pass | |
| `/en/` and `/ar/` | Pass | 200 |

### Not verified (honest gaps)
- **Admin sign-in end-to-end** (login → dashboard → inquiries list as an authenticated admin): not tested. It needs a Supabase Auth user for `inforidesaudi@gmail.com`, which has to be created in the Supabase dashboard (no service-role key available). The `admin_users` authorization row already exists (owner). Authorization code paths (`getAdmin`, role check) are only covered by the unauthenticated 307/401 checks.
- Email: not part of this phase (Phase 4). The existing Resend/webhook alert channel is untouched and unconfigured.
- Visual/mobile check of the login page not done in a browser.
- Tests write to the live database (tagged rows, cleaned afterwards); move to a separate Supabase branch/project before launch.
