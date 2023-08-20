import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center h-screen xs:justify-center ">
      <article className="relative ">
        <Image src="/assets/jot.svg" alt="Jot" width={200} height={200} />
        <div className="relative w-52 flex flex-col gap-3 left-20 -top-8">
          <p className="font-light text-sm lowercase">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Link
            href="/register"
            className="bg-black text-white px-4 py-1.5 w-fit lowercase hover:bg-gray-900 rounded-md duration-300 text-[.9rem]"
          >
            Get Started
          </Link>
        </div>
      </article>
    </main>
  );
}
