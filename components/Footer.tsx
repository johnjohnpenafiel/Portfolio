"use client";

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-80 bg bg-[#f9fafb]">
      <div className="flex justify-around md:justify-end p-16 md:pr-40">
        {/* Projects */}
        <div className="flex flex-col md:px-44 leading-loose">
          <div className="text-xm text-gray-500 font-semibold">PROJECTS</div>
          <Link href="#" className="text-base text-stone-800 font-medium">
            Parallax UI
          </Link>
          <Link href="#" className="text-base text-stone-800 font-medium">
            Next Game
          </Link>
          <Link href="#" className="text-base text-stone-800 font-medium">
            JackSpot
          </Link>
        </div>
        {/* Contact */}
        <div className="flex flex-col md:px-12 leading-loose">
          <div className="text-xm text-gray-500 font-semibold">CONTACT</div>
          <div className="group flex">
            <Link
              href="https://www.linkedin.com/in/johnjohnpenafiel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-stone-800 font-medium"
            >
              Linkedin
            </Link>
            <div className="pl-1 group-hover:animate-pulse">↗</div>
          </div>
          <div className="group flex">
            <Link
              href="&#109;&#097;&#105;&#108;&#116;&#111;&#058;&#106;&#111;&#104;&#110;&#106;&#111;&#104;&#110;&#112;&#101;&#110;&#097;&#102;&#105;&#101;&#108;&#064;&#104;&#111;&#116;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"
              className="text-base text-stone-800 font-medium"
            >
              Mail
            </Link>
            <div className="pl-1 group-hover:animate-pulse">↗</div>
          </div>
        </div>
      </div>
      <div className="flex h-[104px] justify-center md:justify-end items-center md:pr-9">
        <div className="flex text-xm">
          © 2024 John Penafiel. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
