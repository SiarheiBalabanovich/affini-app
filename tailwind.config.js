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
      colors: {
        primary: {
        DEFAULT: "#1A2935",
        80: "rgba(26, 41, 53, 0.8)",
        70: "rgba(26, 41, 53, 0.7)",
        30: "rgba(26, 41, 53, 0.3)",
      },
      whiteCustom: "#FCFEFF",
      lightBlue: "#DCEFFF",
      softGreen: "rgba(180, 229, 200, 0.6)",
      planBasic: "rgba(53, 244, 131, 0.6)",
      planFamily: "#198244",
      darkText: "#161616",
      star: "#FAD378",
    },
    boxShadow: {
      soft: "-2px 8px 8px rgba(0,0,0,0.08)"
      },
      screens: {
        xs: { max: '479px' },
        sm: '480px',
        lg2: '1390px',
        'xxl': '1450px',
      },
    },
  },
  plugins: [],
};