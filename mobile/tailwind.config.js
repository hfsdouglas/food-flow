/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        light: "Roboto_300Light",
        regular: "Roboto_400Regular",
        italic: "Roboto_400Regular_Italic",
        bold: "Roboto_700Bold",
      },
    },
  },
  plugins: [],
}

