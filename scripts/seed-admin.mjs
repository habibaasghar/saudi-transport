// Usage: node scripts/seed-admin.mjs <email> "<Name>" [owner|admin|staff]
// Adds/updates the CRM authorization row. The login itself (password) is created in
// Supabase dashboard -> Authentication -> Users -> Add user (tick "Auto Confirm User").
import postgres from "postgres";
import { readFileSync } from "node:fs";

const [email, name, role = "owner"] = process.argv.slice(2);
if (!email || !name || !["owner", "admin", "staff"].includes(role)) {
  console.error('Usage: node scripts/seed-admin.mjs <email> "<Name>" [owner|admin|staff]');
  process.exit(1);
}
const env = Object.fromEntries(readFileSync(".env.local", "utf8").split("\n").filter((l) => l && !l.startsWith("#") && l.includes("=")).map((l) => [l.slice(0, l.indexOf("=")), l.slice(l.indexOf("=") + 1)]));
const sql = postgres(env.DATABASE_URL, { ssl: "require", max: 1 });
try {
  const [r] = await sql`insert into admin_users (email, name, role) values (${email.toLowerCase()}, ${name}, ${role})
    on conflict (lower(email)) do update set name = excluded.name, role = excluded.role, active = true, updated_at = now()
    returning email, role`;
  console.log("admin_users:", r);
} finally { await sql.end(); }
