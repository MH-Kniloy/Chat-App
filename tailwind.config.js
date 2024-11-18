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
        violet: "#5F35F5",
        darkBlueOne: "#11175D",
        darkBlueTwo: "#03014C",
        orange: "#EA6C00",
      },
      transitionTimingFunction: {
        custom: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
    },
  },
  plugins: [],
};
