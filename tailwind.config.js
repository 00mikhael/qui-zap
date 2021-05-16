const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueGray: colors.blueGray,
        cyan: colors.cyan,
        orange: colors.orange,
        amber: colors.amber,
        lime: colors.lime,
        lightblue: colors.lightBlue,
        violet: colors.violet,
        fuchsia: colors.fuchsia,
        rose: colors.rose
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
  ],
}
