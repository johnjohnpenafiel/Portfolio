"use client";

import React, { useEffect, useState } from "react";

import AboutCard from "./components/AboutCard";
import { aboutData } from "@/data/aboutData";

const About = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeIn(true);
    }, 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen flex -mt-[64px] || bg-[#f9fafb] dark:bg-black cursor-default">
      <section
        className={`md:mx-[17%] transition-opacity duration-500 ${
          !fadeIn ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex flex-col m-10 mt-28 md:mt-44 px-4">
          <h1 className="text-3xl font-semibold text-stone-900 dark:text-neutral-200">
            John Penafiel
          </h1>
          <p className="pt-5 || text-gray-600 text-sm md:text-md font-light dark:text-neutral-100 text-pretty">
            I&apos;m a Full Stack Software Engineer with a strong focus on
            frontend development. Turning complex problems into seamless
            experiences is what I care about most, and it&apos;s why I obsess over
            design, structure, and usability. I want to bring the best of what
            technology can do to everyone, not just the people already deep in
            it.
          </p>
        </div>

        <div className="m-10">
          {aboutData.map((item, i) => (
            <AboutCard
              key={item.id}
              title={item.title}
              content={item.content}
              link={item.link}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
