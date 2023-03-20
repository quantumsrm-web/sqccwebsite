/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/src/Pages/Events/Images/fractal-1654672 1 (2).png')"
      }
    },
  },
  plugins: [],
};
