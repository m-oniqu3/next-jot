"use client";

import { usePathname } from "next/navigation";

import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

  const button = pathname === "/register" ? "Login" : "Register";

  console.log(pathname);

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
          href="/login"
          className="bg-black text-white px-4 py-1.5 w-fit hover:bg-gray-900 duration-300"
        >
          {button}
        </Link>
      </Container>
    </nav>
  );
};

export default Navbar;
