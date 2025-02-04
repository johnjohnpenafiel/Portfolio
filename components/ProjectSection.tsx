"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import { projectCards } from "@/data/projectCardData";

const ProjectSection = () => {
  return (
    <div className="h-fit flex flex-col mb-4 || border-gray-200/80 cursor-default">
      <div className="flex flex-col items-center mx-8">
        {projectCards.map((project) => (
          <ProjectCard
            key={project.title}
            id={project.id}
            title={project.title}
            description={project.description}
            stack={project.stack}
            image={project.imageCard}
            duration={project.duration}
            links={project.links || []}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
