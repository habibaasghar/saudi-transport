import postgres from "postgres";
import { readFileSync } from "node:fs";
const env = Object.fromEntries(readFileSync(".env.local","utf8").split("\n").filter(l=>l&&!l.startsWith("#")&&l.includes("=")).map(l=>[l.slice(0,l.indexOf("=")),l.slice(l.indexOf("=")+1)]));
const sql = postgres(env.DATABASE_URL, { ssl: "require", max: 1, connect_timeout: 15 });
try {
  console.log((await sql`select version()`)[0].version);
  console.log(await sql`select table_name from information_schema.tables where table_schema='public' order by 1`);
  const e = await sql`select to_regclass('public.enquiries') as t`;
  if (e[0].t) console.log("enquiries rows:", (await sql`select count(*)::int c from public.enquiries`)[0].c);
} catch (err) { console.error("ERR", err.code, err.message); } finally { await sql.end(); }
