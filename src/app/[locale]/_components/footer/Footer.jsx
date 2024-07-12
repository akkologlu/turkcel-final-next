import Image from "next/image";
import { StyledFooter, StyledNavbarBrand } from "../../_styled";
import Socials from "../Socials";
import FooterItem from "./FooterColumn";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("lang");
  return (
    <StyledFooter className=" text-muted">
      <div className="container ">
        <div className="row justify-content-between pb-4 border-bottom">
          <div className="col-md-3 col-12">
            <StyledNavbarBrand className="integralFont text-black">
              SHOP.CO
            </StyledNavbarBrand>
            <p className=" font-light py-4">{t("footerDesc")}</p>
            <Socials />
          </div>
          <FooterItem
            title={t("company")}
            items={[t("about"), t("features"), t("works"), t("career")]}
          />
          <FooterItem
            title={t("help")}
            items={[
              t("customerSupport"),
              t("deliveryDetails"),
              t("termsCondiitons"),
              t("privacyPolicy"),
            ]}
          />
          <FooterItem
            title={t("faq")}
            items={[
              t("account"),
              t("manageDeliveries"),
              t("orders"),
              t("payments"),
            ]}
          />
          <FooterItem
            title={t("resources")}
            items={[
              t("freeEbooks"),
              t("devTutorial"),
              t("howToBlog"),
              t("youtubePlaylist"),
            ]}
          />
        </div>
        <div className="d-flex justify-content-md-between justify-content-center pt-4 flex-wrap">
          <p className="opacity-75">{t("copyright")}</p>
          <Image
            src="/images/payments.png"
            height={32}
            width={200}
            alt="payments"
            sizes="(max-width: 600px) 100vw, 
               (max-width: 1200px) 50vw, 
               33vw"
          />
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
