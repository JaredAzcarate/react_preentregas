/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: {
        100: '#F5F5F5',
        300: '#E4E4E4',
        500: '#777777',
      },
      yellow: '#FFBE0E',
      red: '#D91415',
    },

    fontFamily:{
      'Inter': ['inter','sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}