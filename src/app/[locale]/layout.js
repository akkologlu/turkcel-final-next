import "../../../css/main.css";
import "@smastrom/react-rating/style.css";
import StyledComponentsRegistry from "./_lib/registry";
import Footer from "./_components/footer/Footer";
import Script from "next/script";
import OfferBanner from "./_components/navbar/OfferBanner";
import Navbar from "./_components/navbar/Navbar";
import Newsletter from "./_components/Newsletter";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import StoreProvider from "./StoreProvider";
import { Toaster } from "react-hot-toast";
import ThemeWrapper from "./_theme/ThemeProvider";
import { GlobalStyle } from "./_styled";

export const metadata = {
  title: "Shop.co",
  description: "The best online shop in the world",
};

export default async function LocaleLayout({ children, params: { locale } }) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <StoreProvider>
          <NextIntlClientProvider messages={messages}>
            <ThemeWrapper>
              <GlobalStyle />
              <StyledComponentsRegistry>
                <Toaster />
                <OfferBanner />
                <Navbar />
                {children}
                <Newsletter />
                <Footer />
              </StyledComponentsRegistry>
            </ThemeWrapper>
            <Script
              src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
              integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
              crossorigin="anonymous"
            ></Script>
          </NextIntlClientProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
