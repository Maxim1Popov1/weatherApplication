import { configureStore } from '@reduxjs/toolkit';

import { appSlice } from './slices/app';

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});

export default store;
