"use client";

import Loading from "@/components/Loading";
import Welcome from "@/components/Welcome";
import { getUserJots, getUserName } from "@/components/firebase/firebase";
import Notes from "@/components/notes/Notes";
import { Jot } from "@/types/jot";
import { useEffect, useState } from "react";

/* eslint-disable react/no-unescaped-entities */
const Jots = () => {
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");
  const [jots, setJots] = useState<{ [key: string]: Jot }>({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "");

    if (user) {
      const userName = getUserName();

      const unsubscribe = getUserJots(user, (jots) => {
        setJots(jots);
      });

      userName.then((name) => setUserName(name));

      setLoading(false);

      return () => unsubscribe();
    }
  }, []);

  const content = (() => {
    if (loading) {
      return <Loading />;
    } else if (Object.keys(jots).length > 1) {
      return <Notes data={jots} />;
    } else if (Object.keys(jots).length === 0) {
      return <Welcome userName={userName} />;
    } else return <Loading />;
  })();

  console.log(userName, jots);

  return content;
};
export default Jots;
