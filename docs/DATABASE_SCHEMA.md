# DATABASE_SCHEMA

Status: design for Phase 2 (nothing migrated yet). PostgreSQL on Supabase, Drizzle migrations in `drizzle/`. All tables: `id uuid pk default gen_random_uuid()`, `created_at/updated_at timestamptz`, RLS **enabled, no policies** (server-only access). Money = `bigint` minor units + `currency char(3)` (default `SAR`). "Soft delete" = `deleted_at timestamptz null`.

## Existing state (must be migrated, not dropped)
`public.enquiries` (bigint identity id; status text; name, phone, email, pickup, dropoff, travel_date, travel_time, passengers, luggage, vehicle, flight, notes, locale, source) and legacy `public.waitlist`. Migration `0001` renames `enquiries` → `legacy_enquiries`, and a one-off script back-fills `customers` + `inquiries` from it (status map: new→New, contacted→Contacted, quoted→Quotation Sent, won→Booked, lost→Lost). **Inspect the live DB first** — it may be empty or may not exist.

## Tables

| Table | Key columns | Notes |
|---|---|---|
| `admin_users` | auth_user_id (unique, → Supabase auth), email, name, role enum(owner,admin,staff), active | Authorization source of truth. |
| `customers` | name, email (citext, nullable), phone_e164, country_code, preferred_contact enum(whatsapp,phone,email), notes_internal, deleted_at | Unique partial index on lower(email) and on phone_e164 where not null; dedupe on upsert. |
| `inquiries` | reference (unique, `RS-YYMM-NNNN` from sequence-backed counter), customer_id fk, source enum(website,whatsapp_ai,manual,email,phone), locale, status enum(see below), assigned_to fk admin_users, trip_type enum(one_way,round_trip,multi_stop), pickup, dropoff, stops jsonb, pickup_at timestamptz + tz text, return_at, adults, children, infants, large_bags, small_bags, vehicle_pref enum, service_key, flight_no, hotel_address, child_seat bool, special_requirements, customer_notes, source_page, idempotency_key (unique), ip_hash, user_agent, archived_at, deleted_at | Indexes: (status, created_at desc), (customer_id), (pickup_at), trigram on pickup/dropoff for search, full-text on notes. Status enum: New, Contacted, Waiting for Details, Checking Availability, Preparing Quotation, Quotation Sent, Follow-up Required, Accepted, Booked, Lost, Cancelled. |
| `inquiry_messages` | inquiry_id fk, direction enum(in,out), channel enum(web,whatsapp,email,note), body, author_id | Holds pasted WhatsApp text + notes. Retention-limited (setting). |
| `inquiry_activities` | inquiry_id fk, actor_id, type, summary, meta jsonb | Append-only timeline (status change, edit, email sent, quote created...). |
| `vehicles` | name, category enum(sedan,suv,premium_suv,gmc,staria,innova,vip,luxury,other), seats, large_bags, small_bags, description, active | Catalogue for quotes; **not** an availability promise. |
| `partners` | name, type enum(vendor,driver_company,individual), contact, phone, email, notes_internal, active | Vendors/suppliers. |
| `drivers` | partner_id fk null, name, phone, vehicle_desc, licence_ref (internal), active | |
| `quotations` | number (unique `QT-YYYY-NNNNN`), inquiry_id fk null, customer_id fk, status enum(draft,approved,sent,accepted,rejected,expired,converted), version int, snapshot of journey fields, vehicle_id fk null, vehicle_description, trip_type, included text[], excluded text[], base_price, vat_rate_bp int, vat_mode enum(none,exclusive,inclusive), discount, currency, subtotal, vat_amount, total, valid_until date, terms text, approved_by/at, sent_at, accepted_at, pdf_path, pdf_sha256, duplicate_of fk, created_by | Totals **recomputed server-side** on every write; client totals ignored. Formula: `subtotal = base + Σadditional − discount`; exclusive: `total = subtotal + vat`; inclusive: vat extracted from subtotal. (Brief formula `base + additional + VAT − discount` is applied with VAT on the pre-discount base only if the owner says so — default is VAT on net-of-discount; flagged as Decision Q7.) |
| `quotation_items` | quotation_id fk, label, kind enum(base,additional,discount), amount, sort | Additional charges. |
| `bookings` | reference (unique `BK-YYMM-NNNN`), quotation_id fk **unique** (one booking per quote), customer_id, inquiry_id, journey snapshot, vehicle_id, partner_id, driver_id, status enum(pending_confirmation,confirmed,driver_assigned,in_progress,completed,cancelled), payment_status enum(unpaid,deposit_paid,partially_paid,fully_paid,refunded), customer_price, vat_amount, vendor_cost, extra_cost, notes_internal, cancelled_reason | Unique(quotation_id) enforces no double conversion. Profit is derived, not stored. |
| `booking_events` | booking_id, actor, type, from/to, meta | Booking history. |
| `payments` | booking_id fk, direction enum(in,out), amount, currency, method enum(cash,bank_transfer,card,online,other), paid_at, reference, party enum(customer,partner), partner_id null, note, voided_at | Customer receipts (in) and vendor payouts (out). Booking payment_status derived/updated in same TX. |
| `expenses` | category, amount, currency, incurred_at, booking_id null, partner_id null, note, receipt_path | |
| `invoices` | number (unique), booking_id fk, status enum(draft,issued,paid,void), issued_at, due_at, total, vat_amount, pdf_path | Phase 7. |
| `email_logs` | template, to_email, from_email, subject, related_type, related_id, provider, provider_message_id (unique), status enum(queued,accepted,delivered,delayed,bounced,complained,failed), error, attempt, idempotency_key (unique), sent_at, delivered_at, events jsonb | "accepted" ≠ "delivered". Updated by webhook. |
| `notifications` | user_id null, kind, title, body, link, read_at | Admin bell. |
| `ai_extractions` | inquiry_id fk null, source_text, model, prompt_version, extracted jsonb, missing text[], uncertain jsonb, status enum(pending_review,saved,discarded), reviewed_by, tokens | Original text stored for audit; purge per retention setting. |
| `audit_logs` | actor_id, action, entity, entity_id, before jsonb, after jsonb, ip, at | Append-only (no update/delete grant). |
| `system_settings` | key pk, value jsonb | VAT default, currency, company details, terms, retention, notify emails, quote validity days. |
| `rate_limits` | key, window_start, count | DB-backed limiter. |
| `counters` | name pk, year/month, value | Gap-tolerant reference generation inside TX. |

## Relationships (summary)
customer 1—n inquiry 1—n quotation 1—0..1 booking; booking n—1 partner/driver/vehicle; booking 1—n payments; inquiry 1—n activities/messages/ai_extractions; every email_log links polymorphically to its subject.

## Integrity rules
- FKs `on delete restrict` for business records; soft delete only; hard delete limited to owner + audit entry + not allowed if quotes/bookings exist.
- Check constraints: passengers ≥1, amounts ≥0, `return_at > pickup_at`, `pickup_at` future at creation (server), enum domains.
- Transactions: inquiry create (customer upsert+inquiry+activity), quote approve/send (status+email_log claim), convert to booking (lock quote row, insert booking, event, activity), payment record (insert + recompute status).
- Backups: Supabase daily/PITR + `automation/database_backup.py`; restore drill documented in Phase 12.
