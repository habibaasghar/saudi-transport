import "server-only";
import { and, eq, sql } from "drizzle-orm";
import { redirect } from "next/navigation";
import { db, schema } from "../db/client";
import { authClient } from "./supabase";

export type Role = "owner" | "admin" | "staff";
export type AdminSession = { id: string; email: string; name: string; role: Role };

/**
 * The ONLY authorization gate. Verifies the Supabase session with the Auth server (getUser, not
 * getSession) and then requires an active row in admin_users. Being a Supabase user is not enough.
 */
export async function getAdmin(): Promise<AdminSession | null> {
  const supabase = await authClient();
  const { data, error } = await supabase.auth.getUser();
  const email = data.user?.email?.toLowerCase();
  if (error || !email || !data.user?.email_confirmed_at) return null;
  const [row] = await db().select().from(schema.adminUsers)
    .where(and(sql`lower(${schema.adminUsers.email}) = ${email}`, eq(schema.adminUsers.active, true))).limit(1);
  return row ? { id: row.id, email: row.email, name: row.name, role: row.role } : null;
}

const order: Role[] = ["staff", "admin", "owner"];
export const hasRole = (s: AdminSession, min: Role) => order.indexOf(s.role) >= order.indexOf(min);

/** For pages / server actions: redirects to login. */
export async function requireAdmin(min: Role = "staff"): Promise<AdminSession> {
  const s = await getAdmin();
  if (!s || !hasRole(s, min)) redirect("/admin/login");
  return s;
}

/** For route handlers: returns null when unauthorised so the caller can answer 401/403. */
export async function adminOrNull(min: Role = "staff"): Promise<AdminSession | null> {
  const s = await getAdmin();
  return s && hasRole(s, min) ? s : null;
}
