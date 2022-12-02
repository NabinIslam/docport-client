/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#19D3AE',
      secondary: '#0FCFEC',
      neutral: '#3A4256',
    },
  },
  plugins: [require('flowbite/plugin')],
};
