/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'bai-jamjuree': ['Bai Jamjuree', 'sans-serif'],
      },
    },
    colors: {
      white: '#FFFFFF',
      darkGray: '#333333',
      darkPink: '#ED2E7C',
      pink: '#FF8BBB',
    },
  },
  plugins: [],
};
