"use client";

import { useIsVisible } from "@/hooks/useIsVisible";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

interface Link {
  url: string;
  icon: React.ElementType;
}

interface Props {
  id: string;
  title: string;
  description: string;
  stack: string[];
  image: string;
  duration: string;
  links: Link[];
}

const ProjectCard = ({
  id,
  title,
  description,
  stack,
  image,
  duration,
  links,
}: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const hasBeenVisible = useIsVisible(cardRef);
  return (
    <div
      ref={cardRef}
      className={`flex flex-col w-full md:max-w-[1100px] md:max-h-[400px] h-auto md:flex-row md:h-auto mb-6 || group bg-[#f9fafb] border-b border-gray-200/80 overflow-hidden || transition-transform ease-in-out delay-100 duration-1000 ${
        hasBeenVisible ? "translate-y-0" : "translate-y-40"
      }`}
    >
      {/* ----- CARD DATA SECTION ----- */}
      <div className="flex flex-col px-5 md:pl-9 md:pr-4 pb-5 mx-3 md:mt-7 md:w-1/2 order-3 md:order-1">
        {/* CARD TITLE AND DURATION */}
        <div className="flex justify-between md:mt-4">
          <h1 className="flex text-2xl md:text-3xl font-bold text-stone-800">
            {title}
          </h1>
          <p className="flex items-center text-xm text-stone-700">{duration}</p>
        </div>
        {/* CARD DESCRIPTION */}
        <p className="mt-4 || text-sm md:text-lg font-light text-gray-600">
          {description}
        </p>
        {/* TECH STACK */}
        <ul className="inline-flex flex-wrap mt-4 || text-sm md:text-sm">
          {stack.map((s, index) => (
            <li key={index} className="text-stone-600 font-semibold ">
              {s}
              {index < stack.length - 1 && <span className="mx-2">•</span>}
            </li>
          ))}
        </ul>
        {/* ----- BUTTONS ----- */}
        <div className="flex pt-5 justify-between items-center h-full pb-5 md:pb-[1px] md:mb-10">
          {/* SEE MORE BUTTON */}
          <Link href={`/projects/${id}`}>
            <button className="md:w-32 p-2 || border border-stone-600 bg-transparent text-stone-700 rounded hover:bg-gray-100/80">
              See more
            </button>
          </Link>
          {/* SOCIAL LINKS */}
          <div className="flex items-center pr-2">
            {links.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="ml-3 text-xl text-stone-400 hover:text-stone-600" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      {/* ----- IMAGE SECTION ----- */}
      {/* IMAGE */}
      <div className="flex h-auto md:w-1/2 order-2 items-center justify-center">
        <Image
          src={image}
          width={500}
          height={500}
          alt="Project Picture"
          className="flex h-full object-contain w-full md:pl-6 "
        />
      </div>
    </div>
  );
};

export default ProjectCard;
