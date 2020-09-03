import { MatchState, MatchActions } from "./types";
import { MATCH_FETCHED_WITH_ERROR, MATCH_FETCHED_WITH_SUCCESS, MATCH_LOADING } from "./actions";
import { Dispatch } from "react";
import MatchRepositoryImpl from "../../repositories/match/MatchRepositoryImpl";
import TeamRepositoryImpl from "../../repositories/team/TeamRepositoryImpl";

const initialState: MatchState = {
  loading: false
}

const matchRepository = new MatchRepositoryImpl(
  new TeamRepositoryImpl()
)

const matchReducer = (state = initialState, actions: MatchActions): MatchState => {
  switch(actions.type) {
    case MATCH_FETCHED_WITH_SUCCESS:
      return {
        ...state,
        error: undefined,
        match: actions.match,
        loading: actions.loading
      }
    case MATCH_FETCHED_WITH_ERROR:
      return {
        ...state,
        error: actions.error,
        loading: actions.loading
      }
    case MATCH_LOADING:
      return {
        ...state,
        error: undefined,
        loading: actions.loading
      }
    default:
      return state;
  }
}

export const fetchMatch = async (dispatch: Dispatch<any>, teamId: string) => {
  dispatch({ type: MATCH_LOADING, loading: true });

  try {
    const match = await matchRepository.getLastMatchByTeamId(teamId)

    dispatch({ type: MATCH_FETCHED_WITH_SUCCESS, loading: false, match});
  } catch(e) {
    dispatch({ type: MATCH_FETCHED_WITH_ERROR, loading: false, error: 'erro' });
  }
}

export default matchReducer;