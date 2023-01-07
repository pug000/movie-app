import { memo, useEffect } from 'react';

import { wrapper } from 'redux/store';
import {
  getDiscoverMovies,
  getDiscoverMoviesSelector,
  getRunningQueriesThunk,
  useGetDiscoverMoviesQuery,
} from 'redux/services/moviesApiSlice';
import { getMovieSortType } from 'redux/selectors/movieSelectors';

import useAppSelector from 'hooks/useAppSelector';
import usePaginationPage from 'hooks/usePaginationPage';

import Layout from 'components/Layout/Layout';
import CardsList from 'components/CardsList/CardsList';
import CardsControl from 'components/CardsControl/CardsControl';

import { RouterPaths } from 'ts/enums';

import { StyledSection, StyledTitle } from './Movies.style';

function Movies() {
  const movieSortType = useAppSelector(getMovieSortType);
  const {
    currentPage: currentMoviesPage,
    totalPages: totalMoviesPages,
    setTotalPages: setTotalMoviesPages,
    changePaginationPageOnClick,
  } = usePaginationPage();
  const movies = useAppSelector((state) =>
    getDiscoverMoviesSelector(state, { page: currentMoviesPage, ...movieSortType })
  );
  useGetDiscoverMoviesQuery({ page: currentMoviesPage, ...movieSortType });

  useEffect(() => {
    if (movies && movies.total_pages !== totalMoviesPages) {
      setTotalMoviesPages(movies.total_pages);
    }
  }, [movies, setTotalMoviesPages, totalMoviesPages]);

  return (
    <Layout title="Movies">
      <StyledSection>
        <StyledTitle variant="h1">Movies</StyledTitle>
        <CardsControl
          currentPage={currentMoviesPage}
          totalPages={totalMoviesPages}
          changePaginationPageOnClick={changePaginationPageOnClick}
        />
        {movies && (
          <CardsList itemList={movies?.results} routerPath={RouterPaths.movies} />
        )}
      </StyledSection>
    </Layout>
  );
}

export default memo(Movies);

export const getServerSideProps = wrapper.getServerSideProps(
  ({ getState, dispatch }) =>
    async () => {
      const { movieSortType } = getState().movie;
      dispatch(getDiscoverMovies.initiate({ page: 1, ...movieSortType }));

      await Promise.all(dispatch(getRunningQueriesThunk()));

      return {
        props: {},
      };
    }
);
