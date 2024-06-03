import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/@bwsoft/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bws: {
          100: "#E3F7FD",
          200: "#BDEBFB",
          300: "#8EDCF4",
          400: "#57CBEC",
          500: "#2BB7E3",
          600: "#149EC4",
          700: "#0E7996",
          800: "#07546A",
          900: "#022B3B"
        }
      }

    },
  },
  plugins: [],
};
export default config;
