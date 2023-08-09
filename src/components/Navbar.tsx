"use client";

import Button from "@/components/Button";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const handleClick = () => {
    console.log("logout");
  };

  return (
    <nav className="h-[10vh]">
      <Container className="flex justify-between items-center">
        <Image
          src="/assets/jot.svg"
          alt="logo"
          width={70}
          height={70}
          className="relative -left-2"
        />

        <ul className="flex items-center gap-3 ">
          <li className="font-medium">
            <Link href="/jots">jots</Link>
          </li>

          <li className="font-medium">
            <Link href="/jots/create">create</Link>
          </li>

          <Button onClick={handleClick}>logout</Button>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
