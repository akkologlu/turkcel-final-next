import { useTranslations } from "next-intl";
import CartContent from "../_components/cart/CartContent";
import AuthGuard from "../_components/common/AuthGuard";

const CartPage = () => {
  const t = useTranslations("lang");
  return (
    <div className="container mt-3">
      <h2 className="integralFont mb-4 text-uppercase">{t("yourCart")}</h2>
      <div className="row">
        <AuthGuard>
          <CartContent />
        </AuthGuard>
      </div>
    </div>
  );
};

export default CartPage;
