/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'the-slap': "url('https://i.ibb.co/cwDsGVB/4k.png')",
      }
    }
  },
  plugins: [],
};
