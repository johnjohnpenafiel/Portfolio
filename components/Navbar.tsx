"use client";

import React, { useState } from "react";
import Image from "next/image";

import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const MenuItems = ["Work", "About", "CV"];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="relative py-3 px-7 md:px-5 || border-b border-gray-200/80 bg-white">
      <div className="flex items-center justify-between">
        <Image
          src="/images/logo4.png"
          width={40}
          height={40}
          alt="Picture of the author"
        />

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden">
          <button className="text-2xl" onClick={toggleMenu}>
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-12">
          {MenuItems.map((menuItem) => (
            <li key={menuItem}>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 text-base"
              >
                {menuItem}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`absolute flex flex-col top-full left-0 w-full md:hidden items-center space-y-2 py-4 || bg-white border-b border-gray-200/80 transition-transform origin-top duration-500 ease-out ${
          isMenuOpen
            ? "scale-y-100 pointer-events-auto"
            : "scale-y-0 pointer-events-none"
        }`}
      >
        {MenuItems.map((menuItem) => (
          <li key={menuItem}>
            <a
              href="#"
              className={`text-gray-500 hover:text-gray-900 text-2xl transition-opacity ease-in delay-300 duration-250 ${
                isMenuOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              {menuItem}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
