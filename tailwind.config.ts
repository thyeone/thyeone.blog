import type { Config } from 'tailwindcss';
import { pxToRemTailwind } from '@/styles/pxToRem';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      ...pxToRemTailwind,
    },
    maxWidth: {
      pc: '1024px',
    },
  },
  plugins: [],
};
export default config;
