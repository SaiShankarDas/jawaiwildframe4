/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sandstone: '#e9e1d5',
        desert: '#c2a67a',
        charcoal: '#1a1a1a',
        'warm-white': '#f8f5f0',
        'deep-red': '#7a2727',
        'forest-green': '#0F2F1E',
        'ivory': '#F6F1E8',
        'soft-gray': '#E9E4DA',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      letterSpacing: {
        'widest-xl': '0.2em',
      }
    },
  },
  plugins: [],
}
