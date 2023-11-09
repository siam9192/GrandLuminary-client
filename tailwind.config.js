/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        rob:"'Roboto', sans-serif",
        lato:"'Lato', sans-serif",
        pop:"'Poppins', sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
}

