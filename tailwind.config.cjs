/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "xs": "375px",
      "sm": "576px",
      "md": "768px",
      "lg": "992px",
      "xl": "1112px",
    },
    colors: {
      "transparent": "transparent",
      "input-active-left": "hsl(249, 99%, 64%)",
      "input-active-right": "hsl(278, 94%, 30%)",
      "input-error": "hsl(0, 100%, 66%)",
      "white": "hsl(0, 0%, 100%)",
      "light-grayish-violet": "hsl(270, 3%, 87%)",
      "dark-grayish-violet": "hsl(279, 6%, 55%)",
      "very-dark-violet": "hsl(278, 68%, 11%)",
    },
    spacing: {
      "0": "0px",
      "1": "0.0625rem",
      "2": "0.125rem",
      "4": "0.25rem",
      "8": "0.5rem",
      "12": "0.75rem",
      "16": "1rem",
      "20": "1.25rem",
      "24": "1.5rem",
      "28": "1.75rem",
      "32": "2rem",
      "36": "2.25rem",
      "40": "2.5rem",
      "44": "2.75rem",
      "48": "3rem",
      "52": "3.25rem",
      "56": "3.5rem",
      "57": "3.5625rem",
      "60": "3.75rem",
      "64": "4rem",
      "68": "4.25rem",
      "72": "4.5rem",
      "76": "4.75rem",
      "80": "5rem",
      "84": "5.25rem",
      "88": "5.5rem",
      "92": "5.75rem",
      "96": "6rem",
      "100": "6.25rem",
      "128": "8rem",
      "156": "9.75rem",
      "240": "15rem",
      "256": "16rem",
      "286": "17.875rem",
      "512": "32rem",
      "1024": "64rem",
    },
    fontWeight: {
      "500": "500",
    },
    extend: {
      fontFamily: {
        sans: [
          'Space Grotesk',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      backgroundImage: {
        'main-mobile': "url('/src/images/bg-main-mobile.png')",
        'main-desktop': "url('/src/images/bg-main-desktop.png')",
        'card-back': "url('/src/images/bg-card-back.png')",
        'card-front': "url('/src/images/bg-card-front.png')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
