"use client";

import React from "react";
import { useParams } from "next/navigation";
import { projects } from "@/data";

const Projects = () => {
  const { projectId } = useParams();
  const project = projects.find((project) => project.id === projectId);

  return (
    <div className="h-screen -mt-[64px] border-b">
      <div className="mt-20">
        <div className="text-4xl">{project?.title}</div>
        <div>{project?.description}</div>
        <div>{project?.stack}</div>
      </div>
    </div>
  );
};

export default Projects;
