import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./contadorSlice";

export const rootReducer = combineReducers({
	counter: counterSlice,
});
