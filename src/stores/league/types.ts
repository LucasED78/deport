import { FETCH_LEAGUE_SUCCESS, FETCH_LEAGUE_ERROR, LEAGUE_LOADING } from "./actions"

export interface League {
  id: string;
  name: string;
  table?: LeagueTable[]
}

export interface LeagueTable {
  name: string;
  teamId: string;
  played: number;
  goalsFor: number;
  goalsAgainst: number;
  goalsDifference: number;
  wins: number;
  draws: number;
  loss: number;
  total: number;
}

export type FetchLeagueSuccess = {
  type: typeof FETCH_LEAGUE_SUCCESS,
  league: League,
  loading: boolean
}

export type FetchLeagueError = {
  type: typeof FETCH_LEAGUE_ERROR,
  error: string,
  loading: boolean
}

export type LeagueLoading = {
  type: typeof LEAGUE_LOADING,
  loading: boolean
}

export type LeagueActions = FetchLeagueSuccess | FetchLeagueError | LeagueLoading;

export type LeagueState = {
  league?: League,
  loading: boolean,
  error?: string
}