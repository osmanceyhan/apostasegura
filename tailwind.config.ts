import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          bg: '#0f1a14',
          card: '#162420',
          accent: '#10b981',
          'accent-dim': '#059669',
          text: '#e2ebe6',
          mute: '#7a9488',
          border: '#1a2e24',
          ink: '#0d1a12',
        },
      },
      fontFamily: {
        heading: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        body: ['var(--font-ibm)', 'system-ui', 'sans-serif'],
      },
      borderRadius: { card: '16px' },
      boxShadow: {
        forest: '0 4px 16px rgba(0,0,0,0.3)',
        'accent-glow': '0 0 20px rgba(16,185,129,0.15)',
      },
    },
  },
  plugins: [],
};

export default config;
