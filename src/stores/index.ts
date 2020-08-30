import { combineReducers, createStore } from "@reduxjs/toolkit";
import teamReducer from "./team/store";
import matchReducer from "./match/store";

const combinedReducers = combineReducers({
  store: teamReducer,
  match: matchReducer
})

export default createStore(combinedReducers);