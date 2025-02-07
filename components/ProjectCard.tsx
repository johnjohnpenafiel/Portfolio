"use client";

import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import useInView from "@/hooks/useInView";
import { useIsVisible } from "@/hooks/useIsVisible";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  // TRACK WHEN THE IMAGE IS IN THE MIDDLE OF THE WINDOW
  const [imageRef, isInView] = useInView({
    root: null,
    rootMargin: "-40% 0px -40% 0px",
    threshold: 0.1,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % stack.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [stack.length]);

  return (
    <div
      ref={cardRef}
      className={`flex flex-col w-full h-auto mb-6 md:max-w-[1200px] md:max-h-[400px] md:flex-row md:h-auto || bg-neutral-100/40 dark:bg-[#1B1212]/25 backdrop-blur-xm border-[1px] rounded-xl border-gray-200/80 dark:border-neutral-900/80 overflow-hidden || transition-transform ease-in-out delay-100 duration-1000 ${
        hasBeenVisible ? "translate-y-0" : "translate-y-40"
      }`}
    >
      {/* ----- CARD DATA SECTION ----- */}
      <div className="flex flex-col px-5 md:pl-9 md:pr-4 pb-5 md:mt-7 md:w-1/2 order-3 md:order-1">
        {/* CARD TITLE AND DURATION */}
        <div className="flex justify-between md:mt-4">
          <h1 className="flex text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200">
            {title}
          </h1>
          <p className="flex items-center text-xm text-neutral-500 dark:text-neutral-400/90">
            {duration}
          </p>
        </div>
        {/* CARD DESCRIPTION */}
        <p className="mt-4 || text-sm lg:text-lg font-light text-gray-600 dark:text-neutral-100">
          {description}
        </p>
        {/* TECH STACK */}
        <ul className="inline-flex flex-wrap mt-4 || text-xm">
          {stack.map((s, index) => (
            <li
              key={index}
              className={`text-neutral-500 dark:text-neutral-400/90 font-semibold ${
                !isInView ? "" : index === currentIndex ? "animate-pulse" : ""
              }`}
            >
              {s}
              {index < stack.length - 1 && <span className="mx-2">•</span>}
            </li>
          ))}
        </ul>
        {/* ----- BUTTONS ----- */}
        <div className="flex pt-5 justify-start items-center h-full pb-5 md:pb-[1px] md:mb-10">
          {/* SEE MORE BUTTON */}
          <Link href={`/projects/${id}`}>
            <button className="md:w-24 p-2 || border w-24 border-neutral-500 bg-transparent text-neutral-700 dark:text-neutral-200 rounded-3xl hover:text-neutral-400 hover:border-neutral-400">
              <p className="text-sm">See More</p>
            </button>
          </Link>
          {/* PROJECT LINKS */}
          <div className="flex items-center pl-2">
            {links.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="ml-3 text-xl text-neutral-400 hover:text-neutral-300" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      {/* ----- IMAGE SECTION ----- */}
      {/* IMAGE */}
      <div
        ref={imageRef}
        className={`flex h-auto md:w-1/2 order-2 items-center justify-center p-3 md:p-3 transition-all duration-700 ease-in-out ${
          isInView ? "" : "brightness-50"
        }`}
      >
        <Image
          src={image}
          width={500}
          height={500}
          alt="Project Picture"
          className="flex h-full object-contain w-full"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
