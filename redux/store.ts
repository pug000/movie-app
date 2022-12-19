import { combineReducers, configureStore } from '@reduxjs/toolkit';

import testSlice from './slices/testSlice';

const rootReducer = combineReducers({
  test: testSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([]),
});

type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export type { RootState, AppDispatch };
export default store;
