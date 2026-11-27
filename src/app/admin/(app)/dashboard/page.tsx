import { inquiryCounts, listInquiries } from "@/server/services/inquiry";
import { quotationCounts, recentQuotations } from "@/server/services/crm";
import { GROUP_LABEL, money, STATUS_GROUPS, statusLabel, type StatusGroup } from "@/lib/quotation";

export default async function Dashboard() {
  const [{ total, byStatus }, qc, recent, fresh] = await Promise.all([
    inquiryCounts(), quotationCounts(), recentQuotations(6), listInquiries({ statuses: STATUS_GROUPS.new, limit: 8 }),
  ]);
  const sum = (g: StatusGroup) => STATUS_GROUPS[g].reduce((a, s) => a + (byStatus[s] ?? 0), 0);
  const cards: [string, number, string][] = [
    ["All inquiries", total, "/admin/inquiries/"],
    ...(Object.keys(STATUS_GROUPS) as StatusGroup[]).map((g) => [GROUP_LABEL[g], sum(g), `/admin/inquiries/?group=${g}`] as [string, number, string]),
  ];
  return (
    <>
      <div className="top"><h1>Dashboard</h1></div>
      <div className="metrics">{cards.map(([l, n, href]) => <a className="card metric" href={href} key={l}><b>{n}</b><span>{l}</span></a>)}</div>
      <div className="detail">
        <section className="card col">
          <h2>New inquiries – reply first</h2>
          {fresh.rows.length === 0 ? <p className="muted">Nothing new.</p> : (
            <ul className="plain">{fresh.rows.map((r) => (
              <li key={r.id}><a href={`/admin/inquiries/${r.id}/`}><b>{r.reference}</b> {r.pickup} → {r.dropoff}</a> · {r.pickupDate} · {r.name}</li>
            ))}</ul>)}
        </section>
        <section className="card col">
          <h2>Latest quotations</h2>
          <p className="muted">Drafts {qc.draft ?? 0} · Sent {qc.sent ?? 0} · Accepted {qc.accepted ?? 0}</p>
          {recent.length === 0 ? <p className="muted">No quotations yet.</p> : (
            <ul className="plain">{recent.map((q) => (
              <li key={q.id}><a href={`/admin/inquiries/${q.inquiryId}/`}><b>{q.reference}</b></a> · {q.name} · {money(q.amount, q.currency)} · {statusLabel(q.status)}</li>
            ))}</ul>)}
        </section>
      </div>
    </>
  );
}
