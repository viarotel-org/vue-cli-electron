const isProduction = process.env.NODE_ENV === 'production';
const {
  colors,
  createConfig,
} = require('./utils');

module.exports = {
  // prefix: '',
  // corePlugins: {
  //   // preflight: false,
  // },
  mode: 'jit',
  darkMode: true,
  important: false,
  purge: {
    enabled: isProduction,
    preserveHtmlElements: true,
    content: [
      './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    options: {
      safelist: [/^el-/],
      blocklist: [],
      keyframes: false,
      fontFace: false,
    },
  },
  theme: {
    extend: {
      colors: {
        ...colors,
        'theme-green-45': '#f6fdfd',
        'theme-green-50': '#eff6f6',
        'theme-green-100': '#def2ef',
        'theme-green-200': '#48A693',
        'theme-green-300': '#46A18F',
        'theme-green-400': '#028c72',
        'theme-green-500': '#05856c',
      },
      fontSize: {
        '3xs': '0.125rem',
        '2xs': '0.5rem',
      },
      borderRadius: {
        // 'px-5': '5px'
        ...createConfig('px-$:$px', 5, 25, 1, 5),
      },
      flexGrow: {
        // '2': '2'
        ...createConfig('$:$', 2, 10),
      },
      rotate: {
        ...createConfig('$:$deg', 15, 180, 1, 5),
        ...createConfig('-$:-$deg', 15, 180, 1, 5),
      },
      spacing: {
        // '2px': '2px',
        ...createConfig('px-$:$px', 2, 10),
        // '1': '0.25rem',
        ...createConfig('$:$rem', 1, 10, 0.25),
        // '12': '3rem'
        ...createConfig('$:$rem', 12, 300, 0.25, 2),
      },
      backgroundSize: {
        // 'w-1': '0.25rem auto',
        ...createConfig('w-$:$rem auto', 1, 10, 0.25),
        // 'w-12': '3rem auto',
        ...createConfig('w-$:$rem auto', 12, 100, 0.25, 2),

        // 'h-1': 'auto 0.25rem',
        ...createConfig('h-$:auto $rem', 1, 10, 0.25),
        // 'h-12': 'auto 3rem'
        ...createConfig('h-$:auto $rem', 12, 100, 0.25, 2),

        'w-full': '100% auto',
        'h-full': 'auto 100%',
        full: '100% 100%',
      },
      minWidth: {
        // '1': '0.25rem',
        ...createConfig('$:$rem', 1, 10, 0.25),
        // '12': '3rem'
        ...createConfig('$:$rem', 12, 300, 0.25, 2),
      },
      minHeight: {
        // '1': '0.25rem',
        ...createConfig('$:$rem', 1, 10, 0.25),
        // '12': '3rem'
        ...createConfig('$:$rem', 12, 300, 0.25, 2),
      },
      maxWidth: {
        // '1': '0.25rem',
        ...createConfig('$:$rem', 1, 10, 0.25),
        // '12': '3rem'
        ...createConfig('$:$rem', 12, 300, 0.25, 2),
      },
      maxHeight: {
        // '1': '0.25rem',
        ...createConfig('$:$rem', 1, 10, 0.25),
        // '12': '3rem'
        ...createConfig('$:$rem', 12, 300, 0.25, 2),
      },
      zIndex: {
        '-1': '-1',
        ...createConfig('-$:-$', 10, 50, 1, 10),
      },
    },
    // 字体阴影 text-shadow-xs
    textShadow: {
      none: 'none',
      DEFAULT: '0px 0px 1px rgb(0 0 0 / 20%), 0px 0px 1px rgb(1 0 5 / 10%)',
      sm: '1px 1px 3px rgb(36 37 47 / 25%)',
      md: '0px 1px 2px rgb(30 29 39 / 19%), 1px 2px 4px rgb(54 64 147 / 18%)',
      lg: '3px 3px 6px rgb(0 0 0 / 26%), 0 0 5px rgb(15 3 86 / 22%)',
      xl: '1px 1px 3px rgb(0 0 0 / 29%), 2px 4px 7px rgb(73 64 125 / 35%)',
      '2xl': '1px 1px 5px rgb(33 34 43 / 20%)',
      '3xl': '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
    },
    // 文字截断 .clamp-1
    lineClamp: {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
    },
  },
  plugins: [
    require('tailwindcss-textshadow'), // 文字阴影
    require('@tailwindcss/line-clamp'), // 文字截断
  ],
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
};
