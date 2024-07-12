import Image from "next/image";
import { StyledBrand, StyledBrands } from "../_styled";

const Brands = () => {
  const brands = ["versace", "zara", "gucci", "prada", "calvin"];
  return (
    <main className="bg-black py-4" id="brands">
      <div className="container-xl">
        <StyledBrands className=" d-flex justify-content-between flex-wrap ">
          {brands.map((brand, index) => (
            <StyledBrand key={index} className="position-relative">
              <Image
                src={`/images/${brand}.png`}
                fill
                className="object-fit-contain"
                alt={brand}
                sizes="(max-width: 600px) 100vw, 
               (max-width: 1200px) 50vw, 
               33vw"
              />
            </StyledBrand>
          ))}
        </StyledBrands>
      </div>
    </main>
  );
};

export default Brands;
