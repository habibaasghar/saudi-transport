"use client";
import { useActionState, useState } from "react";
import { changeQuotationStatus, changeStatus, emailQuotation, saveNote, saveQuotation, type ActionState } from "./actions";
import { INQUIRY_STATUSES, statusLabel } from "@/lib/quotation";

function Msg({ s }: { s: ActionState }) {
  if (s.error) return <p className="err" role="alert">{s.error}</p>;
  if (s.ok) return <p className="ok" role="status">{s.ok}</p>;
  return null;
}

export function StatusForm({ id, status }: { id: string; status: string }) {
  const [s, act, pending] = useActionState(changeStatus, {});
  return (
    <form action={act} className="inline">
      <input type="hidden" name="id" value={id} />
      <label className="sr" htmlFor="st">Status</label>
      <select id="st" name="status" defaultValue={status} key={status}>
        {INQUIRY_STATUSES.map((x) => <option key={x} value={x}>{statusLabel(x)}</option>)}
      </select>
      <button className="btn" disabled={pending}>{pending ? "Saving…" : "Update status"}</button>
      <Msg s={s} />
    </form>
  );
}

export function NoteForm({ id }: { id: string }) {
  const [s, act, pending] = useActionState(saveNote, {});
  return (
    <form action={act} className="stack" key={s.ok}>
      <input type="hidden" name="id" value={id} />
      <label htmlFor="note">Internal note (never sent to the customer)</label>
      <textarea id="note" name="body" rows={3} maxLength={4000} required />
      <button className="btn" disabled={pending}>{pending ? "Saving…" : "Add note"}</button>
      <Msg s={s} />
    </form>
  );
}

type QuoteDefaults = { vehicle: string; validUntil: string; minDate: string; inclusions: string; exclusions: string };

export function QuotationForm({ id, d, vehicles }: { id: string; d: QuoteDefaults; vehicles: string[] }) {
  const [s, act, pending] = useActionState(saveQuotation, {});
  const f = s.fields ?? {};
  const err = (k: string) => f[k] ? <span className="err">{f[k]}</span> : null;
  return (
    <form action={act} className="quote-form" key={s.ok}>
      <input type="hidden" name="id" value={id} />
      <label>Vehicle *
        <input name="vehicle" list="vehicles" defaultValue={d.vehicle} required maxLength={120} aria-invalid={!!f.vehicle} />
        <datalist id="vehicles">{vehicles.map((v) => <option key={v} value={v} />)}</datalist>
        {err("vehicle")}
      </label>
      <div className="two">
        <label>Amount *
          <input name="amount" inputMode="decimal" placeholder="e.g. 850" required pattern="\d{1,9}(\.\d{1,2})?" aria-invalid={!!f.amount} />
          {err("amount")}
        </label>
        <label>Currency
          <select name="currency" defaultValue="SAR"><option value="SAR">SAR</option></select>
        </label>
      </div>
      <label>Valid until *
        <input name="validUntil" type="date" defaultValue={d.validUntil} min={d.minDate} required aria-invalid={!!f.validUntil} />
        {err("validUntil")}
      </label>
      <label>Included (one per line)
        <textarea name="inclusions" rows={3} defaultValue={d.inclusions} maxLength={2000} />
      </label>
      <label>Not included (one per line)
        <textarea name="exclusions" rows={2} defaultValue={d.exclusions} maxLength={2000} />
      </label>
      <label>Notes for the customer (shown in the PDF)
        <textarea name="notes" rows={2} maxLength={2000} />
      </label>
      <p className="hint">Enter the price only after checking availability and the supplier cost. It is never shown on the public site.</p>
      <button className="btn" disabled={pending}>{pending ? "Saving…" : "Create quotation"}</button>
      <Msg s={s} />
    </form>
  );
}

export function SendQuoteButton({ quotationId, email, sent }: { quotationId: string; email: string | null; sent: boolean }) {
  const [attempt] = useState(() => crypto.randomUUID());
  const [s, act, pending] = useActionState(emailQuotation, {});
  if (!email) return <span className="hint">No customer email: share the PDF on WhatsApp.</span>;
  return (
    <form action={act} className="inline" onSubmit={(e) => { if (!confirm(`${sent ? "Send again" : "Send"} this quotation to ${email}?`)) e.preventDefault(); }}>
      <input type="hidden" name="quotationId" value={quotationId} />
      <input type="hidden" name="attempt" value={attempt} />
      <button className="btn" disabled={pending || !!s.ok}>{pending ? "Sending…" : sent ? "Email again" : "Email to customer"}</button>
      <Msg s={s} />
    </form>
  );
}

export function QuoteStatusButtons({ quotationId }: { quotationId: string }) {
  const [s, act, pending] = useActionState(changeQuotationStatus, {});
  return (
    <form action={act} className="inline">
      <input type="hidden" name="quotationId" value={quotationId} />
      <button className="btn ghost-dark" name="status" value="accepted" disabled={pending}>Customer accepted</button>
      <button className="btn ghost-dark" name="status" value="declined" disabled={pending}>Declined</button>
      <button className="btn ghost-dark" name="status" value="cancelled" disabled={pending}>Cancel quote</button>
      <Msg s={s} />
    </form>
  );
}
