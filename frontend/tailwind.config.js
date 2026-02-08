/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#79BAEC",
        "primary-dark": "#1e3c78",
        "bg-blue": "#22577A",
        "bg-light": "#e0f2ff",
      },
      fontFamily: {
        baumans: ["'Baumans'", "cursive"],
        cormorant: ["'Cormorant'", "serif"],
      },
      backgroundColor: {
        glass: "rgba(30, 60, 120, 0.12)",
      },
      boxShadow: {
        glow: "0 2px 16px 0 rgba(121,186,236,0.10)",
        "glow-lg": "0 8px 36px 0 rgba(30,60,120,0.22), 0 2px 16px 0 rgba(121,186,236,0.18)",
      },
      zIndex: {
        1000: "1000",
      },
    },
  },
  plugins: [],
}
