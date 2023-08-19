"use client";

/* eslint-disable react/no-unescaped-entities */
import Button from "@/components/Button";
import { getUserName } from "@/components/firebase/firebase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Welcome = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");
  const user = getUserName();

  useEffect(() => {
    user
      .then((res) => {
        setUserName(res);
        setLoading(false);
      })
      .catch((error) => toast.error(error.message));
  }, [user]);

  if (loading) return <p>loading....</p>;

  return (
    <section className="h-[80vh] flex justify-center items-center">
      <article className="flex flex-col gap-3 text-center items-center max-w-xs">
        <h2 className="font-bold text-3xl">
          hey {userName},<br></br> welcome to
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
