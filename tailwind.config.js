/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#effcfc',
          100: '#d4f5f5',
          200: '#a9e9ea',
          300: '#6dd7d8',
          400: '#39c5c8',
          500: '#22afb4',
          600: '#168e96',
          700: '#13727a',
          800: '#155760',
          900: '#12444c',
          950: '#082d33',
        },
        coral: {
          50: '#fff9eb',
          100: '#fff0c7',
          200: '#ffdda0',
          300: '#ffc864',
          400: '#f9b83d',
          500: '#f2a91f',
          600: '#dc8b0d',
          700: '#b66b0b',
          800: '#92530d',
          900: '#77450f',
        },
        sand: {
          50: '#fdfaf5',
          100: '#faf2e7',
          200: '#f4e6d1',
          300: '#ead4b3',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', opacity: '0.6' },
          '70%': { transform: 'scale(1.3)', opacity: '0' },
          '100%': { transform: 'scale(0)', opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        float: 'float 3s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.215,0.61,0.355,1) infinite',
      },
    },
  },
  plugins: [],
};
