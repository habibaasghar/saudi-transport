# BOOKING_WORKFLOW

Principle (matches SEO-RULES "enquiry-first"): **nothing is booked until an admin converts an accepted quotation.** Vehicle choice in the form is a preference, never an availability promise.

## Pipeline
```
Website modal / AI-pasted WhatsApp / manual entry
   -> Inquiry (New)  -> reference RS-YYMM-NNNN
   -> Contacted / Waiting for Details / Checking Availability
   -> Preparing Quotation -> Quotation (draft)
   -> admin edits pricing -> admin APPROVES -> PDF generated (hash stored)
   -> admin clicks Send Quotation to Client -> email (PDF attached) -> inquiry: Quotation Sent
   -> Follow-up Required (manual/alerts)
   -> Quotation accepted (admin marks, customer reply received)  -> inquiry: Accepted
   -> Convert to Booking (once) -> inquiry: Booked, booking: Pending Confirmation
   -> Confirmed -> Driver Assigned -> In Progress -> Completed   (or Cancelled)
```

## State rules
**Inquiry** statuses: New, Contacted, Waiting for Details, Checking Availability, Preparing Quotation, Quotation Sent, Follow-up Required, Accepted, Booked, Lost, Cancelled. Any change is written to `inquiry_activities`. "Booked" is only set by the conversion transaction.

**Quotation**: `draft → approved → sent → accepted | rejected | expired → converted`. Editing an approved/sent quote creates version n+1 and returns it to `draft` (PDF regenerated on re-approval; old PDF kept). Duplicate = new draft, new number. Send requires `approved`, valid recipient, authenticated admin; resend allowed and logged.

**Booking**: Pending Confirmation, Confirmed, Driver Assigned, In Progress, Completed, Cancelled. Transitions validated (no Completed→Pending; Cancelled is terminal; Driver Assigned requires a driver/partner). Each transition → `booking_events` + optional customer email (admin chooses).

**Payment status**: Unpaid, Deposit Paid, Partially Paid, Fully Paid, Refunded — derived from `payments` rows in the same transaction (sum in vs total). Refund = negative/`refund` payment, never an edit.

## Conversion (idempotent)
`SELECT … FOR UPDATE` on quotation; require status `accepted`; `INSERT bookings` with `unique(quotation_id)`; copy journey + price snapshot; set quotation `converted`, inquiry `Booked`; write booking_event + activity + audit — one transaction. Second click returns the existing booking, no duplicate.

## Customer vs internal data
Customers (emails, PDFs, confirmation pages) see: reference, journey, vehicle category, price breakdown shown on quote, terms. They never see vendor, vendor cost, margin, internal notes, assigned driver's private data (driver name/phone only if admin chooses to share in a booking update).

## Money views (Phase 7)
Separate, never merged: **Quoted** (sent quotes), **Booked** (confirmed+), **Completed** (service delivered), **Collected** (customer payments in). Revenue reports use Completed/Collected per setting; unpaid quotes are never revenue. Profit = customer price (net of VAT) − vendor cost − booking expenses; *estimated* uses booked data, *actual* uses recorded payments and costs.

## Business rules carried from the Flask CRM (to re-implement with tests)
VAT modes none/exclusive/inclusive with editable rate (default 15%); idempotent follow-up alerts with unique keys (uncontacted >24h, due follow-up, quote unanswered 2 days, booking within 48h without driver, unpaid customer/vendor); CSV formula-injection guard; payments + conversion in single transactions.

## Open questions for owner
Deposit policy, cancellation fees, quote validity default, whether VAT applies to all services, who may mark Accepted (staff or admin only), whether customer self-acceptance link is wanted (not planned in v1).
