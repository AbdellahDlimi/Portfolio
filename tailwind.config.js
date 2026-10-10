/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: '#09090b',
        darkBgSecondary: '#121217',
        cardBg: '#14141a',
        cardBgHover: '#1c1c24',
        cardBorder: '#27272a',
        textPrimary: '#f8fafc',
        textSecondary: '#a1a1aa',
        brandAmber: '#f59e0b',
        brandAmberLight: '#fbbf24',
        brandAmberDark: '#d97706',
        brandGold: '#eab308',
        brandBlue: '#f59e0b',
        brandBlueHover: '#d97706',
        brandViolet: '#eab308',
        brandVioletLight: '#fde047',
        brandSuccess: '#22c55e',
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'signature-gradient': 'linear-gradient(135deg, #fbbf24, #f59e0b, #d97706)',
        'blue-glow': 'radial-gradient(circle, rgba(245,158,11,0.18) 0%, rgba(9,9,11,0) 70%)',
        'purple-glow': 'radial-gradient(circle, rgba(217,119,6,0.18) 0%, rgba(9,9,11,0) 70%)',
      },
      boxShadow: {
        'glow-amber': '0 0 35px -5px rgba(245, 158, 11, 0.45)',
        'glow-blue': '0 0 35px -5px rgba(245, 158, 11, 0.45)',
        'glow-purple': '0 0 35px -5px rgba(217, 119, 6, 0.45)',
        'card-depth': '0 20px 50px rgba(0, 0, 0, 0.55)',
        'nav-depth': '0 10px 30px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
