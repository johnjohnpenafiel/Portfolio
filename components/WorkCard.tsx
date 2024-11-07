"use client";

import { useIsVisible } from "@/hooks/useIsVisible";
import React, { useRef } from "react";

interface Props {
  title: string;
  description: string;
  stack: string[];
  image: string;
}

const WorkCard = ({ title, description, stack, image }: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const hasBeenVisible = useIsVisible(cardRef);
  return (
    <div
      ref={cardRef}
      className={`flex flex-col w-full md:max-w-[1100px] md:max-h-[400px] h-auto md:flex-row md:h-auto mb-10 || bg-[#f9fafb] rounded-sm border border-gray-200/80 overflow-hidden || transition-transform ease-in-out delay-100 duration-700 ${
        hasBeenVisible ? "translate-y-0" : "translate-y-52"
      }`}
    >
      {/* Card Description */}
      <div className="flex flex-col px-5 md:pl-9 md:pr-4 pb-5 mx-3 md:mt-7 md:w-1/2 order-3 md:order-1">
        <h1 className="text-2xl md:text-4xl font-bold text-black-title">
          {title}
        </h1>
        <p className="mt-4 || text-sm md:text-lg font-light text-gray-600">
          {description}
        </p>
        <ul className="inline-flex flex-wrap mt-4 || text-sm md:text-base">
          {stack.map((s, index) => (
            <li key={index} className="text-stone-800 font-semibold ">
              {s}
              {index < stack.length - 1 && <span className="mx-2">•</span>}
            </li>
          ))}
        </ul>
        {/* Button */}
        <div className="flex pt-5 items-end h-full pb-5 md:pb-[1px]">
          <button className="md:w-32 md:mb-10 p-2 || border bg-transparent text-black-title rounded hover:animate-pulse hover:bg-gray-100/20">
            See more
          </button>
        </div>
      </div>
      {/* Card Image */}
      <div className="flex md:w-1/2 md:h-full md:shrink-1 order-2 items-center justify-center">
        <img
          src={image}
          alt="Project Picture"
          className="object-contain h-auto w-full md:pr-6"
        />
      </div>
    </div>
  );
};

export default WorkCard;
