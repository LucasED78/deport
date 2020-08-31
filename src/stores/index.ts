import { combineReducers, createStore } from "@reduxjs/toolkit";
import teamReducer from "./team/store";
import matchReducer from "./match/store";
import playerReducer from "./player/store";
import leagueReducer from "./league/store";

const combinedReducers = combineReducers({
  store: teamReducer,
  match: matchReducer,
  player: playerReducer,
  league: leagueReducer
})

export default createStore(combinedReducers);