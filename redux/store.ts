import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import apiSlice from './services/apiSlice';
import movieSlice from './slices/movieSlice';

const rootReducer = combineReducers({
  movie: movieSlice.reducer,

  [apiSlice.reducerPath]: apiSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const makeStore = () => store;
const wrapper = createWrapper(makeStore, { debug: true });

export type { RootState, AppDispatch };
export { wrapper, makeStore };
export default store;
