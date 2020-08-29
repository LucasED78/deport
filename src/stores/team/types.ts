import { FETCH_TEAM, FETCH_TEAM_ERROR, FETCH_TEAM_SUCCESS, FETCH_TEAM_LOADING } from "./actions";
import { Dispatch } from "react";

export interface Team {
  id: string;
  name: string;
  fullName: string;
  year: number;
  badge: string;
  logo: string;
  leagues: League[];
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

export type FetchTeamAction = {
  type: typeof FETCH_TEAM,
  name: string,
  dispatch: Dispatch<any>
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

export type FetchTeamLoading = {
  type: typeof FETCH_TEAM_LOADING,
  loading: boolean
}

export type TeamActions = FetchTeamAction | FetchTeamSuccess | FetchTeamLoading | FetchTeamError;

export type TeamState = {
  teams: Team[],
  loading: boolean,
  error?: string
}