import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="relative flex w-full h-[65px] items-center justify-between border-b px-5">
      <Image
        src="/images/logo.png"
        width={35}
        height={35}
        alt="Picture of the author"
      />
      <div className="space-x-12 mr-2">
        <a href="#work" className="text-gray-500 hover:text-gray-900 text-sm">
          Work
        </a>
        <a href="#about" className="text-gray-500 hover:text-gray-900 text-sm">
          About
        </a>
        <a href="#cv" className="text-gray-500 hover:text-gray-900 text-sm">
          CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
