import {configureStore} from '@reduxjs/toolkit';
import {starWarsApi} from './api/starWarsApi';
import fansSlice from './features/fansSlice';

const store = configureStore({
  reducer: {
    fans: fansSlice,
    [starWarsApi.reducerPath]: starWarsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(starWarsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
