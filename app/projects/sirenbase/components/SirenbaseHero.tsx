"use client";

import React, { useState, useEffect } from "react";
import { heroContent, heroStats, heroTechStack } from "../data/sirenbaseData";

const SirenbaseHero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`min-h-screen flex flex-col justify-center pt-[8vh] relative transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Phone mockup — absolute on lg+, stacked below on mobile */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2">
        <video
          autoPlay
          loop
          muted
          playsInline
          onCanPlay={(e) =>
            e.currentTarget.classList.replace("opacity-0", "opacity-100")
          }
          className="w-[400px] h-auto rounded-[2rem] object-contain opacity-0 transition-opacity duration-700"
        >
          <source src="/video/sirenbase-vertical.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="lg:max-w-[60%]">
        {/* Label */}
        <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400/90 tracking-wide mb-3">
          {heroContent.label}
        </p>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-title font-normal text-stone-900 dark:text-neutral-200 tracking-tighter leading-[1.05] mb-5">
          {heroContent.title}
        </h1>

        {/* Subtitle */}
        <p className="text-md font-light text-gray-600 dark:text-neutral-200 max-w-[680px] leading-relaxed mb-10">
          {heroContent.subtitle}
        </p>

        {/* Stats bar */}
        <div className="flex flex-wrap gap-8 md:gap-12 mb-10">
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-3xl font-semibold text-stone-900 dark:text-neutral-200 tracking-tight leading-tight">
                {stat.value}
              </span>
              <span className="text-xm text-neutral-500 dark:text-neutral-400 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <a
            href="https://sirenbase.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 text-sm border border-neutral-500 rounded-full bg-transparent text-neutral-700 dark:text-neutral-200 hover:text-neutral-400 hover:border-neutral-400 transition-all duration-200"
          >
            Live Site <span className="text-xm">&#8599;</span>
          </a>
          <a
            href="https://github.com/johnjohn-carlson/sirenbase"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 text-sm border border-neutral-500 rounded-full bg-transparent text-neutral-700 dark:text-neutral-200 hover:text-neutral-400 hover:border-neutral-400 transition-all duration-200"
          >
            Source Code <span className="text-xm">&#8599;</span>
          </a>
        </div>

        {/* Tech stack */}
        <p className="mt-8 text-xm text-neutral-500/70 dark:text-neutral-400/70 tracking-wide">
          {heroTechStack}
        </p>
      </div>

      {/* Phone mockup — stacked on mobile only */}
      <div className="lg:hidden flex justify-center mt-12">
        <video
          autoPlay
          loop
          muted
          playsInline
          onCanPlay={(e) =>
            e.currentTarget.classList.replace("opacity-0", "opacity-100")
          }
          className="w-[320px] h-auto rounded-[2rem] object-contain opacity-0 transition-opacity duration-700"
        >
          <source src="/video/sirenbase-vertical.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default SirenbaseHero;
