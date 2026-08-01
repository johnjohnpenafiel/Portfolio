"use client";

import React, { useEffect, useState } from "react";
import {
  heroTitle,
  heroSubtitle,
  heroStats,
  heroLinks,
} from "../data/garageaiData";

const GarageHero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const reveal = `transition-all duration-700 ease-out ${
    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
  }`;

  return (
    <section className="pt-32 md:pt-40 pb-10 md:pb-14">
      <p className={`font-kodchasan text-gray-400 mb-4 ${reveal}`}>
        An AI publication that writes itself
      </p>

      <h1
        className={`text-4xl md:text-5xl lg:text-title font-bold text-neutral-900 dark:text-neutral-200 tracking-tighter leading-[1.05] mb-8 ${reveal}`}
        style={{ transitionDelay: "100ms" }}
      >
        {heroTitle}
      </h1>

      <div className={reveal} style={{ transitionDelay: "200ms" }}>
        <p className="text-md font-light text-gray-600 dark:text-neutral-100 max-w-[640px] leading-relaxed mb-12">
          {heroSubtitle}
        </p>

        {/* Stats strip */}
        <div className="flex flex-wrap rounded-2xl border border-gray-200/80 dark:border-neutral-800/50 bg-neutral-200/10 dark:bg-[#1B1212]/25 divide-x divide-gray-200/80 dark:divide-neutral-800/50 mb-12 max-w-fit overflow-hidden">
          {heroStats.map((stat) => (
            <div key={stat.label} className="px-5 py-3">
              <span className="block text-xl md:text-2xl font-semibold text-neutral-800 dark:text-neutral-100 tabular-nums">
                {stat.value}
              </span>
              <span className="block text-xm text-neutral-500 dark:text-neutral-400/90 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={heroLinks.live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 text-sm border border-neutral-500 rounded-3xl text-neutral-700 dark:text-neutral-200 hover:text-neutral-400 hover:border-neutral-400 transition-colors duration-200"
          >
            Read the paper &#8599;
          </a>
          <a
            href={heroLinks.source}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 text-sm border border-neutral-500 rounded-3xl text-neutral-700 dark:text-neutral-200 hover:text-neutral-400 hover:border-neutral-400 transition-colors duration-200"
          >
            Open the machine &#8599;
          </a>
        </div>
      </div>
    </section>
  );
};

export default GarageHero;
