"use client";

import React, { useState } from "react";

import Navbar from "@/components/Navbar";
import AboutCard from "./components/AboutCard";

const About = () => {
  const [openCard, setOpenCard] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setOpenCard((prevCard) => (prevCard === id ? null : id));
  };

  const aboutInfo = [
    {
      id: 1,
      category: "Background",
      content:
        "My role is to unravel intricate challenges through creativity and focused problem-solving, which helps me come up with practical and impactful solutions.",
    },
    {
      id: 2,
      category: "Software Engineer",
      content: "placeholder",
    },
    {
      id: 3,
      category: "Things I love",
      content: "placeholder",
    },
  ];

  return (
    <div className="h-screen bg-white">
      <section>
        <Navbar />
      </section>

      <section className="md:mx-[17%]">
        <div className="flex flex-col m-10">
          <h1 className="text-3xl font-semibold">John Penafiel</h1>
          <p className="text-gray-600 px-1">
            I am Software Engineer specializing in Full Stack Development, I
            found programming to be an expansive creative platform with endless
            possibilities.
          </p>
        </div>
        {/* About Cards */}
        {aboutInfo.map((item) => (
          <AboutCard
            key={item.category}
            handleClick={handleClick}
            isOpen={openCard === item.id}
            id={item.id}
            category={item.category}
            content={item.content}
          />
        ))}
      </section>
    </div>
  );
};

export default About;
