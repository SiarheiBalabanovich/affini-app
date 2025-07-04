/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      screens: {
        xs: { max: '479px' },
        sm: '480px',
        lg2: '1390px',
        'xxl': '1450px',
      },
    },
  },
  variants: {},
  plugins: [],
};