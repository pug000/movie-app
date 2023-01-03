import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';

import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';

import { persistor, wrapper } from 'redux/store';

import defaultTheme from 'styles/theme';
import GlobalStyle from 'styles/Global';
import { PersistGate } from 'redux-persist/integration/react';

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Component {...props.pageProps} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
