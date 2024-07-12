"use client";

import { useRouter } from "next/navigation";
import { StyledCommentOrderSelect } from "../../_styled";
import { useTranslations } from "next-intl";

const CommentOrder = ({ sortKey, sortOrder }) => {
  const t = useTranslations("lang");
  const query = new URLSearchParams();
  const router = useRouter();
  const handleSortChange = (e) => {
    const [key, order] = e.target.value.split("-");
    query.set("_sort", key);
    query.set("_order", order);
    router.push(`/en/products/1?${query.toString()}`);
  };
  return (
    <StyledCommentOrderSelect
      onChange={handleSortChange}
      defaultValue={`${sortKey}-${sortOrder}`}
    >
      <option value="date-asc">{t("earliest")}</option>
      <option value="date-desc">{t("latest")}</option>
      <option value="rating-asc">{t("highRating")}</option>
      <option value="rating-desc">{t("lowRating")}</option>
    </StyledCommentOrderSelect>
  );
};

export default CommentOrder;
