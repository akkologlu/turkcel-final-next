import CommentModal from "@/src/app/[locale]/_components/comments/CommentModal";
import ImageMenu from "@/src/app/[locale]/_components/ImageMenu";
import ProductCard from "@/src/app/[locale]/_components/ProductCard";
import ProductsComments from "@/src/app/[locale]/_components/ProductsComments";
import { getProduct, getProductsByType } from "@/src/app/[locale]/_lib/actions";
import { getTranslations } from "next-intl/server";
import Breadcrumb from "../../_components/common/Breadcrumb";
import ProductForm from "../../_components/ProductForm";
import { StyledTabLink } from "../../_styled";
import ProductDetailTab from "../../_components/ProductDetailTab";
import Faqs from "../../_components/Faqs";
import CommentOrder from "../../_components/comments/CommentOrder";

const ProductDetail = async ({ params, searchParams }) => {
  const t = await getTranslations("lang");
  const product = await getProduct(params.slug);
  const comments = product.comments;
  const alsoLike = await getProductsByType(product.type);
  const sortKey = searchParams._sort || "date";
  const sortOrder = searchParams._order || "desc";
  const sortedComments = [...comments].sort((a, b) => {
    if (sortKey === "date") {
      if (sortOrder === "asc") {
        return new Date(a[sortKey]) - new Date(b[sortKey]);
      } else {
        return new Date(b[sortKey]) - new Date(a[sortKey]);
      }
    } else {
      if (sortOrder === "asc") {
        return a[sortKey] - b[sortKey];
      } else {
        return b[sortKey] - a[sortKey];
      }
    }
  });
  return (
    <div className="container mt-3">
      <Breadcrumb
        product={product}
        path={[
          { title: "Home", href: "/" },
          { title: "Shop", href: "/products" },
        ]}
      />
      <div className="row">
        <div className="col-xl-6">
          <ImageMenu product={product} />
        </div>
        <ProductForm product={product} />
      </div>
      <div className="row py-5">
        <nav>
          <div
            className="d-flex justify-content-evenly"
            id="nav-tab"
            role="tablist"
          >
            <StyledTabLink
              className="bg-transparent w-100"
              id="nav-product-details-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-product-details"
              type="button"
              role="tab"
              aria-controls="nav-product-details"
              aria-selected="false"
            >
              {t("productDetails")}
            </StyledTabLink>
            <StyledTabLink
              className="bg-transparent w-100 active"
              id="nav-rating-reviews-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-rating-reviews"
              type="button"
              role="tab"
              aria-controls="nav-rating-reviews"
              aria-selected="true"
            >
              {t("ratingAndReviews")}
            </StyledTabLink>
            <StyledTabLink
              className=" bg-transparent  w-100"
              id="nav-faqs-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-faqs"
              type="button"
              role="tab"
              aria-controls="nav-faqs"
              aria-selected="false"
            >
              {t("faqs")}
            </StyledTabLink>
          </div>
        </nav>
        <div className="tab-content mt-4" id="nav-tabContent">
          <div
            className="tab-pane fade"
            id="nav-product-details"
            role="tabpanel"
            aria-labelledby="nav-product-details-tab"
          >
            <ProductDetailTab product={product} />
          </div>
          <div
            className="tab-pane fade show active"
            id="nav-rating-reviews"
            role="tabpanel"
            aria-labelledby="nav-rating-reviews-tab"
          >
            <div className="d-flex justify-content-between mb-4">
              <h4 className="fw-bolder" id="allReviews">
                {t("allReviews")}{" "}
                <span className="fs-6  opacity-75">({comments.length})</span>
              </h4>
              <div className="col-lg-3 col-5 d-flex flex-wrap gap-2 gap-lg-0 justify-content-between">
                <CommentOrder sortKey={sortKey} sortOrder={sortOrder} />
                <CommentModal product={product} />
              </div>
            </div>
            <ProductsComments comments={sortedComments} />
          </div>
          <div
            className="tab-pane fade"
            id="nav-faqs"
            role="tabpanel"
            aria-labelledby="nav-faqs-tab"
          >
            <Faqs />
          </div>
        </div>
      </div>
      <div className="row py-5">
        <h2 className="integralFont text-center pb-4 text-uppercase">
          {t("youMighAlsoLike")}
        </h2>
        {alsoLike.map((product) => (
          <ProductCard key={product.id} product={product} col={3} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
