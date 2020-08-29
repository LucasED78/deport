import { TeamState, FetchTeamAction, TeamActions } from "./types";
import { FETCH_TEAM, FETCH_TEAM_LOADING, FETCH_TEAM_ERROR, FETCH_TEAM_SUCCESS } from "./actions";
import { Dispatch } from "react";
import TeamRepositoryImpl from "../../repositories/team/TeamRepositoryImpl";

import { createStore } from '@reduxjs/toolkit'

const initialState: TeamState = {
  teams: [],
  loading: false
}

const repository = new TeamRepositoryImpl()

const teamReducer = (state = initialState, action: TeamActions): TeamState => {
  switch(action.type) {
    case FETCH_TEAM_SUCCESS:
      return {
        teams: action.teams,
        loading: action.loading
      }
    case FETCH_TEAM_ERROR:
      return {
        teams: [],
        error: action.error,
        loading: action.loading
      }
    case FETCH_TEAM_LOADING:
      return {
        teams: [],
        loading: action.loading,
      }
    default:
      return state
  }
}

export const fetchTeam = async (dispatch: Dispatch<any>, name: string) => {
  dispatch({ type: FETCH_TEAM_LOADING, loading: true })

  try {
    const data = await repository.getByName(name)

    dispatch({ type: FETCH_TEAM_SUCCESS, loading: false, teams: data })
  } catch(error) {
    dispatch({ type: FETCH_TEAM_ERROR, loading: false, error: 'erro' })
  }
}

export default createStore(teamReducer, initialState);