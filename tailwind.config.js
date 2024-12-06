/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        opnesans: ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        violet: "#11175D",
        darkBlueOne: "#11175D",
        darkBlueTwo: "#03014C",
        orange: "#EA6C00",
      },
      transitionTimingFunction: {
        custom: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
      boxShadow: {
        custom: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
