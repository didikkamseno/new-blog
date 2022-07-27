import { createTheme } from '@nextui-org/react';

const fonts = {
  sans: 'IBM Plex Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
};

export const lightTheme = createTheme({
  type: 'light',
  className: 'light',
  theme: {
    fonts,
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
    }
  }
});

export const darkTheme = createTheme({
  type: 'dark',
  className: 'dark',
  "theme": {
    fonts,
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
    "fontSizes": {
      xs: '0.75rem', /* 12px */
      sm: '0.875rem', /* 14px */
      base: '1rem', /* 16px */
      md: '1rem', /* 16px */
      lg: '1.125rem', /* 18px */
      xl: '1.25rem', /* 20px */
      xl2: '1.5rem', /* 24px */
      xl3: '1.875rem', /* 30px */
      xl4: '2.25rem', /* 36px */
      xl5: '3rem', /* 48px */
      xl6: '3.75rem', /* 60px */
      xl7: '4.5rem', /* 72px */
      xl8: '6rem', /* 96px */
      xl9: '8rem', /* 128px */
    },
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