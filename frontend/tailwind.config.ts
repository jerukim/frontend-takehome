/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        xxs: "0.625rem",
      },
      colors: {
        white: "#F2F1F0",
        "white-50": "#FFFEFE",
        gray: "#AEADAD",
        "gray-50": "#818181",
        "gray-100": "#898989",
        black: "#0F0E0C",
        "black-16": "#161514",
        "black-1a": "#1A1A1A",
        "black-25": "#252525",
        "black-42": "#424242",
        green: "#4BC2A3",
        red: "#FF5A44",
        "red-e0": "#E03737",
      },
    },
  },
  plugins: [],
};
