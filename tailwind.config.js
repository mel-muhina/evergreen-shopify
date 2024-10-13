const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',  // Include all JS/TS/JSX/TSX files inside app folder
    './components/**/*.{js,ts,jsx,tsx}',  // Include all components
    './src/**/*.{js,ts,jsx,tsx}',  // Include files inside src if needed
],
  theme: {
    extend: { 
      fontFamily: {
      sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
    },
    gridTemplateRows: {
      '[auto,auto,1fr]': 'auto auto 1fr',
    },
    colors: {
      olive: '#808000',
      orangey: '#ff9100', 
    },
   },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

