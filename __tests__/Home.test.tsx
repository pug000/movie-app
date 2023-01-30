import { screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import type { NextRouter } from 'next/router';
import fetchMock from 'jest-fetch-mock';

import store from 'redux/store';
import defaultTheme from 'styles/theme';

import Home from 'pages/index';

import { mockedMovieResponse, mockedPosterPath } from './test-utils/constants';
import mockNextRouter from './test-utils/createMockRouter';
import renderWithProviders from './test-utils/renderWithProviders';

const setUp = () =>
  renderWithProviders(
    <ThemeProvider theme={defaultTheme}>
      <Home />
    </ThemeProvider>,
    { store }
  );

describe('Home page', () => {
  let mockRouter: NextRouter;

  beforeEach(() => {
    mockRouter = mockNextRouter({
      pathname: '/',
      asPath: '/',
      query: {},
    });
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
    expect(mockRouter.pathname).toBe('/');
  });
});
