import LeagueRepositoryImpl from "../../repositories/league/LeagueRepositoryImpl";
import { LeagueState, LeagueActions } from "./types";
import { FETCH_LEAGUE_SUCCESS, FETCH_LEAGUE_ERROR, LEAGUE_LOADING } from "./actions";
import { Dispatch } from "react";

const initialState: LeagueState = {
  loading: false
}

const leagueRepository = new LeagueRepositoryImpl()

const leagueReducer = (state = initialState, actions: LeagueActions): LeagueState => {
  switch(actions.type) {
    case FETCH_LEAGUE_SUCCESS:
      return {
        ...state,
        league: actions.league,
        loading: actions.loading,
      }
    case FETCH_LEAGUE_ERROR:
      return {
        ...state,
        error: actions.error,
        loading: actions.loading,
      }
    case LEAGUE_LOADING:
      return {
        ...state,
        loading: actions.loading
      }
    default:
      return state;
  }
}

export const fetchLeague = async (dispatch: Dispatch<any>, leagueId: string) => {
  dispatch({ type: LEAGUE_LOADING, loading: true });

  try {
    const league = await leagueRepository.getById(leagueId);

    dispatch({ type: FETCH_LEAGUE_SUCCESS, league, loading: false });
  } catch(e) {
    dispatch({ type: FETCH_LEAGUE_ERROR, loading: false, error: 'erro' });
  }
}

export default leagueReducer;