import { configureStore } from '@reduxjs/toolkit';
import jobSlice from '../features/jobList/jobList.slice';

const store = configureStore({
  reducer: {
    jobs: jobSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
