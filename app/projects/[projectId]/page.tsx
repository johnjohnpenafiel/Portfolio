"use client";

import React, { useEffect, useRef } from "react";

import { useParams } from "next/navigation";
import Image from "next/image";

import { projectData } from "@/data";

const Projects = () => {
  const { projectId } = useParams();
  const project = projectData.find((project) => project.id === projectId);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = carouselRef.current;
        const isLastSlide = scrollLeft + clientWidth >= scrollWidth;

        carouselRef.current.scrollTo({
          left: scrollLeft + clientWidth,
          behavior: "smooth",
        });
      }
    }, 8000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen -mt-[64px] bg-[#f9fafb]">
      <div className="flex flex-col xl:flex-row w-full h-full pt-28 md:pt-40 md:pb-10">
        {/* ----- PROJECT DATA SECTION ------ */}
        <div className="xl:w-1/2 mx-10 md:ml-16">
          {/* NAME */}
          <div className="text-sm lg:text-md font-semibold text-stone-500">
            {project?.name}
          </div>
          {/* TITLE */}
          <div className=" text-md md:text-2xl xl:text-3xl font-black text-stone-800">
            {project?.title}
          </div>
          {/* DESCRIPTION */}
          <div className="mt-4 mb-8 font-light text-sm md:text-base lg:text-md text-pretty">
            {project?.description}
          </div>
          {/* DETAILS */}
          <div className="mt-4 text-pretty">
            {project?.details.map((detail) => (
              <div key={detail.name} className="flex text-xm md:text-sm mb-1">
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
                  className={`flex items-center text-sm text-stone-500 border-2 rounded-md md:border-none ${
                    link.url && "hover:text-stone-700"
                  }`}
                >
                  <div className="flex m-2">
                    {React.createElement(link.icon, {
                      className: "mr-2 text-lg",
                    })}
                    <p>{link.name}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
        {/* ----- IMAGE SECTION ----- */}
        {/* IMAGE */}
        <div className="xl:w-1/2 flex justify-center items-center mx-10 md:mt-10 lg:mt-20 lg:mr-5">
          {project?.images?.length ? (
            <div
              ref={carouselRef}
              className="snap-x snap-mandatory flex overflow-x-scroll w-[525px] h-[400px]"
            >
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="snap-always snap-center flex-shrink-0 w-full h-full flex justify-center items-center"
                >
                  <Image
                    src={image}
                    alt={`Project ${project.title} - Image ${index + 1}`}
                    width={525}
                    height={400}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p>No images available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
