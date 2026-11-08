import "server-only";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

/** Server-only Postgres client (Supabase pooler). Lazily created, reused across invocations. */
const g = globalThis as unknown as { __sql?: ReturnType<typeof postgres> };

function connect() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL is not set");
  // prepare:false is required for Supabase transaction-mode pooling (port 6543); harmless on 5432.
  return postgres(url, { ssl: "require", max: 5, prepare: false, idle_timeout: 20, connect_timeout: 10 });
}

export const sqlClient = () => (g.__sql ??= connect());
export const db = () => drizzle(sqlClient(), { schema });
export type Db = ReturnType<typeof db>;
export { schema };
