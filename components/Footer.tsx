"use client";

import React from "react";

import Link from "next/link";

import { projects } from "@/data";

const Footer = () => {
  const contacts = [
    {
      id: "Linkedin",
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
    <div className="h-fit || bg-[#f9fafb] border-t">
      <div className="md:flex">
        <div className="flex-col space-y-2 my-14 mx-20 pl-2 md:w-1/2 md:pr-32">
          {/* About */}
          <h1 className="text-sm text-gray-500 font-semibold">ABOUT</h1>
          <p className="text-sm">
            I am Software Engineer specializing in Full Stack Development, I
            found programming to be an expansive creative platform with endless
            possibilities.
          </p>
        </div>
        {/* Projects and Contact */}
        <div className="flex space-x-32 justify-center my-10 md:my-14">
          <div>
            {/* Projects */}
            <h1 className="mb-2 text-sm text-gray-500 font-semibold">
              PROJECTS
            </h1>
            <ul>
              {projects.map((project) => (
                <li key={project.id}>
                  <Link
                    href={project.href}
                    className="text-sm text-stone-800 font-medium leading-8"
                  >
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {/* Contact */}
            <h1 className="mb-2 text-sm text-gray-500 font-semibold">
              CONTACT
            </h1>
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <Link
                    href={contact.href}
                    target={contact.target}
                    rel={contact.rel}
                    className="text-sm text-stone-800 font-medium leading-8"
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

      {/* Copywrite */}
      <div className="flex justify-center md:justify-start pb-4">
        <div className="flex md:mt-10 md:pl-2 mx-20 text-xm">
          © 2024 John Penafiel. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
