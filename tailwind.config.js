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
      'dark-green': '#4ca07a',
      'green': '#1DB67B',
      'light-green': '#DCF5EB',
      'very-light-green': '#eef8f6',
      'yellow': '#fbcd54',
      'red': '#F7617D',
      'white': '#fff',
      'black': '#000'
    },
    fontFamily: {
      lato: ['Lato', 'sans-serif'],
      nunito: ['Nunito', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
