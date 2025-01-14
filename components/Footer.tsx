"use client";

import React from "react";

import Link from "next/link";
import Image from "next/image";

import { projectCards } from "@/data/projectCardData";

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
    <div className="h-auto bg-[#f9fafb] dark:bg-black border-t border-gray-200/80 dark:border-neutral-900/80 cursor-default">
      {/* ----- FOOTER SECTION ----- */}
      <div className="md:flex">
        {/* ----- ABOUT AND PROFILE PICTURE SECTION ----- */}
        <div className="flex flex-col my-14 mx-10 md:mx-0 pl-2 md:w-1/2 md:pl-16 xl:flex-row">
          {/* ABOUT */}
          <div className="flex flex-col xl:w-4/6">
            <h1 className="text-sm text-neutral-800 dark:text-neutral-100 font-semibold mb-2">
              About me
            </h1>
            <p className="text-sm text-neutral-700 dark:text-neutral-200 text-pretty">
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
          {/* PROFILE PICTURE */}
          <div className="flex xl:w-2/6 items-center justify-center pt-3 mt-4 xl:mt-0">
            <Image
              src="/images/ProfilePictureE.JPEG"
              width={125}
              height={125}
              alt="Profile Picture"
              className="rounded-full"
            />
          </div>
        </div>
        {/* ----- PROJECTS AND CONTACTS SECTION ----- */}
        <div className="flex justify-around md:space-x-28 md:justify-center md:w-1/2 my-10 md:my-14 mt-20">
          <div>
            {/* PROJECTS */}
            <h1 className="flex mb-2 text-sm text-neutral-800 dark:text-neutral-100 font-semibold">
              Projects
            </h1>
            <ul>
              {projectCards.map((project) => (
                <li key={project.id}>
                  <Link
                    href={project.href}
                    className="text-sm md:text-base text-neutral-700 dark:text-neutral-200 leading-9 hover:text-stone-400 dark:hover:text-neutral-400"
                  >
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {/* CONTACTS */}
            <h1 className="mb-2 text-sm text-neutral-800 dark:text-neutral-100 font-semibold">
              Contact
            </h1>
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <Link
                    href={contact.href}
                    target={contact.target}
                    rel={contact.rel}
                    className="text-sm md:text-base text-neutral-700 dark:text-neutral-200 leading-9 hover:text-stone-400 dark:hover:text-neutral-400"
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
        <p className="flex mt-16 md:mx-14 mx-10 text-xm dark:text-neutral-100">
          © 2025 John John Penafiel. All Rights Reserved. Build with Next.js,
          Typescript, and TailwindCSS. 🛠️
        </p>
      </div>
    </div>
  );
};

export default Footer;
