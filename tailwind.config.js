const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      blue: '#1A659E',
      black: '#191516',
      ghostwhite: "#F7F7FF",
      purewhite: '#FFFFFF'
    },

    fontFamily: {
      heading: "'Scheherazade New', serif",
      text: "'Nunito', sans-serif",
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [],
}
