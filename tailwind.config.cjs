/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      zIndex:{
        '1000':'1000'
      }, 
      fontFamily:{
        'Inter':['sans-serif'], 
        'Lexend': ['Lexend Deca','sans-serif']
    },
    }
  },
  plugins: [],
}
