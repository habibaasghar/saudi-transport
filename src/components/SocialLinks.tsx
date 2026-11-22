import { getTranslations } from "next-intl/server";
import { SOCIAL } from "@/config/contact";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "./Icons";

const networks = [
  { key: "instagram", href: SOCIAL.instagram, Icon: InstagramIcon },
  { key: "facebook", href: SOCIAL.facebook, Icon: FacebookIcon },
  { key: "tiktok", href: SOCIAL.tiktok, Icon: TikTokIcon },
] as const;

type Size = "sm" | "md";

/** The three official RideSaudi profiles as small brand-coloured icon links (plain <a>, new tab). */
export async function SocialLinks({ size = "sm" }: { size?: Size }) {
  const t = await getTranslations("social");
  return (
    <ul className={`social social--${size}`} aria-label={t("listLabel")}>
      {networks.map(({ key, href, Icon }) => (
        <li key={key}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t(`${key}Aria`)}
            title={t(`${key}Aria`)}
            className={`social__link social__link--${key}`}
          >
            <Icon className="social__icon" />
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Footer block: "Follow RideSaudi". Rendered on every page through <Footer>. */
export async function FooterSocial() {
  const t = await getTranslations("social");
  return (
    <div className="footer__social">
      <h2>{t("footerHeading")}</h2>
      <p>{t("footerText")}</p>
      <SocialLinks />
    </div>
  );
}

/** Homepage band just before the footer: "Stay Connected with RideSaudi". */
export async function SocialSection() {
  const t = await getTranslations("social");
  return (
    <section className="social-band" aria-labelledby="social-h">
      <div className="wrap social-band__inner">
        <div>
          <h2 id="social-h">{t("homeHeading")}</h2>
          <p>{t("homeText")}</p>
        </div>
        <SocialLinks size="md" />
      </div>
    </section>
  );
}

/** Contact page: a deliberately quiet "Connect with us" block (below the booking / quote CTAs in weight). */
export async function SocialInline() {
  const t = await getTranslations("social");
  return (
    <section className="social-inline" aria-labelledby="social-inline-h">
      <h2 id="social-inline-h" className="social-inline__h">{t("contactHeading")}</h2>
      <p>{t("contactText")}</p>
      <SocialLinks />
    </section>
  );
}
