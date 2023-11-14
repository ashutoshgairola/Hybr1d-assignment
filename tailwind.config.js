/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "275px", 
      sm: "540px",
      md: "668px",
      lg: "824px",
      xl: "1080px",
    },
  },
  plugins: [],
};
