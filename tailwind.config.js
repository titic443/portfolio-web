/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      primaryTile: "#38bdf8",
      primaryContent: "#0ea5e9",
      primarySubContent: "#0284c7",
      primaryBase: "#cbd5e1",
      primaryAccent: "#7dd3fc",
      primaryBg: "#1e293b",
      primaryGrey: "#e2e8f0",
      primaryVeryAccent: "rgb(248 250 252)",
      primarySubBg: "#1e313b61"
    },
    extend: {},
  },
  plugins: [],
}

