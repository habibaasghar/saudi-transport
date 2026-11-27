"use server";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { requireAdmin } from "@/server/auth/session";
import { addNote, createQuotation, getQuotation, markQuotationSent, setInquiryStatus, setQuotationStatus } from "@/server/services/crm";
import { sendQuotationEmail } from "@/server/email/quotation-email";
import { checkValidity, INQUIRY_STATUSES, quotationInput } from "@/lib/quotation";

/**
 * Every action authorises on its own (server actions are public POST endpoints): requireAdmin() verifies the Supabase
 * session with the Auth server AND an active admin_users row. Customer data never leaves the server except in the
 * quotation email the admin chooses to send.
 */
export type ActionState = { ok?: string; error?: string; fields?: Record<string, string> };

const uuid = z.string().uuid();
const path = (id: string) => `/admin/inquiries/${id}/`;

export async function changeStatus(_: ActionState, form: FormData): Promise<ActionState> {
  const me = await requireAdmin();
  const id = uuid.safeParse(form.get("id"));
  const status = z.enum(INQUIRY_STATUSES).safeParse(form.get("status"));
  if (!id.success || !status.success) return { error: "Choose a valid status." };
  try {
    await setInquiryStatus(id.data, status.data, me);
  } catch {
    return { error: "Could not update the status." };
  }
  revalidatePath(path(id.data));
  return { ok: "Status updated." };
}

export async function saveNote(_: ActionState, form: FormData): Promise<ActionState> {
  const me = await requireAdmin();
  const id = uuid.safeParse(form.get("id"));
  const body = z.string().trim().min(1).max(4000).safeParse(form.get("body"));
  if (!id.success || !body.success) return { error: "Write a note first (max 4000 characters)." };
  await addNote(id.data, body.data, me);
  revalidatePath(path(id.data));
  return { ok: "Note saved." };
}

export async function saveQuotation(_: ActionState, form: FormData): Promise<ActionState> {
  const me = await requireAdmin();
  const id = uuid.safeParse(form.get("id"));
  if (!id.success) return { error: "Unknown inquiry." };
  const parsed = quotationInput.safeParse(Object.fromEntries(["vehicle", "amount", "currency", "validUntil", "inclusions", "exclusions", "notes"].map((k) => [k, form.get(k) ?? undefined])));
  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const i of parsed.error.issues) fields[String(i.path[0])] ??= i.message;
    return { error: "Please fix the highlighted fields.", fields };
  }
  const late = checkValidity(parsed.data.validUntil);
  if (late) return { error: late, fields: { validUntil: late } };
  try {
    const q = await createQuotation(id.data, parsed.data, me);
    revalidatePath(path(id.data));
    return { ok: `Quotation ${q.reference} created. Download the PDF or email it to the customer below.` };
  } catch {
    return { error: "Could not save the quotation." };
  }
}

export async function emailQuotation(_: ActionState, form: FormData): Promise<ActionState> {
  const me = await requireAdmin();
  const qid = uuid.safeParse(form.get("quotationId"));
  const attempt = z.string().regex(/^[a-z0-9-]{6,40}$/i).safeParse(form.get("attempt"));
  if (!qid.success || !attempt.success) return { error: "Unknown quotation." };
  const b = await getQuotation(qid.data);
  if (!b) return { error: "Unknown quotation." };
  if (!b.customer.email) return { error: "This customer gave no email address. Send the PDF on WhatsApp instead." };
  if (b.quote.status === "cancelled") return { error: "This quotation is cancelled." };
  const r = await sendQuotationEmail(b, { attemptKey: attempt.data });
  revalidatePath(path(b.inquiry.id));
  if (r.status === "accepted") {
    await markQuotationSent(b.quote.id, b.customer.email, me);
    revalidatePath(path(b.inquiry.id));
    return { ok: `Sent to ${b.customer.email}. (Accepted by the mail server; delivery itself is not confirmed.)` };
  }
  if (r.status === "duplicate") return { error: "This send was already processed. Reload the page." };
  if (r.status === "skipped") return { error: `Not sent: ${r.reason}.` };
  return { error: `Sending failed: ${r.error}` };
}

export async function changeQuotationStatus(_: ActionState, form: FormData): Promise<ActionState> {
  const me = await requireAdmin();
  const qid = uuid.safeParse(form.get("quotationId"));
  const st = z.enum(["accepted", "declined", "cancelled"]).safeParse(form.get("status"));
  if (!qid.success || !st.success) return { error: "Invalid request." };
  const b = await getQuotation(qid.data);
  if (!b) return { error: "Unknown quotation." };
  await setQuotationStatus(qid.data, st.data, me);
  revalidatePath(path(b.inquiry.id));
  return { ok: `Quotation marked ${st.data}.` };
}
