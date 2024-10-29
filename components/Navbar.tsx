import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="relative flex w-full h-[65px] items-center justify-between border-b px-5 bg-white z-10">
      <Image
        src="/images/logo4.png"
        width={40}
        height={40}
        alt="Picture of the author"
      />
      <div className="space-x-12 mr-2">
        <a href="#work" className="text-gray-500 hover:text-gray-900 text-base">
          Work
        </a>
        <a
          href="#about"
          className="text-gray-500 hover:text-gray-900 text-base"
        >
          About
        </a>
        <a href="#cv" className="text-gray-500 hover:text-gray-900 text-base">
          CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
