/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zred: '#ff4a66', 
        zblue: '#0282fe', 
      }
    },
  },
  plugins: [],
}

