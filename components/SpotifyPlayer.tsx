"use client";
import React, { useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

const SpotifyPlayer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [fadeIn, setFadeIn] = useState<boolean>(false);
  return (
    <div className=" sm:flex hidden fixed bottom-5 right-6 z-50">
      <button
        className="flex items-start overflow-visible justify-start"
        onClick={() => {
          setIsOpen(!isOpen);
          setFadeIn(false);
        }}
      >
        {!isOpen ? (
          <FaSpotify
            title="Open Spotify Player"
            className="transition-all text-4xl hover:scale-125 animate-[bounce_1s_ease-in-out_4.5] hover:animate-none"
          />
        ) : fadeIn ? (
          <IoIosClose
            title="Close Spotify Player"
            size={25}
            className="-mb-1 mr-2 text-neutral-100 hover:text-neutral-300 hover:bg-neutral-400 bg-neutral-500 rounded-full "
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
          src="https://open.spotify.com/embed/artist/3AA28KZvwAUcZuOKwyblJQ?utm_source=generator"
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
