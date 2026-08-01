"use client";

import React, { useRef } from "react";
import { useIsVisible } from "@/hooks/useIsVisible";
import GarageSection from "./GarageSection";
import { staffIntro, staffBox, staffSignoff } from "../data/garageaiData";

const StaffBoxSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasBeenVisible = useIsVisible(sectionRef);

  return (
    <GarageSection
      eyebrow="The Masthead"
      headline="A full newsroom, no people in it"
      intro={staffIntro}
    >
      <div
        ref={sectionRef}
        className="border-t border-gray-200/80 dark:border-neutral-800/50"
      >
        {staffBox.map((member, i) => (
          <div
            key={member.role}
            className={`grid grid-cols-1 md:grid-cols-[220px_200px_1fr] gap-x-8 gap-y-1 py-5 border-b border-gray-200/80 dark:border-neutral-800/50 transition-all duration-700 ease-out ${
              hasBeenVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <span className="text-base font-semibold text-neutral-800 dark:text-neutral-200">
              {member.role}
            </span>
            <span className="text-xm font-semibold text-neutral-500 dark:text-neutral-400/90 pt-1">
              {member.model}
            </span>
            <span className="text-sm font-light text-gray-600 dark:text-neutral-300 leading-relaxed mt-2 md:mt-0">
              {member.duty}
            </span>
          </div>
        ))}
      </div>
      <p
        className={`text-xm text-neutral-500 dark:text-neutral-400/90 mt-6 transition-all duration-700 ease-out ${
          hasBeenVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: `${staffBox.length * 100 + 200}ms` }}
      >
        {staffSignoff}
      </p>
    </GarageSection>
  );
};

export default StaffBoxSection;
