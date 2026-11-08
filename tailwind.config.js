/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      /* ======================================================================
         [EDIT: COLORS & FONTS]
         Customize the accent color (#C6FF3D), dark canvas (#0B0B0F), and fonts here.
         ====================================================================== */
      colors: {
        obsidian: '#0B0B0F',
        surface: '#111117',
        panel: '#16161F',
        offwhite: '#EDEDED',
        muted: '#8E8E9E',
        subtle: '#636373',
        lime: {
          DEFAULT: '#C6FF3D',
          dark: '#3E6B00',
        },
        line: '#1E1E28',
        'line-strong': '#2E2E3D',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.65', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
        },
      },
      animation: {
        'pulse-glow': 'pulseGlow 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

