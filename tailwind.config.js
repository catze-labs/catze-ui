/** @type {import('tailwindcss').Config} */
import { yooldoTailwindConfig } from './src/yooldo/tailwind/config';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[class="yl-dark"]'],
  prefix: 'yl-',
  theme: {
    extend: {
      screens: yooldoTailwindConfig.screens,
      colors: yooldoTailwindConfig.colors,
      fontFamily: yooldoTailwindConfig.fontFamily,
      fontSize: yooldoTailwindConfig.fontSize,
      width: yooldoTailwindConfig.width,
      padding: yooldoTailwindConfig.padding,
      flexBasis: yooldoTailwindConfig.flexBasis,
      spacing: yooldoTailwindConfig.spacing,
      boxShadow: yooldoTailwindConfig.boxShadow,
      zIndex: yooldoTailwindConfig.zIndex,
      opacity: yooldoTailwindConfig.opacity,

      left: yooldoTailwindConfig.left,
      animation: {
        'move-tr-bl': 'tr-bl 30s ease-in-out infinite',
        'move-tl-br': 'tl-br 16s ease-in-out infinite',
      },
      keyframes: {
        'tr-bl': {
          '0%, 100%': { transform: 'translate(-35%, -65%)' },
          '50%': { transform: 'translate(-120%, 17%)' },
        },
        'tl-br': {
          '0%, 100%': { transform: 'translate(-50%, -50%)' },
          '50%': { transform: 'translate(65%, 24%)' },
        },
      },
    },
  },
  plugins: [],
};
