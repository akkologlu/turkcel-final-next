const ProductDetailTab = ({ product }) => {
  return (
    <div>
      <div className="row text-center">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetailTab;
