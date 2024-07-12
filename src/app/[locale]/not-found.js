import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {
  const t = useTranslations("lang");
  const locale = useLocale();
  return (
    <div>
      <h2>{t("notFound")}</h2>
      <p>{t("couldNotFind")}</p>
      <Link href={`/${locale}/`}>{t("backToHome")}</Link>
    </div>
  );
}
