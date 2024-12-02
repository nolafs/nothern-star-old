const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
//tailwind.preset.js

module.exports = {
  darkMode: 'class',
  theme: {
    screens: {
      xs: '360px',
      sm: '414px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1920px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
        sm: '2rem',
        md: '2rem',
        lg: '3rem',
        xl: '3rem',
        '2xl': '3rem',
      },
    },
    fontFamily: {
      sans: ['var(--font-oxanium)'],
    },
    fontSize: {
      ...defaultTheme.fontSize,
      normal: '1.1rem',
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              color: '#b5f8ef',
            },
            h2: {
              color: '#b5f8ef',
            },
          },
        },
      }),
      maxWidth: {
        ...defaultTheme.maxWidth,
        '8xl': '90rem',
        '9xl': '120rem',
      },
    },
  },
  safelist: [],
  variants: {
    // Your variant configurations
  },
  daisyui: {
    themes: [
      "night",
      {
        "northernstar": {
          "primary": "#b5f8ef",
          "secondary": "#a1a5b7",
          "accent": "#03eacc",
          "neutral": "#0c2c29",
          "neutral-content": "#111b1c",
          "base-100": "#000000",
          "base-content": "#F1EFE7",
        }
      }
    ]
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
};
