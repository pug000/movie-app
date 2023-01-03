import { memo } from 'react';

import { wrapper } from 'redux/store';
import {
  getDiscoverMovies,
  getDiscoverMoviesSelector,
  getRunningQueriesThunk,
  useGetDiscoverMoviesQuery,
} from 'redux/services/moviesApiSlice';

import useAppSelector from 'hooks/useAppSelector';

import Layout from 'components/Layout/Layout';
import CardList from 'components/CardList/CardList';

import { RouterPaths } from 'ts/enums';

import { StyledSection, StyledTitle } from './Movies.style';

function Movies() {
  const { movieNumberPage, movieSortType } = useAppSelector((state) => state.movie);
  const movies = useAppSelector((state) =>
    getDiscoverMoviesSelector(state, { page: movieNumberPage, ...movieSortType })
  );
  useGetDiscoverMoviesQuery({ page: movieNumberPage, ...movieSortType });

  return (
    <Layout title="Movies">
      <StyledSection>
        <StyledTitle variant="h1">Movies</StyledTitle>
        {movies && (
          <CardList itemList={movies?.results} routerPath={RouterPaths.movies} />
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
