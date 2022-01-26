module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#D0D6F9',
          dark: '#0B0D17',
        },
      },
      fontSize: {
        largest: '9.375rem',
        large: '6.25rem',
        big: '3.5rem',
        medium: '2rem',
        semi: '1.75rem',
      },
      letterSpacing: {
        widest: '0.16875em',
      },
      ringWidth: {
        45: '45px',
      },
    },
  },
  plugins: [],
};
