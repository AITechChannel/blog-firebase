/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'manrope-bold': 'Manrope Bold',
        'manrope-semibold': 'Manrope SemiBold',
        'manrope-medium': 'Manrope Medium'
      },
      colors: {
        transparent: 'transparent',
        white: '#ffffff',
        yellow: '#E4B653',
        'black-0': '#000000',
        black: '#1A1A1A',
        gray: '#cccccc',
        'gray-light': '#E8ECF3',
        'grey-light': '#f2f3f5',
        grey: '#737A86',
        red: '#EF4949 ',
        orange: '#D94D27',
        blue: '#248FED',
        'gray-1': '#808080',
        'gray-2': '#F2F2F2',
        'orange-light': '#fbf3e2'
      }
    }
  },
  plugins: []
}
