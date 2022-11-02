/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'zen': "url(@assets/zen.jpg)"
      }
    },
  },
  plugins: [],
};
