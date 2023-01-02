import { createTheme } from '@mui/material/styles/';

declare module '@mui/material/styles' {
  interface Theme {
    fonts: {
      title?: string;
      subtitle?: string;
      text?: string;
    };
  }

  interface ThemeOptions {
    fonts: {
      title?: string;
      subtitle?: string;
      text?: string;
    };
  }
}

declare module '@mui/material/styles' {
  interface TypeBackground {
    white?: string;
    black?: string;
    dark?: string;
    orange?: string;
    grey?: string;
    transparent?: string;
  }

  interface BreakpointOverrides {
    xs: true;
    s: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }

  interface TypeText {
    black?: string;
    white?: string;
  }
}

const defaultTheme = createTheme({
  palette: {
    background: {
      default: '#3f8ae0',
      white: '#ffffff',
      black: '#000000',
      dark: '#1a1a1a',
      orange: '#f5c518',
      grey: '#969fa4',
      transparent: 'transparent',
    },
    text: {
      black: '#1f1f1f',
      white: '#ffffff',
    },
  },
  typography: {
    h1: {
      fontSize: '3.12rem',
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.63rem',
      fontFamily: 'Montserrat, sans-serif',
    },
    h3: {
      fontSize: '2.25rem',
      fontFamily: 'Montserrat, sans-serif',
    },
    h4: {
      fontSize: '1.56rem',
      fontFamily: 'Montserrat, sans-serif',
    },
    h5: {
      fontSize: '1.31rem',
      fontFamily: 'Montserrat, sans-serif',
    },
    body1: {
      fontSize: '1.5rem',
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: 400,
    },
    body2: {
      fontSize: '1rem',
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: 400,
    },
    fontSize: 18,
    fontFamily: 'Open Sans, sans-serif',
  },
  fonts: {
    title: 'Montserrat, sans-serif',
    subtitle: 'Montserrat, sans-serif',
    text: 'Open Sans, sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      s: 550,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1950,
    },
  },
});

export default defaultTheme;
