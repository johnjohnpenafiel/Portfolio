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
  url?: string;
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
  // SIRENBASE
  {
    id: "sirenbase",
    name: "SirenBase",
    title: "A Digital Operations Platform for Coffee House Partners",
    description:
      "SirenBase is a comprehensive digital operations platform built for coffee house partners. It replaces manual paper-based systems with a unified suite of specialized tools: an Inventory Tracking System with unique 4-digit codes for basement stock, a Milk Count System with automated calculations for dairy ordering, and an RTD&E System for display restocking with auto-generated pull lists. Built with Next.js, Flask, and PostgreSQL, the platform features JWT authentication, role-based access control, drag-and-drop interfaces, and complete audit logging. Mobile-first design ensures fast, touch-friendly access from anywhere in the store.",
    details: [
      {
        name: "Frontend:",
        description: "Next.js, TypeScript, Tailwind CSS, Shadcn/ui",
      },
      {
        name: "Backend:",
        description: "Python, Flask, PostgreSQL",
      },
      {
        name: "Deployment:",
        description: "Vercel, Render, Neon",
      },
      {
        name: "Duration:",
        description: "Nov 2025 - Dec 2025",
      },
      {
        name: "Purpose:",
        description:
          "To digitize coffee house operations, replacing paper-based inventory tracking and counting systems with fast, accountable digital tools for retail partners and shift supervisors.",
      },
    ],
    images: [
      { src: "/images/sirenbase/Login.svg", description: "Login Page" },
      {
        src: "/images/sirenbase/Admin Dashboard.svg",
        description: "Admin Dashboard",
      },
      { src: "/images/sirenbase/Admin Panel Mobile.svg", description: "Admin Panel (Mobile)" },
      {
        src: "/images/sirenbase/Admin User Managment.svg",
        description: "User Management",
      },
      {
        src: "/images/sirenbase/Inventory Tracking Tool Mobile.svg",
        description: "Inventory Tracking (Mobile)",
      },
      {
        src: "/images/sirenbase/Inventory Category.svg",
        description: "Inventory Categories",
      },
      {
        src: "/images/sirenbase/Inventory History.svg",
        description: "Inventory History & Audit Log",
      },
      {
        src: "/images/sirenbase/RTD&E Count.svg",
        description: "RTD&E Count System",
      },
      {
        src: "/images/sirenbase/RTD&E Pull.svg",
        description: "RTD&E Auto-Generated Pull List",
      },
      {
        src: "/images/sirenbase/RTD&E Tool Mobile.svg",
        description: "Mobile-First Design",
      },
    ],
    links: [
      {
        name: "Live site",
        url: "https://www.sirenbase.com/",
        icon: TbWorldWww,
      },
      {
        name: "Code",
        url: "https://github.com/johnjohnpenafiel/SirenBase",
        icon: FaGithub,
      },
    ],
  },
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
        description: "Oct 2024 - Present",
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
        src: "/images/ParallaxUICanva4.svg",
        description: "Export Embeded Design",
      },
      {
        src: "/images/ParallaxUICanva5.svg",
        description: "Implementing Design",
      },
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
      "NextGame is a sleek and modern web application for discovering video games, offering users the ability to explore, filter by genre and platform, and enjoy a dynamic user interface. Powered by the RAWG API, NextGame fetches real-time game data securely through a Flask backend, acting as a proxy to protect sensitive API keys. Built with React, TypeScript, and Flask, this project demonstrates advanced integration of frontend and backend technologies for a seamless user experience.",
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
        description: "Aug 2024",
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
      { src: "/images/JackSpotCanva7.svg", description: "Mobile View" },
      { src: "/images/JackSpotFigma.svg", description: "Design Structure" },
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
