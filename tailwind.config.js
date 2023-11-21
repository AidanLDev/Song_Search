/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      backgroundImage: {
        'masthead': "url('/images/bg-masthead.webp')",
      }
    },
  },
  plugins: [],
}

