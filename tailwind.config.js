/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "forest-900": "#14291F",
        "forest-800": "#1F3A2B",
        "olive-600": "#5B6B1F",
        "olive-500": "#6E7F2A",
        "sage-100": "#EEF1E4",
        "sage-200": "#E1E7D0",
        "cream-50": "#FAFAF5",
        "ink-700": "#3A4A40",
        "ink-500": "#6B7A70",
        "star-500": "#F5B301",
        whatsapp: "#25D366",
      },
      fontFamily: {
        serif: ["DM_Serif_Display", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        script: ["Caveat", "cursive"],
        arabic: ["Aref_Ruqaa", "serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      borderRadius: {
        pill: "999px",
        card: "16px",
        image: "20px",
        badge: "16px",
      },
      boxShadow: {
        card: "0 8px 30px rgba(20,41,31,0.08)",
        "card-hover": "0 12px 40px rgba(20,41,31,0.14)",
      },
    },
  },
  plugins: [],
};