/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Noto Sans", "sans-serif"],
      },
      colors: {
        primary: "#ff6b81",
        secondary: "#ff7f50",
        overlay: "rgba(0, 0, 0, 0.562)",
      },
    },
  },
  plugins: [],
};
