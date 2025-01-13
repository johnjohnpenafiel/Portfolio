import { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

export interface ProjectDetail {
  name: string;
  description: string;
}

export interface ProjectImage {
  src: string;
  description: string;
}

export interface ProjectLink {
  name: string;
  url: string;
  icon: IconType;
}
export interface Project {
  id: string;
  name: string;
  title: string;
  description: string;
  details: ProjectDetail[];
  images: ProjectImage[];
  links: ProjectLink[];
}
export const projectData = [
  // PARALLAX UI
  {
    id: "parallaxui",
    name: "ParallaxUI",
    title:
      "Accelerating Parallax Effect Implementation with Intuitive Code Generation",
    description:
      "ParallaxUI is a graphical user interface designed to help developers and users with basic programming knowledge create customizable objects that feature dynamic parallax effects. Through an intuitive and modern interface, users can create objects with multiple layers that move at different speeds based on mouse hover or animation, adding depth and a 3D-like experience. After completing their design, users can export the generated code to integrate the object into their own projects or websites.",
    details: [
      {
        name: "Frontend:",
        description: "React.js, Typescript, Vite, Material UI",
      },
      {
        name: "Backend:",
        description: "Python, Flask, SQLAlchemy, PostgreSQL",
      },
      {
        name: "Deployment:",
        description: "Vercel, AWS Elastic Beanstalk, AWS RDS",
      },
      {
        name: "Duration:",
        description: "Oct 2024 - Dec 2024",
      },
      {
        name: "Purpose:",
        description:
          "To build a practical tool while enhancing my technical skills and exploring new technologies.",
      },
    ],
    images: [
      {
        src: "/images/ParallaxUICanva1.svg",
        description: "Costumizable Design",
      },
      { src: "/images/ParallaxUICanva2.svg", description: "Design Area" },
      {
        src: "/images/ParallaxUICanva3.svg",
        description: "Parallax Effect Preview",
      },
      { src: "/images/ParallaxUICanva4.svg", description: "Export Design" },
    ],
    links: [
      {
        name: "Live site",
        url: "https://www.parallaxui.com/",
        icon: TbWorldWww,
      },
      {
        name: "Code",
        url: "https://github.com/johnjohnpenafiel/ParallaxUI",
        icon: FaGithub,
      },
    ],
  },
  // NEXTGAME
  {
    id: "nextgame",
    name: "NextGame",
    title:
      "Discover, Explore, and Filter Games with a Seamless React & TypeScript Web App",
    description:
      "NextGame is a beautiful video game discovery web application that allows users to explore games, filter them by genre and platform, and toggle between light and dark mode. Built with modern web technologies, this project demonstrates the use of React, TypeScript, and Flask for a seamless user experience.",
    details: [
      {
        name: "Frontend:",
        description: "React.js, Typescript, Vite, Chakra UI",
      },
      {
        name: "Backend:",
        description: "Python, Flask, API, SQLAlchemy, SQLite3",
      },
      {
        name: "Deployment:",
        description: "Not deployed",
      },
      {
        name: "Duration:",
        description: "Sept 2024 - Oct 2024",
      },
      {
        name: "Purpose:",
        description:
          "To build a sleek, functional app that enhances game discovery while refining my technical expertise.",
      },
    ],
    images: [
      {
        src: "/images/NextGameCanva1.svg",
        description: "Get Platforms, Rating and Score game details",
      },
      {
        src: "/images/NextGameCanva3.svg",
        description: "Filter by Genre, Platform and Order",
      },
      {
        src: "/images/NextGameCanva4.svg",
        description: "Search through a vast library of games.",
      },
      { src: "/images/NextGameCanva2.svg", description: "Light/Dark Mode" },
    ],
    links: [
      {
        name: "Coming soon",
        url: undefined,
        icon: TbWorldWww,
      },
      {
        name: "Code",
        url: "https://github.com/johnjohnpenafiel/NextGame",
        icon: FaGithub,
      },
    ],
  },
  // JACKSPOT
  {
    id: "jackspot",
    name: "JackSpot",
    title:
      "Explore New Places Through Personalized Collections and Friend-Driven Recommendations",
    description:
      "JackSpot is a web application designed for discovering and sharing favorite locations with friends. Instead of relying on public reviews, JackSpot allows users to create personalized collections of spots, share them socially, and discover new places based on their friends' recommendations.",
    details: [
      {
        name: "Frontend:",
        description: "Next.js, Tailwind CSS",
      },
      {
        name: "Backend:",
        description: "Python, Flask, SQLAlchemy, SQLite3",
      },
      {
        name: "Design:",
        description: "FigJam",
      },
      {
        name: "Deployment:",
        description: "Not deployed",
      },
      {
        name: "Duration:",
        description: "Jul 2024 - Aug 2024",
      },
      {
        name: "Purpose:",
        description: "Final project of my Flatiron School program.",
      },
    ],
    images: [
      {
        src: "/images/JackSpotCanva1.svg",
        description: "View recent created Spots",
      },
      { src: "/images/JackSpotCanva5.svg", description: "Create a Collection" },
      { src: "/images/JackSpotCanva2.svg", description: "Select a Collection" },
      { src: "/images/JackSpotCanva6.svg", description: "Create a Spot" },
      {
        src: "/images/JackSpotCanva3.svg",
        description: "Select a Spot to view related information",
      },
      {
        src: "/images/JackSpotCanva4.svg",
        description: "Search by name or type",
      },
      { src: "/images/JackSpotCanva7.svg", description: "Mobile View" },
      { src: "/images/JackSpotFigma.svg", description: "Design Structure" },
    ],
    links: [
      {
        name: "Coming soon",
        url: undefined,
        icon: TbWorldWww,
      },
      {
        name: "Code",
        url: "https://github.com/johnjohnpenafiel/JackSpot",
        icon: FaGithub,
      },
    ],
  },
];
