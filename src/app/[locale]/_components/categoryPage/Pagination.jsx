import Image from "next/image";
import {
  StyledPagination,
  StyledPaginationButton,
  StyledPaginationNumber,
} from "../../_styled";
import { useTranslations } from "next-intl";

const Pagination = ({ currentPage, onPageChange, plength }) => {
  const t = useTranslations("lang");
  const pages = Array.from({ length: plength / 9 + 1 }, (_, i) => i + 1);
  return (
    <StyledPagination className="d-flex align-items-center mt-4">
      <StyledPaginationButton
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <Image
          src="/icons/left-arrow.png"
          alt="left-arrow"
          width={10}
          height={10}
          className="me-1"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {t("previous")}
      </StyledPaginationButton>
      <div className="mx-2">
        {pages.map((page) => (
          <StyledPaginationNumber
            key={page}
            className={`mx-1 ${currentPage === page ? "active" : ""}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </StyledPaginationNumber>
        ))}
      </div>
      <StyledPaginationButton
        disabled={currentPage === pages.length}
        onClick={() => onPageChange(currentPage + 1)}
      >
        {t("next")}
        <Image
          src="/icons/right-arrow.png"
          alt="right-arrow"
          width={10}
          height={10}
          className="ms-1"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </StyledPaginationButton>
    </StyledPagination>
  );
};

export default Pagination;
