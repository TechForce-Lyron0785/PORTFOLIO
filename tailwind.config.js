/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        'soft-green': '#F5F9F7',
        'soft-blue': '#E6F4FF',
        'teal-primary': {
          DEFAULT: '#2E8B7E',
          light: '#5FB3A7',
        },
        'sky-secondary': '#3BAFDA',
        'dark-bg': '#0f172a',
        'dark-surface': '#1e293b',
      },
      borderRadius: {
        'x2l': '16px',
        'x3l': '24px',
      },
      backgroundImage: {
        'teal-gradient': 'linear-gradient(to right, #2E8B7E, #5FB3A7)',
        'blue-gradient': 'linear-gradient(to right, #E6F4FF, #F5F9F7)',
      },
    },
  },
  plugins: [],
}

