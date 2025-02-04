"use client";

import React, { useEffect, useState } from "react";

import AboutCard from "./components/AboutCard";
import { aboutData } from "@/data/aboutData";

const About = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 50);
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
            I am a Full Stack Software Engineer who sees programming as a
            creative and logical platform for solving complex challenges and
            building impactful solutions. To me, it’s a blend of art and
            science, where creativity meets precision.
          </p>
        </div>

        <div className="m-10">
          {aboutData.map((item) => (
            <AboutCard
              key={item.id}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
