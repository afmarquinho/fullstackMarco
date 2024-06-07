/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBg: "#07070f",
        orange: "#fda500",
        softBlue: "#d3d9f3",
      },
    },
  },
  plugins: [],
};
