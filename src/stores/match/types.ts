import { MATCH_FETCHED_WITH_SUCCESS, MATCH_FETCHED_WITH_ERROR, MATCH_LOADING } from "./actions"

export interface Match {
  id: string;
  name: string;
  alternateName: string;
  season: string;
  description: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: string;
  awayScore: string;
  homeTeamId: string;
  awayTeamId: string;
  homeTeamLogo?: string;
  awayTeamLogo?: string;
  thumbnail: string;
  video: string;
}

export type MatchFetchedWithSuccess = {
  type: typeof MATCH_FETCHED_WITH_SUCCESS,
  match: Match,
  loading: boolean
}

export type MatchFetchedWithError = {
  type: typeof MATCH_FETCHED_WITH_ERROR,
  error: string,
  loading: boolean
}

export type MatchLoading = {
  type: typeof MATCH_LOADING,
  loading: boolean
}

export type MatchActions = MatchFetchedWithSuccess | MatchFetchedWithError | MatchLoading;

export type MatchState = {
  match?: Match,
  loading: boolean,
  error?: string
}