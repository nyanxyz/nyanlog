import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens: {
      colors: {
        red: { value: 'var(--color-red)' },
        orange: { value: 'var(--color-orange)' },
        yellow: { value: 'var(--color-yellow)' },
        green: { value: 'var(--color-green)' },
        cyan: { value: 'var(--color-cyan)' },
        blue: { value: 'var(--color-blue)' },
        purple: { value: 'var(--color-purple)' },
        pink: { value: 'var(--color-pink)' },
        base00: { value: 'var(--color-base-00)' },
        base05: { value: 'var(--color-base-05)' },
        base10: { value: 'var(--color-base-10)' },
        base20: { value: 'var(--color-base-20)' },
        base25: { value: 'var(--color-base-25)' },
        base30: { value: 'var(--color-base-30)' },
        base35: { value: 'var(--color-base-35)' },
        base40: { value: 'var(--color-base-40)' },
        base50: { value: 'var(--color-base-50)' },
        base60: { value: 'var(--color-base-60)' },
        base70: { value: 'var(--color-base-70)' },
        base100: { value: 'var(--color-base-100)' },
        accent: { value: 'var(--color-accent)' },
        accent1: { value: 'var(--color-accent-1)' },
        accent2: { value: 'var(--color-accent-2)' },
        highlight: { value: 'var(--text-highlight-bg)' },
      },
      fontSizes: {
        smallest: { value: 'var(--font-smallest)' },
        smaller: { value: 'var(--font-smaller)' },
        small: { value: 'var(--font-small)' },
        uiSmaller: { value: 'var(--font-ui-smaller)' },
        uiSmall: { value: 'var(--font-ui-small)' },
        uiMedium: { value: 'var(--font-ui-medium)' },
        uiLarge: { value: 'var(--font-ui-large)' },
        h1: { value: 'var(--h1-size)' },
        h2: { value: 'var(--h2-size)' },
        h3: { value: 'var(--h3-size)' },
        h4: { value: 'var(--h4-size)' },
        h5: { value: 'var(--h5-size)' },
        h6: { value: 'var(--h6-size)' },
      },
      lineHeights: {
        h1: { value: 'var(--h1-line-height)' },
        h2: { value: 'var(--h2-line-height)' },
        h3: { value: 'var(--h3-line-height)' },
        h4: { value: 'var(--h4-line-height)' },
        h5: { value: 'var(--h5-line-height)' },
        h6: { value: 'var(--h6-line-height)' },
      },
      fontWeights: {
        thin: { value: 'var(--font-thin)' },
        extralight: { value: 'var(--font-extralight)' },
        light: { value: 'var(--font-light)' },
        normal: { value: 'var(--font-normal)' },
        medium: { value: 'var(--font-medium)' },
        semibold: { value: 'var(--font-semibold)' },
        bold: { value: 'var(--font-bold)' },
        extrabold: { value: 'var(--font-extrabold)' },
        black: { value: 'var(--font-black)' },
        h1: { value: 'var(--h1-weight)' },
        h2: { value: 'var(--h2-weight)' },
        h3: { value: 'var(--h3-weight)' },
        h4: { value: 'var(--h4-weight)' },
        h5: { value: 'var(--h5-weight)' },
        h6: { value: 'var(--h6-weight)' },
      },
    },
    extend: {
      keyframes: {
        slideDown: {
          '0%': { height: 0 },
          '100%': { height: 'var(--radix-collapsible-content-height)' },
        },
        slideUp: {
          '0%': { height: 'var(--radix-collapsible-content-height)' },
          '100%': { height: 0 },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
