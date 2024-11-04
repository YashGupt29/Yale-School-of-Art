/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "move-right": "move-right 1s linear forwards", // Retains the final position
      },
      keyframes: {
        "move-right": {
          "0%": { transform: "translateX(-100%)" }, // Start off-screen left
          "100%": { transform: "translateX(100%)" }, // End off-screen right
        },
      },
    },
  },
  plugins: [],
};
