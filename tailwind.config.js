/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat:['Montserrat', 'sans-serif']
      },
      boxShadow: {
        'header': '0px 5px 5px rgba(0,0,0,.4)'
      }
    },
  },
  plugins: [],
}

