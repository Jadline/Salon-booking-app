import 'flowbite'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     fontFamily: {
        inter: ['Inter', 'sans-serif'],
        imperialscript : ["Imperial Script", 'cursive'],
        poppins : ["Poppins", 'sans-serif']
      },
    },
  },
plugins: [],
 
}

