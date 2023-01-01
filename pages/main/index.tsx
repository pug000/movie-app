import { memo, useCallback } from 'react';
import { v4 } from 'uuid';

import { wrapper } from 'redux/store';
import {
  getAllMovies,
  getAllMoviesSelector,
  getRunningQueriesThunk,
  useGetAllMoviesQuery,
} from 'redux/services/moviesApiSlice';

import useAppSelector from 'hooks/useAppSelector';
import useActions from 'hooks/useActions';

import Layout from 'components/Layout/Layout';
import Slider from 'components/Slider/Slider';

import { RouterPaths } from 'ts/enums';
import { SortType } from 'ts/interfaces';

function Main() {
  const movies = useAppSelector(getAllMoviesSelector);
  useGetAllMoviesQuery(null);
  const { setMovieSortType } = useActions();

  const setMovieSortTypeOnClick = useCallback(
    (sortType: SortType) => {
      setMovieSortType(sortType);
    },
    [setMovieSortType]
  );

  return (
    <Layout title="Main">
      {movies.length > 0 &&
        movies.map(({ results, title, sortBy }) => (
          <Slider
            key={v4()}
            initialData={results}
            routerPath={RouterPaths.movies}
            sliderTitle={title}
            sortBy={sortBy}
            setSortTypeOnClick={setMovieSortTypeOnClick}
          />
        ))}
    </Layout>
  );
}

export default memo(Main);

export const getServerSideProps = wrapper.getServerSideProps(
  ({ dispatch }) =>
    async () => {
      dispatch(getAllMovies.initiate(null));

      await Promise.all(dispatch(getRunningQueriesThunk()));

      return {
        props: {},
      };
    }
);
