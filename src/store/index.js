import { configureStore, combineReducers } from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";
import tokenSlice from "./tokenSlice";
import formSlice from "./formSlice";

const rootReducer = combineReducers({
  users: usersSlice,
  token: tokenSlice,
  form: formSlice,
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
