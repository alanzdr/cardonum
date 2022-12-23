const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,css,scss}",
    "./src/pages/**/*.{js,ts,jsx,tsx,css,scss}",
    "./src/views/**/*.{js,ts,jsx,tsx,css,scss}",
    "./src/styles/**/*.{js,ts,jsx,tsx,css,scss}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      primary: {
        DEFAULT: '#F9615D',
        light: '#FFA56F',
        dark: '#F4505E',
      },
      gray: {
        DEFAULT: "#1C1D25",
        light: '#F2F3F7',
        medium: '#dbdbdb',
        'medium-dark': '#515557',
        dark: '#292C37',
      },
      white: "#fff",
      black: "#000"
    },
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', ...fontFamily.sans],
        playfair: ['var(--font-playfair)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
