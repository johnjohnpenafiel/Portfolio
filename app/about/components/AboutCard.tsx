"use client";

import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";

interface Props {
  title: string;
  content: string;
}

const AboutCard = ({ title, content }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-5 || border-b border-gray-200/80 dark:border-neutral-900/80">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-center px-4"
      >
        <span className="text-lg font-semibold text-stone-900 dark:text-neutral-200">
          {title}
        </span>
        <span
          className={`text-gray-400 dark:text-neutral-200 text-xl md:text-2xl transition-transform duration-500 ${
            isOpen && "rotate-45"
          }`}
        >
          <FiPlus />
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 dark:text-neutral-100 ${
          isOpen ? "grid-rows-[1fr] pt-3" : "grid-rows-[0fr] delay-75"
        }`}
      >
        <p
          className={`px-4 pr-14 || text-xs md:text-base leading-loose overflow-hidden transition-all ease-in-out ${
            isOpen
              ? "opacity-100 delay-200 duration-200"
              : "opacity-0 duration-300"
          }`}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
