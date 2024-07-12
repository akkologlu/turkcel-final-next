"use client";
import Link from "next/link";
import {
  StyledBannerButton,
  StyledDiscountBadge,
  StyledOfferBanner,
} from "../../_styled";
import { useState } from "react";
import { useTranslations } from "next-intl";

const OfferBanner = () => {
  const t = useTranslations("lang");
  const [display, setDisplay] = useState(true);
  return (
    <>
      {display && (
        <StyledOfferBanner className="bg-black text-center text-white d-flex align-items-center justify-content-center ">
          <div className="container position-relative">
            <StyledDiscountBadge className=" mb-0">
              {t("offer")}{" "}
              <Link className="text-white  ms-1" href="#">
                {t("signUpNow")}
              </Link>
            </StyledDiscountBadge>
            <StyledBannerButton onClick={() => setDisplay(false)}>
              &times;
            </StyledBannerButton>
          </div>
        </StyledOfferBanner>
      )}
    </>
  );
};

export default OfferBanner;
