"use client";

import Container from "@/components/Container";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import { isUserLoggedIn } from "@/components/auth/auth";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const NotesLayout = ({ children }: Props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isLoggedIn = isUserLoggedIn();
    if (!isLoggedIn) {
      redirect("/login");
    }
    setLoading(false);
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <Navbar />

      <Container>
        <main className="pt-9">{children}</main>
      </Container>
    </div>
  );
};

export default NotesLayout;
