/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Nunito', defaultTheme.fontFamily.sans]
    },
    extend: {},
  },
  plugins: [],
}

