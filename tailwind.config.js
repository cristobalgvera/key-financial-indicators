/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors');

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
const tailwindConfig = {
  mode: 'jit',
  content: ['src/**/*.{js,ts,jsx,tsx}', 'public/**/*.html'],
  theme: {
    extend: {
      colors: {
        principal: colors.indigo,
        secondary: colors.slate,
        terciary: colors.cyan,
      },
    },
  },
  plugins: [],
};

module.exports = tailwindConfig;
