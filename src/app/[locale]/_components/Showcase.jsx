import ShowcaseList from "./ShowcaseList";

const Showcase = ({ title, data }) => {
  return (
    <main className="container-xl pb-5" id="newArrivals">
      <h2 className="text-center text-uppercase fw-bold integralFont py-4">
        {title}
      </h2>
      <ShowcaseList data={data} />
    </main>
  );
};

export default Showcase;
