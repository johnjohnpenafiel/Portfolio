"use client";

import React from "react";

import Link from "next/link";

import { projectCards } from "@/data";

const Footer = () => {
  // OBFUSCATE EMAIL //
  const email = ["johnjohnpenafiel", "@", "hotmail.com"].join("");
  const href = `mailto:${email}`;

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
      href: href,
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
          <h1 className="text-sm text-neutral-800 font-semibold mb-2">
            About me
          </h1>
          <p className="text-sm text-neutral-700 text-wrap">
            Precise and fast-learning software engineer with experience in
            <b> Python</b>, <b> JavaScript</b>, <b> Typescript</b>,{" "}
            <b> React</b>, <b> Next</b>, <b> Flask</b>, <b> SQL databases</b>,{" "}
            <b> SQLAlchemy</b>, <b> APIs</b>, <b> AWS Cloud Services</b>,{" "}
            <b> TailwindCss</b> and <b> MaterialUI</b>. Adept at designing,
            developing, and troubleshooting full-stack applications, with a
            focus on responsive design, data security, and scalable solutions.
            Known for a blend of technical expertise, problem-solving skills,
            and an adaptable mindset.
          </p>
        </div>
        {/* ----- PROJECTS AND CONTACTS SECTION ----- */}
        <div className="flex justify-around md:mr-10 xl:mr-32 md:space-x-32 md:justify-center my-10 md:my-14">
          <div>
            {/* PROJECTS */}
            <h1 className="flex mb-2 text-sm text-neutral-800 font-semibold">
              Projects
            </h1>
            <ul>
              {projectCards.map((project) => (
                <li key={project.id}>
                  <Link
                    href={project.href}
                    className="text-sm md:text-base text-neutral-700 leading-9 hover:text-stone-400"
                  >
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {/* CONTACTS */}
            <h1 className="mb-2 text-sm text-neutral-800 font-semibold">
              Contact
            </h1>
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <Link
                    href={contact.href}
                    target={contact.target}
                    rel={contact.rel}
                    className="text-sm md:text-base text-neutral-700 leading-9 hover:text-stone-400"
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
          © 2025 John John Penafiel. All Rights Reserved. Build with Next.js,
          Typescript and TailwindCss.
        </div>
      </div>
    </div>
  );
};

export default Footer;
