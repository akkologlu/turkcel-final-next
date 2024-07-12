import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import Link from "next/link";
import {
  StyledCardImage,
  StyledDiscountBadge,
  StyledProductCard,
} from "../_styled";

const ProductCard = ({ product, col }) => {
  return (
    <Link
      href={`/en/products/${product.id}`}
      className={`col-lg-${col} col-6 text-decoration-none text-black mt-4`}
    >
      <StyledProductCard>
        <StyledCardImage className="position-relative w-100 product-card-image">
          <Image
            src={`/images/${product.image}`}
            fill
            className="object-fit-cover rounded-3"
            alt="calvin"
            sizes="(max-width: 600px) 100vw, 
          (max-width: 1200px) 50vw, 
               33vw"
          />
        </StyledCardImage>
        <h5 className=" pt-3 mb-0">{product.title}</h5>
        <div className="d-flex align-items-center gap-1">
          <Rating
            style={{ maxWidth: 100 }}
            value={product.rating}
            className="py-1"
            readOnly
          />
          <p className="mb-0">
            {product.rating}/<span className="opacity-75">5</span>
          </p>
        </div>
        <div className="d-flex gap-1 gap-md-3 align-items-center">
          <h5 className="fw-bold m-0 ">${product.price}</h5>
          {product.discountPercentage ? (
            <h5 className="fw-bold m-0 opacity-75 text-decoration-line-through ">
              $
              {Math.floor(
                product.price / (1 - product.discountPercentage / 100)
              )}
            </h5>
          ) : (
            <></>
          )}
          {product.discountPercentage ? (
            <StyledDiscountBadge className="bg-danger m-0 px-3 py-1 rounded-pill bg-opacity-10 text-danger">
              -{product.discountPercentage}%
            </StyledDiscountBadge>
          ) : (
            <></>
          )}
        </div>
      </StyledProductCard>
    </Link>
  );
};

export default ProductCard;
