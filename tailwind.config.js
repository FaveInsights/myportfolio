/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'primary':['Lato', 'sans-serif'],
        'secondary':['Raleway', 'sans-serif'],    
      }
    },
  },
  plugins: [],
}

