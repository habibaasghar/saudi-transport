# FRONTEND_DESIGN

## Existing system (keep)
Desert Dusk tokens in `src/app/globals.css`: `--night #0f1b2d`, `--sand #f3ece0`, `--dune #c9a877`, `--palm #1f4d3a`, `--clay #a4543b`, radius 4px, fluid gutters. Fonts via `src/lib/fonts.ts` (display serif + sans + Arabic). RTL via `html[lang=ar]` and `dir`. Components are plain CSS classes (`.btn`, `.form`, `.card`).

**Conflict with the brief:** brief suggests deep navy / white / blue / cyan "travel-tech". The live brand and SEO-RULES fix Desert Dusk. **Decision D10:** the public booking modal uses Desert Dusk (navy + ivory + gold accent) so it looks native; the admin CRM uses a separate neutral slate/navy theme scoped under `.admin` with a blue accent. Owner may override.

## Public booking experience (Phase 3)
- Entry points: hero/quote section CTA, header CTA, floating button (desktop), **mobile sticky bar**, service/route pages (`defaultService` + source page prefilled), contact/WhatsApp area. One `BookingProvider` context opens a single `BookingModal` (no per-page form copies).
- Existing inline `EnquiryForm` on service pages is retained until the modal reaches parity, then re-pointed to the same API (no URL or content changes).
- 4 steps with progress bar: 1 Journey (trip type, pickup, drop-off, date, time, return date/time only if round trip, extra stops if multi-stop) → 2 Passengers & vehicle (adults, children, infants, large/small bags, vehicle preference incl. "Not sure — recommend", child seat) → 3 Contact (name, country-code phone, email, preferred contact; optional flight, hotel, notes) → 4 Review & submit (summary, consent, "This is a request, not a confirmed booking").
- Behaviours: per-step validation with inline messages, focus management, `aria-modal`, Esc to close, focus trap, 44px touch targets, native date/time inputs on mobile, `autocomplete` attributes, draft kept in `sessionStorage`, double-submit lock + idempotency key, loading state, success screen with reference number and next steps, honest error states (including `not_configured`).
- Bilingual: all strings in `messages/{en,ar}.json` under a new `booking` namespace (added to the client-message allow-list in `layout.tsx`); RTL-safe logical CSS; Arabic copy needs native review (flagged in missing-business-info).
- LocationAutocomplete: v1 free text with curated suggestions from **confirmed** data only (`site.ts#confirmed` is empty → no suggestions invented). Google Places is an optional later add (cost/privacy).
- Vehicle selector shows categories requested in the brief as *preferences*; no capacity/price/availability claims (no verified fleet data).
- Motion: one 200 ms transition, `prefers-reduced-motion` respected.

## Admin CRM (Phase 5+)
Route group `src/app/admin/(app)`, English, `noindex`, own layout: collapsible sidebar (drawer on mobile), top bar (search, notifications, profile), server-rendered tables with URL-driven pagination/filter/sort/search, skeletons (`loading.tsx`), error boundaries, empty states, `ConfirmationModal` for destructive actions, toasts. Components: DataTable, SearchFilter, StatusBadge, DashboardMetric, InquiryCard, QuotationCard, BookingCard, PDFPreview (iframe on signed URL), ToastNotification. Charts: lightweight SVG/`recharts` lazy-loaded on dashboard only (no weight on public pages). Admin JS never ships to public routes (separate route group, dynamic import).

## Performance guardrails
Modal code loaded on first open (`next/dynamic`); no new fonts; no images added without width/height; admin bundle isolated; CLS 0 for sticky bar (reserved space).

## Quality gates per component
Keyboard operable, visible focus, contrast ≥ 4.5:1, works at 320 px, verified in a real browser (screenshots in TESTING_REPORT).
