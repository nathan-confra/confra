// tailwind.config.cjs

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'confra-blue': '#00cdff',
        'confra-green': '#cdff00',
        'confra-dark': '#0c003c',
      },
    },
  },
  plugins: [],
}
