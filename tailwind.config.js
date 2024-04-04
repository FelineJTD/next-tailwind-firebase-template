/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#FFFFFF",
      neutral: {
        100: "#FCFAEE",
        200: "#F1EFE3",
        300: "#E6E4D7",
        400: "#CECBB8",
        500: "#ACA99D",
        600: "#8A8781",
        700: "#686666",
        800: "#46444A",
        900: "#24222F",
      },
      primary: {
        300: "#FF8C3C",
        500: "#EC5E36",
        700: "#CB4427",
        900: "#A23226",
      }
    },
    extend: {
      backgroundImage: {
        "gradient-radial-to-tr": "radial-gradient(115% 90% at 0% 100%, var(--tw-gradient-stops))",
      }
    },
  },
  plugins: [],
}
