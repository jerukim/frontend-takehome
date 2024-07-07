/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        white: '#F2F1F0',
        gray: '#AEADAD',
        black: '#0F0E0C',
        green: '#4BC2A3',
        red: '#FF5A44',
      },
    },
  },
  plugins: [],
}
