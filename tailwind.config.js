/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      'display': ['Lato', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'moon': "url('./images/astro.png')" //From the perspective of where it is used
      },
      colors: {
        'button-blue' : '#5AC8FA',
        'prog-gray' : '#53575A',
        'progress-color' : '#E2E2E2'
      }
    },
  },
  plugins: [],
}

