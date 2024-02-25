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
        dark: "#00e5fb",
      },
    },
  },
  plugins: [],
};
