import { afterEach, describe, expect, it, vi } from "vitest";

const sendMail = vi.fn();
vi.mock("@/server/email/send", () => ({ smtpTransport: () => ({ sendMail }) }));

import { deliverLead } from "@/lib/deliver";
import { emptyEnquiry } from "@/lib/enquiry";

const lead = () => ({ ...emptyEnquiry(), service: "intercity", name: "Test", phone: "+966500000000", pickup: "A", dropoff: "B", receivedAt: "2026-11-22T00:00:00Z" });
const ENV = { ...process.env };
afterEach(() => { process.env = { ...ENV }; sendMail.mockReset(); });

describe("deliverLead business alert", () => {
  it("is not configured when no channel env is set", async () => {
    for (const k of ["RESEND_API_KEY", "LEAD_NOTIFY_EMAIL", "ENQUIRY_WEBHOOK_URL", "SMTP_USERNAME", "ADMIN_NOTIFY_EMAIL"]) delete process.env[k];
    process.env.EMAIL_PROVIDER = "none";
    expect(await deliverLead(lead())).toEqual({ configured: false, delivered: false });
  });

  it("uses the Gmail/SMTP config (EMAIL_PROVIDER + ADMIN_NOTIFY_EMAIL) when Resend is not set", async () => {
    delete process.env.RESEND_API_KEY; delete process.env.LEAD_NOTIFY_EMAIL; delete process.env.ENQUIRY_WEBHOOK_URL;
    Object.assign(process.env, { EMAIL_PROVIDER: "gmail", SMTP_USERNAME: "sender@example.com", ADMIN_NOTIFY_EMAIL: "owner@example.com" });
    sendMail.mockResolvedValue({ accepted: ["owner@example.com"] });
    expect(await deliverLead(lead())).toEqual({ configured: true, delivered: true });
    const msg = sendMail.mock.calls[0][0];
    expect(msg.to).toEqual(["owner@example.com"]);
    expect(msg.subject).toContain("NEW BOOKING REQUEST – A to B");
    expect(msg.text).toContain("+966500000000");
    expect(msg.html.match(/Child seats/g)).toBeNull();
  });

  it("reports failure (not success) when SMTP throws", async () => {
    delete process.env.RESEND_API_KEY; delete process.env.LEAD_NOTIFY_EMAIL; delete process.env.ENQUIRY_WEBHOOK_URL;
    Object.assign(process.env, { EMAIL_PROVIDER: "smtp", SMTP_USERNAME: "sender@example.com", ADMIN_NOTIFY_EMAIL: "owner@example.com" });
    sendMail.mockRejectedValue(new Error("auth failed"));
    const err = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(await deliverLead(lead())).toEqual({ configured: true, delivered: false });
    err.mockRestore();
  });

  it("puts route and reference in the subject and flags returning customers", async () => {
    delete process.env.RESEND_API_KEY; delete process.env.LEAD_NOTIFY_EMAIL; delete process.env.ENQUIRY_WEBHOOK_URL;
    Object.assign(process.env, { EMAIL_PROVIDER: "gmail", SMTP_USERNAME: "s@example.com", ADMIN_NOTIFY_EMAIL: "o@example.com" });
    sendMail.mockResolvedValue({ accepted: ["o@example.com"] });
    const full = { ...lead(), pickup: "Riyadh", dropoff: "Doha", date: "2030-01-02", time: "09:00", passengers: "3", luggage: "2", smallBags: "1", tripType: "round_trip", returnDate: "2030-01-05", returnTime: "18:00", email: "c@example.com" };
    await deliverLead(full, undefined, { reference: "RS-3001-0007", inquiryId: "11111111-1111-1111-1111-111111111111" });
    let msg = sendMail.mock.calls[0][0];
    expect(msg.subject).toBe("NEW BOOKING REQUEST – Riyadh to Doha – RS-3001-0007");
    expect(msg.html).toContain("ROUND TRIP");
    expect(msg.html).toContain("2 large, 1 small");
    expect(msg.html).toContain("/admin/inquiries/11111111-1111-1111-1111-111111111111/");
    expect(msg.replyTo).toBe("c@example.com");
    await deliverLead(full, undefined, { reference: "RS-3001-0008", returning: true });
    msg = sendMail.mock.calls[1][0];
    expect(msg.subject).toMatch(/^RETURNING CUSTOMER - NEW BOOKING REQUEST/);
    expect(msg.html).toContain("RETURNING CUSTOMER");
  });

  it("labels heavy transport alerts with their own check and urgency, not passenger questions", async () => {
    delete process.env.RESEND_API_KEY; delete process.env.LEAD_NOTIFY_EMAIL; delete process.env.ENQUIRY_WEBHOOK_URL;
    Object.assign(process.env, { EMAIL_PROVIDER: "gmail", SMTP_USERNAME: "s@example.com", ADMIN_NOTIFY_EMAIL: "o@example.com" });
    sendMail.mockResolvedValue({ accepted: ["o@example.com"] });
    await deliverLead({ ...lead(), service: "heavy_satha" }, { complete: true, line: "complete details.", tag: "URGENT" });
    const msg = sendMail.mock.calls[0][0];
    expect(msg.subject).toBe("URGENT New enquiry: heavy_satha · Test");
    expect(msg.text).not.toMatch(/Ask for: .*(passengers|luggage)/);
  });
});
