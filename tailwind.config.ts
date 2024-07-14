import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ['variant', [
    '@media (prefers-color-scheme: dark) { &:not(.light *) }',
    '&:is(.dark *)',
  ]],
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
        secondary: "#git",
        primary: "#FF6666",
      },
      screens: {
        xsm: "640px",
        sm: "768px",
        lg: "1024px",
      },
    },
  },
  plugins: [],
};
export default config;
