# RideSaudi.com — Proposed Architecture (Phase 0)

Date: 2026-11-15 · Proposal only. Nothing is implemented until approved.

## 1. The main decision: where route pages live

The brief prefers `/routes/origin-to-destination/`. The site already has 39 routes (78 URLs with Arabic) at `/{locale}/services/intercity-transfers/origin-to-destination/`. A bare `/routes/…` URL is not possible on this site because every public URL carries `/en/` or `/ar/`.

| Option | What happens | For | Against |
|---|---|---|---|
| **A. Keep current URLs (recommended)** | Routes stay under `/en/services/intercity-transfers/`. New routes are added there. | No redirects, no ranking risk, breadcrumb and parent hub stay intact, no duplicate tree. | URL is longer than the brief's convention. |
| B. Move to `/en/routes/…` | 78 URLs get 301 redirects; sitemap, breadcrumbs, internal links and `llms.txt` are regenerated. | Matches the brief; shorter URLs. | Temporary ranking loss is likely; no measurable SEO gain from a shorter path; cost with no content benefit. |
| C. Build `/routes/` beside the current pages | — | — | Rejected: creates duplicates competing for the same queries. |

Recommendation: Option A. If the owner still wants `/routes/`, do Option B once, before any new route is published, so URLs never change twice.

## 2. Proposed structure (Option A)

```
/{locale}/
├─ services/
│  ├─ intercity-transfers/                 route hub: all routes, grouped by origin city
│  │  ├─ {origin}-to-{destination}/        one page per approved direction
│  │  └─ private-intercity-chauffeur/      existing service page
│  ├─ city-transport/{city}/               city hub: service in the city + "routes from {city}"
│  ├─ airport-transfers/{airport}/
│  ├─ cross-border-transfers/{country}/
│  └─ umrah-transport/…
├─ luxury-transportation/…
├─ fleet/                                  fleet hub
│  └─ {vehicle}/                           only for owner-verified vehicles
└─ blog/…
```

Changes from today:
1. **Intercity hub becomes the route directory**, grouped by origin (Riyadh, Jeddah, Makkah, Madinah, Dammam), and is added to the header.
2. **City pages act as route hubs** for Riyadh, Jeddah, Makkah, Madinah and Dammam. These five pages already exist, so no thin new city pages are needed.
3. **Vehicle pages under `/fleet/`**, created only for vehicles the owner verifies.
4. **Route data model**: add structured fields to each route (origin, destination, distance, duration, corridor, source URL, date checked, suitable vehicle categories). The template then renders the facts block, the vehicle links and route-specific schema from data, while the written copy stays individual per page.

## 3. Vehicle-to-route relationship

One list of verified vehicles (`confirmed.fleet`, currently empty). Each route lists the vehicle categories that suit it. Route pages link to the matching vehicle pages; vehicle pages link back to the routes they suit. No route claims a model that is not in the verified list.

## 4. Route page section map

The brief's 19 sections against the current template:

| Section | Today | Action |
|---|---|---|
| Title, meta, H1 | Yes | Keep; shorten long titles |
| Above-the-fold CTA | Yes (anchor + WhatsApp + call) | Rename CTAs |
| Direct answer | Yes ("Quick answer") | Keep |
| Private transfer explanation / not shared | No | Add |
| Distance, duration, corridor | Only newest batches | Add facts block from researched data |
| Pickup and drop-off coverage | Partly | Add per route |
| Suitable vehicles, passengers and luggage | Partly, in prose | Add from the vehicle relationship |
| Why private transfer, customer scenarios | Partly | Per route |
| How booking works | Yes | Keep |
| Route FAQs | Yes | Keep unique |
| Related routes / vehicles / services | Related cards only | Add reverse route, city hubs, vehicle links |
| Final quote CTA | Yes (form) | Keep |

## 5. Reverse directions

Do not create both directions automatically. Publish a reverse page only when demand data supports it and the content differs (for example the Miqat stop on Makkah-bound journeys, airport arrival versus hotel pickup). Otherwise one page serves both directions and says so.

## 6. Internal linking

Each route links to: origin city page, destination city page, reverse route if it exists, suitable vehicle pages, the intercity hub, the airport page when an airport is an endpoint, and the cross-border page for GCC routes. No sitewide keyword links are added beyond the header and footer.

## 7. What stays untouched

Form backend and API contract (except the bag split, if approved), design tokens, components, the EN/AR system, the registry validation, existing redirects, the CRM.

## 8. Decisions needed from the owner

1. Option A or B for route URLs.
2. Final verified vehicle list with seats and luggage.
3. Merge or discard the two unmerged branches (Jeddah routes; fleet photos and policy pages).
4. Access: Search Console, GA4 ID, and Ahrefs or Semrush exports for Phase 1.
5. Confirm the live form delivers leads, and to which inbox.
6. Which cross-border routes are really operated with a direct vehicle.
