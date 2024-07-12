import Image from "next/image";

const Loading = () => {
  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <Image
        src="/icons/loading.svg"
        width={100}
        height={100}
        alt="loading"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default Loading;
