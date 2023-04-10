/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/src/Pages/Events/Images/fractal-1654672 1 (2).png')"
      },
       dropShadow: {
        title: ['1px 1px 10px #00FA9A', '-1px -1px 10px #3771C8'],
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      }
    },
  },
  plugins: [],
};
