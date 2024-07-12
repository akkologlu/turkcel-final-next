"use client";

import Image from "next/image";
import { useState } from "react";
import { StyledImageMenuActive, StyledImageMenuItem } from "../_styled";

const ImageMenu = ({ product }) => {
  const images = [
    {
      id: 1,
      src: `/images/${product.image}`,
    },
    {
      id: 2,
      src: "/images/sleeve-striped-tshirt.png",
    },
    {
      id: 3,
      src: "/images/skinniy-fit-jean.png",
    },
  ];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="row">
      <div className="rounded-4 col-lg-8 mb-3 mb-md-0 order-md-last ">
        <StyledImageMenuActive>
          <Image
            src={selectedImage.src}
            alt="detail"
            fill
            className="rounded-4 object-fit-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </StyledImageMenuActive>
      </div>
      <div className="col-lg-3 order-md-first">
        <div className="row">
          {images.map((image) => (
            <div key={image.id} className="col-4 col-lg-12 cursor">
              <StyledImageMenuItem
                key={image.id}
                className="mb-3 cursor-pointer rounded-4"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt="detail"
                  fill
                  className="rounded-4 object-fit-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </StyledImageMenuItem>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageMenu;
