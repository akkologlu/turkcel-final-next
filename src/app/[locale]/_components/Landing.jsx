import Image from "next/image";
import { StyledLandingMobile, StyledLandingStats } from "../_styled";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const Landing = () => {
  const locale = useLocale();
  const t = useTranslations("lang");
  return (
    <main className="landingPage">
      <div className="container-xl">
        <div className="col-lg-6 ">
          <h1 className="integralFont fw-bold text-black text-uppercase">
            {t("header")}
          </h1>
          <p className="py-3 text-light">{t("subHeader")}</p>
          <Link
            href={`${locale}/products`}
            className="text-white bg-black rounded-pill py-2 px-5 border-0 col-12 col-md-4 text-decoration-none"
          >
            {t("shopNow")}
          </Link>
          <div className="pt-4 d-flex gap-4">
            <StyledLandingStats className="text-md-start text-center">
              <h2 className="mb-1 fw-bold text-black">200+</h2>
              <p>{t("intBrands")}</p>
            </StyledLandingStats>
            <StyledLandingStats className="text-md-start text-center">
              <h2 className="mb-1 fw-bold text-black">2,000+</h2>
              <p>{t("hqProducts")}</p>
            </StyledLandingStats>
            <StyledLandingStats className=" text-md-start text-center">
              <h2 className="mb-1 fw-bold text-black">30,000+</h2>
              <p>{t("happyCustomers")}</p>
            </StyledLandingStats>
          </div>
        </div>
        <StyledLandingMobile className="d-md-none d-block position-relative w-100">
          <Image
            src="/images/landing-mobile.png"
            alt="mobile-landing"
            fill
            className="rounded-4 object-fit-contain"
            sizes="(max-width: 600px) 100vw, 
               (max-width: 1200px) 50vw, 
               33vw"
          />
        </StyledLandingMobile>
      </div>
    </main>
  );
};

export default Landing;
