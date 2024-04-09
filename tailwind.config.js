/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Space_Grotesk': ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        dark_black: '#151515',
        neon_green: '#4EE1A0',
        dark_gray: '#242424',
        cream: '#D9D9D9',
        pure_white:'#FFFFFF'
      },
    },
  },
  plugins: [],
}
