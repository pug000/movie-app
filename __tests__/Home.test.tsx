import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import store from 'redux/store';
import defaultTheme from 'styles/theme';

import Home from 'pages/index';

const setUp = () =>
  render(
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Home moviePosters={[]} />
      </ThemeProvider>
    </Provider>
  );

describe('Home page', () => {
  beforeEach(() => {
    setUp();
  });

  test('should render Home page', () => {
    expect(screen.getByRole('heading', { name: /movie app/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /enter/i })).toBeInTheDocument();
  });
});
