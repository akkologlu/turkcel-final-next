import Image from "next/image";
import Button from "../common/Button";
import { useSelector } from "react-redux";
import { StyledIcon, StyledNewsletterInput } from "../../_styled";
import { useState } from "react";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";

const OrderSummary = () => {
  const t = useTranslations("lang");
  const [promo, setPromo] = useState("");
  const [discount, setDiscount] = useState(0);
  const basket = useSelector((state) => state.auth.user.basket);

  const handlePromo = (e) => {
    e.preventDefault();
    if (promo === "atmosware") {
      toast.success("Promo code applied!");
      setDiscount(20);
      setPromo("");
    } else {
      toast.error("Invalid promo code!");
      setDiscount(0);
      setPromo("");
    }
  };

  const calculateSubtotal = () => {
    return basket.reduce((acc, item) => acc + item.price * item.count, 0);
  };

  const calculateDeliveryFee = () => {
    const subtotal = calculateSubtotal();
    if (subtotal >= 100) {
      return 0;
    }
    return 19.99;
  };

  const subtotal = calculateSubtotal();
  const deliveryFee = calculateDeliveryFee();
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="rounded-4 p-3 border">
      <h4 className="mb-3 fw-bolder">{t("orderSummary")}</h4>
      <div className="d-flex justify-content-between">
        <h5 className="opacity-75">{t("subtotal")}</h5>
        <p className="fw-bolder">${subtotal.toFixed(2)}</p>
      </div>
      <div className="d-flex justify-content-between">
        <h5 className="opacity-75">{t("discount")}</h5>
        <p className="fw-bolder text-danger">-${discount.toFixed(2)}</p>
      </div>
      <div className="d-flex justify-content-between border-bottom">
        <h5 className="opacity-75">
          {t("deliveryFee")} <small>({t("over100Free")})</small>
        </h5>
        <p className="fw-bolder">${deliveryFee.toFixed(2)}</p>
      </div>
      <div className="d-flex justify-content-between mt-3">
        <h4>{t("total")}</h4>
        <h4 className="fw-bolder">${total.toFixed(2)}</h4>
      </div>
      <div className="row align-items-center">
        <div className="col-9">
          <form
            onSubmit={handlePromo}
            className="d-flex px-2 py-1 rounded-pill bg-body-secondary my-3"
          >
            <StyledIcon className="my-auto d-flex justify-content-center align-items-center">
              <Image
                src={`/icons/promo.png`}
                alt="search"
                width={20}
                height={20}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </StyledIcon>
            <StyledNewsletterInput
              className="form-control bg-transparent border-0 w-100"
              type="text"
              placeholder="Add promo code : atmosware"
              value={promo}
              onChange={(e) => setPromo(e.target.value)}
            />
          </form>
        </div>

        <div className="col-3">
          <Button onclick={handlePromo} className="col-3">
            {t("apply")}
          </Button>
        </div>
      </div>
      <Button>{t("checkout")}</Button>
    </div>
  );
};

export default OrderSummary;
