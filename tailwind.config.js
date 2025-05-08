/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7C3AED', // Purple-600
          dark: '#6D28D9', // Purple-700
          darker: '#5B21B6', // Purple-800
        },
        secondary: '#EC4899', // Pink-500
      },
    },
  },
  plugins: [],
} 