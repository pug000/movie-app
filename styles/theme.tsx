import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
  palette: {
    background: {
      default: '#3F8AE0',
    },
    text: {
      primary: '#1f1f1f',
      secondary: '#ffffff',
    },
  },
  typography: {
    h1: {
      fontSize: 50,
    },
    h2: {
      fontSize: 42,
    },
    h3: {
      fontSize: 36,
    },
    h4: {
      fontSize: 25,
    },
    h5: {
      fontSize: 21,
    },
    body1: {
      fontSize: 18,
    },
    body2: {
      fontSize: 16,
    },
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  breakpoints: {},
  transitions: {},
});

export default defaultTheme;
