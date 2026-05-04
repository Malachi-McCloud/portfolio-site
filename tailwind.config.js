/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./Pages/**/*.{cshtml,razor}",
    "./Views/**/*.{cshtml,razor}",
    "./Components/**/*.{razor,cshtml}",
    "./**/*.razor",
    "./**/*.cshtml"
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};
