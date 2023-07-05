import Image from "next/image";
import Link from "next/link";
import jot from "./../public/jot.svg";

export default function Home() {
  return (
    <main className="flex items-center h-screen xs:justify-center ">
      <article className="relative ">
        <Image src={jot} alt="Jot" width={200} height={200} />
        <div className="relative w-52 flex flex-col gap-4 left-20 -top-8">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link
            href="/account"
            className="bg-neutral-700 rounded-md text-white px-4 py-1.5 w-fit transition ease-in-out  hover:bg-neutral-900"
          >
            Get Started
          </Link>
        </div>
      </article>
    </main>
  );
}
