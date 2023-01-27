import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { sorts } from 'utils/constants';

import { SortType } from 'ts/interfaces';

interface MoviesState {
  moviesSortType: SortType;
  currentMoviesPage: number;
  totalMoviesPages: number;
}

const initialState: MoviesState = {
  moviesSortType: sorts[0],
  currentMoviesPage: 1,
  totalMoviesPages: 1,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMoviesSortType(state, { payload }: PayloadAction<SortType>) {
      state.moviesSortType = payload;
    },

    setCurrentPage(state, { payload }: PayloadAction<number>) {
      state.currentMoviesPage = payload;
    },

    setTotalMoviesPages(state, { payload }: PayloadAction<number | undefined>) {
      if (!payload) {
        state.totalMoviesPages = 1;
      } else if (payload > 50) {
        state.totalMoviesPages = 50;
      } else {
        state.totalMoviesPages = payload;
      }
    },
  },
});

export const {
  reducer: moviesReducer,
  actions: moviesActions,
  name: moviesName,
} = moviesSlice;
