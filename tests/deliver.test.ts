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
    expect(msg.subject).toContain("intercity");
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
});
