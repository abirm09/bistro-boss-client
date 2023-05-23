/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        inter: ["Inter", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        "cs-primary": "#EEFF25",
      },
    },
  },
  plugins: [require("daisyui")],
};
