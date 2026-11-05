"use client";
import { Link, usePathname } from "@/i18n/navigation";
import { track } from "@/lib/analytics";

export default function LangSwitcher({ locale, label, en, ar }: { locale: string; label: string; en: string; ar: string }) {
  const pathname = usePathname();
  const target = locale === "ar" ? "en" : "ar";
  return (
    <Link
      href={pathname}
      locale={target}
      hrefLang={target}
      lang={target}
      className="lang-switch"
      aria-label={`${label}: ${target === "ar" ? ar : en}`}
      onClick={() => track("language_select", { to: target })}
    >
      {target === "ar" ? ar : en}
    </Link>
  );
}
