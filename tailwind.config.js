/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#696cff",
        secondary: "#8592a3",
        success: "#71dd37",
        danger: "#ff3e1d",
        warning: "#ffab00",
        info: "#03c3ec",
        dark: "#233446",
        light: "#ffffff",
        bgBody: "#f5f5f9",
        textMain: "#697a8d",
        borderPrimary: "#d9dee3",
      },
      screens: {
        xs: "320px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
      },
      animation: {
        "waving-hand": "wave 1s linear infinite",
      },
      keyframes: {
        wave: {
          "0%, 100%": { opacity: "100" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
