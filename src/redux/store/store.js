import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../actions/actions";
const store = configureStore({
  reducer: weatherReducer,
});
export default store;