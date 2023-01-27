import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query';

import { splitArray, addFetchOptions } from 'utils/functions';
import { endpoints, minReleaseDate, sorts, titles } from 'utils/constants';

import { Endpoints } from 'ts/enums';
import { Movie, ResponseResult, ResponseResultWithDates, SortType } from 'ts/interfaces';

import apiSlice from './apiSlice';

interface DiscoverMoviesArguments extends SortType {
  page: number;
}

const moviesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDiscoverMovies: builder.query<ResponseResult, DiscoverMoviesArguments>({
      query: ({ page = 1, type, releaseDate }) =>
        addFetchOptions(`${Endpoints.discoverMovies}`, {
          page,
          sort_by: type,
          'primary_release_date.lte': releaseDate,
          'primary_release_date.gte': minReleaseDate,
        }),
    }),
    getAllMovies: builder.query<ResponseResultWithDates[], null>({
      queryFn: async (_arg, _api, _extraOptions, baseQuery) => {
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
          response.data
            ? { ...response.data, title: titles[index], sortBy: sorts[index] }
            : []
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
  useGetAllMoviesQuery,
  useGetDiscoverMoviesQuery,
  util: { getRunningQueriesThunk },
} = moviesApiSlice;

export const { endpoints: moviesApiEndpoints } = moviesApiSlice;
