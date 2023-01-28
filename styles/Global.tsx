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

  html {
    @media screen and (min-width: 1700px) {
      font-size: .694444vw;
    }
  }

  a {
    font-size: 1.31rem;
  }

  body {
    font-size: 1.13rem;
    background-color: ${defaultTheme.palette.background.black};
    color: ${defaultTheme.palette.text.black};
  }
`;

export default GlobalStyle;
