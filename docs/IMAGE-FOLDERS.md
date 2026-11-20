# Image folders (public/images)

One folder per content type, same idea as the taxisaudiarabia `public` folder. Images are WebP, lowercase, hyphenated, descriptive names. Alt text (English and Arabic) lives in code, not in the file.

| Folder | What goes there | Alt text lives in |
|---|---|---|
| `fleet/` | One exterior photo per vehicle model (`toyota-camry-exterior.webp`). `fleet/gallery/` for extras (interiors, other angles) | `src/content/fleet.ts` |
| `locations/` | City and destination hero photos (`riyadh.webp`, `jeddah.webp`, `alula.webp`) | `src/content/images.ts` |
| `airports/` | Airport terminal photos (`airport-jed.webp`) | `src/content/images.ts` |
| `cross-border/` | Doha, Dubai, Manama, Kuwait, causeway and border photos | `src/content/images.ts` |
| `routes/` | Route and highway photos (empty, ready for use) | `src/content/images.ts` |
| `services/` | Chauffeur, hotel, family, wedding, conference photos (empty, ready) | `src/content/images.ts` |
| `blog/` | Guide photos (empty, ready) | blog post data |
| `about/`, `gallery/`, `hero/` | Reserved (empty, ready) | |

Rules: only photos you own or are licensed to use; the photo must show the place or model named on the page; no hotel, airline or government logos; no photo described as a RideSaudi vehicle or driver. Vehicle photos are illustrations of the model, and the pages say the actual vehicle is confirmed in the quotation.

Workflow: drop raw files in `Desktop\Saudi ride\images-inbox\<folder>` and tell Claude. Convert to WebP (width up to 1600 for heroes, up to 1200 for vehicle cards), rename, then add the entry in `images.ts` or `fleet.ts`.

Done on 2026-11-21: the 30 existing images moved into `locations/`, `airports/`, `cross-border/` and all paths in `images.ts` and `Hero.tsx` updated.
