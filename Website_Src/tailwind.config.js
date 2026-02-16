/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        helldiver: {
          magenta: '#BE2B97',
          brightMagenta: '#D93DAD',
          darkMagenta: '#9A2279',
          green: '#00FF41',
          brightGreen: '#39FF6F',
          darkGreen: '#00CC33',
          red: '#FF3333',
          darkRed: '#CC0000',
          bg: '#000000',
          bgLight: '#0A0A0A',
          bgPanel: '#050505',
          border: '#BE2B97',
          borderDim: '#5F164C',
          text: '#FFFFFF',
          textDim: '#999999',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glow-magenta': '0 0 10px rgba(190, 43, 151, 0.5), 0 0 20px rgba(190, 43, 151, 0.3)',
        'glow-green': '0 0 10px rgba(0, 255, 65, 0.5), 0 0 20px rgba(0, 255, 65, 0.3)',
        'glow-red': '0 0 10px rgba(255, 51, 51, 0.5), 0 0 20px rgba(255, 51, 51, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
        'flicker': 'flicker 0.15s infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};
