"use client";

import React from "react";

import { useParams } from "next/navigation";
import Image from "next/image";

import { projectData } from "@/data";

const Projects = () => {
  const { projectId } = useParams();
  const project = projectData.find((project) => project.id === projectId);

  return (
    <div className="h-screen -mt-[64px] bg-[#f9fafb]">
      <div className="flex w-full h-full pt-24">
        {/* ----- PROJECT DATA SECTION ------ */}
        <div className="w-1/2 pl-12 pt-20 ">
          {/* NAME */}
          <div className="text-md font-semibold text-stone-500">
            {project?.name}
          </div>
          {/* TITLE */}
          <div className="text-4xl font-black text-stone-800">
            {project?.title}
          </div>
          {/* DESCRIPTION */}
          <div className="mt-4 mb-8 font-light">{project?.description}</div>
          {/* DETAILS */}
          <div className="mt-4">
            {project?.details!.map((detail) => (
              <div key={detail.name} className="flex text-sm mb-1">
                <p className="mr-1 font-semibold">{detail.name}</p>
                <p>{detail.description}</p>
              </div>
            ))}
          </div>
          {/* LINKS */}
          <div className="flex mt-8">
            {project?.links?.map((link) => (
              <div
                key={link.name}
                className={`mr-5 ${link.url || "cursor-not-allowed"}`}
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center text-sm text-stone-500 ${
                    link.url && "hover:text-stone-700"
                  }`}
                >
                  {React.createElement(link.icon, {
                    className: "mr-2 text-lg",
                  })}
                  <p>{link.name}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
        {/* ----- IMAGE SECTION ----- */}
        {/* IMAGE */}
        <div className="w-1/2 flex justify-center items-center mb-20">
          <Image
            src={project?.heroImage!}
            width={525}
            height={525}
            alt="ParallaxUI website view"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
