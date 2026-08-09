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
      {/* Main row: text left, video right */}
      <div className="lg:flex lg:items-start lg:gap-10 xl:gap-14">
        <div className="lg:w-[38%] lg:shrink-0 lg:-mt-10 lg:self-stretch lg:flex lg:flex-col">
          <p
            className={`font-kodchasan text-neutral-500 dark:text-gray-400 mb-4 ${reveal}`}
          >
            An AI publication that writes itself
          </p>

          <h1
            className={`text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-neutral-900 dark:text-neutral-200 tracking-tighter leading-[1.05] mb-6 ${reveal}`}
            style={{ transitionDelay: "100ms" }}
          >
            {heroTitle}
          </h1>

          <div
            className={`lg:flex lg:flex-col lg:flex-1 ${reveal}`}
            style={{ transitionDelay: "200ms" }}
          >
            <p className="text-md font-light text-gray-600 dark:text-neutral-100 max-w-[640px] leading-relaxed mb-8">
              {heroSubtitle}
            </p>

            <div className="flex flex-wrap gap-3 lg:mt-auto">
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
                Source code &#8599;
              </a>
            </div>
          </div>
        </div>

        <div
          className={`mt-14 lg:mt-0 lg:flex-1 lg:min-w-0 ${reveal}`}
          style={{ transitionDelay: "300ms" }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            onCanPlay={(e) =>
              e.currentTarget.classList.replace("opacity-0", "opacity-100")
            }
            className="w-full h-auto rounded-lg border border-gray-300 dark:border-neutral-700 opacity-0 transition-opacity duration-700"
          >
            <source src="/video/garageai-showcase.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Stats strip — full width under the row */}
      <div
        className={`mt-10 lg:mt-12 ${reveal}`}
        style={{ transitionDelay: "400ms" }}
      >
        <div className="flex flex-wrap rounded-xl border border-gray-200/80 dark:border-neutral-800/50 bg-neutral-200/10 dark:bg-[#1B1212]/25 divide-x divide-gray-200/80 dark:divide-neutral-800/50 overflow-hidden">
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex-1 min-w-[140px] px-5 py-2.5">
              <span className="block text-lg md:text-xl font-semibold text-neutral-800 dark:text-neutral-100 tabular-nums">
                {stat.value}
              </span>
              <span className="block text-xm text-neutral-500 dark:text-neutral-400/90 mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GarageHero;
