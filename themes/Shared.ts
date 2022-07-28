import { createTheme } from '@nextui-org/react';


export const lightTheme = createTheme({
  type: 'light',
  className: 'light',
  theme: {
    colors: {
      white: '#ffffff',
    black: '#000000',
    //semantic colors (light)
    blue50: '#EDF5FF',
    // ...
    blue900: '#00254D',
    // ...

    // brand colors
    primaryLight: '$blue200',
    primaryLightHover: '$blue300', // commonly used on hover state
    primaryLightActive: '$blue400', // commonly used on pressed state
    primaryLightContrast: '$blue600', // commonly used for text inside the component
    primary: '$blue600',
    primaryBorder: '$blue500',
    primaryBorderHover: '$blue600',
    primarySolidHover: '$blue700',
    primarySolidContrast: '$white', // commonly used for text inside the component
    primaryShadow: '$blue500'
    },
    "space": {},
  }
});

export const darkTheme = createTheme({
  type: 'dark',
  className: 'dark',
  "theme": {
    "colors": {
      white: '#ffffff',
      dark: '#131415',
    black: '#000000',
    //semantic colors (light)
    blue50: '#EDF5FF',
    // ...
    blue900: '#00254D',
    // ...

    // brand colors
    primaryLight: '$blue200',
    primaryLightHover: '$blue300', // commonly used on hover state
    primaryLightActive: '$blue400', // commonly used on pressed state
    primaryLightContrast: '$blue600', // commonly used for text inside the component
    primary: '$blue600',
    primaryBorder: '$blue500',
    primaryBorderHover: '$blue600',
    primarySolidHover: '$blue700',
    primarySolidContrast: '$white', // commonly used for text inside the component
    primaryShadow: '$blue500'
    },
    "space": {},
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },
    lineHeights: {
      xs: 1, /* 16px */
      sm: 1.25, /* 20px */
      base: 1.5, /* 24px */
      md: 1.5, /* 24px */
      lg: 1.75, /* 28px */
      xl: 1.75, /* 28px */
      xl2: 2, /* 32px */
      xl3: 2.25, /* 36px */
      xl4: 2.5, /* 40px */
      xl5: 1,
      xl6: 1,
      xl7: 1,
      xl8: 1,
      xl9: 1
    },
    borderWeights: {
      light: '1px',
      normal: '2px',
      bold: '3px',
      extrabold: '4px',
      black: '5px'
    },
    letterSpacings: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em'
    },
    radii: {
      xs: '7px',
      sm: '9px',
      md: '12px',
      base: '14px',
      lg: '14px', // preferred value by NextUI components
      xl: '18px',
      squared: '33%',
      rounded: '50%',
      pill: '9999px'
    },
    }
});