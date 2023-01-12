import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';
import { NextRouter } from 'next/router';
import { Provider } from 'react-redux';

import Movies from 'pages/movies/index';

import store from 'redux/store';

import mockNextRouter from './test-utils/createMockRouter';

const defaultMockedMoviesRouter: Partial<NextRouter> = {
  pathname: '/movies',
  asPath: '/movies?page=1&sortBy=primary_release_date.desc',
  query: {
    page: '1',
    sortBy: 'primary_release_date.desc',
  },
};

const setUp = (
  page: number,
  totalPages: number,
  router: Partial<NextRouter> = defaultMockedMoviesRouter
) => {
  const mockedRouter = mockNextRouter(router);
  const { rerender } = render(
    <Provider store={store}>
      <Movies currentMoviesPage={page} totalMoviesPages={totalPages} />
    </Provider>
  );
  const prevPaginationButton = screen.getByRole('button', {
    name: /go to previous page/i,
  });
  const nextPaginationButton = screen.getByRole('button', { name: /go to next page/i });
  const maxPaginationPage = screen.getByRole('button', { name: /go to page 50/i });

  return {
    rerender,
    mockedRouter,
    prevPaginationButton,
    nextPaginationButton,
    maxPaginationPage,
  };
};

describe('Movies page', () => {
  let user: UserEvent;

  beforeEach(() => {
    user = userEvent.setup();
  });

  test('should be the router query changed when the user click on the pagination page', async () => {
    const { rerender, mockedRouter } = setUp(1, 50);
    await user.click(screen.getByRole('button', { name: /go to page 4/i }));
    rerender(
      <Provider store={store}>
        <Movies currentMoviesPage={4} totalMoviesPages={50} />
      </Provider>
    );
    expect(mockedRouter.push).toHaveBeenLastCalledWith({
      pathname: '/movies',
      query: { page: 4, sortBy: 'primary_release_date.desc' },
    });
  });
});
