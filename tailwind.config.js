/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sourceSansPro: ["Source Sans Pro", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      screens: {
        cs: "950px", // This is just a custom screen size to help with some layout issues
        fl: "400px", // This is for float-right; I was having issues with it
        rsp: "555px", // This is for responsive images
      },
    },
  },
  plugins: [],
};
