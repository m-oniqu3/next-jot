import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center h-screen xs:justify-center ">
      <article className="relative ">
        <Image src="/assets/jot.svg" alt="Jot" width={200} height={200} />
        <div className="relative w-52 flex flex-col gap-4 left-20 -top-8">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link
            href="/register"
            className="bg-black text-white px-4 py-1.5 w-fit hover:bg-gray-900 duration-300"
          >
            Get Started
          </Link>
        </div>
      </article>
    </main>
  );
}
