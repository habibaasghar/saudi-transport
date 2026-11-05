# Project rules

## Deploy / push rule
- Every deploy or push for this project goes to the **saudi-transport** repo: remote `vercel-repo` (https://github.com/habibaasghar/saudi-transport.git). Vercel builds ridesaudi.com from its `main` branch.
- Do not push to `origin` (saudi-ride-) for deploys.
- Production = `vercel-repo/main`. Use a non-main branch on `vercel-repo` for previews.
- Only deploy when the user explicitly asks.
