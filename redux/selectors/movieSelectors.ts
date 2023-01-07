import { RootState } from 'redux/store';

const getTotalMoviePages = (state: RootState) => state.movie.totalMoviePages;

const getMovieSortType = (state: RootState) => state.movie.movieSortType;

export { getTotalMoviePages, getMovieSortType };
