/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      title: "#CBD5F6",
      bg: "#0A182E",
      buttonText: "#4AB9A7",
      buttonBg: "#E0F2FE",
      secondary: "#1DB0F8",
    },
  },
  plugins: [],
};
