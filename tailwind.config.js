/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'gray': {
        '900': '#2a2e36',
        '800': '#3e424b',
        '700': '#52575f',
        '600': '#666c74',
        '500': '#7a8088',
        '400': '#8e949c',
        '300': '#a2a8b0',
        '200': '#b6bcc4',
        '100': '#cacfd8',
      },
      'yellow': {
        '900': '#f4d644',
        '800': '#f5d94c',
        '700': '#f6dd54',
        '600': '#f7e15c',
        '500': '#f8e564',
        '400': '#f9e96c',
        '300': '#faed74',
        '200': '#fbf17c',
        '100': '#fcf584',
      },
      'text': '#414042',
    },
    extend: {},
  },
  plugins: [],
}

