export interface AboutLink {
  url: string;
  label: string;
}

export interface AboutData {
  id: number;
  title: string;
  content: string;
  link?: AboutLink;
}

export const aboutData: AboutData[] = [
  {
    id: 1,
    title: "Background",
    content:
      "I’ve moved between cultures and fields, and each shift taught me to see things from the outside in. Growing up across different environments gave me a natural awareness of how people experience things differently, something that shapes the way I approach design and usability. I started in film, which is really about telling a story, guiding attention, pacing, and composition. Engineering gave me the tools to actually build those experiences. That combination is what I bring to every project.",
  },
  {
    id: 2,
    title: "Software Engineer",
    content:
      "I build end-to-end. When I see a problem worth solving, I design it, architect it, and ship it. My projects aren't demos, they come from real needs I've seen firsthand. I use AI intentionally, I know where it speeds me up and where it gets in the way, and I'm constantly adapting as the tools evolve. When a project calls for something new, I study it, understand the tradeoffs, and build with it. That's how I learn best.",
  },
  {
    id: 3,
    title: "Things I love",
    content:
      "I'm drawn to anything that gets me outside and moving. Hiking, climbing, exploring new places. I like to challenge myself physically too, whether that's training for a marathon or just seeing what my body can do next. I make videos for myself, for friends, and for people who want to tell a story. If you're curious, some of my work lives here. I love discovering new movies and rewatching the ones that stuck with me. And honestly, I'm a sucker for long walks, cold weather, new tech devices, and I'm way too excited about tech glasses and robots.",
    link: {
      url: "https://vimeo.com/johnjohnpenafiel",
      label: "here",
    },
  },
];
