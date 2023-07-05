"use client";

import { usePathname } from "next/navigation";

import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

  const button = pathname === "/register" ? "Login" : "Register";
  const path = pathname === "/register" ? "/login" : "/register";

  return (
    <nav>
      <Container className="flex justify-between items-center">
        <Image
          src="/assets/jot.svg"
          alt="logo"
          width={70}
          height={70}
          className="relative -left-2"
        />
        <Link
          href={path}
          className="bg-black text-white px-4 py-1.5 w-fit hover:bg-gray-900 rounded-md duration-300 text-[.9rem] "
        >
          {button}
        </Link>
      </Container>
    </nav>
  );
};

export default Navbar;
