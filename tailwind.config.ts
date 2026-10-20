import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FDFBF7",
          100: "#FAF7F2",
          200: "#F4EFE6",
          300: "#E9E3D5",
        },
        charcoal: {
          900: "#121714",
          800: "#1C221F",
          700: "#2B322D",
          600: "#444D47",
          500: "#606A64",
          400: "#8B958F",
        },
        forest: {
          50: "#F3F7F5",
          100: "#E2ECE6",
          200: "#C4D9CD",
          600: "#2D6A4F",
          700: "#1B4332",
          800: "#143326",
          900: "#0D2219",
        },
        terracotta: {
          50: "#FAF3F0",
          100: "#F5E4DD",
          200: "#EBC8BA",
          500: "#C86D51",
          600: "#B85D43",
          700: "#9A4932",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "DM Sans", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: ".18em",
        tightest: "-.03em",
      },
    },
  },
  plugins: [],
};
export default config;
