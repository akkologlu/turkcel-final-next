import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import themeSlice from "./features/themeSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      theme: themeSlice,
    },
  });
};

export default makeStore;
