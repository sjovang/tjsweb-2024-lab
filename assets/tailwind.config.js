/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,css}"],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      'serif': ['Kalam', 'ui-serif', 'serif'],
      'mono': ['IBM Plex Mono', 'ui-monospace', 'monospace']
    },
    extend: {
      colors: {
        'sage': {
          100: '#D2E3C8',
          200: '#86A789',
          300: '#739072',
          400: '#4F6F52'
        },
        'summer': {
          100: '#E6FF94',
          200: '#9DDE8B',
          300: '#40A578',
          400: '#006769'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

