import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import AuthButton from "./AuthButton";
import CartButton from "./CartButton";
import Search from "./Search";
import SearchModal from "./SearchModal";
import ThemeToggle from "./ThemeToggle";
import {
  StyledNavbar,
  StyledNavbarBrand,
  StyledNavbarLink,
  StyledSearchButton,
} from "../../_styled";

const Navbar = () => {
  const locale = useLocale();
  const t = useTranslations("lang");

  return (
    <StyledNavbar className="navbar navbar-expand-lg my-0 py-0">
      <div className="container border-bottom py-3">
        <button
          className="navbar-toggler me-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#shopcoNavbar"
          aria-controls="shopcoNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link
          href="/"
          className="integralFont text-decoration-none fs-3 me-auto me-md-5"
        >
          <StyledNavbarBrand>SHOP.CO</StyledNavbarBrand>
        </Link>

        <div className="collapse navbar-collapse" id="shopcoNavbar">
          <StyledNavbarLink className="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
            <li className="nav-item dropdown">
              <Link className="nav-link" href={`/${locale}/products`}>
                {t("shop")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link "
                aria-current="page"
                href={`/${locale}/products`}
              >
                {t("onSale")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href={`/${locale}/products?newArrivals=true`}
              >
                {t("newArrivals")}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href={`/${locale}/#brands`}>
                {t("brands")}
              </Link>
            </li>
          </StyledNavbarLink>
          <SearchModal />
          <StyledSearchButton
            type="button"
            className="d-flex col-xxl-6 col-xl-4 px-2 rounded-pill  me-3 border-0"
            data-bs-toggle="modal"
            data-bs-target="#searchModal"
          >
            <Search />
          </StyledSearchButton>
          <div className="d-flex mt-4 mt-lg-0 gap-3">
            <CartButton />
            <AuthButton />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
