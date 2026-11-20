import { SITE_URL } from "@/lib/site";

export const esc = (s: string | number | null | undefined) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export type AckEmailData = {
  reference: string; name: string; pickup: string; dropoff: string; date: string; time: string;
  passengers: number; locale?: string | null;
};

type Rendered = { subject: string; html: string; text: string };

// Brand palette (SEO-RULES.md baseline): midnight navy, sky blue, ice blue.
const NAVY = "#0B1F3A";
const SKY = "#38BDF8";
const ICE = "#EAF6FF";

function layout(opts: { title: string; bodyHtml: string; rtl?: boolean }) {
  const dir = opts.rtl ? "rtl" : "ltr";
  return `<!doctype html><html lang="${opts.rtl ? "ar" : "en"}" dir="${dir}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(opts.title)}</title></head>
<body style="margin:0;background:${ICE};font-family:Segoe UI,Arial,sans-serif;color:${NAVY};direction:${dir}">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:24px 12px">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:6px;overflow:hidden">
<tr><td style="background:${NAVY};color:#ffffff;padding:18px 24px;font-size:20px;font-weight:600">RideSaudi<span style="color:${SKY}"> ·</span></td></tr>
<tr><td style="padding:24px;font-size:15px;line-height:1.6">${opts.bodyHtml}</td></tr>
<tr><td style="padding:16px 24px;background:${ICE};color:#4a5b70;font-size:12px">${SITE_URL.replace(/^https?:\/\//, "")}</td></tr>
</table></td></tr></table></body></html>`;
}

const row = (k: string, v: string | number) =>
  `<tr><td style="padding:6px 12px 6px 0;color:#4a5b70;vertical-align:top;white-space:nowrap">${esc(k)}</td><td style="padding:6px 0"><b>${esc(v)}</b></td></tr>`;

/**
 * Acknowledgement to the customer. States plainly that this is an enquiry, not a confirmed booking,
 * and promises nothing about price, availability or reply time (none are confirmed business facts).
 */
export function inquiryAck(d: AckEmailData): Rendered {
  if (d.locale === "ar") {
    const rows: [string, string | number][] = [["الرقم المرجعي", d.reference], ["من", d.pickup], ["إلى", d.dropoff], ["التاريخ", d.date], ["الوقت", d.time], ["عدد الركاب", d.passengers]];
    const html = layout({
      rtl: true, title: "استلمنا طلبك",
      bodyHtml: `<h2 style="margin:0 0 12px;font-size:18px">شكرًا ${esc(d.name)}، استلمنا طلبك</h2>
<p>هذا طلب استفسار وليس حجزًا مؤكدًا. سنراجع التفاصيل ونرسل لك عرض السعر وتأكيد التوفر قبل ترتيب أي شيء.</p>
<table role="presentation" cellpadding="0" cellspacing="0">${rows.map(([k, v]) => row(k, v)).join("")}</table>
<p style="color:#4a5b70">يمكنك الرد على هذه الرسالة لإضافة أي تفاصيل، مع ذكر الرقم المرجعي.</p>`,
    });
    const text = [`شكرًا ${d.name}، استلمنا طلبك.`, "هذا طلب استفسار وليس حجزًا مؤكدًا. سنرسل لك عرض السعر وتأكيد التوفر قبل ترتيب أي شيء.", "", ...rows.map(([k, v]) => `${k}: ${v}`), "", "يمكنك الرد على هذه الرسالة لإضافة أي تفاصيل، مع ذكر الرقم المرجعي."].join("\n");
    return { subject: `استلمنا طلبك ${d.reference} - RideSaudi`, html, text };
  }
  const rows: [string, string | number][] = [["Reference", d.reference], ["From", d.pickup], ["To", d.dropoff], ["Date", d.date], ["Time", d.time], ["Passengers", d.passengers]];
  const html = layout({
    title: "We received your enquiry",
    bodyHtml: `<h2 style="margin:0 0 12px;font-size:18px">Thank you ${esc(d.name)}, we received your enquiry</h2>
<p>This is an enquiry, <b>not a confirmed booking</b>. We will review the details and send you a quotation and availability before anything is arranged.</p>
<table role="presentation" cellpadding="0" cellspacing="0">${rows.map(([k, v]) => row(k, v)).join("")}</table>
<p style="color:#4a5b70">Reply to this email to add or change any detail. Please quote your reference.</p>`,
  });
  const text = [`Thank you ${d.name}, we received your enquiry.`, "This is an enquiry, not a confirmed booking. We will send you a quotation and availability before anything is arranged.", "", ...rows.map(([k, v]) => `${k}: ${v}`), "", "Reply to this email to add or change any detail. Please quote your reference."].join("\n");
  return { subject: `We received your enquiry ${d.reference} - RideSaudi`, html, text };
}
