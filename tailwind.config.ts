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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        float: "float 10s ease-in-out infinite",
        "float-slow": "float-slow 15s ease-in-out infinite",
        gradient: "gradient 5s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;