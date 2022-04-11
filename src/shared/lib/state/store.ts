import { financialIndicatorApi } from '@features/financial-indicator/api';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [financialIndicatorApi.reducerPath]: financialIndicatorApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([financialIndicatorApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
