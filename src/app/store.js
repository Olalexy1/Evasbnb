import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { bookingApi } from '../services/bookingApi';
import { currencyApi } from '../services/currencyApi';

export default configureStore({
  reducer: {
    [bookingApi.reducerPath]: bookingApi.reducer,
    [currencyApi.reducerPath]: currencyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(bookingApi.middleware).concat(currencyApi.middleware),
});