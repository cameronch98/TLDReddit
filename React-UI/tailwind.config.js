/** @type {import('tailwindcss').Config} */
import "tailwind-fluid-typography";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fluidTypography: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "1080p": "1920px",
      "2K": "2560px",
      "4K": "3840px",
    },
    extend: {
      colors: {
        "reddit-orange": "#FF5700",
      },
    },
  },
  plugins: ["tailwind-fluid-typography"],
};
