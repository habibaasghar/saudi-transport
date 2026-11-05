# RideSaudi

Premium chauffeur homepage for https://www.ridesaudi.com. Next.js (App Router), TypeScript, next-intl (en / ar RTL).

```bash
npm install
npm run dev        # http://localhost:3000 -> /en
npm run lint && npm run typecheck && npm run build
```

## Environment variables (names only; see `.env.example`)
- `NEXT_PUBLIC_SITE_URL`: canonical origin (defaults to https://www.ridesaudi.com)
- `ENQUIRY_WEBHOOK_URL`: server-side destination for validated enquiries (JSON POST). Unset means the form reports "not open yet" (HTTP 503); nothing is sent or faked.
- `ENQUIRY_WEBHOOK_SECRET`: optional, sent as `x-ridesaudi-secret`

## Enquiry API (`/api/enquiry`)
Server-side validation, honeypot, minimum fill time, origin check, body cap, in-memory rate limit (replace with a shared store such as Redis/KV on serverless before launch).

## Content data
Airports, routes and fleet are empty arrays in `src/lib/site.ts` and render only once verified entries are added. See `docs/missing-business-info.md`.

## Deploy (after approval)
Import the repo in Vercel (auto-detects Next.js), set the env vars above, add `www.ridesaudi.com` under Domains. The old static site is in `legacy/`.
