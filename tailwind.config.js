module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        primary: {
          100: '#E6F6FE',
          200: '#C0EAFC',
          300: '#9ADDFB',
          400: '#4FC3F7',
          500: '#03A9F4',
          600: '#0398DC',
          700: '#026592',
          800: '#014C6E',
          900: '#013349',
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        heliotrope: {
          50: '#f4f2ff',
          100: '#ebe8ff',
          200: '#dad4ff',
          300: '#beb2ff',
          400: '#9378ff',
          500: '#7f55fd',
          600: '#7032f5',
          700: '#6120e1',
          800: '#511abd',
          900: '#44189a',
          950: '#280c69',
        },
        'link-water': {
          50: '#f4f5fc',
          100: '#e3e5f7',
          200: '#ccd0f1',
          300: '#aab3e6',
          400: '#818cd9',
          500: '#636bce',
          600: '#4f4fc1',
          700: '#4a45b0',
          800: '#443d90',
          900: '#383573',
          950: '#272447',
        },
      },
      lineHeight: {
        hero: '4.5rem',
      },
    },
  },
  plugins: [],
};
