"use client";
import React, { useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

const SpotifyPlayer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [fadeIn, setFadeIn] = useState<boolean>(false);
  return (
    <div className=" flex fixed bottom-4 right-5 z-50 overflow-hidden">
      <button
        className="flex justify-start"
        onClick={() => {
          setIsOpen(!isOpen);
          setFadeIn(false);
        }}
      >
        {!isOpen ? (
          <FaSpotify className="transition-all text-3xl hover:text-4xl" />
        ) : fadeIn ? (
          <IoIosClose
            size={25}
            className="-mb-1 text-neutral-500 hover:text-neutral-300"
          />
        ) : (
          <></>
        )}
      </button>

      {!isOpen ? (
        <></>
      ) : (
        <iframe
          className={`rounded-2xl transition-opacity duration-500 ${
            !fadeIn ? "opacity-0" : "opacity-100"
          }`}
          src="https://open.spotify.com/embed/artist/1URnnhqYAYcrqrcwql10ft?utm_source=generator"
          width="350"
          height="152"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          onLoad={() => setFadeIn(true)}
        ></iframe>
      )}
    </div>
  );
};

export default SpotifyPlayer;
