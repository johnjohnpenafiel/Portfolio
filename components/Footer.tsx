"use client";

import React from "react";

import Link from "next/link";

import { projectCards } from "@/data";

const Footer = () => {
  const contacts = [
    {
      id: "linkedin",
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/johnjohnpenafiel",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      id: "mail",
      title: "Mail",
      href: "&#109;&#097;&#105;&#108;&#116;&#111;&#058;&#106;&#111;&#104;&#110;&#106;&#111;&#104;&#110;&#112;&#101;&#110;&#097;&#102;&#105;&#101;&#108;&#064;&#104;&#111;&#116;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ];

  return (
    <div className="h-96 bg-[#f9fafb] border-t">
      {/* ----- FOOTER SECTION ----- */}
      <div className="md:flex justify-between">
        {/* ----- ABOUT SECTION ----- */}
        <div className="flex-col my-14 mx-10 pl-2 md:w-1/2 md:pr-20 xl:ml-16">
          <h1 className="text-sm text-gray-500 font-medium mb-2">About me</h1>
          <p className="text-sm text-wrap">
            I am Software Engineer specializing in Full Stack Development, I
            found programming to be an expansive creative platform with endless
            possibilities. My role is to unravel intricate challenges through
            creativity and focused problem-solving, which helps me come up with
            practical and impactful solutions. To me, programming is both an art
            and a science, balancing creativity with rigorous logic.
          </p>
        </div>
        {/* ----- PROJECTS AND CONTACTS SECTION ----- */}
        <div className="flex justify-around md:mr-10 xl:mr-32 md:space-x-32 md:justify-center my-10 md:my-14">
          <div>
            {/* PROJECTS */}
            <h1 className="mb-1 text-sm text-gray-500 font-medium">Projects</h1>
            <ul>
              {projectCards.map((project) => (
                <li key={project.id}>
                  <Link
                    href={project.href}
                    className="text-sm md:text-base text-stone-800 leading-10 hover:text-stone-400"
                  >
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {/* CONTACT */}
            <h1 className="mb-1 text-sm text-gray-500 font-medium">Contact</h1>
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <Link
                    href={contact.href}
                    target={contact.target}
                    rel={contact.rel}
                    className="text-sm md:text-base text-stone-800 leading-10 hover:text-stone-400"
                  >
                    {contact.title}
                    <span>↗</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ----- COPYWRITE SECTION ----- */}
      <div className="flex justify-center md:justify-start pb-4">
        <div className="flex md:mt-20 mx-20 text-xm">
          © 2024 John Penafiel. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
