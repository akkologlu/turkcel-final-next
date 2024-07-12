import Image from "next/image";
import {
  StyledIcon,
  StyledNewsletter,
  StyledNewsletterInput,
} from "../_styled";
import { useTranslations } from "next-intl";

const Newsletter = () => {
  const t = useTranslations("lang");
  return (
    <StyledNewsletter className="container bg-black p-5 rounded-4">
      <div className="row justify-content-between">
        <div className="col-lg-6 mb-3 mb-md-0">
          <h2 className="text-white integralFont text-uppercase">
            {t("newsletterTitle")}
          </h2>
        </div>
        <div className="col-lg-4">
          <form>
            <div className="w-100 rounded-pill px-3 py-2 bg-white d-flex justify-content-between">
              <StyledIcon className="col-1">
                <Image
                  src="/icons/email-icon.png"
                  alt="verified"
                  className="object-fit-contain"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </StyledIcon>
              <StyledNewsletterInput
                type="email"
                placeholder="Enter your email address"
                className="col-11 border-0 ps-3"
              />
            </div>
            <button className="w-100 rounded-pill px-3 py-2 bg-white mt-3">
              {t("subscribeNewsletter")}
            </button>
          </form>
        </div>
      </div>
    </StyledNewsletter>
  );
};

export default Newsletter;
