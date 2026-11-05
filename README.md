# RideSaudi — ridesaudi.com

Premium pre-booked chauffeur site (Next.js App Router, TypeScript, next-intl EN/AR).

```bash
npm install
cp .env.example .env.local   # fill only what you have
npm run dev                  # http://localhost:3000  (redirects to /en)
npm run build && npm start   # production check
npm run lint && npm run typecheck
```

- English: `/en` · Arabic: `/ar`
- Quote form posts to `/api/quote`. Without `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY` it returns an honest "not sent" error. Run `supabase/quote_requests.sql` first.
- Docs: `docs/17-implementation-notes.md`, `docs/02-competitor-analysis.md`, `docs/research/manifest.md`.
- `legacy/` holds the original static page; `supabase.sql` is the original waitlist table.
