import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data";

const ProjectSection = () => {
  return (
    <div className="h-fit flex flex-col || border border-gray-200/80 ">
      <div className="flex flex-col items-center mt-10 mx-4">
        {projects.map((project) => (
          <ProjectCard
            id={project.id}
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

export default ProjectSection;