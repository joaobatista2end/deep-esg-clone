import type { Config } from 'tailwindcss';

const srcDir = 'src';

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        ['brand-green']: '#8ccc00',
        ['brand-blue']: '#0087DA',
        ['brand-blue-dark']: '#003364',
        ['brand-blue-dark-2']: '#050D42',
      },
    },
  },
  content: [
    `${srcDir}/components/**/*.{vue,js,ts}`,
    `${srcDir}/layouts/**/*.vue`,
    `${srcDir}/pages/**/*.vue`,
    `${srcDir}/composables/**/*.{js,ts}`,
    `${srcDir}/plugins/**/*.{js,ts}`,
    `${srcDir}/utils/**/*.{js,ts}`,
    `${srcDir}/App.{js,ts,vue}`,
    `${srcDir}/app.{js,ts,vue}`,
    `${srcDir}/Error.{js,ts,vue}`,
    `${srcDir}/error.{js,ts,vue}`,
    `${srcDir}/app.config.{js,ts}`,
  ],
};
