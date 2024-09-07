/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        carousel: {
          '0%': { opacity: '0' },
          '10%': { opacity: '1' },
          '33.33%': { opacity: '1' },
          '43.33%': { opacity: '0' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        carousel: 'carousel 6s infinite',
      },
    },
  },
  plugins: [require('daisyui')],
}
