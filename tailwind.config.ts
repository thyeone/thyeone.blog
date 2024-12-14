import type { Config } from 'tailwindcss';
import { pxToRemTailwind } from './src/styles/pxToRem';

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
      pc: '768px',
    },
    screens: {
      phone: '480px',
    },
  },
};
export default config;
