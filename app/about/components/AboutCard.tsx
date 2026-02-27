"use client";

import React from "react";
import { FiPlus } from "react-icons/fi";

import { AboutLink } from "@/data/aboutData";

interface Props {
  title: string;
  content: string;
  link?: AboutLink;
  isOpen: boolean;
  onToggle: () => void;
}

const AboutCard = ({ title, content, link, isOpen, onToggle }: Props) => {
  return (
    <div className="py-5 || border-b border-gray-200/80 dark:border-neutral-800/50">
      <button
        onClick={onToggle}
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
          className={`px-4 pr-8 md:pr-14 || text-sm leading-loose text-pretty md:text-base overflow-hidden transition-all ease-in-out ${
            isOpen
              ? "opacity-100 delay-200 duration-200"
              : "opacity-0 duration-300"
          }`}
        >
          {link
            ? content.split(link.label).map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 hover:text-stone-900 dark:hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </React.Fragment>
              ))
            : content}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
