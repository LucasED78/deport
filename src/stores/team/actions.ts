import { FetchTeamAction, TeamActions } from './types'
import { Dispatch } from 'react'

export const FETCH_TEAM = 'deport/team/FETCH_TEAM'
export const FETCH_TEAM_ERROR = 'deport/team/FETCH_TEAM_ERROR'
export const FETCH_TEAM_SUCCESS = 'deport/team/FETCH_TEAM_SUCCESS'
export const FETCH_TEAM_LOADING = 'deport/team/FETCH_TEAM_LOADING'

export const fetchTeamAction = (dispatch: Dispatch<any>, name: string): FetchTeamAction => {
  return {
    type: FETCH_TEAM,
    dispatch: dispatch,
    name
  }
}