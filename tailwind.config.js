/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: '[data-mode="dark"]',
  darkMode: 'class',
  content: [
    './src/**/*.{html,js}',
    // './node_modules/daisyui/**/*.js',
    // './node_modules/flowbite/**/*.js',
  ],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    // require("daisyui"),
    // require('flowbite/plugin')
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
        }
      })
    },
    require('@tailwindcss/line-clamp')
  ],
};
