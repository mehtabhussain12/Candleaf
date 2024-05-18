export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily: {
      'Roboto': ['Roboto', 'sans-serif'],
      'Poppins':['Poppins']
    },
    extend: {
      fontWeight: {
        'medium': 500,
      },
      fontStyle: {
        'normal': 'normal',
      },
    },
  },
  plugins: [],
}
