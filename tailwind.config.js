const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      'night-blue': {
        50:  '#141d2e',
        100: '#1f2937',
        200: '#2e4c76',
      },
      'lantern-yellow': {
        50:  '#928455',
        100: '#b39144',
        200: '#d9a523',
        300: '#fac82f',
        400: '#ffcf51',
        500: '#ffe6a3',
        600: '#fff4cf',
        700: '#fffefc',
      },
    },
    extend: {
      keyframes: {
        wiggle: {
          '25%, 75%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out',
      }
    },
  },
  plugins: [],
}
