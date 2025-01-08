"use client";

import React from "react";

import { useParams } from "next/navigation";
import Image from "next/image";

import { projects } from "@/data";

const Projects = () => {
  const { projectId } = useParams();
  const project = projects.find((project) => project.id === projectId);

  return (
    <div className="h-screen -mt-[64px] ml-5 bg-[#f9fafb]">
      <div className="mx-10 pt-24">
        <div className="text-4xl font-bold">{project?.title}</div>
        <ul className="inline-flex my-2 || text-sm">
          {project?.stack.map((s, index) => (
            <li key={index} className="text-stone-700 font-semibold ">
              {s}
              {index < project.stack.length - 1 && (
                <span className="mx-2">•</span>
              )}
            </li>
          ))}
        </ul>
        <div className="h-[515px] w-[816px] border-4">
          <Image
            src="/images/JackSpot.png"
            height={510}
            width={816}
            alt="pic"
          />
        </div>
        <div className="w-1/2 mt-4">{project?.description}</div>
      </div>
    </div>
  );
};

export default Projects;
