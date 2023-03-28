import Image from "next/image";
import React from "react";
import { BsTwitch, BsInstagram, BsDiscord } from "react-icons/bs";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="container mx-auto grid grid-cols-1 grid-rows-3 bg-softRed py-4 md:grid-cols-3 md:grid-rows-1"
    >
      <div className="flex items-center justify-center">
        <Logo fill="#fff" className="object-cover object-center" />
      </div>
      <div className="flex justify-center">
        <ul className="gap-4 text-white">
          <li>News</li>
          <li>Popular</li>
          <li>Categories</li>
          <li>Location</li>
        </ul>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <div>
          <BsTwitch color="#fff" className="cursor-pointer" size={"1.25rem"} />
        </div>
        <div>
          <BsInstagram
            color="#fff"
            className="cursor-pointer"
            size={"1.25rem"}
          />
        </div>
        <div>
          <BsDiscord color="#fff" className="cursor-pointer" size={"1.25rem"} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
