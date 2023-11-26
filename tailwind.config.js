/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-10": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "2px",
          "&::-webkit-scrollbar-track": {
            "background-color": "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            "background-color": "#21213E",
            "box-shadow": "inset 0 0 6px rgba(0, 0, 0, 0.5)",
            "border-radius": "7px",
          },

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            width: "10px",
          },
        },
      });
    }),
  ],
};
