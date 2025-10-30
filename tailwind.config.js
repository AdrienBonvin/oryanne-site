/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        linen: '#F5F1ED',
        sand: '#E8DFD5',
        sage: '#A8B5A0',
        moss: '#6B7C63',
        clay: '#C4B5A0',
        stone: '#8B8378',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
