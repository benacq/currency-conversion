/** @type {import('tailwindcss').Config} */
const { screens } = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      'xsm': '480px',
      ...screens
    },

    extend: {
      colors: {
        'light1': "#f5f5f5",
        'light2': "#eaeaea",
        'light3': '#f8f5f2',
        "light4": "#e4dfdd",
        'white1': "#ffffff",
        "orange1": "#ec880b",
        "orange2": "#f5ebdf",
        'gray1': "#101828",
        'gray2': "#667085",
        "brown1": "#53433C"
      },
      fontSize: {
        'xxlg': '30px',
        'xlg': '24px',
        'lg': '20px',
        "md": "18px",
        'sm': '16px',
        'xsm': '14px',
        "xxsm": "12px",
        'xxxsm': '8px'
      },

      height: {
        "92p": "92px"
      },
      width: {
        "191p": "191px"
      },

      margin: {
        'page-split': '15%',
      },

    },
  },
  plugins: [],
}

