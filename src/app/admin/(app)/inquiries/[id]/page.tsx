import Link from "next/link";
import { notFound } from "next/navigation";
import { getInquiry } from "@/server/services/crm";
import { fleetCategories, otherVehicleValue } from "@/content/fleet";
import { addDays, DEFAULT_EXCLUSIONS, DEFAULT_INCLUSIONS, ksaToday, money, statusLabel } from "@/lib/quotation";
import { NoteForm, QuotationForm, QuoteStatusButtons, SendQuoteButton, StatusForm } from "./forms";

const ksa = (d: Date) => d.toLocaleString("en-GB", { timeZone: "Asia/Riyadh", dateStyle: "medium", timeStyle: "short" });

function Dl({ rows }: { rows: [string, React.ReactNode][] }) {
  return <dl className="dl">{rows.filter(([, v]) => v !== null && v !== undefined && v !== "").map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>;
}

export default async function InquiryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const d = await getInquiry(id);
  if (!d) notFound();
  const { inquiry: i, customer: c } = d;
  const wa = (c.phone ?? "").replace(/\D/g, "").replace(/^00/, "");
  const today = ksaToday();
  const created = d.activities.find((a) => a.type === "created");
  const attribution = (created?.meta as { attribution?: Record<string, string> } | null)?.attribution;
  const vehicles = fleetCategories.map((v) => v.value);

  return (
    <>
      <p><Link href="/admin/inquiries/">← All inquiries</Link></p>
      <div className="top">
        <div>
          <h1>{i.reference} · {i.pickup} → {i.dropoff}</h1>
          <p className="muted">Received {ksa(i.createdAt)} (KSA) via {i.source}{i.locale ? ` · ${i.locale === "ar" ? "Arabic" : "English"} site` : ""}</p>
        </div>
        <span className={`badge big ${i.status}`}>{statusLabel(i.status)}</span>
      </div>

      <div className="detail">
        <div className="col">
          <section className="card">
            <h2>Journey</h2>
            <Dl rows={[
              ["Trip type", i.tripType === "round_trip" ? "Round trip" : "One way"],
              ["Pickup", i.pickup],
              ["Drop-off", i.dropoff],
              ["Pickup date & time", `${i.pickupDate} ${i.pickupTime}`],
              ["Return", i.tripType === "round_trip" ? `${i.returnDate ?? "?"} ${i.returnTime ?? ""}` : ""],
              ["Flight", i.flightNo],
              ["Passengers", `${i.adults}${i.children ? ` + ${i.children} children` : ""}`],
              ["Large bags", String(i.largeBags)],
              ["Small bags", i.smallBags ? String(i.smallBags) : ""],
              ["Vehicle wanted", i.vehiclePref ?? "Not sure – recommend"],
              ["Service", i.serviceKey],
              ["Special requirements", i.specialRequirements ? <span className="pre">{i.specialRequirements}</span> : ""],
              ["Customer notes", i.customerNotes ? <span className="pre">{i.customerNotes}</span> : ""],
              ["Sent from page", i.sourcePage],
              ["Campaign", attribution ? Object.entries(attribution).map(([k, v]) => `${k}=${v}`).join(", ") : ""],
            ]} />
          </section>

          <section className="card">
            <h2>Quotations ({d.quotes.length})</h2>
            {d.quotes.length === 0 && <p className="muted">No quotation yet.</p>}
            {d.quotes.map((q) => (
              <div key={q.id} className="quote-item">
                <div className="quote-head">
                  <b>{q.reference}</b> <span className={`badge q-${q.status}`}>{statusLabel(q.status)}</span>
                  <span className="amt">{money(q.amount, q.currency)}</span>
                </div>
                <p className="muted">{q.vehicle} · valid until {q.validUntil} · created {ksa(q.createdAt)}{q.sentAt ? ` · emailed ${ksa(q.sentAt)} to ${q.sentTo}` : ""}</p>
                <div className="actions">
                  <a className="btn" href={`/api/admin/quotations/${q.id}/pdf/`} target="_blank" rel="noopener">View PDF</a>
                  <a className="btn ghost-dark" href={`/api/admin/quotations/${q.id}/pdf/?download=1`}>Download PDF</a>
                  {q.status !== "cancelled" && <SendQuoteButton quotationId={q.id} email={c.email} sent={!!q.sentAt} />}
                </div>
                {(q.status === "sent" || q.status === "draft") && <QuoteStatusButtons quotationId={q.id} />}
              </div>
            ))}
            <details open={d.quotes.length === 0}>
              <summary><b>{d.quotes.length ? "New / revised quotation" : "Create quotation"}</b></summary>
              <QuotationForm id={i.id} vehicles={vehicles} d={{
                vehicle: i.vehiclePref && i.vehiclePref !== otherVehicleValue ? i.vehiclePref : "",
                validUntil: addDays(today, 2), minDate: today, inclusions: DEFAULT_INCLUSIONS, exclusions: DEFAULT_EXCLUSIONS,
              }} />
            </details>
          </section>

          <section className="card">
            <h2>Activity</h2>
            <ul className="timeline">{d.activities.map((a) => <li key={a.id}><time>{ksa(a.createdAt)}</time> {a.summary}</li>)}</ul>
            {d.emails.length > 0 && <>
              <h3>Emails</h3>
              <ul className="timeline">{d.emails.map((e) => <li key={e.id}><time>{ksa(e.createdAt)}</time> {e.template} → {e.toEmail}: <b>{e.status}</b>{e.error ? ` (${e.error})` : ""}</li>)}</ul>
            </>}
          </section>
        </div>

        <div className="col side-col">
          <section className="card">
            <h2>Customer</h2>
            <Dl rows={[
              ["Name", c.name],
              ["WhatsApp / phone", c.phone],
              ["Email", c.email ? <a href={`mailto:${c.email}?subject=${encodeURIComponent(`RideSaudi ${i.reference}`)}`}>{c.email}</a> : "—"],
            ]} />
            <div className="actions">
              {wa.length >= 8 && <a className="btn wa" href={`https://wa.me/${wa}?text=${encodeURIComponent(`Hello ${c.name}, this is RideSaudi about your request ${i.reference} (${i.pickup} to ${i.dropoff}).`)}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>}
            </div>
            {d.previous.length > 0 && <>
              <h3>Earlier inquiries</h3>
              <ul className="plain">{d.previous.map((p) => <li key={p.id}><a href={`/admin/inquiries/${p.id}/`}>{p.reference}</a> · {statusLabel(p.status)} · {ksa(p.createdAt)}</li>)}</ul>
            </>}
          </section>
          <section className="card">
            <h2>Status</h2>
            <StatusForm id={i.id} status={i.status} />
          </section>
          <section className="card">
            <h2>Internal notes</h2>
            <NoteForm id={i.id} />
            <ul className="notes">{d.notes.map((n) => <li key={n.id}><time>{ksa(n.createdAt)} · {n.author ?? "staff"}</time><p className="pre">{n.body}</p></li>)}</ul>
          </section>
        </div>
      </div>
    </>
  );
}
