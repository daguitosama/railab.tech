const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#006ee6',
          dark: '#0055b3'
        },
        onLight: '#20233c',
        onDark: '#dbdde0',
        surface: {
          light: '#fff',
          dark: '#2C3E50'
        },
        // ...colors,
        gray: colors.blueGray,
        fuchsia: colors.fuchsia,
        purple: colors.purple,
        violet: colors.violet,
        indigo: colors.indigo,
        blue: colors.blue,
        cyan: colors.cyan,
        teal: colors.teal,
        emerald: colors.emerald,
        green: colors.green,
        lime: colors.lime,
        yellow: colors.yellow,
        amber: colors.amber,
        orange: colors.orange,
        red: colors.red,

      },
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '84': '21rem',
        '96': '24rem',
        '108': '27rem',
        '144':'36rem',
        '216':'54rem'
      }
    },
  },
  variants: {
    extend: {
      ringColor: ['focus-visible'],
      ringWidth: ['focus-visible'],
    },
  },

  plugins: [],
}
