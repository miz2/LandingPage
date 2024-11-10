module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(28, 64, 142, 0.80), rgba(8, 18, 40, 0.80))', // Darker gradient
      },
    },
  },
  plugins: [],
};
