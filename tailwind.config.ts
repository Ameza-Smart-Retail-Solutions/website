import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#031F1A",
        accent: "#C8102E",
        sand: "#F2EFEA",
        slateText: "#414651",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        button: "0px 2px 4px rgba(95, 88, 88, 0.25), inset 0px 1px 3px rgba(255, 255, 255, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
