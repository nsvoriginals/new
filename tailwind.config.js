/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        Nueout: ["Nueout", "sans-serif"] ,
         mono: ["mono", "sans-serif"] ,
         Geist: ["Geist", "sans-serif"] 
      }
    },
  },
  plugins: [],
}