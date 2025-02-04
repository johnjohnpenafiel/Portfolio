"use client";

import React, { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { projectData } from "@/data/projectPageData";

const Projects = () => {
  const { projectId } = useParams();
  const project = projectData.find((project) => project.id === projectId);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImage, setLoadedImage] = useState(false);

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const width = carouselRef.current.offsetWidth;
      const newIndex = Math.round(scrollLeft / width);
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
      return () => {
        carousel.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = carouselRef.current;
        const isLastSlide = scrollLeft + clientWidth >= scrollWidth;

        carouselRef.current.scrollTo({
          left: isLastSlide ? 0 : scrollLeft + clientWidth,
          behavior: "smooth",
        });
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen -mt-[64px] bg-[#f9fafb] dark:bg-black cursor-default">
      <div className="flex flex-col xl:flex-row w-full h-full pt-28 md:pt-32 md:pb-10">
        {/* ----- PROJECT DATA SECTION ------ */}
        <div className="xl:w-1/2 mx-10 md:ml-16">
          {/* PROJECT NAME */}
          <div className="text-sm lg:text-md font-semibold text-stone-500 dark:text-neutral-400/90">
            {project?.name}
          </div>
          {/* PROJECT TITLE */}
          <div className="text-md md:text-2xl xl:text-3xl font-black text-stone-800 dark:text-neutral-300">
            {project?.title}
          </div>
          {/* PROJECT DESCRIPTION */}
          <div className="mt-4 mb-8 font-light text-sm md:text-base lg:text-md text-pretty dark:text-neutral-200">
            {project?.description}
          </div>
          {/* PROJECT DETAILS */}
          <div className="mt-4 text-pretty">
            {project?.details.map((detail) => (
              <div key={detail.name} className="flex text-xm md:text-sm mb-1">
                <p className="mr-1 font-semibold dark:text-nuetral-100">
                  {detail.name}
                </p>
                <p className="dark:text-neutral-100 dark:font-normal">
                  {detail.description}
                </p>
              </div>
            ))}
          </div>
          {/* PROJECT LINKS */}
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
                  className={`flex items-center text-sm text-stone-500 dark:text-neutral-400 border border-neutral-500 rounded-md md:border-none ${
                    link.url &&
                    "hover:text-stone-700 dark:hover:text-neutral-200"
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
        {/* ----- IMAGE CAROUSEL SECTION ----- */}
        <div className="xl:w-1/2 flex flex-col justify-center items-center mx-5 my-10 md:my-0 md:mx-10 md:mt-10 lg:mt-0 lg:mr-10">
          {project?.images.length ? (
            <>
              {/* CAROUSEL */}
              <div
                ref={carouselRef}
                className="snap-x snap-mandatory flex overflow-x-scroll w-auto h-auto md:w-[525px] md:h-[400px] scrollbar-none"
              >
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className="flex w-full h-full snap-always snap-center flex-shrink-0 justify-center items-center cursor-ew-resize"
                  >
                    {/* IMAGE */}
                    <Image
                      src={image.src}
                      alt={`Project ${project.title} - Image ${index + 1}`}
                      width={525}
                      height={400}
                      priority={index === 0}
                      className={`w-auto h-auto transition-opacity duration-700 ${
                        !loadedImage ? "opacity-0" : "opacity-100"
                      }`}
                      onLoad={() => setLoadedImage(true)}
                    />
                  </div>
                ))}
              </div>
              {/* SCROLL INDICATORS */}
              <div className="flex -mt-5 space-x-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-[7px] h-[7px] rounded-full transition ${
                      currentIndex === index
                        ? "bg-neutral-500 dark:bg-neutral-600 scale-125"
                        : "bg-neutral-200"
                    }`}
                  ></button>
                ))}
              </div>
            </>
          ) : (
            <p>No images available</p>
          )}
          {/* IMAGE DESCRIPTION */}
          <p className="text-center mt-4">
            {project?.images[currentIndex]?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
