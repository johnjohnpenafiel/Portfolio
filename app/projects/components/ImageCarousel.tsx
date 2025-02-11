"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ProjectImage } from "@/data/projectPageData";

interface Props {
  images: ProjectImage[];
}

const ImageCarousel = ({ images }: Props) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImage, setLoadedImage] = useState(false);
  const ref = useRef<HTMLElement>();

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
    <div>
      {images.length ? (
        <>
          {/* CAROUSEL */}
          <div
            ref={carouselRef}
            className="snap-x snap-mandatory flex overflow-x-scroll w-auto h-auto md:w-[525px] md:h-[400px] scrollbar-none"
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="flex w-full h-full snap-always snap-center flex-shrink-0 justify-center items-center cursor-ew-resize"
              >
                {/* IMAGE */}
                <Image
                  src={image.src}
                  alt={`Project Image`}
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
          <div className="flex -mt-5 space-x-2 justify-center">
            {images.map((_, index) => (
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
      <p className="text-center  mt-4">{images[currentIndex]?.description}</p>
    </div>
  );
};

export default ImageCarousel;
