import Image from "next/image";
import { StyledDressCard } from "../_styled";
import Link from "next/link";
import { useLocale } from "next-intl";

const DressCard = ({ col, title, image, link }) => {
  const locale = useLocale();
  return (
    <Link
      href={`/${locale}/products?dressStyle_like=${link}`}
      className={`col-md-${col} col-12 text-decoration-none text-black`}
    >
      <StyledDressCard className=" position-relative rounded-4 mb-3">
        <h3 className="z-2 position-relative pt-4 ps-4 fw-bold">{title}</h3>
        <Image
          src={`/images/${image}bg.png`}
          alt={image}
          fill
          className="object-fit-cover rounded-4"
          sizes="(max-width: 600px) 100vw, 
               (max-width: 1200px) 50vw, 
               33vw"
        />
      </StyledDressCard>
    </Link>
  );
};

export default DressCard;
