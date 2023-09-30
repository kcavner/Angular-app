/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      backgroundColor:{
        'vintage-white': '#F1F0E8',
        'vintage-tan': '#eee0c9',
        'vintage-blue': '#ADC4CE',
        'vintage-blue2': '#96B6C5'
      },
      textColor:{
        'vintage-white': '#F1F0E8',
        'vintage-blue': '#ADC4CE'
      }
    },
  },
  plugins: [],
}

