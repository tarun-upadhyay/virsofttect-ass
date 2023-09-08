/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const plugin = require("tailwindcss/plugin");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      pacifico: ["Pacifico", "cursive"],
      poppins: ["Poppins", "sans-serif"],
      wsans: ["Work Sans"],
      dmS: ["DM Sans", "sans-serif"],
    },
    colors: {
      blue: "#2B1887",
      lblue: "#D5CCFF",
      red: "#da1f77",
      dkblue: "#131835",
      theblue: "#131835",
    },
    screens: {
      sm: "320px",
      // => @media (min-width: 640px) { ... }
      md: "540px",
      lg: "1024px",
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.2xl") },
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.lg") },
      });
    }),
  ],
});
