import { render, screen } from '@testing-library/react';
import { NextRouter } from 'next/router';

import Header from 'components/Header/Header';

import mockNextRouter from './test-utils/createMockRouter';

const setUp = (router: Partial<NextRouter> = {}) => {
  const mockedRouter = mockNextRouter(router);
  const isHomePage = mockedRouter.pathname === '/';
  const isNotFoundPage = mockedRouter.pathname === '/404';
  const { rerender } = render(
    <Header isHomePage={isHomePage} isNotFoundPage={isNotFoundPage} />
  );

  return {
    mockedRouter,
    rerender,
  };
};

describe('Header component', () => {
  test('should render Header component', () => {
    setUp({ pathname: '/' });
    expect(screen.getByRole('link', { name: /movie app/i })).toBeInTheDocument();
  });

  test('should render search bar if home page', () => {
    const { mockedRouter } = setUp({ pathname: '/', asPath: '/' });
    expect(mockedRouter.pathname).toBe('/');
    expect(screen.getByRole('textbox', { name: /search/i })).toBeInTheDocument();
  });

  test('should not render search bar if not found page', () => {
    const { mockedRouter } = setUp({ pathname: '/404', asPath: '/404' });
    expect(mockedRouter.pathname).toBe('/404');
    expect(screen.queryByRole('textbox', { name: /search/i })).not.toBeInTheDocument();
  });
});
