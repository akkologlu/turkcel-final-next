"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function Error({ error, reset }) {
  const t = useTranslations("lang");
  const locale = useLocale();

  return (
    <div className="container text-center d-flex flex-column align-items-center gap-2 mt-5">
      <h2>{t("somethingWentWrong")}</h2>
      <p>{error.message}</p>
      <button className="border-0 btn btn-dark col-4" onClick={() => reset()}>
        {t("tryAgain")}
      </button>
      <Link className="text-dark" href={`/${locale}/`}>
        {t("backToHome")}
      </Link>
    </div>
  );
}
