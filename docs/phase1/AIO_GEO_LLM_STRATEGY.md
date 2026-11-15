# AI Search Strategy: AI Overviews, AI Mode, Answer Engines and LLMs (Phase 1)

Research date: 2026-11-15. Based on Google Search Central pages fetched that day and on the Phase 0 audit of the live site. No placement in any AI feature is promised or predicted.

## 1. What Google says (official guidance, fetched 2026-11-15)

Source: Google Search Central, "AI features and your website".

- To be eligible as a supporting link in AI Overviews or AI Mode, a page must be **indexed and eligible to appear in Google Search with a snippet**. There are no additional technical requirements.
- **No special markup, no special schema and no new machine-readable files are needed.** Google states that AI text files such as `llms.txt` are not required.
- Recommended practice is ordinary SEO: allow crawling, make content findable through internal links, give a good page experience, keep important content in text, make structured data match visible text, keep Business Profile information current, and verify the site in Search Console.
- Controls are the existing ones: `nosnippet`, `data-nosnippet`, `max-snippet`, `noindex`; `Google-Extended` governs use in Google's other AI systems.
- AI feature traffic is reported inside the normal Search Console Performance report ("Web"), not separately.

Source: Google Search Central structured data documentation.

- **FAQ rich results are no longer shown in Google Search.** The documentation records a deprecation notice in May 2026 and removal of the FAQ rich result documentation in June 2026. (Phase 0 said FAQ rich results were limited to government and health sites; that was already out of date.)

Source: Google Search Essentials, spam policies.

- **Doorway abuse** explicitly includes pages "targeted at specific regions or cities" that funnel users to one page, and substantially similar pages.
- **Scaled content abuse** covers many pages generated mainly to manipulate rankings with little user value, however they are produced.

These two policies are the main risk in a route-page programme. They are the reason this plan improves 39 existing pages before adding more, and adds new routes only where the content is distinct.

## 2. Where RideSaudi already stands (Phase 0 evidence)

| Requirement | State |
|---|---|
| Crawlable, indexable | Yes: robots allows all public pages; 272 URLs return 200 with self-canonicals |
| Content in server-rendered HTML | Yes: all pages are static HTML, including FAQs and JSON-LD |
| Answer-first block | Yes: "Quick answer" on every page |
| English and Arabic parity | Yes: hreflang pairs on every page |
| Structured data matches visible content | Yes: Organization, WebSite, WebPage, BreadcrumbList, Service, FAQPage |
| Internal linking | Sound, but there is no route directory in the header |
| Search Console verified | Unknown |
| Original factual information | Weak: 25 of 39 route pages give no distance, 27 give no driving time, and none names a road |
| Entity clarity (who RideSaudi is) | Weak: no About page, no address, no licence, no `sameAs`, no logo in schema |
| States that rides are private, not shared | No |

## 3. Priorities (ranked)

### Priority 1: publish facts that an answer engine can quote
AI answers are assembled from specific, checkable statements. The live pages mostly say "quoted individually". For each P1 route add, in plain sentences and a small table:

- road distance and typical driving time, with the endpoints named;
- the main road (road number) and the usual rest-stop pattern;
- pickup and drop-off areas actually served;
- which vehicle types suit which group size (after fleet verification);
- direction-specific facts (Miqat stop, border crossing, airport terminal).

`ROUTE_GEOGRAPHY_MASTER.csv` holds computed distances and road numbers for 56 routes; they need a Google Maps cross-check per route before publishing.

### Priority 2: say clearly what RideSaudi is
One consistent description, used on the home page, an About page, `llms.txt` and Organization schema:

> RideSaudi arranges pre-booked private transfers with a driver in Saudi Arabia and on selected GCC routes. Each vehicle is reserved for one customer's party; RideSaudi does not sell shared seats. Journeys are quoted individually and confirmed before travel.

An About page and a Contact page do not exist today. They are the natural home for verified identity facts (legal name, commercial registration, licence, city of operation). Only verified facts go in.

### Priority 3: write headings as the questions people ask
Autocomplete shows the questions: "riyadh to dammam by car how many hours", "is there a train from riyadh to dammam", "makkah to madinah private car price", "من جدة الى مكة سيارة كم ساعة". Use them as H2 or FAQ questions with a one-sentence answer first, then detail.

### Priority 4: fix entity consistency
- `SITE_URL` is `https://www.ridesaudi.com`, `CONTACT.website` is `https://ridesaudi.com/`: use one.
- Add `logo` to Organization.
- On route pages set `Service.areaServed` to the two cities rather than the whole country.
- Add `sameAs` only for profiles that really exist (Google Business Profile, social accounts).

### Priority 5: structured data, kept honest
| Type | Recommendation |
|---|---|
| Organization, WebSite, BreadcrumbList, WebPage | Keep |
| Service | Keep; make `areaServed` route-specific; add `serviceType` "Private intercity transfer" |
| FAQPage | Keep only as harmless markup of visible FAQs. It no longer produces a Google rich result; do not count it as a deliverable. The visible FAQ is what matters. |
| LocalBusiness | Only if the owner confirms a real public address |
| Review, AggregateRating, Offer with price | Not until real reviews or published prices exist |

### Priority 6: Google Business Profile and Search Console
Google's own guidance lists both. A verified Search Console property is also the only way to see AI-feature traffic. A Business Profile is appropriate only if the business qualifies as a service-area business with verifiable details.

### Priority 7: `llms.txt`
Google states it is not required and it is not a ranking factor. The file already exists and is generated automatically, so the cost of keeping it is nil. Action: keep it accurate (it currently says distances are not published; update when that changes) and add the exclusivity sentence. Do not create further "AI" files.

## 4. English and Arabic

Arabic is not a translation target; it has its own vocabulary (`SEARCH_INTENT_ANALYSIS.md`, section 2.3). For AI answers in Arabic, the Arabic page must carry the same facts as the English one (same distance, same time, same road), written with "توصيل", "سيارة خاصة مع سائق" and, where natural, "ليموزين". Facts must match across languages exactly; a mismatch between `/en/` and `/ar/` weakens both.

## 5. Things not to do

- No AI-specific schema types, hidden text, or keyword-stuffed answer blocks.
- No FAQ lists padded with questions nobody asks.
- No mass creation of route, district or "vehicle + city" pages.
- No ratings, review counts, prices or addresses that are not real.
- No claim that any of this guarantees inclusion in AI Overviews or AI Mode.

## 6. How success will be measured

- Search Console: impressions and clicks on route pages; queries phrased as questions.
- GA4: `generate_lead` by landing page.
- Manual checks, monthly, of a fixed list of 20 questions in Google AI Mode and two assistants, recording whether RideSaudi is cited. This is observation only and will vary.
