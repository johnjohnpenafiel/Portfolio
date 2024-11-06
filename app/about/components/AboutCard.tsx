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
    <div className="py-5 border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-center px-4"
      >
        <span className="text-lg">{title}</span>
        <span
          className={`text-gray-400 text-xl md:text-2xl transition-transform duration-500 ${
            isOpen && "rotate-45"
          }`}
        >
          <FiPlus />
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 pt-2"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="px-4 pr-8 overflow-hidden leading-loose">{content}</p>
      </div>
    </div>
  );
};

export default AboutCard;
