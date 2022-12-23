import { createTheme } from '@mui/material/styles/';
import { TypeBackground, TypeText } from '@mui/material/styles/createPalette';

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
    transparent?: string;
  }

  interface TypeText {
    black: string;
    white: string;
  }
}

const defaultTheme = createTheme({
  palette: {
    background: {
      default: '#3F8AE0',
      white: '#ffffff',
      black: '#000000',
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
});

export default defaultTheme;
