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
        50:  '#2e4c76',
        100: '#1f2937',
        200: '#141d2e',
      },
      'lantern-yellow': {
        50:  '#fffefc',
        100: '#fff4cf',
        200: '#ffe6a3',
        300: '#ffcf51',
        400: '#fac82f',
        500: '#d9a523',
        600: '#b39144',
        700: '#928455',
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
