import { configureStore } from "@reduxjs/toolkit";
//add counter reducer to store
import counterReducer from './slices/counterSlice';
import usersReducer from './slices/usersSlice';

export const storeObj = configureStore({
  reducer: {
    counter: counterReducer,
    users:usersReducer
  },
});
