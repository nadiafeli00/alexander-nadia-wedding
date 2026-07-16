import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FFFBF5',
        'warm-white': '#FAF8F3',
        'sage-green': '#9BA99C',
        'dusty-pink': '#D4A5A5',
        'powder-blue': '#B8C8D8',
        'dark-taupe': '#6B5B56',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
        display: ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'paper-texture': "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\"><filter id=\"noise\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" result=\"noise\" /></filter><rect width=\"100\" height=\"100\" fill=\"%23FFFBF5\" /><rect width=\"100\" height=\"100\" fill=\"%23FFFBF5\" filter=\"url(%23noise)\" opacity=\"0.1\" /></svg>')",
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scroll-progress': 'scroll-progress 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'scroll-progress': {
          '0%': { scaleX: 0 },
          '100%': { scaleX: 1 },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
export default config;
