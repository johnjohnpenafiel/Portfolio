"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const MenuItems = [
    {
      label: "Work",
      active: pathname == "/",
      href: "/",
    },
    {
      label: "About",
      active: pathname == "/about",
      href: "/about",
    },
    {
      label: "CV",
      active: pathname == "cv",
      href: "cv",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="relative py-3 px-7 md:px-5 || border-b border-gray-200/80 bg-white">
      <div className="flex items-center justify-between">
        <Image
          src="/images/logo.png"
          width={40}
          height={40}
          alt="Picture of the author"
        />

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden">
          <button className="text-2xl text-gray-500" onClick={toggleMenu}>
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-12">
          {MenuItems.map((menuItem) => (
            <li key={menuItem.label}>
              <Link
                href={menuItem.href}
                className={`text-gray-700 hover:text-gray-900 ${
                  menuItem.active && "underline text-gray-900"
                }`}
              >
                {menuItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`absolute flex flex-col left-0 w-full md:hidden items-center space-y-2 py-8 || bg-white border-b border-gray-200/80 transition-transform origin-top duration-500 ease-in-out ${
          isMenuOpen
            ? "scale-y-100 pointer-events-auto"
            : "scale-y-0 delay-100 pointer-events-none"
        }`}
      >
        {MenuItems.map((menuItem) => (
          <li key={menuItem.label}>
            <Link
              href={menuItem.href}
              className={`text-gray-700 hover:text-gray-900 text-2xl transition-opacity ease-in-out 
                ${menuItem.active && "underline text-gray-900"} 
                ${
                  isMenuOpen
                    ? "opacity-100 delay-300 duration-300"
                    : "opacity-0 duration-200"
                }`}
            >
              {menuItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
