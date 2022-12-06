/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `components/**/*.{vue,js,ts}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `app.vue`,
    `plugins/**/*.{js,ts}`,
    `nuxt.config.{js,ts}`
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
        accent: 'var(--accent)',
        surface: 'var(--surface)',
        themeText: 'var(--text)',
        anchor: 'var(--anchor)',
        background: 'var(--background)',
        footer: 'var(--footer)',
        error: 'var(--error)'
      },
      fontFamily: {
        Barlow: ['Barlow', 'sans-serif']
      }
    }
  },
  plugins: []
};
