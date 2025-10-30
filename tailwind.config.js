/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#6366F1", // violet accent
        muted: "#6B7280",  // grey text tone
      },
    },
  },
  plugins: [],
}
