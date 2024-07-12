import Filter from "../_components/categoryPage/Filter";
import ProductsList from "../_components/categoryPage/ProductsList";
import FilterModal from "../_components/FilterModal";
import { getAllProductsLength, getProducts } from "../_lib/actions";
import { getTranslations } from "next-intl/server";
import { StyledFilterDiv } from "../_styled";

export const dynamic = "force-dynamic";

const ProductsPage = async ({ searchParams }) => {
  const t = await getTranslations("lang");

  const query = new URLSearchParams(searchParams).toString();
  const length = await getAllProductsLength();
  const products = await getProducts(query);
  return (
    <div className="container mt-5">
      <div className="row position-relative">
        <FilterModal length={length} />
        <StyledFilterDiv className="col-lg-4">
          <Filter length={length} />
        </StyledFilterDiv>
        <ProductsList data={products} />
      </div>
    </div>
  );
};

export default ProductsPage;
