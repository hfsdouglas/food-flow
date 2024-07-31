/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/comandas/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'palid-green': '#72B5A4',
        'rose': '#F15E5E',
        'middle-orange': '#F79A87',
        'soft-orange': '#F2CEAB',
        'dark-gray': '#595757'
      },
      boxShadow: {
        'container': '2px 2px 20px 0px rgba(0, 0, 0, 0.25)',
      },
      fontSize: {
        xxs: '12px',
      }
    },
  },
  plugins: [],
}
