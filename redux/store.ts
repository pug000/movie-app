import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

import apiSlice from './services/apiSlice';
import { moviesReducer, moviesName } from './slices/moviesSlice';

const isProduction = process.env.NODE_ENV === 'production';

const combinedReducer = combineReducers({
  [moviesName]: moviesReducer,

  [apiSlice.reducerPath]: apiSlice.reducer,
});

const reducer: typeof combinedReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  }

  return combinedReducer(state, action);
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

type AppStore = typeof store;
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const makeStore = () => store;
const wrapper = createWrapper(makeStore, { debug: !isProduction });

export type { AppStore, RootState, AppDispatch };
export { wrapper, makeStore, reducer };
export default store;
