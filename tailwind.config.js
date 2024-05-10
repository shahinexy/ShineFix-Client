import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4D869C',
        'secondary': '#7AB2B2',
      },
      fontFamily: {
        'roboto': '"Roboto Condensed", sans-serif'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui(), require('daisyui')],
}

