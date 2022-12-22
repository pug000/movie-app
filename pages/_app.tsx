import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';

import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';

import store, { wrapper } from 'redux/store';
import defaultTheme from 'styles/theme';
import GlobalStyle from 'styles/Global';

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Component {...props.pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
