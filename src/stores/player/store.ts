import { PlayerState, PlayerAction } from "./types";
import { FETCH_PLAYER_SUCCESS, FETCH_PLAYER_ERROR, PLAYER_LOADING } from "./actions";
import { Dispatch } from "react";
import PlayerRepositoryImpl from "../../repositories/player/PlayerRepositoryImpl";

const initialState: PlayerState = {
  loading: false
}

const playerRepository = new PlayerRepositoryImpl();

const playerReducer = (state = initialState, actions: PlayerAction): PlayerState => {
  switch(actions.type) {
    case FETCH_PLAYER_SUCCESS:
      return {
        ...state,
        error: undefined,
        loading: actions.loading,
        player: actions.player
      }
    case FETCH_PLAYER_ERROR:
      return {
        ...state,
        error: actions.error,
        loading: actions.loading
      }

    case PLAYER_LOADING:
      return {
        ...state,
        error: undefined,
        loading: actions.loading
      }
    default:
      return state;
  }
}

export const fetchLovedPlayer = async (dispatch: Dispatch<any>, teamId: string) => {
  dispatch({ type: PLAYER_LOADING, loading: true })

  try {
    const player = await playerRepository.getMostLovedPlayer(teamId)
    
    dispatch({ type: FETCH_PLAYER_SUCCESS, player, loading: false })
  } catch(e) {
    dispatch({ type: FETCH_PLAYER_ERROR, error: 'erro', loading: false })
  }
}

export default playerReducer;