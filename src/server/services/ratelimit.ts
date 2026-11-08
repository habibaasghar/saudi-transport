import "server-only";
import { lt, sql } from "drizzle-orm";
import { db, schema } from "../db/client";

/**
 * Database-backed fixed-window limiter (works across serverless instances).
 * Returns true if the call is allowed.
 */
export async function allow(scope: string, subject: string, limit: number, windowSec: number): Promise<boolean> {
  const now = Date.now();
  const bucket = Math.floor(now / (windowSec * 1000));
  const key = `${scope}:${subject}:${bucket}`;
  const expires = new Date((bucket + 1) * windowSec * 1000 + 60_000);
  const [row] = await db()
    .insert(schema.rateLimits)
    .values({ key, count: 1, expiresAt: expires })
    .onConflictDoUpdate({ target: schema.rateLimits.key, set: { count: sql`${schema.rateLimits.count} + 1` } })
    .returning({ count: schema.rateLimits.count });
  // opportunistic cleanup (~1% of calls)
  if (Math.random() < 0.01) await db().delete(schema.rateLimits).where(lt(schema.rateLimits.expiresAt, new Date()));
  return row.count <= limit;
}
