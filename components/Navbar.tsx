"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import ThemeSwitch from "./ThemeSwitch";
import { usePathname } from "next/navigation";
import { resumeLink } from "@/data/resumeData";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const MenuItems = [
    {
      label: "Projects",
      active: pathname == "/",
      href: "/",
      target: "",
      rel: "",
    },
    {
      label: "About",
      active: pathname == "/about",
      href: "/about",
      target: "",
      rel: "",
    },
    {
      label: "Resume",
      active: pathname == "cv",
      href: resumeLink,
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ];

  return (
    <nav className="relative py-3 px-7 md:px-5 || border-b border-gray-200/80 dark:border-neutral-900/80 bg-[#f9fafb] dark:bg-black">
      <div className="flex items-center justify-between h-[40px]">
        {/* LIGHT/DARK SWITCH BUTTON */}
        <ThemeSwitch />

        {/* MOBILE MENU BUTTON */}
        <button
          className="flex pt-[4px] md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="relative w-6 h-6">
            <span
              className={`absolute block w-6 h-0.5 bg-gray-400 rounded-md transition-all duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45 top-2.5" : "top-1"
              }`}
            ></span>
            <span
              className={`absolute block w-6 h-0.5 bg-gray-400 rounded-md transition-all duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45 top-2.5" : "top-4"
              }`}
            ></span>
          </div>
        </button>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex space-x-12 pr-2 || text-sm">
          {MenuItems.map((menuItem) => (
            <li key={menuItem.label}>
              <Link
                href={menuItem.href}
                target={menuItem.target}
                rel={menuItem.rel}
                className={`text-gray-700 dark:text-neutral-100 hover:text-gray-900 dark:hover:text-neutral-400 ${
                  menuItem.active && "underline decoration-1 text-gray-900"
                }`}
              >
                {menuItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* MOBILE MENU */}
      <ul
        className={`absolute flex flex-col left-0 w-full md:hidden items-center space-y-5 py-14 || bg-[#f9fafb] dark:bg-black border-b border-gray-200/80 dark:border-neutral-900/80 transition-transform origin-top duration-500 ease-in-out
           ${
             isMenuOpen
               ? "scale-y-100 pointer-events-auto"
               : "scale-y-0 delay-100 pointer-events-none"
           }`}
      >
        {MenuItems.map((menuItem) => (
          <li key={menuItem.label}>
            <Link
              href={menuItem.href}
              target={menuItem.target}
              rel={menuItem.rel}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`text-gray-700 dark:text-neutral-100 hover:text-gray-900 dark:hover:text-neutral-400 text-2xl transition-opacity ease-in-out 
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
