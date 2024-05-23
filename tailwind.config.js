/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Logo: [ "Aclonica", "sans-serif"],
        Title: ["Calistoga", "serif"]
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

