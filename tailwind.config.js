/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // v4-compatible class mode
  content: [
    "./Pages/**/*.{cshtml,razor}",
    "./Views/**/*.{cshtml,razor}",
    "./wwwroot/**/*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
