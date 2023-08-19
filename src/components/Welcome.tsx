"use client";

/* eslint-disable react/no-unescaped-entities */
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

const Welcome = () => {
  const router = useRouter();
  return (
    <section className="h-[80vh] flex justify-center items-center">
      <article className="flex flex-col gap-3 text-center items-center max-w-xs">
        <h2 className="font-bold text-3xl">
          hey seven,<br></br> welcome to
          <span className="text-orange-500"> jot!</span>
        </h2>
        <p>
          it looks like you don't have any jots yet. click the button below to
          get started
        </p>

        <Button className="w-min" onClick={() => router.push("/jots/create")}>
          create
        </Button>
      </article>
    </section>
  );
};

export default Welcome;
