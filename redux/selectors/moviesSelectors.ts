import type { RootState } from 'redux/store';

const getCurrentMoviesPages = (state: RootState) => state.movies.currentMoviesPage;

const getTotalMoviesPages = (state: RootState) => state.movies.totalMoviesPages;

const getMoviesSortType = (state: RootState) => state.movies.moviesSortType;

export { getCurrentMoviesPages, getTotalMoviesPages, getMoviesSortType };
