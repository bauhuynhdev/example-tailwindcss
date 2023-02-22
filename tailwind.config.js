/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class',
  content: [
    './src/**/*.{html,js}',
    // './node_modules/daisyui/**/*.js',
    // './node_modules/flowbite/**/*.js',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    // require("daisyui"),
    // require('flowbite/plugin')
  ],
};
