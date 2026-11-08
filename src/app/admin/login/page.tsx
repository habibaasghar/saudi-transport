import { redirect } from "next/navigation";
import { getAdmin } from "@/server/auth/session";
import { LoginForm } from "./form";

export const dynamic = "force-dynamic";

export default async function LoginPage() {
  if (await getAdmin()) redirect("/admin/dashboard");
  return (
    <main className="login">
      <h1 style={{ marginBottom: 16 }}>RideSaudi CRM</h1>
      <LoginForm />
    </main>
  );
}
