import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import apiSlice from './services/apiSlice';
import { moviesReducer, moviesName } from './slices/moviesSlice';

const isProduction = process.env.NODE_ENV === 'production';

const reducer = combineReducers({
  [moviesName]: moviesReducer,

  [apiSlice.reducerPath]: apiSlice.reducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const makeStore = () => store;
const wrapper = createWrapper(makeStore, { debug: !isProduction });

export type { RootState, AppDispatch };
export { wrapper, makeStore };
export default store;
