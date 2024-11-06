import React from "react";

import Navbar from "@/components/Navbar";
import AboutCard from "./components/AboutCard";
import { aboutInfo } from "@/data";

const About = () => {
  return (
    <div className="h-screen bg-white">
      <section>
        <Navbar />
      </section>

      <section className="md:mx-[17%]">
        <div className="flex flex-col m-10 mt-24 px-4">
          <h1 className="text-3xl font-semibold">John Penafiel</h1>
          <p className="text-gray-600 pt-5 text-md">
            I am Software Engineer specializing in Full Stack Development, I
            found programming to be an expansive creative platform with endless
            possibilities.
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
