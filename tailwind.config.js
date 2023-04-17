/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark-gray': '#333333',
      'light-gray': '#EBEBEB',
      'grayish-blue': '#646D82',
      'light-grayish-blue': '#DEE2E6',
      'green': '#1DB67B',
      'light-green': '#DCF5EB',
      'yellow': '#DCF5EB',
      'red': '#F7617D'
    },
    fontFamily: {
      lato: ['Lato', 'sans-serif'],
      nunito: ['Nunito', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
