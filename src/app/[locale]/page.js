import Brands from "./_components/Brands";
import BrowseByDressStyle from "./_components/BrowseByDressStyle";
import HomePageComments from "./_components/comments/HomePageComments";
import Landing from "./_components/Landing";
import Showcase from "./_components/Showcase";
import { getProducts } from "./_lib/actions";
import { getTranslations } from "next-intl/server";

export const revalidate = 0;
export default async function Home() {
  const products = await getProducts();
  const t = await getTranslations("lang");
  return (
    <main>
      <Landing />
      <Brands />
      <Showcase
        data={products.filter((product) => product.newArrivals === true)}
        title={t("newArrivals")}
      />
      <div className="container-xl">
        <hr />
      </div>
      <Showcase
        data={products.filter((product) => product.topSelling === true)}
        title={t("topSelling")}
      />
      <BrowseByDressStyle />
      <HomePageComments />
    </main>
  );
}
