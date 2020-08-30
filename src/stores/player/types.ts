import { FETCH_PLAYER_SUCCESS, FETCH_PLAYER_ERROR, PLAYER_LOADING } from "./actions"

export interface Player {
  id: string;
  teamId: string;
  nationality: string;
  name: string;
  number: number;
  avatar?: string;
  dateSigned: string;
  birthLocalization: string;
  description: string;
  gender: string;
  position: string;
  twitter: string;
  instagram: string;
  height: string;
  weight: string;
  loved: number;
}

export type FetchPlayerSuccess = {
  type: typeof FETCH_PLAYER_SUCCESS,
  player: Player,
  loading: boolean
}

export type FetchPlayerError = {
  type: typeof FETCH_PLAYER_ERROR,
  error: string,
  loading: boolean
}

export type PlayerLoading = {
  type: typeof PLAYER_LOADING,
  loading: boolean
}

export type PlayerAction = FetchPlayerSuccess | FetchPlayerError | PlayerLoading;

export type PlayerState = {
  player?: Player,
  error?: string,
  loading: boolean
}