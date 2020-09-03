import teamReducer from '../store';
import { Team } from "../types"
import { createStore } from '@reduxjs/toolkit';
import { FETCH_TEAM_SUCCESS, FETCH_TEAM_LOADING } from '../actions';

describe('TeamStore', () => {
  const teamStore = createStore(teamReducer);

  test('should return a list of teams if the state is success', () => {
    const teams: Team[] = [{
      id: '10000',
      name: "Barcelona",
      fullName: "FC Barcelona",
      badge: 'some url',
      description: 'A club from barcelona',
      facebook: '',
      instagram: '',
      twitter: '',
      website: '',
      leagues: [],
      location: 'Barcelona',
      logo: '',
      stadium: '',
      stadiumThumbnail: '',
      year: 1899,
      youtube: ''
    }]

    teamStore.dispatch({ type: FETCH_TEAM_SUCCESS, teams, loading: false })

    expect(teamStore.getState().teams)
      .toStrictEqual(teams)
  })

  test('should return a loading state when fetching teams', () => {
    teamStore.dispatch({ type: FETCH_TEAM_LOADING, loading: true })

    expect(teamStore.getState().loading)
      .toBe(true)
  })
})