"use client";

import React from "react";

import { useParams } from "next/navigation";

import { projectData } from "@/data/projectPageData";
import ImageCarousel from "../components/ImageCarousel";
import Iframe from "../components/Iframe";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const { projectId } = useParams();
  const project = projectData.find((project) => project.id === projectId);

  if (!project) throw new Error("No Data");

  return (
    <div className="min-h-screen -mt-[64px] bg-[#f9fafb] dark:bg-black cursor-default">
      {/* ----- PROJECT DATA SECTION ------ */}
      <div className="flex flex-col xl:flex-row w-full h-full pt-28 md:pt-32 md:pb-10">
        {/* ----- PPROJECT CARD ----- */}
        <ProjectCard
          name={project.name}
          title={project.title}
          description={project.description}
          details={project.details}
          links={project.links}
        />
        {/* ----- IMAGE CAROUSEL ----- */}
        <div className="xl:w-1/2 flex flex-col justify-center items-center mx-5 my-10 md:my-0 md:mx-10 md:mt-10 lg:mt-0 lg:mr-10">
          <ImageCarousel images={project.images} />
        </div>
      </div>
      {/* ----- IFRAME ----- */}
      <div className="hidden lg:flex lg:justify-center xl:justify-start">
        {project?.id === "parallaxui" ? <Iframe /> : <></>}
      </div>
    </div>
  );
};

export default Projects;
