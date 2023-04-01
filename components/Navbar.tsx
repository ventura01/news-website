"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

interface Navigation {
  name: string;
  route: string;
}

const navLinks: Navigation[] = [
  { name: "Home", route: "#header" },
  { name: "New", route: "#hero" },
  { name: "Popular", route: "#article" },
  { name: "Trending", route: "#hero" },
  { name: "Category", route: "#header" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header id="header" className="mb-10">
      <nav className="container mx-auto flex justify-between pt-10">
        <div className="flex self-center pl-3 md:pl-0">
          <Image src="/images/logo.svg" alt="Logo" height={75} width={75} />
        </div>
        <ul
          className={`items-center text-sm text-darkGrayishBlue md:static md:flex md:gap-10 ${
            open
              ? "absolute right-3 bg-offWhite px-14 transition-all duration-500 ease-in"
              : "hidden"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              href={link.route}
              key={link.name}
              onClick={() => setOpen(false)}
            >
              <li className="my-8 hover:text-softOrange">{link.name}</li>
            </Link>
          ))}
        </ul>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-3 cursor-pointer md:hidden"
        >
          {open ? <MdClose size={"1.5rem"} /> : <MdMenu size={"1.5rem"} />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
