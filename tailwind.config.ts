import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        oconus: {
          bg: '#151515',
          accent: '#F6DB06',
        },
        conus: {
          dark: '#1B3A5C',
          light: '#2E6DA4',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-bebas)', 'Impact', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
