import { inquiryCounts } from "@/server/services/inquiry";

export default async function Dashboard() {
  const { total, byStatus } = await inquiryCounts();
  const cards: [string, number][] = [
    ["Total inquiries", total],
    ["New", byStatus.new ?? 0],
    ["Preparing quotation", byStatus.preparing_quotation ?? 0],
    ["Quotation sent", byStatus.quotation_sent ?? 0],
    ["Accepted", byStatus.accepted ?? 0],
    ["Booked", byStatus.booked ?? 0],
  ];
  return (
    <>
      <div className="top"><h1>Dashboard</h1></div>
      <div className="metrics">{cards.map(([l, n]) => <div className="card" key={l}><b>{n}</b><span>{l}</span></div>)}</div>
      <p style={{ color: "var(--muted)" }}>Quotation, booking and revenue metrics arrive in later phases.</p>
    </>
  );
}
