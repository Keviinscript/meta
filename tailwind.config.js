/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      source: [ 'Euclid Circular B', 'sans-serif'],
     
  },
    extend: {
      colors:{
        'mainred': 'rgb(205, 97, 22)',
      
      },
    },
  },
  plugins: [],
}

  