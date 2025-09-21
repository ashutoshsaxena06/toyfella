/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700', // bright yellow
        secondary: '#FFFAF0', // light cream
        accent: '#FF6F61', // coral
        info: '#4FC3F7', // light blue
        success: '#81C784', // green
        warning: '#FFB300', // orange
        error: '#E57373', // red
      },
    },
  },
  plugins: [],
};
