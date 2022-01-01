const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      "pokemon-yellow": "#FFCC00",
      "pokemon-orange": "#D5A100",
      "pokemon-blue": "#0075BE",
      "pokemon-blue-d": "#0A285F",
      "pokemon-red": "#FB1B1B",
      "pokemon-red-d": "#D41717",
    },
  },
  plugins: [],
};
