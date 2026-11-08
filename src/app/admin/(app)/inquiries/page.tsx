import { listInquiries } from "@/server/services/inquiry";

const STATUSES = ["new", "contacted", "waiting_for_details", "checking_availability", "preparing_quotation", "quotation_sent", "follow_up_required", "accepted", "booked", "lost", "cancelled"];
const label = (s: string) => s.replace(/_/g, " ").replace(/^./, (c) => c.toUpperCase());
const PAGE = 25;

export default async function Inquiries({ searchParams }: { searchParams: Promise<{ q?: string; status?: string; page?: string }> }) {
  const sp = await searchParams;
  const page = Math.max(Number(sp.page) || 1, 1);
  const status = STATUSES.includes(sp.status ?? "") ? sp.status : undefined;
  const { rows, total } = await listInquiries({ q: sp.q?.slice(0, 80), status, limit: PAGE, offset: (page - 1) * PAGE });
  const qs = (p: number) => `?${new URLSearchParams({ ...(sp.q ? { q: sp.q } : {}), ...(status ? { status } : {}), page: String(p) })}`;
  return (
    <>
      <div className="top"><h1>Inquiries ({total})</h1></div>
      <form className="filters" method="get">
        <input name="q" placeholder="Search name, email, phone, reference" defaultValue={sp.q ?? ""} />
        <select name="status" defaultValue={status ?? ""}>
          <option value="">All statuses</option>
          {STATUSES.map((s) => <option key={s} value={s}>{label(s)}</option>)}
        </select>
        <button className="btn">Filter</button>
      </form>
      {rows.length === 0 ? <div className="card empty">No inquiries match.</div> : (
        <div className="scroll"><table>
          <thead><tr><th>Ref</th><th>Customer</th><th>Route</th><th>When</th><th>Pax</th><th>Vehicle</th><th>Status</th><th>Received</th></tr></thead>
          <tbody>{rows.map((r) => (
            <tr key={r.id}>
              <td>{r.reference}</td>
              <td>{r.name}<br /><small>{r.phone}{r.email ? ` · ${r.email}` : ""}</small></td>
              <td>{r.pickup} → {r.dropoff}</td>
              <td>{r.pickupDate} {r.pickupTime}</td>
              <td>{r.adults}</td>
              <td>{r.vehiclePref ?? "—"}</td>
              <td><span className={`badge ${r.status}`}>{label(r.status)}</span></td>
              <td>{r.createdAt.toISOString().slice(0, 16).replace("T", " ")}</td>
            </tr>))}</tbody>
        </table></div>)}
      <div className="pager">
        {page > 1 && <a href={qs(page - 1)}>← Prev</a>}
        <span>Page {page} of {Math.max(Math.ceil(total / PAGE), 1)}</span>
        {page * PAGE < total && <a href={qs(page + 1)}>Next →</a>}
      </div>
    </>
  );
}
