/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Vintage Wooden Theme Colors
        'wood': {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
        'vintage': {
          50: '#faf9f7',
          100: '#f3f1ed',
          200: '#e6e2da',
          300: '#d4cdc0',
          400: '#c0b5a3',
          500: '#a8997f',
          600: '#8f7c5f',
          700: '#75654f',
          800: '#5f5342',
          900: '#4d4336',
        },
        'bronze': {
          50: '#fdf6f0',
          100: '#fae8d6',
          200: '#f4d0ac',
          300: '#ecb177',
          400: '#e28a42',
          500: '#d97316',
          600: '#c55a0a',
          700: '#a1450b',
          800: '#84380f',
          900: '#6b2e0e',
        },
        'copper': {
          50: '#fef7f0',
          100: '#fdeee0',
          200: '#fad9c0',
          300: '#f6be95',
          400: '#f19a68',
          500: '#ed7b3a',
          600: '#de5f2a',
          700: '#b94a25',
          800: '#943b26',
          900: '#773122',
        }
      },
      fontFamily: {
        'vintage': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fadeInUp': 'fadeInUp 0.6s ease-out forwards',
        'slideInLeft': 'slideInLeft 0.6s ease-out forwards',
        'slideInRight': 'slideInRight 0.6s ease-out forwards',
        'tilt': 'tilt 10s infinite linear',
        'waterFill': 'waterFill 2s ease-out forwards',
        'cardDrop': 'cardDrop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
        'woodGrain': 'woodGrain 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          'from': { opacity: '0', transform: 'translateX(-30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          'from': { opacity: '0', transform: 'translateX(30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '75%': { transform: 'rotate(-1deg)' },
        },
        waterFill: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        cardDrop: {
          '0%': { transform: 'translateY(-100px) rotateX(90deg)', opacity: '0' },
          '100%': { transform: 'translateY(0) rotateX(0deg)', opacity: '1' },
        },
        woodGrain: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'wood-texture': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJ3b29kIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiNmNWY1ZjUiLz4KICAgICAgPHBhdGggZD0iTTAgMjBoNDBNMjAgMHY0ME0xMCAxMGgyME0zMCAxMGgyME0xMCAzMGgyME0zMCAzMGgyMCIgc3Ryb2tlPSIjZTBlMGUwIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4zIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0idXJsKCN3b29kKSIvPgo8L3N2Zz4=')",
        'vintage-paper': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJwYXBlciIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZmFmOWY3Ii8+CiAgICAgIDxwYXRoIGQ9Ik0wIDIwaDQwTTIwIDB2NDBNMTAgMTBoMjBNMzAgMTBoMjBNMTAgMzBoMjBNMzAgMzBoMjAiIHN0cm9rZT0iI2YzZjFlZCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMiIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9InVybCgjcGFwZXIpIi8+Cjwvc3ZnPg==')",
      },
    },
  },
  plugins: [],
};
