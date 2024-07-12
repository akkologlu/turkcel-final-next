import { StyledProductList } from "../../_styled";
import ProductCard from "../ProductCard";

const ProductsList = ({ data }) => {
  return (
    <StyledProductList className="col-lg-8">
      <div className="row">
        {data.slice(0, 9).map((product) => (
          <ProductCard product={product} key={product.id} col={4} />
        ))}
      </div>
    </StyledProductList>
  );
};

export default ProductsList;
