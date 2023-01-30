import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { sorts } from 'utils/constants';

import { SortType } from 'ts/interfaces';

interface MoviesState {
  moviesSortType: SortType;
  currentMoviesPage: number;
  totalMoviesPages: number;
}

interface MoviesSortType {
  value: string | SortType;
  sorts: SortType[];
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
    setMoviesSortType(state, { payload }: PayloadAction<MoviesSortType>) {
      if (typeof payload.value === 'string') {
        const sortType = payload.sorts.find(({ type }) => type === payload.value);

        if (!sortType) {
          const [defaultSortType] = payload.sorts;
          state.moviesSortType = defaultSortType;
        } else {
          state.moviesSortType = sortType;
        }
      } else {
        state.moviesSortType = payload.value;
      }
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
