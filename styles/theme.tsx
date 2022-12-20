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
    },
    text: {
      black: '#1f1f1f',
      white: '#ffffff',
    },
  },
  typography: {
    h1: {
      fontSize: 50,
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontSize: 42,
      fontFamily: 'Montserrat, sans-serif',
    },
    h3: {
      fontSize: 36,
      fontFamily: 'Montserrat, sans-serif',
    },
    h4: {
      fontSize: 25,
      fontFamily: 'Montserrat, sans-serif',
    },
    h5: {
      fontSize: 21,
      fontFamily: 'Montserrat, sans-serif',
    },
    body1: {
      fontSize: 16,
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
  breakpoints: {},
  transitions: {},
});

export default defaultTheme;
