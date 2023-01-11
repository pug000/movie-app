import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';
import { NextRouter } from 'next/router';

import CardsControl from 'components/CardsControl/CardsControl';

import mockNextRouter from './test-utils/createMockRouter';

const setUp = (page: number, totalPages: number) => {
  const { rerender } = render(
    <CardsControl currentPage={page} totalPages={totalPages} />
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

describe('CardsControl component', () => {
  let user: UserEvent;
  let mockRouter: NextRouter;

  beforeEach(() => {
    mockRouter = mockNextRouter({
      pathname: '/movies',
      asPath: '/movies?page=1&sortBy=primary_release_date.desc',
      query: {
        page: '1',
        sortBy: 'primary_release_date.desc',
      },
    });
    user = userEvent.setup();
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
    expect(mockRouter.query).toStrictEqual({
      page: '1',
      sortBy: 'primary_release_date.desc',
    });
  });

  test('should be the active pagination page changed when the user click on the pagination page', async () => {
    const { rerender, prevPaginationButton, nextPaginationButton, maxPaginationPage } =
      setUp(1, 50);
    await user.click(nextPaginationButton);
    rerender(<CardsControl currentPage={2} totalPages={50} />);
    expect(screen.getByRole('button', { name: /page 2/i })).toHaveClass('Mui-selected');
    expect(prevPaginationButton).toBeEnabled();
    await user.click(maxPaginationPage);
    rerender(<CardsControl currentPage={50} totalPages={50} />);
    expect(maxPaginationPage).toHaveClass('Mui-selected');
    expect(nextPaginationButton).toBeDisabled();
  });

  test('should be the router query changed when the user click on the pagination page', async () => {
    const { rerender } = setUp(1, 50);
    await user.click(screen.getByRole('button', { name: /go to page 4/i }));
    rerender(<CardsControl currentPage={4} totalPages={50} />);
    expect(mockRouter.push).toHaveBeenLastCalledWith({
      pathname: '/movies',
      query: { page: 4, sortBy: 'primary_release_date.desc' },
    });
  });
});
