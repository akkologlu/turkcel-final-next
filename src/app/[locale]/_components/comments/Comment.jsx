import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import { StyledIcon } from "../../_styled";
import { useTranslations } from "next-intl";

const Comment = ({ customer }) => {
  function formatDate(isoString) {
    const date = new Date(isoString);

    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  const t = useTranslations("lang");
  return (
    <>
      <Rating
        style={{ maxWidth: 100 }}
        value={customer.rating}
        className="py-1"
        readOnly
      />
      <h5 className="fw-bold my-2 d-flex gap-2">
        {customer.name}
        <StyledIcon>
          <Image
            src="/icons/check.png"
            alt="verified"
            className="object-fit-contain"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </StyledIcon>
      </h5>
      <p className="my-2 opacity-50 fw-lighter">{customer.testimonial}</p>
      {customer.date && (
        <p className="opacity-75">
          {t("postedOn")} {formatDate(customer.date)}
        </p>
      )}
    </>
  );
};

export default Comment;
