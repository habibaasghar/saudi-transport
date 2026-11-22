/**
 * One-line, secret-free description of a server error for Vercel logs.
 * Drizzle wraps Postgres errors as "Failed query: ..." and keeps the real reason in `cause`
 * (for example `42P01 relation "rate_limits" does not exist` or `28P01 password authentication failed`).
 * Query parameters are dropped so no customer data reaches the logs.
 */
export function errorDetail(err: unknown): string {
  const parts: string[] = [];
  let cur: unknown = err;
  for (let depth = 0; cur && depth < 4; depth++) {
    const e = cur as { code?: unknown; message?: unknown; cause?: unknown };
    const msg = typeof e.message === "string" ? e.message.split("\nparams:")[0].replace(/\s+/g, " ").slice(0, 300) : String(cur).slice(0, 300);
    parts.push([typeof e.code === "string" ? e.code : "", msg].filter(Boolean).join(" "));
    cur = e.cause;
  }
  return parts.join(" <- caused by: ");
}
