/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    // default prefix is "ui"
    require('@kobalte/tailwindcss'),
    // or with a custom prefix:
    require('@kobalte/tailwindcss')({ prefix: 'kb' }),
  ],
};
