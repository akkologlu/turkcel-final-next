"use client";
import { useEffect, useState } from "react";
import { StyledColorRound, StyledIcon } from "../_styled";
import Image from "next/image";
import Button from "./common/Button";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "@/src/redux/features/authSlice";
import Counter from "./common/Counter";
import toast from "react-hot-toast";

const ProductConfig = ({ id, image, title, price, sizes, colors }) => {
  const t = useTranslations("lang");
  const [selectedColor, setSelectedColor] = useState(colors.split(",")[0]);
  const [selectedSize, setSelectedSize] = useState(sizes.split(",")[0]);
  const [count, setCount] = useState(1);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const handleAddToBasket = async (e) => {
    e.preventDefault();
    if (!user) return toast.error(t("loginToAddCart"));
    try {
      const newProduct = {
        cartId: crypto.randomUUID(),
        id,
        image,
        title,
        price,
        selectedColor,
        selectedSize,
        count,
      };
      dispatch(addToBasket(newProduct));
      toast.success(t("addedToCart"));
    } catch (error) {
      toast.error(t("error"), error.message);
    }
  };

  return (
    <div>
      <div className="py-3 border-top border-bottom">
        <h6 className="opacity-75">{t("selectColors")}</h6>
        <div role="group" aria-label="Color selection" className="d-flex gap-2">
          {colors.split(",").map((color) => (
            <StyledColorRound
              color={color}
              key={color}
              type="button"
              onClick={() => setSelectedColor(color)}
            >
              {selectedColor === color ? (
                <span
                  className={`${
                    color === "white" ? "text-black" : "text-white"
                  } fs-4`}
                >
                  ✓
                </span>
              ) : (
                ""
              )}
            </StyledColorRound>
          ))}
        </div>
      </div>

      <div className="py-4 border-bottom">
        <h6 className="opacity-75">{t("chooseSize")}</h6>
        <div role="group" aria-label="Size selection" className="d-flex gap-2">
          {sizes.split(",").map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setSelectedSize(size)}
              className={`rounded-pill border-0 px-4 py-2 ${
                selectedSize === size ? "bg-black text-white" : ""
              }`}
            >
              <span className="">{size}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="row pt-3 mt-3">
        <div className="col-4">
          <Counter count={count} setCount={setCount} />
        </div>
        <div className="col-8">
          <Button onclick={handleAddToBasket}>{t("addToCart")}</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductConfig;
