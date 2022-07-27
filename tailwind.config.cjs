/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,ts,html,js}"],
  theme: {
       colors:{
        primaryDark:"#2d4356",
        primaryPurple:"#6700ee",
        lightPurple:"#bebcff",
        primaryGreen:"#obceb2",
        white:"#ffffff",
        transparent: 'transparent',
        current: 'currentColor',
        gray: colors.trueGray,
        red: colors.red,
        blue: colors.sky,
        yellow: colors.amber,
        indigo:colors.indigo,
        slate:colors.slate,
        black:colors.black,
        green:colors.green,
        teal:colors.teal
      },
    extend: {
        zIndex:{
        '1000':'1000'
      }, 
      fontFamily:{
        'Inter':['sans-serif'], 
        'Lexend': ['Lexend Deca','sans-serif']
    },
    },
  },
  plugins: [],
}
