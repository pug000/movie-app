import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query';

import { Endpoints, Methods } from 'ts/enums';
import { DataResult, ResponseResult } from 'ts/interfaces';

import apiSlice from './apiSlice';

const moviesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMoviePosters: builder.query<DataResult[], void | null>({
      queryFn: async (_arg: void, _api, _extraOptions, baseQuery) => {
        const pages = [1, 2, 3, 4];
        const result = await Promise.all(
          pages.map(
            async (page) =>
              (await baseQuery({
                url: `${Endpoints.latest}`,
                method: Methods.get,
                params: {
                  api_key: process.env.API_KEY,
                  page,
                },
              })) as QueryReturnValue<
                ResponseResult,
                FetchBaseQueryError,
                FetchBaseQueryMeta
              >
          )
        );
        const error = result.filter((response) => response.error);
        const posters = result.flatMap((res) => res.data?.results);

        return error.length
          ? { error: error[0] as FetchBaseQueryError }
          : { data: posters as DataResult[] };
      },
    }),
  }),
});

export const {
  useGetMoviePostersQuery,
  util: { getRunningQueriesThunk },
} = moviesApiSlice;
export const { getMoviePosters } = moviesApiSlice.endpoints;
