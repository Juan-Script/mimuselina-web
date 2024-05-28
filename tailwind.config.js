/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        primary: "#110506",
        "orange-light-1": "#fff1ed",
        "orange-1": "#ff6e4c",
        text: "#a49f9e",
        "gray-1": "#e7e7e7",
        "light-pink": "#ffe3ef",
        "orange-2": "#ff9f88",
        accent: "#ff445a",
        "accent-hover": "#d4394b",
        "orange-light-2": "#fff7f7",
        secondary: "#ffc8bb",
      },
      spacing: {},
      fontFamily: {
        "heading-5": "Poppins",
      },
      borderRadius: {
        "81xl": "100px",
      },
    },
    fontSize: {
      "5xl": "24px",
      base: "16px",
      "21xl": "40px",
      sm: "14px",
      "37xl": "56px",
      xl: "20px",
      lg: "18px",
      xs: "12px",
      "77xl": "96px",
      inherit: "inherit",
    },
    screens: {
      "3xl": {
        max: "3000px",
      },
      "2xl": {
        max: "2000px",
      },
      xl: {
        max: "1650px",
      },
      "2lg": {
        max: "1440px",
      },
      lg: {
        max: "1280px",
      },
      "2md": {
        max: "1024px"
      },
      md: {
        max: "960px",
      },
      custom: {
        max: "835px",
      },
      sm: {
        max: "550px",
      },
      xs: {
        max: "395px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
