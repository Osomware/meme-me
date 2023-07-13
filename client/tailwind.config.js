/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Montserrat'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1170px'
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#a874fe',
          100: '#e6d7ff',
          200: '#c39fff',
          hover: '#9a5cff'
        },
        secondary: {
          DEFAULT: '#25396f',
          100: '#a4b6e1',
          200: '#8da4db',
          300: '#586ca0'
        },
        online: '#56c962',
        stroke: {
          1: '#d8e4f2',
          2: '#e1e8f3',
          3: '#e7eaf4'
        },
        heart: '#ff5775',
        fancyBlue: '#59b8ff',
        background: '#f2f5ff',
        section: {
          1: '#f6faff',
          2: '#f4f7ff'
        },
        white: '#FFFFFF',
        transparent: 'transparent'
      },
      boxShadow: {
        'default-primary': '-30px 26px 29px 6px rgba(164, 182, 225, 0.15)',
        'sm-primary': '-15px 13px 14px 4px rgba(164, 182, 225, 0.15)'
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')({ nocompatible: true })]
}
