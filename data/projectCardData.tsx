import { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";

export interface ProjectCardLink {
  url: string;
  icon: IconType; // React-icons component type
}

export interface ProjectCard {
  id: string;
  title: string;
  description: string;
  stack: string[]; // Array of technologies
  duration: string; // E.g., "Oct - Dec 2024"
  imageCard: string; // Path to the image
  href: string; // Link to the detailed project page
  links: ProjectCardLink[]; // Links for the project
}

export const projectCards: ProjectCard[] = [
  // SIRENBASE
  {
    id: "sirenbase",
    title: "SirenBase",
    description:
      "A mobile-first operations platform that digitizes daily workflows for coffee house staff, replacing paper-based inventory tracking, counting, and restocking systems with fast, accountable digital tools.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/ui",
      "Python",
      "Flask",
      "PostgreSQL",
    ],
    duration: "Nov - Dec 2025",
    imageCard: "/images/sirenbase/RTD&E Tool Mobile.svg",
    href: "/projects/sirenbase",
    links: [
      {
        url: "https://www.sirenbase.com/",
        icon: TfiWorld,
      },
      {
        url: "https://github.com/johnjohnpenafiel/SirenBase",
        icon: FaGithub,
      },
    ],
  },
  // PARALLAX UI
  {
    id: "parallaxui",
    title: "ParallaxUI",
    description:
      "ParallaxUI lets users create customizable, multi-layer designs with parallax effects, and export the code for seamless integration.",
    stack: [
      "React.js",
      "Typescript",
      "Python",
      "Flask",
      "SQLAlchemy",
      "PostgreSQL",
      "AWS Cloud Services",
      "Material UI",
    ],
    duration: "Oct - Present",
    imageCard: "/images/ParallaxUICanva2.svg",
    href: "/projects/parallaxui",
    links: [
      {
        url: "https://www.parallaxui.com/",
        icon: TfiWorld,
      },
      {
        url: "https://github.com/johnjohnpenafiel/ParallaxUI",
        icon: FaGithub,
      },
    ],
  },
  // NEXTGAME
  {
    id: "nextgame",
    title: "NextGame",
    description:
      "NextGame is a sleek video game discovery app that lets users explore, filter, and sort games using a modern UI.",
    stack: [
      "React.js",
      "Typescript",
      "Python",
      "Flask",
      "API",
      "SQLAlchemy",
      "SQLite3",
      "Chakra UI",
    ],
    duration: "Sept - Oct 2024",
    imageCard: "/images/NextGameCanva1.svg",
    href: "/projects/nextgame",
    links: [
      {
        url: "https://github.com/johnjohnpenafiel/NextGame",
        icon: FaGithub,
      },
    ],
  },
  // JACKSPOT
  {
    id: "jackspot",
    title: "JackSpot",
    description:
      "JackSpot lets users create, share, and discover personalized collections of favorite locations based on friends' recommendations.",
    stack: [
      "Next.js",
      "Python",
      "Flask",
      "SQLAlchemy",
      "SQLite3",
      "Tailwind CSS",
    ],
    duration: "Aug 2024",
    imageCard: "/images/JackSpotCanva2.svg",
    href: "/projects/jackspot",
    links: [
      {
        url: "https://github.com/johnjohnpenafiel/JackSpot",
        icon: FaGithub,
      },
    ],
  },
];
