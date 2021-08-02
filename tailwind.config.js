module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class' or false
  theme: {
    extend: {
      screens: {
        xs: '320px',
      },
      colors: {
        'kmc-orange': '#f99d3a',
      },
      fontFamily: {
        pop: ['Poppins'],
      },
    },
  },
  variants: {
    extend: {},
  },
};
