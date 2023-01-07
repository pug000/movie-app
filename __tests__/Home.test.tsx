import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import fetchMock from 'jest-fetch-mock';

import store from 'redux/store';
import defaultTheme from 'styles/theme';

import Home from 'pages/index';

import { mockedMovieResponse, mockedPosterPath } from './constants';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
    };
  },
}));

const setUp = () =>
  render(
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Home />
      </ThemeProvider>
    </Provider>
  );

describe('Home page', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test('should render Home page', async () => {
    fetchMock.mockResponse(JSON.stringify(mockedMovieResponse));
    setUp();
    const posters: HTMLImageElement[] = await screen.findAllByRole('img');
    expect(screen.getByRole('heading', { name: /movie app/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /enter/i })).toBeInTheDocument();
    expect(posters).toHaveLength(60);
    expect(posters[0].src).toBe(mockedPosterPath);
  });
});
