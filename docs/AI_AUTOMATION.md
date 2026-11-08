# AI_AUTOMATION

Two separate things: (A) the AI WhatsApp inquiry assistant (TypeScript, in the CRM), (B) Python automation scripts (`/automation`, scheduled/CI). They do not share a runtime.

## A. AI WhatsApp inquiry assistant (Phase 8)

**Contract:** AI *proposes*, admin *disposes*. The model has no tools that write to the DB, send email, set prices or check availability.

Flow: admin pastes chat → `POST /api/admin/ai/extract` (auth + role + rate limit + size cap ~20 KB) → Anthropic API (`claude-sonnet-5-5`, JSON-schema/tool output, low temperature) → Zod validation → returned as a **draft** → review screen shows each field with state `found | inferred | missing | ambiguous` and the quoted source snippet → admin edits → **Save Inquiry** (source `whatsapp_ai`) → normal pipeline (quote → approve → send).

Extracted schema: customer name, phone, email, pickup, destination, date, time, passengers (adults/children), luggage, vehicle preference, trip type, return details, additional requirements, `missing[]`, `uncertain[]`.

Anti-fabrication rules (enforced in prompt **and** code):
1. Fields not present in the text are `null` + listed in `missing` (never guessed; no default email/name/phone).
2. Relative or ambiguous dates ("Friday", "15/11" with no year, "next week") → stored as the raw phrase + `ambiguous`; code never resolves them silently. Date-only without AM/PM → ambiguous.
3. A post-check verifies every extracted value appears in (or is derivable from) the source text (substring/number match); failures are downgraded to `uncertain`.
4. Phone/email validated by the same validators as the public form; invalid → `uncertain`.
5. Prices/vendor costs in chat are captured as **notes** only, never into pricing fields. No availability statements.
6. Prompt-injection hygiene: pasted text is wrapped as untrusted data; output is schema-only; any instruction inside the chat is ignored and cannot trigger an action (there is no action to trigger).
7. Save requires admin click; Send Quotation is a separate admin click and blocked without a verified recipient email.

Storage: `ai_extractions` (source text, extracted JSON, model, prompt version, status) + original text in `inquiry_messages`; retention purge job (default 90 days, setting). PII is sent to the Anthropic API — documented in the privacy notice; owner must accept this (Decision Q8).

**Pricing assistant:** admin enters vendor cost + selling price; system computes margin/profit/VAT deterministically (no LLM). "Suggested price" = rule-based from saved `pricing_rules` and past completed bookings on the same route/vehicle, labelled *Suggestion – requires approval*, never auto-applied. No historical data → "no suggestion".

Tests (Phase 8): complete message, incomplete, missing email, ambiguous date, Arabic message, injection attempt, hallucination guard — using recorded fixtures plus a live smoke test with a real key.

## B. Python scripts (`/automation`, Phase 9)

Python 3.11, `requests`, `psycopg[binary]`, `pydantic-settings`, `pytest`. Config from env/`.env` only; no secrets in source; structured logging; non-zero exit on failure; each has tests and a README section. They call **HTTP endpoints or read-only DB roles** — they do not reimplement business logic.

| Script | Purpose | Scheduler |
|---|---|---|
| `email_health_check.py` | Resend key/domain status, DNS SPF/DKIM/DMARC lookup, last-24h bounce/failed ratio | GitHub Actions / Vercel Cron daily |
| `daily_crm_report.py` | Daily inquiry/booking summary → CSV + email to admin | daily |
| `pdf_quotation_test.py` | Calls the PDF endpoint with a fixture, checks magic bytes, page count, key strings | CI + after deploy |
| `database_backup.py` | `pg_dump` to encrypted private storage, retention, status log | daily |
| `inquiry_data_cleanup.py` | Reports duplicate/incomplete inquiries; **report-only**, never deletes | weekly |
| `crm_health_monitor.py` | Pings `/api/health`, login page, DB check, webhook endpoint | every 15 min |
| `seo_audit.py` | Crawl sitemap: duplicate titles/descriptions/H1, missing metadata, broken internal links, redirect chains, hreflang reciprocity | weekly/CI |
| `sitemap_audit.py` | Every sitemap URL: 200, indexable, canonical = self, no duplicates | weekly/CI |

Scheduling uses GitHub Actions cron (no extra infrastructure); Vercel Cron only for in-app jobs (follow-up scan, retention purge). Database passwords come from CI secrets, never source.
