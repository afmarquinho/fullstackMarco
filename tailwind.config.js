/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBg: "#07070f",
        mainOrange: "#fb773c",
        softBlue: "#d3d9f3",
        mainBlue: "#00bcd4ff",
        baseBlue: "#a0e9ff",
        deepBg: "#105369",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(240deg, rgba(30, 27, 75, 1) 0%, rgba(30, 27, 75, 1) 60%, rgba(253, 165, 0, 0.6) 60%, rgba(253, 165, 0, 0.6) 90%, rgba(80, 70, 229, 0.8) 90%, rgba(80, 70, 229, 0.6) 100%)",

          "custom-gradient2":
          "linear-gradient(240deg, rgba(100, 116, 139, 1) 0%, rgba(100, 116, 139, 1) 90%, rgba(30, 27, 75, 1) 90%, rgba(30, 27, 75, 1) 100%)",
      }, 
      fontFamily: {
        'archivo-black': ['"Archivo Black"', 'sans-serif'],
        'roboto-condensed': ['"Roboto Condensed"', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".clip-custom": {
          clipPath: "polygon(0 0, 100% 0, 100% 95%, 0 100%)",
        },
      });
    },
  ],
};
