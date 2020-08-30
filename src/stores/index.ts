import { combineReducers, createStore } from "@reduxjs/toolkit";
import teamReducer from "./team/store";
import matchReducer from "./match/store";
import playerReducer from "./player/store";

const combinedReducers = combineReducers({
  store: teamReducer,
  match: matchReducer,
  player: playerReducer
})

export default createStore(combinedReducers);