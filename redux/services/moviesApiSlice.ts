import { createSelector } from '@reduxjs/toolkit';
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query';

import { RootState } from 'redux/store';

import { splitArray, addFetchOptions } from 'utils/functions';

import { Endpoints } from 'ts/enums';
import { Movie, ResponseResult, ResponseResultWithDates } from 'ts/interfaces';

import apiSlice from './apiSlice';

const moviesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLatestMovies: builder.query<ResponseResultWithDates, number | null>({
      query: (page) => addFetchOptions(`${Endpoints.latest}`, { page: page ?? 1 }),
    }),
    getUpcomingMovies: builder.query<ResponseResultWithDates, number | null>({
      query: (page) => addFetchOptions(`${Endpoints.upcoming}`, { page: page ?? 1 }),
    }),
    getTopRatedMovies: builder.query<ResponseResult, number | null>({
      query: (page) => addFetchOptions(`${Endpoints.topRated}`, { page: page ?? 1 }),
    }),
    getPopularMovies: builder.query<ResponseResult, number | null>({
      query: (page) => addFetchOptions(`${Endpoints.popular}`, { page: page ?? 1 }),
    }),
    getAllMovies: builder.query<ResponseResultWithDates[], null>({
      queryFn: async (_arg, _api, _extraOptions, baseQuery) => {
        const titles = [
          'Latest movies',
          'Top rated movies',
          'Popular movies',
          'Upcoming movies',
        ];
        const endpoints = [
          `${Endpoints.latest}`,
          `${Endpoints.topRated}`,
          `${Endpoints.popular}`,
          `${Endpoints.upcoming}`,
        ];
        const result = await Promise.all(
          endpoints.map(
            async (endpoint) =>
              (await baseQuery(addFetchOptions(endpoint))) as QueryReturnValue<
                ResponseResultWithDates,
                FetchBaseQueryError,
                FetchBaseQueryMeta
              >
          )
        );
        const errors = result
          .filter(({ error }) => error)
          .map(({ error }) => error ?? []) as FetchBaseQueryError[];
        const data = result.map((response, index) =>
          response.data ? { ...response.data, title: titles[index] } : []
        ) as ResponseResultWithDates[];

        return errors.length ? { error: errors[0] } : { data };
      },
    }),
    getMoviePosters: builder.query<Movie[][], null>({
      queryFn: async (_arg, _api, _extraOptions, baseQuery) => {
        const size = 10;
        const pages = [1, 2, 3];
        const result = await Promise.all(
          pages.map(
            async (page) =>
              (await baseQuery(
                addFetchOptions(`${Endpoints.latest}`, { page })
              )) as QueryReturnValue<
                ResponseResult,
                FetchBaseQueryError,
                FetchBaseQueryMeta
              >
          )
        );
        const errors = result
          .filter(({ error }) => error)
          .map(({ error }) => error ?? []) as FetchBaseQueryError[];
        const movies = result.flatMap(({ data }) => data?.results ?? []);

        return errors.length ? { error: errors[0] } : { data: splitArray(movies, size) };
      },
    }),
  }),
});

export const {
  useGetMoviePostersQuery,
  useGetLatestMoviesQuery,
  useGetUpcomingMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetPopularMoviesQuery,
  useGetAllMoviesQuery,
  util: { getRunningQueriesThunk },
} = moviesApiSlice;

export const {
  getMoviePosters,
  getLatestMovies,
  getUpcomingMovies,
  getTopRatedMovies,
  getPopularMovies,
  getAllMovies,
} = moviesApiSlice.endpoints;

const getMoviePostersSelector = createSelector(
  (state: RootState) => getMoviePosters.select(null)(state),
  ({ data }) => data ?? []
);

const getAllMoviesSelector = createSelector(
  (state: RootState) => getAllMovies.select(null)(state),
  ({ data }) => data ?? []
);

export { getMoviePostersSelector, getAllMoviesSelector };
