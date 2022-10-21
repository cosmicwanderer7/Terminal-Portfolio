/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,css}",
    "index.html",
    "main.css",
    "js/commands.js",
  ],
  theme: {
    extend: {
      cursor: {
        fancy: "url(AnyaCursor/pointer.gif), pointer",
      },
    },
  },
  plugins: ["tailwindcss ,autoprefixer ,typography ,line-clamp"],
};
