import { listInquiries } from "@/server/services/inquiry";
import { GROUP_LABEL, INQUIRY_STATUSES, STATUS_GROUPS, statusLabel, type StatusGroup } from "@/lib/quotation";

const PAGE = 25;
const GROUPS = Object.keys(STATUS_GROUPS) as StatusGroup[];

export default async function Inquiries({ searchParams }: { searchParams: Promise<{ q?: string; status?: string; group?: string; page?: string }> }) {
  const sp = await searchParams;
  const page = Math.max(Number(sp.page) || 1, 1);
  const status = (INQUIRY_STATUSES as readonly string[]).includes(sp.status ?? "") ? sp.status : undefined;
  const group = GROUPS.includes(sp.group as StatusGroup) ? (sp.group as StatusGroup) : undefined;
  const q = sp.q?.trim().slice(0, 80) || undefined;
  const { rows, total } = await listInquiries({ q, status, statuses: group ? STATUS_GROUPS[group] : undefined, limit: PAGE, offset: (page - 1) * PAGE });
  const qs = (p: Record<string, string | undefined>) =>
    `?${new URLSearchParams(Object.entries({ q, status, group, page: "1", ...p }).filter(([, v]) => v) as [string, string][])}`;
  return (
    <>
      <div className="top"><h1>Inquiries ({total})</h1></div>
      <nav className="tabs" aria-label="Inquiry groups">
        <a href={qs({ group: undefined, status: undefined })} aria-current={!group && !status ? "page" : undefined}>All</a>
        {GROUPS.map((g) => <a key={g} href={qs({ group: g, status: undefined })} aria-current={group === g ? "page" : undefined}>{GROUP_LABEL[g]}</a>)}
      </nav>
      <form className="filters" method="get">
        {group && <input type="hidden" name="group" value={group} />}
        <input name="q" placeholder="Search name, email, phone, reference, place" defaultValue={q ?? ""} aria-label="Search" />
        <select name="status" defaultValue={status ?? ""} aria-label="Exact status">
          <option value="">Any status</option>
          {INQUIRY_STATUSES.map((s) => <option key={s} value={s}>{statusLabel(s)}</option>)}
        </select>
        <button className="btn">Filter</button>
      </form>
      {rows.length === 0 ? <div className="card empty">No inquiries match.</div> : (
        <div className="scroll"><table>
          <thead><tr><th>Ref</th><th>Customer</th><th>Route</th><th>Travel</th><th>Pax / bags</th><th>Vehicle</th><th>Status</th><th>Received (KSA)</th></tr></thead>
          <tbody>{rows.map((r) => (
            <tr key={r.id}>
              <td><a href={`/admin/inquiries/${r.id}/`}><b>{r.reference}</b></a>{r.quotes > 0 && <><br /><small>{r.quotes} quote{r.quotes > 1 ? "s" : ""}</small></>}</td>
              <td>{r.name}<br /><small>{r.phone}{r.email ? ` · ${r.email}` : ""}</small></td>
              <td><a href={`/admin/inquiries/${r.id}/`}>{r.pickup} → {r.dropoff}</a>{r.tripType === "round_trip" && <><br /><small>Round trip</small></>}</td>
              <td>{r.pickupDate} {r.pickupTime}</td>
              <td>{r.adults} / {r.largeBags}</td>
              <td>{r.vehiclePref ?? "—"}</td>
              <td><span className={`badge ${r.status}`}>{statusLabel(r.status)}</span></td>
              <td>{r.createdAt.toLocaleString("en-GB", { timeZone: "Asia/Riyadh", dateStyle: "short", timeStyle: "short" })}</td>
            </tr>))}</tbody>
        </table></div>)}
      <div className="pager">
        {page > 1 && <a href={qs({ page: String(page - 1) })}>← Prev</a>}
        <span>Page {page} of {Math.max(Math.ceil(total / PAGE), 1)}</span>
        {page * PAGE < total && <a href={qs({ page: String(page + 1) })}>Next →</a>}
      </div>
    </>
  );
}
