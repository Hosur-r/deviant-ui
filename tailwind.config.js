/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      'max-xs':'320px',
      'max-s':'320px',
      'max-sm':'640px',
      'max-md':'768px',
      'max-lg':'1024px',
      'max-xl':'1280px',
      'max-2xl':'1536px',
    },
  },
  plugins: [],
}

