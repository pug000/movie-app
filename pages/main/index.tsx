import { memo } from 'react';
import { v4 } from 'uuid';

import { wrapper } from 'redux/store';
import {
  moviesApiEndpoints,
  getRunningQueriesThunk,
  useGetAllMoviesQuery,
} from 'redux/services/moviesApiSlice';

import Layout from 'components/Layout/Layout';
import Slider from 'components/Slider/Slider';

import { RouterPaths } from 'ts/enums';

function Main() {
  const { data: movies } = useGetAllMoviesQuery(null);

  return (
    <Layout title="Main">
      {movies &&
        movies.map(({ results, title, sortBy }) => (
          <Slider
            key={v4()}
            initialData={results}
            routerPath={RouterPaths.movies}
            sliderTitle={title}
            sortBy={sortBy}
          />
        ))}
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ dispatch }) =>
    async () => {
      dispatch(moviesApiEndpoints.getAllMovies.initiate(null));

      await Promise.all(dispatch(getRunningQueriesThunk()));

      return {
        props: {},
      };
    }
);

export default memo(Main);
