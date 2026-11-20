import "server-only";
import { eq } from "drizzle-orm";
import nodemailer, { type Transporter } from "nodemailer";
import { db, schema } from "../db/client";

export type Provider = "gmail" | "smtp" | "resend" | "none";

export type EmailConfig = {
  provider: Provider;
  from: string;
  replyTo?: string;
  adminTo: string[];
};

/** Everything comes from env. EMAIL_PROVIDER: gmail | smtp | resend | none (default none = nothing is sent). */
export function emailConfig(env = process.env): EmailConfig {
  const raw = (env.EMAIL_PROVIDER || "none").toLowerCase();
  const provider: Provider = raw === "gmail" || raw === "smtp" || raw === "resend" ? raw : "none";
  const user = env.SMTP_USERNAME || "";
  const from = env.EMAIL_FROM || (user ? `RideSaudi <${user}>` : "RideSaudi <onboarding@resend.dev>");
  return {
    provider,
    from,
    replyTo: env.EMAIL_REPLY_TO || env.ADMIN_NOTIFY_EMAIL?.split(",")[0]?.trim() || undefined,
    adminTo: (env.ADMIN_NOTIFY_EMAIL || "").split(",").map((s) => s.trim()).filter(Boolean),
  };
}

export type Outgoing = {
  template: string;
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
  relatedType?: string;
  relatedId?: string;
  /** Same key twice => the second call is refused (no double send). */
  idempotencyKey?: string;
  attachments?: { filename: string; content: Buffer; contentType?: string }[];
};

export type SendOutcome =
  | { status: "accepted"; logId: string; providerMessageId?: string }
  | { status: "failed"; logId: string; error: string }
  | { status: "duplicate" }
  | { status: "skipped"; reason: string };

const EMAIL_RE = /^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']{2,}$/;
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim().slice(0, 200);

let cached: { key: string; t: Transporter } | undefined;
function smtpTransport(env = process.env): Transporter {
  const provider = (env.EMAIL_PROVIDER || "").toLowerCase();
  const host = env.SMTP_HOST || (provider === "gmail" ? "smtp.gmail.com" : "");
  const port = Number(env.SMTP_PORT || 587);
  const security = (env.SMTP_SECURITY || (port === 465 ? "ssl" : "starttls")).toLowerCase();
  const key = [host, port, security, env.SMTP_USERNAME].join("|");
  if (cached?.key === key) return cached.t;
  const t = nodemailer.createTransport({
    host, port,
    secure: security === "ssl",
    requireTLS: security === "starttls",
    ignoreTLS: security === "none",
    auth: env.SMTP_USERNAME ? { user: env.SMTP_USERNAME, pass: env.SMTP_PASSWORD || "" } : undefined,
    connectionTimeout: 10_000, greetingTimeout: 10_000, socketTimeout: 20_000,
  });
  cached = { key, t };
  return t;
}

async function viaResend(m: Outgoing, cfg: EmailConfig): Promise<string | undefined> {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      ...(m.idempotencyKey ? { "idempotency-key": m.idempotencyKey } : {}),
    },
    body: JSON.stringify({
      from: cfg.from, to: [m.to], subject: m.subject, html: m.html, text: m.text,
      ...((m.replyTo ?? cfg.replyTo) ? { reply_to: m.replyTo ?? cfg.replyTo } : {}),
      ...(m.attachments?.length ? { attachments: m.attachments.map((a) => ({ filename: a.filename, content: a.content.toString("base64") })) } : {}),
    }),
    signal: AbortSignal.timeout(15_000),
  });
  const body = (await res.json().catch(() => ({}))) as { id?: string; message?: string };
  if (!res.ok) throw new Error(`Resend ${res.status}: ${body.message ?? "error"}`);
  return body.id;
}

/**
 * Sends one email and records it in email_logs.
 * "accepted" means the provider/SMTP server took it. It is NOT proof of delivery; with Resend the
 * webhook upgrades the row to delivered/bounced, with Gmail SMTP delivery stays unconfirmed.
 */
export async function sendEmail(m: Outgoing, cfg = emailConfig()): Promise<SendOutcome> {
  if (cfg.provider === "none") return { status: "skipped", reason: "EMAIL_PROVIDER is not configured" };
  if (!EMAIL_RE.test(m.to)) return { status: "skipped", reason: "invalid recipient" };

  const subject = oneLine(m.subject);
  const [log] = await db().insert(schema.emailLogs).values({
    template: m.template, toEmail: m.to, fromEmail: cfg.from, subject,
    relatedType: m.relatedType ?? null, relatedId: m.relatedId ?? null,
    provider: cfg.provider, status: "queued", idempotencyKey: m.idempotencyKey ?? null,
  }).onConflictDoNothing().returning({ id: schema.emailLogs.id });
  if (!log) return { status: "duplicate" };

  try {
    let providerMessageId: string | undefined;
    if (cfg.provider === "resend") {
      providerMessageId = await viaResend({ ...m, subject }, cfg);
    } else {
      const info = await smtpTransport().sendMail({
        from: cfg.from, to: m.to, subject, html: m.html, text: m.text,
        replyTo: m.replyTo ?? cfg.replyTo,
        attachments: m.attachments?.map((a) => ({ filename: a.filename, content: a.content, contentType: a.contentType })),
      });
      if (!info.accepted?.length) throw new Error(`SMTP rejected recipient: ${(info.rejected || []).join(", ") || "unknown"}`);
      providerMessageId = info.messageId;
    }
    await db().update(schema.emailLogs)
      .set({ status: "accepted", providerMessageId: providerMessageId ?? null, sentAt: new Date() })
      .where(eq(schema.emailLogs.id, log.id));
    return { status: "accepted", logId: log.id, providerMessageId };
  } catch (err) {
    const error = (err instanceof Error ? err.message : String(err)).slice(0, 500);
    await db().update(schema.emailLogs).set({ status: "failed", error }).where(eq(schema.emailLogs.id, log.id));
    console.error("[email] send failed", m.template, error);
    return { status: "failed", logId: log.id, error };
  }
}
