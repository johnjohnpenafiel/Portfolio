import React from "react";

import AboutCard from "./components/AboutCard";
import { aboutInfo } from "@/data";

const About = () => {
  return (
    <div className="min-h-screen flex -mt-[64px] || bg-[#f9fafb]">
      <section className="md:mx-[17%]">
        <div className="flex flex-col m-10 mt-44 px-4">
          <h1 className="text-3xl font-semibold text-stone-900">
            John Penafiel
          </h1>
          <p className="pt-5 || text-gray-600 text-md font-light">
            I am a Full Stack Software Engineer who sees programming as a
            creative and logical platform for solving complex challenges and
            building impactful solutions. To me, it’s a blend of art and
            science, where creativity meets precision.
          </p>
        </div>

        <div className="m-10">
          {aboutInfo.map((item) => (
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
