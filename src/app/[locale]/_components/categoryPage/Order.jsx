"use client";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const Order = () => {
  const t = useTranslations("lang");
  const router = useRouter();
  const query = new URLSearchParams();
  const handleChange = (e) => {
    const order = e.target.value;
    if (order === "rating,asc" || order === "rating,desc") {
      query.set("_sort", "rating");
      query.set("_order", order.split(",")[1]);
    } else {
      query.set("_sort", "price");
      query.set("_order", order.split(",")[1]);
    }

    router.push(`/en/products?${query.toString()}`);
  };
  return (
    <select onChange={handleChange}>
      <option value="rating,asc">{t("ratingAsc")}</option>
      <option value="rating,desc">{t("ratingDesc")}</option>
      <option value="price,asc">{t("priceAsc")}</option>
      <option value="price,desc">{t("priceDesc")}</option>
    </select>
  );
};

export default Order;
