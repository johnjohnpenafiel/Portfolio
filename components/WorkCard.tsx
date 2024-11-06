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
      className={`flex flex-col w-full md:max-w-[1100px] md:max-h-[400px] h-auto md:flex-row md:h-auto mb-5 || bg-white rounded-sm drop-shadow-sm border border-gray-100 overflow-hidden || transition-transform ease-out delay-100 duration-1000 ${
        hasBeenVisible ? "translate-y-0" : "translate-y-52"
      }`}
    >
      {/* Card Description */}
      <div className="flex flex-col px-5 pb-5 mx-3 md:mt-7 md:w-1/2 order-3 md:order-1">
        <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
        <p className="mt-4 || text-sm md:text-lg font-semibold text-gray-600">
          {description}
        </p>
        <ul className="inline-flex flex-wrap mt-4 || text-sm md:text-base">
          {stack.map((s, index) => (
            <li key={index} className=" || font-semibold">
              {s}
              {index < stack.length - 1 && <span className="mx-2">•</span>}
            </li>
          ))}
        </ul>
        {/* Button */}
        <div className="flex pt-5 items-end h-full">
          <button className="md:w-32 md:mb-10 p-2  || bg-black text-white rounded">
            See more
          </button>
        </div>
      </div>
      {/* Card Image */}
      <div className="flex md:w-1/2 md:h-full md:shrink-1 order-2 items-center justify-center">
        <img
          src={image}
          alt="Project Picture"
          className="object-contain h-auto w-full"
        />
      </div>
    </div>
  );
};

export default WorkCard;
