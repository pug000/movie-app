import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

const getMovieNumberPage = (state: RootState) => state.movie.movieNumberPage;

const getMovieSortType = (state: RootState) => state.movie.movieSortType;

const getSortTypeAndNumberPage = createSelector(
  getMovieNumberPage,
  getMovieSortType,
  (movieNumberPage, movieSortType) => ({ movieNumberPage, movieSortType })
);

export default getSortTypeAndNumberPage;
