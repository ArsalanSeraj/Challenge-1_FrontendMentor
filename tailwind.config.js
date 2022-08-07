/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "desktop-pattern": "url('./images/bg-desktop.svg')",
        "mobile-pattern": "url('./images/bg-mobile.svg')",
      },
      colors: {
        VioletBg: "hsl(257, 40%, 49%)",
        SoftMagenta: "hsl(300, 69%, 71%)",
      },
      fontFamily: {
        "ff-headings": ["Poppins", "sans-serif"],
        "ff-text": ["OpenSans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
