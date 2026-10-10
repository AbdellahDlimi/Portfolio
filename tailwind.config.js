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
        darkBg: '#0a0e17',
        darkBgSecondary: '#0f172a',
        cardBg: '#111827',
        cardBgHover: '#161f30',
        cardBorder: '#1e293b',
        textPrimary: '#f8fafc',
        textSecondary: '#94a3b8',
        brandBlue: '#3b82f6',
        brandBlueHover: '#2563eb',
        brandViolet: '#8b5cf6',
        brandVioletLight: '#a78bfa',
        brandSuccess: '#22c55e',
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'signature-gradient': 'linear-gradient(135deg, #60a5fa, #a78bfa)',
        'blue-glow': 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(10,14,23,0) 70%)',
        'purple-glow': 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(10,14,23,0) 70%)',
      },
      boxShadow: {
        'glow-blue': '0 0 35px -5px rgba(59, 130, 246, 0.4)',
        'glow-purple': '0 0 35px -5px rgba(139, 92, 246, 0.4)',
        'card-depth': '0 20px 50px rgba(0, 0, 0, 0.45)',
        'nav-depth': '0 10px 30px rgba(0, 0, 0, 0.5)',
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
