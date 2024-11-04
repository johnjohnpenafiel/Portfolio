import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xm: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "4.5rem",
      title: "6.2rem",
    },
    extend: {
      colors: {
        black: {
          DEFAULT: "#000",
          title: "#282828",
        },
      },
      fontFamily: {
        kodchasan: ["Kodchasan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
