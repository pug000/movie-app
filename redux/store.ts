import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import apiSlice from './services/apiSlice';
import movieSlice from './slices/movieSlice';

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
  whitelist: [],
};

const movieConfig = {
  key: 'movie',
  storage,
  version: 1,
  whitelist: ['movieSortType', 'movieNumberPage'],
};

const rootReducer = combineReducers({
  movie: persistReducer(movieConfig, movieSlice.reducer),

  [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const makeStore = () => store;
const wrapper = createWrapper(makeStore, { debug: true });
const persistor = persistStore(store);

export type { RootState, AppDispatch };
export { wrapper, makeStore, persistor };
export default store;
