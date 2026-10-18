/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        temple: {
          maroon: 'var(--color-primary, #851317)',
          dark: 'var(--color-primary-dark, #58080b)',
          deep: 'var(--color-primary-deep, #3d0407)',
          ruby: 'var(--color-primary, #851317)',
          gold: 'var(--color-accent-gold, #D4AF37)',
          'gold-light': 'var(--color-accent-light, #F6E27A)',
          'gold-dark': 'var(--color-accent-dark, #9A7B1C)',
          cream: 'var(--color-bg-cream, #FFFDF9)',
          ivory: 'var(--color-bg-ivory, #F9F4E8)',
          saffron: '#FF9933',
          sacred: '#FF6B08'
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'serif'],
        telugu: ['"Noto Sans Telugu"', 'Mandali', 'sans-serif'],
        sans: ['Poppins', '"Noto Sans Telugu"', 'sans-serif']
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.45)',
        'gold-glow-lg': '0 0 45px rgba(212, 175, 55, 0.65)',
        'maroon-glow': '0 10px 30px rgba(133, 19, 23, 0.35)',
        'sacred-card': '0 10px 30px -5px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(212, 175, 55, 0.25)'
      }
    },
  },
  plugins: [],
}