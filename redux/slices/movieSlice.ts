import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { sorts } from 'utils/constants';

import { SortType } from 'ts/interfaces';

interface MovieState {
  movieSortType: SortType;
}

const initialState: MovieState = {
  movieSortType: sorts[0],
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovieSortType(state, { payload }: PayloadAction<SortType>) {
      state.movieSortType = payload;
    },
  },
});

export default movieSlice;
