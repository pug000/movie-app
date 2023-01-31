/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, memo, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { montserrat } from 'utils/fonts';
import { SelectChangeEvent } from '@mui/material/Select';

import { wrapper } from 'redux/store';
import {
  getRunningQueriesThunk,
  moviesApiEndpoints,
  useGetDiscoverMoviesQuery,
} from 'redux/services/moviesApiSlice';
import { moviesActions } from 'redux/slices/moviesSlice';
import * as moviesSelectors from 'redux/selectors/moviesSelectors';

import { sorts } from 'utils/constants';

import useAppSelector from 'hooks/useAppSelector';
import useActions from 'hooks/useActions';

import Layout from 'components/Layout/Layout';
import CardsList from 'components/CardsList/CardsList';
import CardsControl from 'components/CardsControl/CardsControl';

import { RouterPaths } from 'ts/enums';

import { StyledSection, StyledTitle } from './Movies.style';

function Movies() {
  const { pathname, push } = useRouter();
  const { setCurrentPage, setMoviesSortType } = useActions(moviesActions);
  const currentMoviesPage = useAppSelector(moviesSelectors.getCurrentMoviesPages);
  const totalMoviesPages = useAppSelector(moviesSelectors.getTotalMoviesPages);
  const moviesSortType = useAppSelector(moviesSelectors.getMoviesSortType);
  const { data: movies, isLoading: isLoadingMovies } = useGetDiscoverMoviesQuery({
    page: currentMoviesPage,
    ...moviesSortType,
  });

  useEffect(() => {
    push(
      {
        pathname,
        query: { page: currentMoviesPage, sortBy: moviesSortType.type },
      },
      undefined,
      {
        shallow: true,
      }
    );
  }, [currentMoviesPage, moviesSortType]);

  const changePage = useCallback((_event: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  }, []);

  const changeSortType = useCallback(({ target }: SelectChangeEvent<unknown>) => {
    setMoviesSortType({ value: target.value as string, sorts });
  }, []);

  return (
    <Layout title="Movies">
      <StyledSection>
        <StyledTitle variant="h1" sx={montserrat.style}>
          Movies
        </StyledTitle>
        <CardsControl
          currentPage={currentMoviesPage}
          totalPages={totalMoviesPages}
          selectedValue={moviesSortType.type}
          isLoading={isLoadingMovies}
          changePage={changePage}
          changeSortType={changeSortType}
        />
        {movies && (
          <CardsList
            itemList={movies?.results}
            routerPath={RouterPaths.movies}
            isLoading={isLoadingMovies}
          />
        )}
      </StyledSection>
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ dispatch }) =>
    async ({ query }) => {
      const { page, sortBy } = query;
      const numberPage = Number(page);
      const sortType = sorts.find((sort) => sort.type === sortBy);

      if ((!numberPage && !sortType) || numberPage > 50) {
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
        moviesApiEndpoints.getDiscoverMovies.initiate({ page: numberPage, ...sortType })
      );
      dispatch(moviesActions.setMoviesSortType({ value: sortType, sorts }));
      dispatch(moviesActions.setCurrentPage(numberPage));
      dispatch(moviesActions.setTotalMoviesPages(movies?.total_pages));
      await Promise.all(dispatch(getRunningQueriesThunk()));

      return {
        props: {},
      };
    }
);

export default memo(Movies);
