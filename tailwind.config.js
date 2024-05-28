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
  },
  corePlugins: {
    preflight: false,
  },
};
