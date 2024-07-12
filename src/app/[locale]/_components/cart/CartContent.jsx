"use client";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const CartContent = () => {
  const t = useTranslations("lang");
  const { id, name, basket } = useSelector((state) => state.auth.user);
  const [clientBasket, setClientBasket] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setClientBasket(basket);
    setLoading(false);
  }, [basket]);

  if (!clientBasket.length) {
    return (
      <h2 className="text-center">
        {loading ? t("loading") : t("yourCartIsEmpty")}
      </h2>
    );
  }

  return (
    <>
      <div className="col-lg-7 ">
        <div className="rounded-4 border p-1 p-lg-3">
          <div className="row gap-3">
            {clientBasket.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="col-lg-5">
        <OrderSummary />
      </div>
    </>
  );
};

export default CartContent;
