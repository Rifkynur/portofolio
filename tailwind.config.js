/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { transform: "translateY(-100px)" },
          "100%": { transform: "translateY(0)" },
        },
        borderSpin: {
          "100%": { transform: "rotate(-360deg)" },
        },
        hello: {
          "0%": { transform: "rotate(45deg)" },
          "25%": { transform: "rotate(-45deg)" },
          "50%": { transform: "rotate(45deg)" },
          "75%": { transform: "rotate(-45deg)" },
          "100%": { transform: "rotate(45deg)" },
        },
      },
      animation: {
        borderSpin: "borderSpin 3s linear infinite",
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        light: "#F57D1F",
        dark: "#0079FF",
      },
      boxShadow: {
        cardShadowBig: "5px 5px 0px ",
        cardShadowSmall: "2px 2px 0px ",
        darkShadowBig: "6px 4px 4px #0079FF ",
        darkShadowSmall: "3px 3px 3px #0079FF ",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
