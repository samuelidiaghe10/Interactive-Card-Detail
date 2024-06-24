/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {                        
        'Red': 'hsl(0, 100%, 66%)',
        'Light-grayish-violet': 'hsl(270, 3%, 87%)',
        'Dark-grayish-violet': 'hsl(279, 6%, 55%)',
        'Very-dark-violet': 'hsl(278, 68%, 11%)',

      },

      backgroundImage: {
        'cardFront' : 'url("/src/interactive-card-details-form-main/images/bg-card-front.png")',
        'cardBack': 'url("/src/interactive-card-details-form-main/images/bg-card-back.png")',
        'pattern': 'url("/src/interactive-card-details-form-main/images/bg-main-desktop.png")',
        'pattern2': 'url("/src/interactive-card-details-form-main/images/bg-main-mobile.png")'
      }
    },
  },
  plugins: [],
}