/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fbf6ea',
          100: '#f5ebcb',
          200: '#ecd79b',
          300: '#e0c06b',
          400: '#d4ab4f',
          500: '#c9a24d',
          600: '#a8851f',
          700: '#7f661b',
          800: '#564617',
          900: '#2e2410',
        },
        noir: {
          950: '#070605',
          900: '#0c0b09',
          850: '#121110',
          800: '#181714',
          750: '#1f1d19',
          700: '#2a2823',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 0 0 1px rgba(201,162,77,0.35), 0 18px 40px -12px rgba(0,0,0,0.8)',
        'gold-soft': '0 0 30px -6px rgba(201,162,77,0.35)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        floatY: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(201,162,77,0.4)' },
          '50%': { boxShadow: '0 0 0 14px rgba(201,162,77,0)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out both',
        'fade-in': 'fadeIn 1s ease-out both',
        shimmer: 'shimmer 3s linear infinite',
        'float-y': 'floatY 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s infinite',
      },
    },
  },
  plugins: [],
};
