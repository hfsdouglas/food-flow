import { fontFamily } from './src/styles/fontFamily'
import { colors } from './src/styles/fontFamily'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily,
      colors,
    },
  },
  plugins: [],
}

