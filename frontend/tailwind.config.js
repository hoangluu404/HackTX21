module.exports = {
  // mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "main": "#1A4ED3",
        "accent": "#EA617A",
        "background": "#FFEEF6",
        "text": "#FFEEF6",
      },
    },
    fontFamily: {
      "display": ["Montserrat", "sans-serif"],
      "body": ["Inter", "sans-serif"]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
