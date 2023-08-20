"use client";

import Loading from "@/components/Loading";
import Welcome from "@/components/Welcome";
import { getUserJots, getUserName } from "@/components/firebase/firebase";
import Notes from "@/components/notes/Notes";
import { Jot } from "@/types/jot";
import { useEffect, useState } from "react";

/* eslint-disable react/no-unescaped-entities */
const Jots = () => {
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [jots, setJots] = useState<{ [key: string]: Jot }>({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "");

    if (user) {
      setLoading(true);
      const userName = getUserName();

      const unsubscribe = getUserJots(user, (jots) => {
        setJots(jots);
      });

      userName.then((name) => setUserName(name)).catch(() => setError(true));

      setLoading(false);
      return () => unsubscribe();
    }
  }, []);

  if (error) return <p>error</p>;

  const content = (() => {
    if (loading || !userName) {
      return <Loading />;
    } else if (jots && Object.keys(jots).length === 0) {
      return <Welcome userName={userName} />;
    } else return <Notes data={jots} />;
  })();

  return content;
};
export default Jots;
