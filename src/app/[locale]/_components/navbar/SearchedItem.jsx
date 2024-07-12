import Image from "next/image";
const SearchedItem = ({ product }) => {
  return (
    <>
      <div className="col-lg-2">
        <Image
          src={`/images/${product.image}`}
          alt={product.title}
          width={80}
          height={80}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="rounded-3"
        />
      </div>
      <h6 className=" col-10 fw-bolder pt-2 ps-4">{product.title}</h6>
    </>
  );
};

export default SearchedItem;
