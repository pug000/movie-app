import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { sorts } from 'utils/constants';
import { getValueFromLocalStorage, saveInLocalStorage } from 'utils/functions';

import { SortType } from 'ts/interfaces';

interface MovieState {
  movieSortType: SortType;
  movieNumberPage: number;
}

const initialState: MovieState = {
  movieSortType: getValueFromLocalStorage('movieSortType', sorts[0]),
  movieNumberPage: 1,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovieSortType(state, { payload }: PayloadAction<SortType>) {
      state.movieSortType = payload;
      saveInLocalStorage('movieSortType', payload);
    },

    setMoviePage(state, { payload }: PayloadAction<number>) {
      state.movieNumberPage = payload;
    },
  },
});

export default movieSlice;
