module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
   colors:{
     blue:{
       50:'#141c3a',
     100:'#7510F7'
     },
     dark:{
       100:'#121212'
     }
   }
    },
  },
  darkMode: 'class',
  plugins: [],
}