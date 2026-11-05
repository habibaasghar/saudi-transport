# Research manifest — Ahrefs exports (collected 2026-11-05)

Source folder: `C:\Users\786\Desktop\Saudi ride\ahref reports` (originals untouched; copies below).
Parsing: CSV (UTF-16 tab-separated and UTF-8) parsed with a script. PDFs and the PNG are **image-only screenshots (no text layer)**; they were read visually, so only figures visible in the screenshot are recorded and nothing was extracted programmatically.

| Original file | Copy location | Domain | Report type | Date | Parsed |
|---|---|---|---|---|---|
| `TSA/taxisaudiarabia.com-organic-keywords-subdom_…18-51-46.csv` | `competitors/taxisaudiarabia/` | taxisaudiarabia.com | Organic keywords (14 rows) | 2026-11-05 | Yes |
| `TSA/taxisaudiarabia.com-top-pages-subdomains-al_…18-56-03.csv` | `competitors/taxisaudiarabia/` | taxisaudiarabia.com | Top pages (9 rows) | 2026-11-05 | Yes |
| `TSA/screencapture-…top-pages-…18_55_18.pdf` | `competitors/taxisaudiarabia/` | taxisaudiarabia.com | Top pages screenshot (1 p.) | 2026-11-05 | Image only; duplicates the CSV, not separately analysed |
| `taxiserviceksa/taxiserviceksa.com-organic-keywords-subdoma_…20-02-20.csv` | `competitors/taxiserviceksa/` | taxiserviceksa.com | Organic keywords (7 rows) | 2026-11-05 | Yes |
| `taxiserviceksa/screencapture-…overview-…19_58_09.pdf` / `.png` | `competitors/taxiserviceksa/` | taxiserviceksa.com | Site Explorer overview | 2026-11-05 | PNG read visually; PDF is the same capture |
| `screencapture-…overview-…22_38_13.pdf` | `competitors/transfeero/` | www.transfeero.com | Site Explorer overview (4 p.) | 2026-11-05 | Page 1 read visually (headline metrics only) |
| `screencapture-…organic-keywords-…22_40_20.pdf` | `competitors/transfeero/` | www.transfeero.com | Organic keywords (3 p.) | 2026-11-05 | Page 1 read visually (top ~13 rows only) |
| `TSA/google_sa_airport-transfer-dam_matching-terms_…19-14-10.csv` (byte-identical to `taxiserviceksa/…20-44-14.csv`) | `competitors/shared/` | seed keyword research (Saudi, "airport transfer…") | Keywords Explorer matching terms (212 rows) | 2026-11-05 | Yes |
| `taxiserviceksa/google_sa_توصيل-مطار-الملك-خال_matching-terms_…20-45-41.csv` | `competitors/shared/` | seed keyword research (Arabic) | Matching terms (157 rows) | 2026-11-05 | Yes |
| `taxiserviceksa/google_sa_airport-transfer-dammam-ai_overview_…20-42-58.csv` | `competitors/shared/` | seed keyword list | Keyword list with SV trend (12 rows) | 2026-11-05 | Yes |
| `TSA/sa_0010…search-volume-history_…19-02-18.csv` | `competitors/shared/` | seed keywords | Search volume history (SA) | 2026-11-05 | Yes |
| `taxiserviceksa/us_0010…search-volume-history_…20-41-16.csv` | `competitors/shared/` | seed keywords | Search volume history (US; filename says `us_`) | 2026-11-05 | Yes — low value for Saudi demand |

## Gaps
- No Ahrefs **backlinks / referring-domains / content-gap / link-intersect** exports. Only headline backlink numbers visible in two overview screenshots.
- No taxisaudiarabia.com **overview** screenshot (only keywords + top pages).
- Transfeero: overview page 1 and keywords page 1 only visually read; pages 2–4 / 2–3 not transcribed.
- The duplicate matching-terms CSV (same md5) was stored once under `shared/`.
