import { getTranslations } from "next-intl/server";
import { CONTACT, mailHref, telHref, whatsappHref } from "@/config/contact";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

export type CtaKind = "whatsapp" | "call" | "email";
type Variant = "solid" | "ghost" | "outline" | "text";

type Props = {
  kind: CtaKind;
  locale: string;
  /** Page / route name used in the pre-filled WhatsApp message and email subject. */
  topic?: string;
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  /** Render icon only (label stays available to assistive tech). */
  iconOnly?: boolean;
  className?: string;
};

/** One contact button. All labels, messages and links come from messages/*.json + config/contact.ts. */
export async function ContactCta({ kind, locale, topic, variant = "ghost", size = "md", iconOnly = false, className = "" }: Props) {
  const t = await getTranslations({ locale, namespace: "contact" });
  const label = t(kind === "whatsapp" ? "whatsapp" : kind === "call" ? "call" : "email");
  const message = topic ? t("whatsappTopic", { topic }) : t("whatsappGeneral");
  const subject = topic ? t("emailSubjectTopic", { topic }) : t("emailSubject");

  const href = kind === "whatsapp" ? whatsappHref(message) : kind === "call" ? telHref : mailHref(subject);
  const aria =
    kind === "whatsapp" ? t("whatsappAria") : kind === "call" ? t("callAria", { number: CONTACT.phoneDisplay }) : t("emailAria", { email: CONTACT.email });
  const Icon = kind === "whatsapp" ? WhatsAppIcon : kind === "call" ? PhoneIcon : MailIcon;
  const cls = ["btn", `btn--${size}`, `cta cta--${kind}${kind === "whatsapp" ? "" : ` cta--${variant}`}`, iconOnly ? "cta--icon" : "", className].filter(Boolean).join(" ");

  return (
    <a
      href={href}
      className={cls}
      aria-label={aria}
      title={label}
      {...(kind === "whatsapp" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <Icon className="cta__icon" />
      {iconOnly ? <span className="sr-only">{label}</span> : <span>{label}</span>}
    </a>
  );
}

/** Group of the three contact buttons. */
export async function ContactRow({
  locale,
  topic,
  variant = "ghost",
  size = "md",
  kinds = ["whatsapp", "call", "email"],
  className = "",
}: {
  locale: string;
  topic?: string;
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  kinds?: CtaKind[];
  className?: string;
}) {
  return (
    <div className={`cta-row ${className}`.trim()}>
      {kinds.map((k) => (
        <ContactCta key={k} kind={k} locale={locale} topic={topic} variant={variant} size={size} />
      ))}
    </div>
  );
}
