"use client";
import { useState } from "react";
import ProductCard from "./ProductCard";
import { useTranslations } from "next-intl";
import { StyledViewAllButton } from "../_styled";

const ShowcaseList = ({ data }) => {
  const t = useTranslations("lang");
  const [showValue, setShowValue] = useState(4);
  return (
    <>
      <div className="row">
        {data.slice(0, showValue).map((product) => (
          <ProductCard key={product.id} product={product} col={3} />
        ))}
      </div>
      <StyledViewAllButton
        onClick={() => setShowValue(showValue === 4 ? 8 : 4)}
        className="rounded-pill py-2 border border-light-subtle fw-medium mx-auto col-md-2 col-12 d-block mt-5"
      >
        {showValue === 4 ? t("viewAll") : t("viewLess")}
      </StyledViewAllButton>
    </>
  );
};

export default ShowcaseList;
