import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ChangeEvent } from 'react';
import type { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';

import Pagination from 'components/CardsControl/Pagination/Pagination';
import store from 'redux/store';
import { moviesActions } from 'redux/slices/moviesSlice';

const setUp = (
  currentPage: number,
  totalPages: number,
  changePage: jest.Mock,
  isLoading = false
) => {
  const { rerender } = render(
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      changePage={changePage}
      isLoading={isLoading}
    />
  );
  const prevPaginationButton = screen.getByRole('button', {
    name: /go to previous page/i,
  });
  const nextPaginationButton = screen.getByRole('button', { name: /go to next page/i });
  const maxPaginationPage = screen.getByRole('button', { name: /go to page 50/i });

  return {
    rerender,
    prevPaginationButton,
    nextPaginationButton,
    maxPaginationPage,
  };
};

describe('Pagination component', () => {
  let user: UserEvent;
  const changeMoviesPage = jest.fn((_event: ChangeEvent<unknown>, value: number) =>
    store.dispatch(moviesActions.setCurrentPage(value))
  );

  beforeEach(() => {
    user = userEvent.setup();
  });

  test('should render Pagination component', async () => {
    const { prevPaginationButton, nextPaginationButton, maxPaginationPage } = setUp(
      1,
      50,
      changeMoviesPage
    );

    expect(screen.getByRole('button', { name: /page 1/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /page 1/i })).toHaveClass('Mui-selected');
    expect(prevPaginationButton).toBeInTheDocument();
    expect(prevPaginationButton).toBeDisabled();
    expect(nextPaginationButton).toBeInTheDocument();
    expect(nextPaginationButton).toBeEnabled();
    expect(maxPaginationPage).toBeInTheDocument();
  });

  test('should be the selected page changed when the user change page', async () => {
    const { rerender, prevPaginationButton, nextPaginationButton, maxPaginationPage } =
      setUp(1, 50, changeMoviesPage);
    await user.click(maxPaginationPage);
    rerender(
      <Pagination
        currentPage={50}
        totalPages={50}
        changePage={changeMoviesPage}
        isLoading={false}
      />
    );
    expect(screen.getByRole('button', { name: /page 50/i })).toHaveClass('Mui-selected');
    expect(nextPaginationButton).toBeDisabled();
    expect(prevPaginationButton).toBeEnabled();
  });

  test('should change movies state when user change value', async () => {
    const { nextPaginationButton, maxPaginationPage } = setUp(1, 50, changeMoviesPage);
    await user.click(nextPaginationButton);
    expect(store.getState().movies.currentMoviesPage).toBe(2);
    expect(changeMoviesPage).toHaveBeenCalled();
    await user.click(maxPaginationPage);
    expect(store.getState().movies.currentMoviesPage).toBe(50);
    expect(changeMoviesPage).toHaveBeenCalled();
  });

  test('should disabled', () => {
    const { prevPaginationButton, nextPaginationButton, maxPaginationPage } = setUp(
      1,
      50,
      changeMoviesPage,
      true
    );

    expect(screen.getByRole('button', { name: /page 1/i })).toBeDisabled();
    expect(prevPaginationButton).toBeDisabled();
    expect(maxPaginationPage).toBeDisabled();
    expect(nextPaginationButton).toBeDisabled();
  });
});
