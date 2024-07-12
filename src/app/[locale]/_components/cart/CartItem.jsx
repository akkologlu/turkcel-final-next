import Image from "next/image";
import Counter from "../common/Counter";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { StyledMiniCartText } from "../../_styled";
import {
  removeFromBasket,
  updateItemCount,
} from "@/src/redux/features/authSlice";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";

const CartItem = ({ item }) => {
  const t = useTranslations("lang");
  const dispatch = useDispatch();
  const [count, setCount] = useState(item.count);

  const handleCountChange = (newCount) => {
    setCount(newCount);
    dispatch(
      updateItemCount({ itemId: item.id, count: newCount, cartId: item.cartId })
    );
  };

  return (
    <div className="row">
      <div className="col-5 col-lg-2">
        <Image
          src={`/images/${item.image}`}
          alt={item.title}
          width={124}
          height={124}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="rounded-3"
        />
      </div>
      <div className="col-7 col-lg-10 ps-0 ps-lg-4">
        <div className="d-flex justify-content-between">
          <h5 className="fw-bolder fs-6 fs-lg-5">{item.title}</h5>
          <Image
            src="/icons/trash.png"
            alt="trash"
            width={24}
            height={24}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="cursor"
            onClick={() => {
              dispatch(removeFromBasket(item.cartId));
              toast.success(t("itemRemovedFromCart"));
            }}
          />
        </div>
        <StyledMiniCartText className="m-0">
          {t("size")}: <span className="opacity-75">{item.selectedSize}</span>
        </StyledMiniCartText>
        <StyledMiniCartText className="m-0">
          {t("color")}: <span className="opacity-75">{item.selectedColor}</span>
        </StyledMiniCartText>
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="fw-bolder mt-3 fs-5 fs-lg-4">${item.price}</h4>
          <div className="col-6 col-lg-3">
            <Counter count={count} setCount={handleCountChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
