/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      mb: "320px",
      lg: "1025px",
      sm: "480px",
      md: "768px",
    },

    extend: {
      colors: {
        cel: "#016A70",
        fah: "#D2DE32",
        Cold: "#75cbff",
        Sunny: "#08e670",
        Hot: "#FD5740",
        Freezing: "#294766",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
