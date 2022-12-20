import { createGlobalStyle } from 'styled-components';

import defaultTheme from './theme';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Open Sans, sans-serif';
    font-weight: 400;
    font-size: 18px;
    background-color: ${defaultTheme.palette.background.white};
    color: ${defaultTheme.palette.text.black};
  }
`;

export default GlobalStyle;
