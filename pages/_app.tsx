import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/system';

import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';

import store from 'redux/store';
import defaultTheme from 'styles/theme';
import GlobalStyle from 'styles/Global';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <ErrorBoundary>
          <GlobalStyle />
          <Component {...pageProps} />
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
