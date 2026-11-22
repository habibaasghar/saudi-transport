/**
 * Single source of truth for RideSaudi public contact details.
 * Every phone / WhatsApp / email link on the site is built from here.
 * Do not hardcode these values anywhere else.
 */
export const CONTACT = {
  /** WhatsApp-only number (no phone calls). Digits only, as required by wa.me. */
  whatsapp: "966538547672",
  /** Human-readable form of the WhatsApp number (always render left-to-right). */
  whatsappDisplay: "+966 53 854 7672",
  email: "inforidesaudi@gmail.com",
  website: "https://ridesaudi.com/",
} as const;

/**
 * Official RideSaudi social profiles. Use these exact URLs everywhere
 * (never shorten or change them). Not added to schema sameAs on purpose.
 */
export const SOCIAL = {
  instagram: "https://www.instagram.com/ridesaudiksa/",
  facebook: "https://www.facebook.com/share/1JTxBa7Sen/",
  tiktok: "https://www.tiktok.com/@ridesaudi",
} as const;

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
