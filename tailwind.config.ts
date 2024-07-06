import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      spartan: ["League Spartan", "sans-serif"],
      hind: ["Hind", "sans-serif"],
    },
    extend: {
      colors: {
        secondary: "#336699",
        primary: "#FF6666",
      },
    },
  },
  plugins: [],
};
export default config;
