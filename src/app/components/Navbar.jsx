"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="sticky top-5 flex items-center justify-between mx-5 my-15 lg:mx-10 lg:my-5 text-black text-xl z-50   backdrop-blur rounded-xl px-5 py-3 hidden lg:flex">
      <Image
        src="/rentallogo.png"
        alt="Logo"
        width={100}
        height={50}
        className="w-15  md:w-30 "
      />
      <div className=" gap-10 lg:gap-15 hidden md:flex">
        <Link
          href="/#home"
          className="transition-transform duration-300 hover:scale-110"
        >
          Home
        </Link>
        <Link
          href="/#discover"
          className="transition-transform duration-300 hover:scale-110"
        >
          Zestawienia
        </Link>
        <Link
          href="/#about"
          className="transition-transform duration-300 hover:scale-110"
        >
          O nas
        </Link>
        <Link
          href="/#blog"
          className="transition-transform duration-300 hover:scale-110"
        >
          Blog
        </Link>
        <Link
          href="/#contact"
          className="transition-transform duration-300 hover:scale-110"
        >
          Kontakt
        </Link>
      </div>
      <Link href="/#cta">
        <button className="px-5 py-3 rounded-xl bg-black text-white hidden md:block cursor-pointer transition-transform duration-300 hover:scale-110">
          Zacznij teraz
        </button>{" "}
      </Link>
    </div>
  );
}
