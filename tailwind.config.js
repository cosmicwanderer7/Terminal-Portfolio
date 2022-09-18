/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,css}',
    'index.html','main.css'],
  theme: {
    extend: {},
  },
  plugins: ["tailwindcss ,autoprefixer"],
};
