import React from "react";
import WorkCard from "./WorkCard";

const Work = () => {
  const projects = [
    {
      title: "Parallax UI",
      description:
        "ParallaxUI lets users create customizable, multi-layer designs with parallax effects, and export the code for seamless integration.",
      stack: ["React.js", "Typescript", "Material UI"],
      image: "/images/ParallaxUI2.png",
    },
    {
      title: "Next Game",
      description:
        "NextGame is a sleek video game discovery app that lets users explore, filter, and sort games using a modern UI.",
      stack: ["React.js", "Typescript", "Python", "Flask", "Chakra UI"],
      image: "/images/NextGame.png",
    },
  ];
  return (
    <div className="h-fit flex flex-col bg-white">
      <div className="flex flex-col items-center mt-10 mx-4">
        {projects.map((project) => (
          <WorkCard
            title={project.title}
            description={project.description}
            stack={project.stack}
            image={project.image}
            key={project.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
