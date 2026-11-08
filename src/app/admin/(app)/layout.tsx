import { logout } from "../login/actions";
import { requireAdmin } from "@/server/auth/session";

export const dynamic = "force-dynamic";

const nav = [["/admin/dashboard", "Dashboard"], ["/admin/inquiries", "Inquiries"]] as const;

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const me = await requireAdmin();
  return (
    <div className="shell">
      <nav className="side" aria-label="Admin">
        <b>RideSaudi CRM</b>
        {nav.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        <form action={logout}><button className="btn ghost">Sign out ({me.name})</button></form>
      </nav>
      <main className="main">{children}</main>
    </div>
  );
}
