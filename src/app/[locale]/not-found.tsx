import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("a11y");
  return (
    <main className="notfound">
      <p className="eyebrow">404</p>
      <h1>RideSaudi</h1>
      <Link className="btn btn--primary" href="/">{t("home")}</Link>
    </main>
  );
}
