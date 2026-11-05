# RideSaudi

Before creating or editing ANY page, content, metadata, sitemap or schema, read and follow [SEO-RULES.md](SEO-RULES.md).

Key non-negotiables (details in SEO-RULES.md):
- No thin or duplicate content; no template/find-replace pages.
- Every page ships in English AND Arabic (own URL, hreflang, native-quality Arabic SEO, RTL).
- No invented facts (fleet, prices, capacities, reviews, availability).
- AIO/GEO/LLM: answer-first content, consistent entities, accurate schema, updated sitemap and `/llms.txt`.

## Deploy / push rule
- Every deploy or push goes to the **saudi-transport** repo: remote `vercel-repo` (https://github.com/habibaasghar/saudi-transport.git). Vercel builds ridesaudi.com from its `main` branch.
- Do not push to `origin` (saudi-ride-) for deploys.
- Production = `vercel-repo/main`. Use a non-main branch on `vercel-repo` for previews.
- Only deploy when the user explicitly asks.
