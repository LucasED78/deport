import { FETCH_TEAM_ERROR, FETCH_TEAM_SUCCESS, FETCH_TEAM_LOADING, FETCH_TEAM_BY_ID_SUCCESS } from "./actions";

export interface Team {
  id: string;
  name: string;
  fullName: string;
  year: number;
  badge: string;
  logo: string;
  leagues: League[];
  location: string;
  stadium: string;
  stadiumThumbnail: string;
  description: string;
  website: string;
  facebook: string;
  twitter: string;
  instagram: string;
  youtube: string;
}

export interface League {
  id: string;
  name: string;
}

export type FetchTeamError = {
  type: typeof FETCH_TEAM_ERROR,
  error: string
  loading: boolean,
}

export type FetchTeamSuccess = {
  type: typeof FETCH_TEAM_SUCCESS,
  teams: Team[],
  loading: boolean
}

export type FetchTeamByIdSuccess = {
  type: typeof FETCH_TEAM_BY_ID_SUCCESS,
  teamDetail: Team,
  loading: boolean
}

export type FetchTeamLoading = {
  type: typeof FETCH_TEAM_LOADING,
  loading: boolean
}

export type TeamActions = FetchTeamSuccess | FetchTeamLoading | FetchTeamError | FetchTeamByIdSuccess;

export type TeamState = {
  teams: Team[],
  loading: boolean,
  teamDetail?: Team,
  error?: string
}