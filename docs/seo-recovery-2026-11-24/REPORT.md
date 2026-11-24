# RideSaudi SEO recovery and lead pass, 24 November 2026

Status: built and tested locally on branch `claude/ridesaudi-seo-recovery-06ace1` (base: live main 25a91de). **Not deployed.**

## 1. GSC findings

Files: `seo/` has four exports, two of them exact copies. Unique data is (a) 28-day export, 7–22 Nov, and (b) last 24 hours, 23–24 Nov. They do not overlap, so nothing is double-counted. `ahref reports/` is the older 18 Nov GSC export, already contained in (a); there is no Ahrefs keyword data.

| Measure | 7–22 Nov | 23–24 Nov (24 h) |
|---|---|---|
| Impressions | 165 | 85 |
| Clicks | 12 | 1 |
| URLs with any impression | 6 | 3 |

- The site is about 17 days old in GSC. Daily impressions went 21 (21 Nov), 81 (22 Nov), about 85 (last 24 h). This is growth, not a decline. No page declined in a measurable way.
- **10 of the 12 clicks are from Pakistan at position 1.2** on the root URL, so they are brand or owner visits. Saudi Arabia: 105 impressions, 2 clicks.
- Only 6 of 402 URLs had impressions. **Indexing, not on-page copy, is the main limit.** The 18 Nov coverage export showed 220 URLs "Discovered – currently not indexed".
- The exports have no query + page pairs, so overlaps below are inferred from which pages had impressions, not measured per pair.

Top pages:

| URL | Impr. | Clicks | Pos. |
|---|---|---|---|
| /ar/blog/madinah-to-alula-by-road-guide/ | 58, then 68 in 24 h | 0 | 9.6 |
| ridesaudi.com/ (old root, redirects) | 40 | 10 | 12.3 |
| http://ridesaudi.com/ (redirects) | 35 | 1 | 36.3 |
| /en/blog/madinah-to-alula-by-road-guide/ | 31, then 16 in 24 h | 0 | 8.2 |
| /sitemap.xml (already noindex) | 14 | 1 | 5.2 |
| /ar/luxury-transportation/luxury-family-transport/ (already 308) | 2 | 0 | 3.5 |

## 2. Opportunity matrix

| Query group (GSC) | Impr. 28 d + 24 h | Pos. | Commercial value | Primary URL now |
|---|---|---|---|---|
| How far is AlUla from Madinah (AR + EN) | about 59 listed | 7–17 | Medium: reader is planning that trip | road guide, now with booking links |
| airport transfers saudi arabia / airport transfer saudi arabia | 17 | 17.8 / 25.8 | High | /services/airport-transfers/ |
| من جدة إلى العلا كم ساعة, المسافه من جده | 8 | 33–47 | High (665 km trip) | /intercity-transfers/jeddah-to-alula/ |
| من الرياض إلى العلا كم ساعة | 1 | 9 | High (1,041 km) | /intercity-transfers/riyadh-to-alula/ |
| saudi airport transfers, airport pickup saudi arabia | 11 | 68–87 | High | airport hub, private-airport-pickup |
| premium / event chauffeur service saudi | 4 | 43–55 | High | luxury-chauffeur, vip-event-chauffeur |
| chauffeur privé riyadh | 1 | 22 | High | city-transport/riyadh |

Irrelevant traffic: none is visible yet. Autocomplete shows terms to avoid: "توصيل أغراض / طرود / سمسا" (parcels), "private driver job", "ليموزين طويل / بارتي" (party limos).

## 3. Cannibalization

| Issue | Evidence | Fix (before → after) |
|---|---|---|
| Madinah guide shown for Jeddah–AlUla hours | Queries at 33–47 and the guide is the only AlUla URL with impressions | Jeddah page title "Jeddah to AlUla Private Car, One Way or Return" → "Jeddah to AlUla by Car: 665 km with a Driver"; AR "من جدة إلى العلا كم ساعة؟ 665 كم مع سائق"; answer leads with the number |
| Same for Riyadh–AlUla | 1 impression at 9 | "Riyadh to AlUla Private Car with Driver" → "Riyadh to AlUla by Car: 1,041 km with Driver" |
| madinah-to-alula said "we do not publish a distance" under an answer giving 338 km | Page contradicted itself | Sentence replaced with a link to the guide |
| Airport guide carried the hub's head term | Root URLs held the query; hub had no impressions | Hub: "Airport Transfers in Saudi Arabia: Private Car" with all 8 airports linked. Guide → "Saudi Airport Arrivals: RUH, JED, MED and DMM" |
| Cross-border guides vs country and city-pair pages | Same head terms | UAE, Qatar and Bahrain guides now target the crossing (Batha, Salwa, Causeway) |
| Riyadh–Dammam guide vs route page | Same head term | → "Riyadh to Dammam Business Day Trip: Plan It" |
| Chauffeur guide vs chauffeur hub | Same head term | → "Planning a Riyadh Business Trip With a Driver" |
| A-to-B pages that also targeted B-to-A | "⇄" and "and the same in reverse" | One-way label on every page that has a reverse page; text split on 7 routes; return sections now link to the reverse page |
| Umrah hub said "taxi" (sister brand's intent) | Title and H1 | → "Private Umrah Transport in Saudi Arabia" |
| Titles with an unconfirmed vehicle or both directions | Abha–Riyadh "Suburban", AlUla–Dammam | Retitled |

**URLs consolidated or redirected in this pass: none.** No pair has enough GSC data to justify removing a page, so intents were separated instead. The 7 earlier 308s are unchanged.

## 4. Internal linking

| | Before | After |
|---|---|---|
| Links inside body text (EN) | 87 | 296 |
| Links inside body text (AR) | 87 | 269 |
| Guides with a link in the text | 0 of 32 | 13 EN / 15 AR in paragraphs, and all 32 have booking links under the answer |
| Service pages with no in-text inbound link (EN) | 117 of 162 | 67 of 162 |
| Orphan pages | 0 | 0 |

How: `src/content/auto-links.ts` links the first real mention of a page, only where that page was already an editorially chosen neighbour. Anchors are the sentence's own words; one per paragraph, six per page. No sitewide or footer links were added. The 67 left are mostly heavy, event and special pages whose sentences never name them; they all still have 3+ links from cards.

Parent–child: Airport hub → 8 airports. AlUla hub → Madinah, Jeddah and Riyadh routes, airport, guide. The guide → routes.

## 5. Keyword mapping (from GSC + Google Saudi autocomplete; no volumes are claimed)

Full table: `KEYWORD-MAP.csv`. Short-tail added: AlUla private driver, airport transfers Saudi Arabia, ليموزين الرياض / الدمام / الخبر, ليموزين مطار الرياض / الدمام / المدينة, سيارة مع سائق في العلا. Long-tail added: "Is there a taxi / train / bus from Madinah to AlUla", "how many hours Jeddah to AlUla by car", كم تبعد العلا عن (10 cities), توصيل ركاب من الرياض إلى الكويت, توصيل من الرياض إلى قطر, AlUla taxi WhatsApp.

## 6. Recovery and lowbed

Not changed here on purpose. The separate session "RideSaudi recovery/lowbed SEO optimization" has the recovery, hydraulic, truck recovery and lowbed pages plus the conditional heavy form in progress (weight or model instead of mandatory weight). Editing the same files would overwrite it. GSC shows zero impressions for heavy pages so far.

## 7. AIO / GEO / LLM

Answer-first numbers with source and month on the AlUla pages; a 10-city AlUla distance table; FAQs phrased as real questions; "limousine" defined for Saudi usage; clear statement that RideSaudi is not a metered taxi. No guarantee of AI citations.

## 8. Technical (production build, 402 URLs)

Status, robots, X-Robots, canonical, hreflang, Link header, 3+ inlinks and sitemap checks: all 0 errors. 402 internal links, 0 broken. One H1 on every page. JSON-LD parses everywhere. 0 duplicate titles or descriptions. RTL on all Arabic pages. No old phone number, no tel: links. Redirects: http root takes 3 hops (http → https → www → /en/), all permanent; the first two are Vercel domain settings. Core Web Vitals were not measured (no field data yet).

## 9. Lead quality

| Before | After |
|---|---|
| Passengers pre-filled "1", luggage "0": every lead looked complete | Passengers must be answered; luggage may be blank and is flagged |
| Quick quote then "add details" made a second lead in the same form | The button opens WhatsApp with the reference and blanks for time, passengers, luggage, vehicle, return |
| Alert email subject always "New enquiry" | "Incomplete enquiry" when details are missing, with "Ask for: …" |
| CRM row had no completeness | First line of special requirements: "Lead check: complete / incomplete. Ask for: …" |
| Guides had only a form at the bottom | Guides have quick quote, WhatsApp and booking links at the top |

CRM statuses already cover your stages (no migration): new = new inquiry; waiting_for_details = incomplete; checking_availability / preparing_quotation = qualified; lost / cancelled = unqualified; quotation_sent = quote sent; booked = confirmed. Staff set these. The site never calls a lead qualified.

Photo upload is not supported (no storage); photos go by WhatsApp.

## 10. Conversion tracking

- `generate_lead`: was fired by both forms (double count) → at most once per browser session.
- New `inquiry_complete` and `inquiry_incomplete`.
- Test visits with `?rs_test=1` send no events.
- Booking confirmed is a CRM status, so it is not faked as a page event. The heavy form still uses its own generate_lead.
- Nothing reaches GA4 until `NEXT_PUBLIC_GA_ID` is set in Vercel.

## 11. Files

New: `src/content/gsc-growth.ts`, `src/content/auto-links.ts`, `src/content/blog/gsc-growth.ts`, `src/lib/lead-quality.ts`, `tests/seo-growth.test.ts`, this folder.
Changed: registry.ts, blog/posts.ts, BlogView.tsx, QuickQuoteForm.tsx, EnquiryForm.tsx, api/enquiry/route.ts, analytics.ts, deliver.ts, enquiry.ts, globals.css, messages/en.json, messages/ar.json, two test files.

## 12. Test results

Build passes; TypeScript 0 errors; ESLint 0 errors (1 old warning). Tests: 58 pass, 10 fail, all 10 because this machine has no DATABASE_URL. Forms tested in the browser with the backend mocked: validation, quick quote, full form, WhatsApp link, one generate_lead for two submissions. **Not tested: live database and email delivery of the new lead-check line.**

## 13. Needs your access

1. Deploy approval.
2. GSC: submit sitemap, then Request indexing for the 10 URLs in section 14.
3. GSC Pages report export (current), plus a Performance export filtered to each of the two AlUla guide URLs (that gives query + page data).
4. `NEXT_PUBLIC_GA_ID` in Vercel.
5. Prices, CR/VAT, reviews: still empty in prices.ts / company.ts. Competitors on Madinah–AlUla show prices; a "from" price would help CTR most.

## 14. Next 30 days

- Week 1: deploy; request indexing for: both AlUla guides, airport hub (EN, AR), jeddah-to-alula (EN, AR), madinah-to-alula (EN, AR), tourism-transport/alula (EN, AR). Set GA4.
- Week 2: merge the recovery/lowbed work. One small conflict is expected in BlogView.tsx.
- Week 2–3: add real "from" prices; get 3–5 genuine mentions (Google Business Profile, hotel and agency partners). A new domain needs these to get its remaining pages crawled.
- Week 4: new GSC export; check the AlUla guide's CTR and whether Jeddah–AlUla moved to its own page; only then consider merges.
