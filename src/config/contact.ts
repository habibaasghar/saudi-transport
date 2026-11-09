/**
 * Single source of truth for RideSaudi public contact details.
 * Every phone / WhatsApp / email link on the site is built from here.
 * Do not hardcode these values anywhere else.
 */
export const CONTACT = {
  /** E.164 number, used for tel: links and structured data. */
  phone: "+966543544560",
  /** Human-readable form of the same number (always render left-to-right). */
  phoneDisplay: "+966 54 354 4560",
  /** Digits only, as required by wa.me. */
  whatsapp: "966543544560",
  email: "inforidesaudi@gmail.com",
  website: "https://ridesaudi.com/",
} as const;

export const telHref = `tel:${CONTACT.phone}`;

/** WhatsApp chat link with an optional URL-encoded pre-filled message. */
export function whatsappHref(message?: string): string {
  const base = `https://wa.me/${CONTACT.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** mailto link with optional URL-encoded subject and body. */
export function mailHref(subject?: string, body?: string): string {
  const q: string[] = [];
  if (subject) q.push(`subject=${encodeURIComponent(subject)}`);
  if (body) q.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${CONTACT.email}${q.length ? `?${q.join("&")}` : ""}`;
}
