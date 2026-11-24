# Implementation report, lead generation phase (24 November 2026)

Branch `claude/recovery-lowbed-seo`. Local only; production untouched. Changes of this phase are uncommitted on top of two local commits (first phase; merge of live f1ae203).

## Built
1. **Short form above the fold** on all 20 pages in both languages: vehicle or machine, where it is, destination (optional), WhatsApp. Falls back to a filled WhatsApp message if sending fails (`HeavyQuickForm.tsx`).
2. **Full form adapts:** car recovery (vehicle+year, condition, when: as soon as possible / later today / set date); truck (plus optional weight); lowbed and machines (weight **or** model, dimensions if known, loading); company option adds company, quantity, one-time/recurring/project, email. Image upload: not supported, photos go by WhatsApp.
3. **Lead handling:** correct lead check, URGENT and BUSINESS tags in the subject, duplicate fix, reply no longer waits for email.
4. **WhatsApp:** own message for recovery, truck, lowbed, equipment, general and business; header, footer, floating and sticky buttons use it; number visible in hero.
5. **Transparency strip:** RideSaudi arranges, a partner carries out, price first, nothing sent until confirmed.
6. **Content by evidence:** car transport retitled (car shipping, شحن سيارات) with route distances and a dealer/fleet section; business sections on hub and heavy equipment; number FAQs.
7. **Tracking:** WhatsApp clicks carry service and language; heavy leads use the once-per-session lead event.
8. Merged live f1ae203 and resolved one conflict in BlogView.tsx, keeping both sides.

## Tested
| Check | Result |
|---|---|
| TypeScript, ESLint, build | pass (1 old ESLint warning) |
| Unit tests | 65 pass; 10 database tests cannot run without DATABASE_URL |
| Local delivery through the real delivery code (webhook) | short, urgent and business leads delivered; honeypot 400, missing phone 422, missing company 422 |
| Live API as deployed today | 200, RS-2611-0005, 8.1 s; email arrival to be confirmed by owner |
| 406-URL audit | all 0; 174 links from recovery pages, 0 broken |
| Browser EN desktop, AR mobile | no overflow, no console errors |

## Not done / limits
- New code is not tested against the live database or email: only possible after deploy.
- Real duplicate and urgent emails not seen in the mailbox.
- Page similarity: closest Arabic pair 0.358 (excavator/loader); the new shared short form and transparency strip raised it from 0.325. Above the 0.30 target; caused by shared interface text.
- No volumes, KD, CPC, field speed data, Rich Results test.
- Job value is not in the CRM.
- Schema, robots, canonical, hreflang: rechecked by the audit, no change needed. llms.txt updated in phase one.
