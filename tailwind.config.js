/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blurry-eye': "url('src/assets/images/bg-eye-blurry.png')",
        'iv-icon': "url('src/assets/images/bg-iv-opacity.png')",
        'thales-dev': "url('src/assets/images/projects/Thales-Web-Developer.png')",
        'solane-clenia': "url('src/assets/images/projects/Solane-Clenia.png')"
      },
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

