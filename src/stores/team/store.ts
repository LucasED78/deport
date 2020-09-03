import { TeamState, TeamActions, Team } from "./types";
import { FETCH_TEAM_LOADING, FETCH_TEAM_ERROR, FETCH_TEAM_SUCCESS, FETCH_TEAM_BY_ID_SUCCESS } from "./actions";
import { Dispatch } from "react";
import TeamRepositoryImpl from "../../repositories/team/TeamRepositoryImpl";

import { createStore } from '@reduxjs/toolkit'
import { fetchLeague } from "../league/store";

const initialState: TeamState = {
  teams: [],
  loading: false,
}

const repository = new TeamRepositoryImpl()

const teamReducer = (state = initialState, action: TeamActions): TeamState => {
  switch(action.type) {
    case FETCH_TEAM_SUCCESS:
      return {
        teams: action.teams,
        loading: action.loading
      }
    case FETCH_TEAM_BY_ID_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        error: undefined,
        teamDetail: action.teamDetail
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
        error: undefined,
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

export const fetchTeamById = async (dispatch: Dispatch<any>, id: string) => {
  dispatch({ type: FETCH_TEAM_LOADING, loading: true });

  try {
    const data = await repository.getById(id) as Team;

    const [ league ] = data.leagues;

    fetchLeague(dispatch, league.id)

    dispatch({ type: FETCH_TEAM_BY_ID_SUCCESS, loading: false, teamDetail: data })
  } catch(error) {
    dispatch({ type: FETCH_TEAM_ERROR, loading: false, error: 'erro' })
  }
}

export default teamReducer;
export const teamStore =  createStore(teamReducer, initialState);