import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data";

const ProjectSection = () => {
  return (
    <div className="h-fit flex flex-col || border-gray-200/80 ">
      <div className="flex flex-col items-center mx-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            id={project.id}
            title={project.title}
            description={project.description}
            stack={project.stack}
            image={project.imageCard}
            order={project.order}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
