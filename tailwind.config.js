/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        '120': '30rem', // 120 es el valor personalizado, 30rem es el ancho mínimo en unidades de rem
        '160': '40rem',
        '200': '50rem',
        '220': '55rem',
        '240': '60rem',
        '480': '120rem',
        '600': '150rem',
      },
      minHeight: {
        '120': '30rem', // 120 es el valor personalizado, 30rem es el ancho mínimo en unidades de rem
        '160': '40rem',
        '240': '60rem',
      },
      maxHeight: {
        '5/6': '83.333333%',
        '7/8': '87.5%',
      },
      width: {
        '120': '30rem', // 120 es el valor personalizado, 30rem es el ancho mínimo en unidades de rem
        '160': '40rem',
        '240': '60rem',
      },
      height: {
        '120': '30rem', // 120 es el valor personalizado, 30rem es el ancho mínimo en unidades de rem
        '160': '40rem',
        '200': '50rem',
        '240': '60rem',
        '7/8': '87.5%',
        '5/7': '71.428571%',
      },
      colors: {
        'color-1': '#ffffff',
        'color-2': '#440412',
        'color-3': '#AB0A3D',
        'color-4': '#B0ABA1',
        'color-5': '#3D3935',
      },
    },
  },
  plugins: [],
}

