import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        honey: {
          50: '#FBF6EC',
          100: '#F6EBD2',
          200: '#EFD9A5',
          300: '#E6C277',
          400: '#DAA84F',
          500: '#C58E30',
          600: '#A47324',
          700: '#7E5820',
          800: '#5A3F18',
          900: '#3B2A12'
        },
        cream: {
          50: '#FFFFFF',
          100: '#FBF8F1',
          200: '#F4ECD4',
          300: '#EAE0BF',
          400: '#D9CBA3'
        },
        ink: {
          DEFAULT: '#2B1D0E',
          soft: '#5A4A35'
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif']
      },
      boxShadow: {
        soft: '0 12px 40px -18px rgba(165, 115, 36, 0.18)',
        gold: '0 14px 36px -16px rgba(218, 168, 79, 0.38)'
      },
      backgroundImage: {
        'honey-radial':
          'radial-gradient(circle at 20% 20%, rgba(218,168,79,0.08), transparent 60%), radial-gradient(circle at 80% 0%, rgba(218,168,79,0.05), transparent 55%)',
        'honey-gradient': 'linear-gradient(135deg, #DAA84F 0%, #C58E30 50%, #A47324 100%)'
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'fade-in': 'fadeIn 0.3s ease-out both',
        'fade-out': 'fadeOut 0.3s ease-out forwards',
        shimmer: 'shimmer 2.5s linear infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'float-med': 'floatMed 4.5s ease-in-out infinite',
        'float-fast': 'floatFast 3.5s ease-in-out infinite',
        'float-gentle': 'floatGentle 7s ease-in-out infinite'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-4deg)' },
          '50%': { transform: 'translateY(-14px) rotate(4deg)' }
        },
        floatMed: {
          '0%, 100%': { transform: 'translateY(0px) rotate(3deg)' },
          '50%': { transform: 'translateY(-10px) rotate(-3deg)' }
        },
        floatFast: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-8px) scale(1.08)' }
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        }
      }
    }
  },
  plugins: []
};

export default config;
