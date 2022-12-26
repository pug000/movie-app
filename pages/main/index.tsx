import { memo } from 'react';
import { v4 } from 'uuid';

import { wrapper } from 'redux/store';
import {
  getAllMovies,
  getAllMoviesSelector,
  getRunningQueriesThunk,
  useGetAllMoviesQuery,
} from 'redux/services/moviesApiSlice';

import Layout from 'components/Layout/Layout';
import Slider from 'components/Slider/Slider';
import useAppSelector from 'hooks/useAppSelector';

function Main() {
  const movies = useAppSelector(getAllMoviesSelector);
  useGetAllMoviesQuery(null);

  return (
    <Layout title="Main">
      {movies.length > 0 &&
        movies.map(({ results, title }) => (
          <Slider key={v4()} initialData={results} sliderTitle={title} />
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
