import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';
import { NextRouter } from 'next/router';

import CardsControl from 'components/CardsControl/CardsControl';

import mockNextRouter from './test-utils/createMockRouter';

const changePage = jest.fn();

const setUp = (page: number, totalPages: number, router: Partial<NextRouter> = {}) => {
  const mockedRouter = mockNextRouter(router);
  const { rerender } = render(
    <CardsControl currentPage={page} totalPages={totalPages} changePage={changePage} />
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

describe('CardsControl component', () => {
  let user: UserEvent;

  beforeEach(() => {
    user = userEvent.setup();
    jest.resetAllMocks();
  });

  test('should render the CardsControl component', () => {
    const { maxPaginationPage, nextPaginationButton, prevPaginationButton } = setUp(
      1,
      50
    );
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /page 1/i })).toHaveClass('Mui-selected');
    expect(maxPaginationPage).toBeInTheDocument();
    expect(prevPaginationButton).toBeDisabled();
    expect(nextPaginationButton).toBeEnabled();
  });

  test('should be the active pagination page changed when the user click on the pagination page', async () => {
    const { rerender, maxPaginationPage } = setUp(1, 50);
    await user.click(maxPaginationPage);
    expect(changePage).toHaveBeenCalledTimes(1);
    rerender(<CardsControl currentPage={50} totalPages={50} changePage={changePage} />);
    expect(screen.getByRole('button', { name: /page 50/i })).toHaveClass('Mui-selected');
    await user.click(screen.getByRole('button', { name: /go to page 46/i }));
    expect(changePage).toHaveBeenCalledTimes(2);
    rerender(<CardsControl currentPage={46} totalPages={50} changePage={changePage} />);
    expect(screen.getByRole('button', { name: /page 46/i })).toHaveClass('Mui-selected');
  });

  test('should be prev/next pagination pages enabled or disabled when user click on the pagination page', async () => {
    const { rerender, prevPaginationButton, nextPaginationButton } = setUp(1, 50);
    await user.click(nextPaginationButton);
    expect(changePage).toHaveBeenCalledTimes(1);
    rerender(<CardsControl currentPage={2} totalPages={50} changePage={changePage} />);
    expect(prevPaginationButton).toBeEnabled();
    await user.click(screen.getByRole('button', { name: /go to page 50/i }));
    expect(changePage).toHaveBeenCalledTimes(2);
    rerender(<CardsControl currentPage={50} totalPages={50} changePage={changePage} />);
    expect(nextPaginationButton).toBeDisabled();
    await user.click(prevPaginationButton);
    expect(changePage).toHaveBeenCalledTimes(3);
    rerender(<CardsControl currentPage={49} totalPages={50} changePage={changePage} />);
    expect(nextPaginationButton).toBeEnabled();
  });
});
