module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#141c3a",
          100: "#7510F7",
        },
        theme: {
          50: "#141c3a",
          100: "#1C1C1C",
        },
        dark: {
          100: "#121212",
        },
        themeGreen: {
          100: "#66bb6a",
        },
      },
      keyframes: {
        wave: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        transition: "wave .25s linear",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
