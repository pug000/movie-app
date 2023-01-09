import { memo } from 'react';

import { wrapper } from 'redux/store';
import {
  getDiscoverMovies,
  getDiscoverMoviesSelector,
  getRunningQueriesThunk,
  useGetDiscoverMoviesQuery,
} from 'redux/services/moviesApiSlice';
import { getMovieSortType } from 'redux/selectors/movieSelectors';

import { sorts } from 'utils/constants';

import useAppSelector from 'hooks/useAppSelector';

import Layout from 'components/Layout/Layout';
import CardsList from 'components/CardsList/CardsList';
import CardsControl from 'components/CardsControl/CardsControl';

import { RouterPaths } from 'ts/enums';

import { StyledSection, StyledTitle } from './Movies.style';

interface MoviesProps {
  currentMoviesPage: number;
  totalMoviesPages: number;
}

function Movies({ currentMoviesPage, totalMoviesPages }: MoviesProps) {
  const movieSortType = useAppSelector(getMovieSortType);
  const movies = useAppSelector((state) =>
    getDiscoverMoviesSelector(state, { page: currentMoviesPage, ...movieSortType })
  );
  useGetDiscoverMoviesQuery({ page: currentMoviesPage, ...movieSortType });

  return (
    <Layout title="Movies">
      <StyledSection>
        <StyledTitle variant="h1">Movies</StyledTitle>
        <CardsControl currentPage={currentMoviesPage} totalPages={totalMoviesPages} />
        {movies && (
          <CardsList itemList={movies?.results} routerPath={RouterPaths.movies} />
        )}
      </StyledSection>
    </Layout>
  );
}

export default memo(Movies);

export const getServerSideProps = wrapper.getServerSideProps(
  ({ dispatch }) =>
    async ({ query }) => {
      const { page, sortBy } = query;
      const numberPage = Number(page);
      const sortType = sorts.find((sort) => sort.type === sortBy);

      if (!numberPage && !sortType) {
        return {
          redirect: {
            destination: '/movies?page=1&sortBy=primary_release_date.desc',
            permanent: false,
          },
        };
      }

      if (!numberPage || !sortType) {
        return {
          notFound: true,
        };
      }

      const { data: movies } = await dispatch(
        getDiscoverMovies.initiate({ page: numberPage, ...sortType })
      );

      await Promise.all(dispatch(getRunningQueriesThunk()));

      return {
        props: {
          currentMoviesPage: numberPage,
          totalMoviesPages:
            movies?.total_pages && movies.total_pages < 50 ? movies.total_pages : 50,
        },
      };
    }
);
