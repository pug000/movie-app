import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MovieState {
  movieSortType: string;
}

const initialState: MovieState = {
  movieSortType: 'release_date.desc',
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovieSortType(state, { payload }: PayloadAction<string>) {
      state.movieSortType = payload;
    },
  },
});

export default movieSlice;
