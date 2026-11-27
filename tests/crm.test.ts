import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { sqlClient } from "@/server/db/client";
import { POST } from "@/app/api/enquiry/route";
import { addNote, createQuotation, getInquiry, getQuotation, markQuotationSent, setInquiryStatus, setQuotationStatus } from "@/server/services/crm";
import { listInquiries } from "@/server/services/inquiry";
import { renderQuotationPdf } from "@/server/pdf/quotation";
import { STATUS_GROUPS } from "@/lib/quotation";
import { cleanup } from "./helpers";

const TAG = "vitest-crm-" + Date.now();
let actor: { id: string; email: string };
let n = 0;
const call = (body: Record<string, unknown>) => POST(new Request("https://www.ridesaudi.com/api/enquiry/", {
  method: "POST", headers: { "content-type": "application/json", "x-forwarded-for": `10.7.${Date.now() % 250}.${++n}` }, body: JSON.stringify(body),
}));
const booking = (extra = {}) => ({
  service: "intercity", pickup: "Riyadh Olaya " + TAG, dropoff: "Doha, Qatar", date: "2030-04-10", time: "08:00",
  passengers: "3", luggage: "2", smallBags: "2", vehicle: "GMC Yukon", flight: "", name: "CRM Test", phone: "+966 50 000 0002",
  email: `${TAG}@example.com`, notes: TAG, consent: true, locale: "en", source: "/en/services/intercity-transfers/", website: "",
  tripType: "one_way", returnDate: "", returnTime: "", startedAt: Date.now() - 20_000, ...extra,
});

beforeAll(async () => {
  // Inactive on purpose: this row can never sign in to the CRM.
  const [row] = await sqlClient()`insert into admin_users (email, name, role, active) values (${TAG + "-admin@example.com"}, 'Vitest', 'staff', false) returning id, email`;
  actor = row as typeof actor;
});
afterAll(async () => {
  await cleanup(TAG);
  await sqlClient()`delete from admin_users where email = ${TAG + "-admin@example.com"}`;
});

describe("booking -> CRM -> quotation", () => {
  let inquiryId = "";
  let quoteId = "";

  it("stores a one-way booking with small bags and vehicle", async () => {
    const res = await call(booking());
    expect(res.status).toBe(200);
    const { reference } = await res.json();
    const [row] = await sqlClient()`select id, trip_type, adults, large_bags, small_bags, vehicle_pref, return_date from inquiries where reference = ${reference}`;
    expect(row).toMatchObject({ trip_type: "one_way", adults: 3, large_bags: 2, small_bags: 2, vehicle_pref: "GMC Yukon", return_date: null });
    inquiryId = row.id;
  });

  it("stores a round trip with return date and time", async () => {
    const res = await call(booking({ pickup: "Jeddah Airport " + TAG, tripType: "round_trip", returnDate: "2030-04-15", returnTime: "19:30", flight: "sv1020" }));
    expect(res.status).toBe(200);
    const { reference } = await res.json();
    const [row] = await sqlClient()`select trip_type, return_date, return_time, flight_no from inquiries where reference = ${reference}`;
    expect(row).toMatchObject({ trip_type: "round_trip", return_date: "2030-04-15", return_time: "19:30", flight_no: "SV1020" });
  });

  it("rejects missing email, bad phone and a return before departure", async () => {
    const r1 = await call(booking({ email: "", phone: "12", tripType: "round_trip", returnDate: "2030-04-01", returnTime: "10:00" }));
    expect(r1.status).toBe(422);
    expect((await r1.json()).fields).toMatchObject({ email: "required", phone: "phone", returnDate: "returnDate" });
    const r2 = await call(booking({ date: "2020-01-01" }));
    expect((await r2.json()).fields).toMatchObject({ date: "date" });
  });

  it("shows the inquiry in the admin list and detail, in the New group", async () => {
    const { rows } = await listInquiries({ q: TAG, statuses: STATUS_GROUPS.new });
    expect(rows.map((r) => r.id)).toContain(inquiryId);
    const d = await getInquiry(inquiryId);
    expect(d?.customer.email).toBe(`${TAG}@example.com`);
    expect(d?.inquiry.smallBags).toBe(2);
  });

  it("creates a quotation, moves the inquiry to preparing_quotation and renders the PDF", async () => {
    const q = await createQuotation(inquiryId, { vehicle: "GMC Yukon", amount: "1450", currency: "SAR", validUntil: "2030-04-01", inclusions: "Private vehicle with driver", exclusions: "", notes: "" }, actor);
    expect(q.reference).toMatch(/^QT-\d{4}-\d{4}$/);
    quoteId = q.id;
    const d = await getInquiry(inquiryId);
    expect(d?.inquiry.status).toBe("preparing_quotation");
    expect(d?.quotes[0].amount).toBe("1450.00");
    const b = await getQuotation(q.id);
    const pdf = await renderQuotationPdf(b!);
    expect(pdf.subarray(0, 5).toString()).toBe("%PDF-");
  });

  it("records the send, notes, status changes and acceptance in the history", async () => {
    await markQuotationSent(quoteId, `${TAG}@example.com`, actor);
    let d = await getInquiry(inquiryId);
    expect(d?.inquiry.status).toBe("quotation_sent");
    expect(d?.quotes[0].status).toBe("sent");
    await addNote(inquiryId, "Called supplier, Yukon free", actor);
    await setQuotationStatus(quoteId, "accepted", actor);
    await setInquiryStatus(inquiryId, "booked", actor);
    d = await getInquiry(inquiryId);
    expect(d?.inquiry.status).toBe("booked");
    expect(d?.notes[0].body).toBe("Called supplier, Yukon free");
    expect(d?.activities.map((a) => a.type)).toEqual(expect.arrayContaining(["created", "quotation", "quotation_sent", "note", "status"]));
  });

  it("returns null for unknown or malformed ids", async () => {
    expect(await getInquiry("not-a-uuid")).toBeNull();
    expect(await getQuotation("00000000-0000-0000-0000-000000000000")).toBeNull();
  });
});
