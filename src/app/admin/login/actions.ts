"use server";
import { createHash } from "node:crypto";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";
import { authClient } from "@/server/auth/supabase";
import { getAdmin } from "@/server/auth/session";
import { allow } from "@/server/services/ratelimit";

const schema = z.object({ email: z.string().trim().email().max(200), password: z.string().min(1).max(200) });

export type LoginState = { error?: string };

export async function login(_prev: LoginState, form: FormData): Promise<LoginState> {
  const parsed = schema.safeParse({ email: form.get("email"), password: form.get("password") });
  if (!parsed.success) return { error: "Enter a valid email and password." };
  const { email, password } = parsed.data;

  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const acct = createHash("sha256").update(email.toLowerCase()).digest("hex");
  const ok = (await allow("login-ip", ip, 15, 600)) && (await allow("login-acct", acct, 6, 600));
  if (!ok) return { error: "Too many attempts. Try again in a few minutes." };

  const supabase = await authClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { error: "Incorrect email or password." };

  // Signed in with Supabase is not enough: must be an active CRM admin.
  if (!(await getAdmin())) {
    await supabase.auth.signOut();
    return { error: "This account does not have CRM access." };
  }
  redirect("/admin/dashboard");
}

export async function logout() {
  const supabase = await authClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}
