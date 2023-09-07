/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#080D18",
      },
      fontSize: {
        sml: ["20px", "0.8"],
        "5xl": ["75px", "50px"],
        "8xl": ["100px", "60px"],
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        aquire: ["Aquire", "sans-serif"],
        aquireLight: ["AquireLight", "sans-serif"],
      },
      backgroundImage: {
        HeroBg: "url(/src/assets/images/HeroBackground.png)",
      },
      dropShadow: {
        xl: "0 0 15px rgba(255, 255, 255, 0.05)",
      },
    },
  },
  plugins: [],
};
