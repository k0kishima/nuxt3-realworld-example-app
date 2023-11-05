module.exports = {
  theme: {
    extend: {
      colors: {
        'custom-green': '#5CB85C',
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        'custom-green': '#5CB85C',
      }),
      fontFamily: {
        titillium: ['Titillium Web', 'sans-serif'],
      },
    },
  },
};
