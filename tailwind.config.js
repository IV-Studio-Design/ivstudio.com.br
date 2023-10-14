/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blurry-eye': "url('src/assets/images/bg-eye-blurry.png')"
      }
    },
    fontFamily: {
      montserrat:['Montserrat', 'sans-serif']
    },
  },
  plugins: [],
}

