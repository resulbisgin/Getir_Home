/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",'./public/index.html'
  ],
  theme: {
    extend: {
   colors:{
    'brand-color':'#4c3398',
    'second-brand-color':'#5d3ebc',
    'primary-brand-color':'#7849f7',
    'brand-yellow':'#ffd300'
   },
   spacing:{
    '0.1':'0.063'
   }
    },
  },
  plugins: [],
}
