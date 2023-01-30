import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';
import type { SelectChangeEvent } from '@mui/material';

import store from 'redux/store';
import { moviesActions } from 'redux/slices/moviesSlice';

import { selectItems, sorts, todayDate } from 'utils/constants';

import Select from 'components/CardsControl/Select/Select';

import type { SelectOption } from 'ts/interfaces';

const changeSortType = jest.fn(({ target }: SelectChangeEvent<unknown>) =>
  store.dispatch(
    moviesActions.setMoviesSortType({ value: target.value as string, sorts })
  )
);

const setUp = (options: SelectOption[], initialValue: string) => {
  const { rerender } = render(
    <Select
      options={options}
      selectedValue={initialValue}
      changeSortType={changeSortType}
    />
  );
  const initialSelectedValue = screen.getByRole('button', { name: /release date 🠗/i });

  return {
    rerender,
    initialSelectedValue,
  };
};

describe('Select component', () => {
  let user: UserEvent;
  const [initialMoviesSortType] = sorts;

  beforeEach(() => {
    user = userEvent.setup();
  });

  test('should render Select component', async () => {
    const { initialSelectedValue } = setUp(selectItems, initialMoviesSortType.type);

    expect(initialSelectedValue).toBeInTheDocument();
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    await user.click(initialSelectedValue);
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /release date 🠗/i })).toHaveClass(
      'Mui-selected'
    );
  });

  test('should change selected sort type when user change value', async () => {
    const { initialSelectedValue, rerender } = setUp(
      selectItems,
      initialMoviesSortType.type
    );

    await user.click(initialSelectedValue);
    await user.click(screen.getByRole('option', { name: /popularity 🠗/i }));
    rerender(
      <Select
        options={selectItems}
        selectedValue="popularity.desc"
        changeSortType={changeSortType}
      />
    );
    expect(screen.getByRole('button', { name: /popularity 🠗/i })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /popularity 🠗/i }));
    expect(screen.getByRole('option', { name: /popularity 🠗/i })).toHaveClass(
      'Mui-selected'
    );
  });

  test('should change store when user change value', async () => {
    const { initialSelectedValue } = setUp(selectItems, initialMoviesSortType.type);

    await user.click(initialSelectedValue);
    await user.click(screen.getByRole('option', { name: /user vote 🠕/i }));
    expect(changeSortType).toHaveBeenCalled();
    expect(store.getState().movies.moviesSortType).toEqual({
      type: 'vote_count.asc',
      releaseDate: todayDate,
    });
  });
});
