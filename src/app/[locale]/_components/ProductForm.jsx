import { Rating } from "@smastrom/react-rating";
import { ProductDetailPrice, StyledDiscountBadge } from "../_styled";
import ProductConfig from "./ProductConfig";

const ProductForm = ({ product }) => {
  return (
    <div className="col-xl-6">
      <h2 className="integralFont">{product.title}</h2>
      <div className="d-flex align-items-center gap-1">
        <Rating
          style={{ maxWidth: 100 }}
          value={product.rating}
          className="py-1"
          readOnly
        />
        <p className="mb-0 ">
          {product.rating}/<span className="opacity-75">5</span>
        </p>
      </div>
      <div className="d-flex gap-1 gap-md-3 align-items-center mt-2">
        <ProductDetailPrice className="fw-bold m-0">
          ${product.price}
        </ProductDetailPrice>
        {product.discountPercentage ? (
          <ProductDetailPrice className="fw-bold m-0 opacity-50 text-decoration-line-through">
            $
            {Math.floor(product.price / (1 - product.discountPercentage / 100))}
          </ProductDetailPrice>
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
      <p className="opacity-75 mt-2">{product.description}</p>
      <ProductConfig
        id={product.id}
        image={product.image}
        title={product.title}
        price={product.price}
        sizes={product.sizes}
        colors={product.colors}
      />
    </div>
  );
};

export default ProductForm;
