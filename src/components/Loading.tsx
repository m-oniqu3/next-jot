import Image from "next/image";

const Loading = () => {
  return (
    <figure className="h-[80vh] flex justify-center items-center">
      <Image src="/assets/loading.svg" alt="loading" width={40} height={40} />
    </figure>
  );
};

export default Loading;
