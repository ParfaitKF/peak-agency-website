import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        peak: {
          black: '#0a0a0f',
          dark: '#0f0f17',
          surface: '#13131f',
          surface2: '#1a1a2e',
          surface3: '#22223a',
          accent: '#f97316',
          accent2: '#fb923c',
          accent3: '#0a96fa',
          white: '#f8f9fa',
          gray: '#94a3b8',
          gray2: '#64748b',
          gray3: '#334155',
        },
      },
      fontFamily: {
        sans: ['Etelka', 'system-ui', 'sans-serif'],
        display: ['Etelka', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
export default config