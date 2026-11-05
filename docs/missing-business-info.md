# Missing business information & assets (nothing below is published as fact)

## Business facts needed
- Legal business name, registration/licence/permit details (none claimed on the site)
- Confirmed operating cities, airports and intercity routes -> fill `confirmed.airports` / `confirmed.routes` in `src/lib/site.ts`
- Actual fleet, vehicle categories, capacities -> `confirmed.fleet`
- Verified contact details (WhatsApp, email, address) -> `confirmed.contact`; footer shows none until supplied
- Booking confirmation process, payment options, cancellation/change policy (FAQ copy is deliberately generic; business to review)
- Confirmation that all six service categories are offered (Airport, Private Chauffeur, Intercity, Hourly, Corporate, VIP)
- Privacy Policy and Terms (footer shows "To be published", not linked)
- Genuine testimonials (none shown); verified opening hours / service areas (none in JSON-LD)
- Arabic copy: review by a native professional copywriter

## Assets needed
- Hero photograph (licensed, Saudi landscape/travel; no unconfirmed vehicle) replacing the `src/components/HeroArt.tsx` placeholder; ~2400x1350 AVIF/WebP via `next/image` with `priority`
- Logo / wordmark file; OG image (1200x630) -> add `openGraph.images` in `src/app/[locale]/page.tsx`
- Fleet photos (only of vehicles actually operated)

## Repo notes
- The repo contained only a static page + Supabase waitlist (no Next.js, no /docs). Legacy files moved to `legacy/` untouched. The waitlist table is not used by the new site.
