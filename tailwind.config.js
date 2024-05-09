/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        wide: "1440px",
      },
      colors: {
        "black-gray": "#323233",
        "semi-white": "#e7e3de",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('/src/assets/images/hero-bg.png')",
        about: "url('/src/assets/images/about-bg.png')",
        project: "url('/src/assets/images/project-bg.png')",
        project2: "url('/src/assets/images/project2-bg.png')",
        footer: "url('/src/assets/images/footer-bg.png')",
        mobile: "url('/src/assets/images/mobile-bg.png')",
      },
    },
  },
  plugins: [],
};
