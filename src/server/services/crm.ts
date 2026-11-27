import "server-only";
import { and, desc, eq, isNull, sql } from "drizzle-orm";
import { db, schema } from "../db/client";
import type { InquiryStatus, QuotationInput } from "@/lib/quotation";

/**
 * CRM operations behind the admin pages. Every exported function expects the caller to have checked
 * requireAdmin()/adminOrNull() first; none of them is reachable from the public site.
 */

type Actor = { id: string; email: string };

export async function getInquiry(id: string) {
  if (!/^[0-9a-f-]{36}$/i.test(id)) return null;
  const [row] = await db().select({ inquiry: schema.inquiries, customer: schema.customers })
    .from(schema.inquiries).innerJoin(schema.customers, eq(schema.customers.id, schema.inquiries.customerId))
    .where(and(eq(schema.inquiries.id, id), isNull(schema.inquiries.deletedAt))).limit(1);
  if (!row) return null;
  const [activities, notes, quotes, emails, previous] = await Promise.all([
    db().select().from(schema.inquiryActivities).where(eq(schema.inquiryActivities.inquiryId, id)).orderBy(desc(schema.inquiryActivities.createdAt)),
    db().select({ id: schema.inquiryMessages.id, body: schema.inquiryMessages.body, createdAt: schema.inquiryMessages.createdAt, author: schema.adminUsers.name })
      .from(schema.inquiryMessages).leftJoin(schema.adminUsers, eq(schema.adminUsers.id, schema.inquiryMessages.authorId))
      .where(and(eq(schema.inquiryMessages.inquiryId, id), eq(schema.inquiryMessages.direction, "internal"))).orderBy(desc(schema.inquiryMessages.createdAt)),
    db().select().from(schema.quotations).where(eq(schema.quotations.inquiryId, id)).orderBy(desc(schema.quotations.createdAt)),
    db().select({ id: schema.emailLogs.id, template: schema.emailLogs.template, toEmail: schema.emailLogs.toEmail, status: schema.emailLogs.status, error: schema.emailLogs.error, createdAt: schema.emailLogs.createdAt, relatedId: schema.emailLogs.relatedId })
      .from(schema.emailLogs).where(sql`${schema.emailLogs.relatedId} = ${id} or ${schema.emailLogs.relatedId} in (select id from quotations where inquiry_id = ${id})`).orderBy(desc(schema.emailLogs.createdAt)),
    db().select({ id: schema.inquiries.id, reference: schema.inquiries.reference, status: schema.inquiries.status, createdAt: schema.inquiries.createdAt })
      .from(schema.inquiries).where(and(eq(schema.inquiries.customerId, row.customer.id), isNull(schema.inquiries.deletedAt), sql`${schema.inquiries.id} <> ${id}`))
      .orderBy(desc(schema.inquiries.createdAt)).limit(10),
  ]);
  return { ...row, activities, notes, quotes, emails, previous };
}
export type InquiryDetail = NonNullable<Awaited<ReturnType<typeof getInquiry>>>;

export async function setInquiryStatus(id: string, status: InquiryStatus, actor: Actor) {
  return db().transaction(async (tx) => {
    const [before] = await tx.select({ status: schema.inquiries.status }).from(schema.inquiries).where(eq(schema.inquiries.id, id)).limit(1);
    if (!before) throw new Error("not_found");
    if (before.status === status) return;
    await tx.update(schema.inquiries).set({ status, updatedAt: new Date() }).where(eq(schema.inquiries.id, id));
    await tx.insert(schema.inquiryActivities).values({ inquiryId: id, actorId: actor.id, type: "status", summary: `Status: ${before.status} → ${status}` });
    await tx.insert(schema.auditLogs).values({ actorId: actor.id, actorEmail: actor.email, action: "inquiry.status", entity: "inquiry", entityId: id, before: { status: before.status }, after: { status } });
  });
}

export async function addNote(id: string, body: string, actor: Actor) {
  await db().transaction(async (tx) => {
    await tx.insert(schema.inquiryMessages).values({ inquiryId: id, direction: "internal", channel: "note", body, authorId: actor.id });
    await tx.insert(schema.inquiryActivities).values({ inquiryId: id, actorId: actor.id, type: "note", summary: "Internal note added" });
  });
}

/** QT-YYMM-NNNN, its own monthly counter so quotation numbers never collide with inquiry references. */
async function nextQuoteRef(tx: Parameters<Parameters<ReturnType<typeof db>["transaction"]>[0]>[0], now = new Date()) {
  const ym = `${String(now.getUTCFullYear()).slice(2)}${String(now.getUTCMonth() + 1).padStart(2, "0")}`;
  const [row] = await tx.insert(schema.counters).values({ name: `quotation-${ym}`, value: 1 })
    .onConflictDoUpdate({ target: schema.counters.name, set: { value: sql`${schema.counters.value} + 1` } })
    .returning({ value: schema.counters.value });
  return `QT-${ym}-${String(row.value).padStart(4, "0")}`;
}

export async function createQuotation(inquiryId: string, q: QuotationInput, actor: Actor) {
  return db().transaction(async (tx) => {
    const [inq] = await tx.select({ status: schema.inquiries.status }).from(schema.inquiries)
      .where(and(eq(schema.inquiries.id, inquiryId), isNull(schema.inquiries.deletedAt))).limit(1);
    if (!inq) throw new Error("not_found");
    const reference = await nextQuoteRef(tx);
    const [row] = await tx.insert(schema.quotations).values({
      reference, inquiryId, vehicle: q.vehicle, amount: q.amount, currency: q.currency, validUntil: q.validUntil,
      inclusions: q.inclusions || null, exclusions: q.exclusions || null, notes: q.notes || null, createdBy: actor.id,
    }).returning({ id: schema.quotations.id, reference: schema.quotations.reference });
    await tx.insert(schema.inquiryActivities).values({
      inquiryId, actorId: actor.id, type: "quotation", summary: `Quotation ${reference} created: ${q.currency} ${q.amount}, ${q.vehicle}`, meta: { quotationId: row.id },
    });
    if (["new", "contacted", "waiting_for_details", "checking_availability"].includes(inq.status)) {
      await tx.update(schema.inquiries).set({ status: "preparing_quotation", updatedAt: new Date() }).where(eq(schema.inquiries.id, inquiryId));
    }
    await tx.insert(schema.auditLogs).values({ actorId: actor.id, actorEmail: actor.email, action: "quotation.create", entity: "quotation", entityId: row.id, after: { ...q } });
    return row;
  });
}

/** Quotation plus everything the PDF / email needs. */
export async function getQuotation(id: string) {
  if (!/^[0-9a-f-]{36}$/i.test(id)) return null;
  const [row] = await db().select({ quote: schema.quotations, inquiry: schema.inquiries, customer: schema.customers })
    .from(schema.quotations)
    .innerJoin(schema.inquiries, eq(schema.inquiries.id, schema.quotations.inquiryId))
    .innerJoin(schema.customers, eq(schema.customers.id, schema.inquiries.customerId))
    .where(eq(schema.quotations.id, id)).limit(1);
  return row ?? null;
}
export type QuotationBundle = NonNullable<Awaited<ReturnType<typeof getQuotation>>>;

export async function markQuotationSent(id: string, to: string, actor: Actor) {
  await db().transaction(async (tx) => {
    const [q] = await tx.update(schema.quotations).set({ status: "sent", sentAt: new Date(), sentTo: to, updatedAt: new Date() })
      .where(eq(schema.quotations.id, id)).returning({ inquiryId: schema.quotations.inquiryId, reference: schema.quotations.reference });
    if (!q) return;
    await tx.update(schema.inquiries).set({ status: "quotation_sent", updatedAt: new Date() })
      .where(and(eq(schema.inquiries.id, q.inquiryId), sql`${schema.inquiries.status} not in ('accepted','booked','cancelled','lost')`));
    await tx.insert(schema.inquiryActivities).values({ inquiryId: q.inquiryId, actorId: actor.id, type: "quotation_sent", summary: `Quotation ${q.reference} emailed to ${to}`, meta: { quotationId: id } });
  });
}

export async function setQuotationStatus(id: string, status: "accepted" | "declined" | "cancelled", actor: Actor) {
  await db().transaction(async (tx) => {
    const [q] = await tx.update(schema.quotations).set({ status, updatedAt: new Date() }).where(eq(schema.quotations.id, id))
      .returning({ inquiryId: schema.quotations.inquiryId, reference: schema.quotations.reference });
    if (!q) return;
    if (status === "accepted") await tx.update(schema.inquiries).set({ status: "accepted", updatedAt: new Date() }).where(eq(schema.inquiries.id, q.inquiryId));
    await tx.insert(schema.inquiryActivities).values({ inquiryId: q.inquiryId, actorId: actor.id, type: "quotation", summary: `Quotation ${q.reference} marked ${status}` });
  });
}

export async function quotationCounts() {
  const rows = await db().select({ status: schema.quotations.status, n: sql<number>`count(*)::int` }).from(schema.quotations).groupBy(schema.quotations.status);
  return Object.fromEntries(rows.map((r) => [r.status, r.n])) as Record<string, number>;
}

export async function recentQuotations(limit = 8) {
  return db().select({ id: schema.quotations.id, reference: schema.quotations.reference, status: schema.quotations.status, amount: schema.quotations.amount, currency: schema.quotations.currency, inquiryId: schema.quotations.inquiryId, createdAt: schema.quotations.createdAt, name: schema.customers.name })
    .from(schema.quotations).innerJoin(schema.inquiries, eq(schema.inquiries.id, schema.quotations.inquiryId))
    .innerJoin(schema.customers, eq(schema.customers.id, schema.inquiries.customerId))
    .orderBy(desc(schema.quotations.createdAt)).limit(limit);
}

