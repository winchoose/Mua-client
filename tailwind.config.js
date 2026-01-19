/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        white: 'rgb(var(--white) / <alpha-value>)',
        red: 'rgb(var(--red) / <alpha-value>)',

        'sha-but': 'rgb(var(--sha-but) / <alpha-value>)',
        'sha-pop': 'rgb(var(--sha-pop) / <alpha-value>)',

        gray: {
          100: 'rgb(var(--gray-100) / <alpha-value>)',
          200: 'rgb(var(--gray-200) / <alpha-value>)',
          300: 'rgb(var(--gray-300) / <alpha-value>)',
          400: 'rgb(var(--gray-400) / <alpha-value>)',
          500: 'rgb(var(--gray-500) / <alpha-value>)',
          600: 'rgb(var(--gray-600) / <alpha-value>)',
          700: 'rgb(var(--gray-700) / <alpha-value>)',
          800: 'rgb(var(--gray-800) / <alpha-value>)',
          900: 'rgb(var(--gray-900) / <alpha-value>)',
          950: 'rgb(var(--gray-950) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        title: [
          '28px',
          { lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.04em' },
        ],
        h1: [
          '24px',
          { lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.04em' },
        ],
        h2: [
          '22px',
          { lineHeight: '1.2', fontWeight: '600', letterSpacing: '-0.04em' },
        ],
        h3: [
          '18px',
          { lineHeight: '1.5', fontWeight: '600', letterSpacing: '-0.04em' },
        ],
        body1: [
          '16px',
          { lineHeight: '1.5', fontWeight: '500', letterSpacing: '-0.04em' },
        ],
        body2: [
          '14px',
          { lineHeight: '1.5', fontWeight: '500', letterSpacing: '-0.04em' },
        ],
        body3: [
          '14px',
          { lineHeight: '1.5', fontWeight: '400', letterSpacing: '-0.04em' },
        ],
        caption: [
          '12px',
          { lineHeight: '1.5', fontWeight: '400', letterSpacing: '-0.04em' },
        ],
      },
    },
  },
  plugins: [],
};
