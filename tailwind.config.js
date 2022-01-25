module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Poppins':['Poppins', 'sans-serif'],
         'SourceSansPro-Regular':['"Source Sans Pro"','sans-serif'],
         'SourceSansPro-Bold':['"Source Sans Pro"','sans-serif'],
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}