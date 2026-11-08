import "server-only";
import { createHash } from "node:crypto";
import { and, desc, eq, gt, isNull, sql } from "drizzle-orm";
import type { Db } from "../db/client";
import { db, schema } from "../db/client";

export type NewInquiry = {
  name: string; phone: string; email?: string; countryCode?: string;
  serviceKey?: string; pickup: string; dropoff: string; pickupDate: string; pickupTime: string;
  tripType?: "one_way" | "round_trip" | "multi_stop"; returnDate?: string; returnTime?: string;
  adults?: number; children?: number; infants?: number; largeBags?: number; smallBags?: number;
  vehiclePref?: string; flightNo?: string; customerNotes?: string; locale?: string; sourcePage?: string;
  source?: "website" | "whatsapp_ai" | "manual" | "email" | "phone";
  idempotencyKey?: string;
};

export type CreateResult = { id: string; reference: string; duplicate: boolean };

const DEDUPE_WINDOW_MS = 10 * 60 * 1000;
type Tx = Parameters<Parameters<Db["transaction"]>[0]>[0];

export const dedupeHash = (i: Pick<NewInquiry, "email" | "phone" | "pickup" | "dropoff" | "pickupDate" | "pickupTime">) =>
  createHash("sha256")
    .update([(i.email || "").toLowerCase(), i.phone.replace(/\D/g, ""), i.pickup.toLowerCase(), i.dropoff.toLowerCase(), i.pickupDate, i.pickupTime].join("|"))
    .digest("hex");

/** RS-YYMM-NNNN, sequence kept per month in `counters` (atomic upsert inside the caller's TX). */
export async function nextReference(tx: Tx, now = new Date()): Promise<string> {
  const ym = `${String(now.getUTCFullYear()).slice(2)}${String(now.getUTCMonth() + 1).padStart(2, "0")}`;
  const [row] = await tx
    .insert(schema.counters)
    .values({ name: `inquiry-${ym}`, value: 1 })
    .onConflictDoUpdate({ target: schema.counters.name, set: { value: sql`${schema.counters.value} + 1` } })
    .returning({ value: schema.counters.value });
  return `RS-${ym}-${String(row.value).padStart(4, "0")}`;
}

async function upsertCustomer(tx: Tx, i: NewInquiry): Promise<string> {
  const email = i.email?.trim().toLowerCase() || null;
  let existing = email
    ? (await tx.select({ id: schema.customers.id }).from(schema.customers)
        .where(and(sql`lower(${schema.customers.email}) = ${email}`, isNull(schema.customers.deletedAt))).limit(1))[0]
    : undefined;
  if (!existing && i.phone) {
    existing = (await tx.select({ id: schema.customers.id }).from(schema.customers)
      .where(and(eq(schema.customers.phone, i.phone), isNull(schema.customers.deletedAt))).limit(1))[0];
  }
  if (existing) {
    // fill gaps only; never overwrite what staff may have corrected
    await tx.update(schema.customers).set({
      email: sql`coalesce(${schema.customers.email}, ${email})`,
      phone: sql`coalesce(${schema.customers.phone}, ${i.phone})`,
      updatedAt: new Date(),
    }).where(eq(schema.customers.id, existing.id));
    return existing.id;
  }
  const [c] = await tx.insert(schema.customers)
    .values({ name: i.name, email, phone: i.phone, countryCode: i.countryCode ?? null })
    .returning({ id: schema.customers.id });
  return c.id;
}

export async function createInquiry(i: NewInquiry, meta: { ipHash?: string } = {}): Promise<CreateResult> {
  const hash = dedupeHash(i);
  return db().transaction(async (tx) => {
    // Serialise concurrent identical submissions so the window check below is race-free.
    await tx.execute(sql`select pg_advisory_xact_lock(hashtext(${hash}))`);

    const dup = (await tx
      .select({ id: schema.inquiries.id, reference: schema.inquiries.reference })
      .from(schema.inquiries)
      .where(and(
        i.idempotencyKey
          ? eq(schema.inquiries.idempotencyKey, i.idempotencyKey)
          : and(eq(schema.inquiries.dedupeHash, hash), gt(schema.inquiries.createdAt, new Date(Date.now() - DEDUPE_WINDOW_MS))),
        isNull(schema.inquiries.deletedAt)))
      .orderBy(desc(schema.inquiries.createdAt)).limit(1))[0];
    if (dup) return { ...dup, duplicate: true };

    const customerId = await upsertCustomer(tx, i);
    const reference = await nextReference(tx);
    const [row] = await tx.insert(schema.inquiries).values({
      reference, customerId,
      source: i.source ?? "website", locale: i.locale || null,
      serviceKey: i.serviceKey || null, tripType: i.tripType ?? "one_way",
      pickup: i.pickup, dropoff: i.dropoff, pickupDate: i.pickupDate, pickupTime: i.pickupTime,
      returnDate: i.returnDate || null, returnTime: i.returnTime || null,
      adults: i.adults ?? 1, children: i.children ?? 0, infants: i.infants ?? 0,
      largeBags: i.largeBags ?? 0, smallBags: i.smallBags ?? 0,
      vehiclePref: i.vehiclePref || null, flightNo: i.flightNo || null,
      customerNotes: i.customerNotes || null, sourcePage: i.sourcePage || null,
      idempotencyKey: i.idempotencyKey ?? null, dedupeHash: hash, ipHash: meta.ipHash ?? null,
    }).returning({ id: schema.inquiries.id });

    await tx.insert(schema.inquiryActivities).values({
      inquiryId: row.id, type: "created", summary: `Inquiry received via ${i.source ?? "website"}`,
    });
    return { id: row.id, reference, duplicate: false };
  });
}

export type InquiryListItem = {
  id: string; reference: string; status: string; name: string; email: string | null; phone: string | null;
  pickup: string; dropoff: string; pickupDate: string; pickupTime: string; tripType: string;
  adults: number; vehiclePref: string | null; source: string; createdAt: Date;
};

export async function listInquiries(opts: { limit?: number; offset?: number; status?: string; q?: string } = {}) {
  const limit = Math.min(Math.max(opts.limit ?? 25, 1), 100);
  const offset = Math.max(opts.offset ?? 0, 0);
  const where = and(
    isNull(schema.inquiries.deletedAt),
    opts.status ? sql`${schema.inquiries.status} = ${opts.status}` : undefined,
    opts.q ? sql`(${schema.customers.name} ilike ${"%" + opts.q + "%"} or ${schema.inquiries.reference} ilike ${"%" + opts.q + "%"} or ${schema.customers.email} ilike ${"%" + opts.q + "%"} or ${schema.customers.phone} ilike ${"%" + opts.q + "%"})` : undefined,
  );
  const rows = await db().select({
    id: schema.inquiries.id, reference: schema.inquiries.reference, status: schema.inquiries.status,
    name: schema.customers.name, email: schema.customers.email, phone: schema.customers.phone,
    pickup: schema.inquiries.pickup, dropoff: schema.inquiries.dropoff, pickupDate: schema.inquiries.pickupDate,
    pickupTime: schema.inquiries.pickupTime, tripType: schema.inquiries.tripType, adults: schema.inquiries.adults,
    vehiclePref: schema.inquiries.vehiclePref, source: schema.inquiries.source, createdAt: schema.inquiries.createdAt,
  }).from(schema.inquiries).innerJoin(schema.customers, eq(schema.customers.id, schema.inquiries.customerId))
    .where(where).orderBy(desc(schema.inquiries.createdAt)).limit(limit).offset(offset);
  const [{ n }] = await db().select({ n: sql<number>`count(*)::int` }).from(schema.inquiries)
    .innerJoin(schema.customers, eq(schema.customers.id, schema.inquiries.customerId)).where(where);
  return { rows: rows as InquiryListItem[], total: n };
}

export async function inquiryCounts() {
  const rows = await db().select({ status: schema.inquiries.status, n: sql<number>`count(*)::int` })
    .from(schema.inquiries).where(isNull(schema.inquiries.deletedAt)).groupBy(schema.inquiries.status);
  const byStatus = Object.fromEntries(rows.map((r) => [r.status, r.n])) as Record<string, number>;
  return { total: rows.reduce((a, r) => a + r.n, 0), byStatus };
}
