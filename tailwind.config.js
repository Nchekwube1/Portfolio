module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'GreatVibes-Regular':['GreatVibes-Regular','cursive'],
        'Poppins-Bold':['Poppins', 'sans-serif'],
        'Poppins-Regular':['Poppins-Regular','sans-serif'],
         'Sacramento-Regular':['Sacramento-Regular','cursive'],
         'SourceSansPro-Regular':['SourceSansPro-Regular','sans-serif'],
         'SourceSansPro-Bold':['SourceSansPro-Bold','sans-serif'],
         'Satisfy-Regular':['Satisfy','cursive']
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}