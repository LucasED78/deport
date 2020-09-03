import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { CombinedState } from '@reduxjs/toolkit';

import Container from '../../shared/Container/Container';
import { TeamState } from '../../../stores/team/types';
import { useDispatch } from 'react-redux';
import { fetchTeamById } from '../../../stores/team/store';
import { fetchMatch } from '../../../stores/match/store';
import { MatchState} from '../../../stores/match/types';
import TeamDetail from '../../team/TeamDetail/TeamDetail';
import { fetchLovedPlayer } from '../../../stores/player/store';
import { PlayerState } from '../../../stores/player/types';
import { LeagueState } from '../../../stores/league/types';
import ErrorScreen from '../../shared/ErrorScreen/ErrorScreen';

const TeamContainer = (props: any) => {  
  const { teamId } = useParams();
  const dispatch = useDispatch();

  const { team: teamState, match: matchState, player: playerState, league: leagueState } 
    : { team: TeamState, match: MatchState, player: PlayerState, league: LeagueState } = props;

  useEffect(() => {
    load();
  }, [])

  const hasError = teamState.error || matchState.error || playerState.error || leagueState.error;  

  const load = () => {
    fetchTeamById(dispatch, teamId)

    fetchMatch(dispatch, teamId)

    fetchLovedPlayer(dispatch, teamId)
  }
  

  return (
    <Container 
      alignItems="flex-start"
    >
      { !hasError && <TeamDetail 
        teamState={teamState} 
        matchState={matchState}
        playerState={playerState}
        leagueState={leagueState} /> }

      { hasError && <ErrorScreen onTryAgain={_ => load()} /> }
    </Container>
  )
}

const mapStateToProps = (state: CombinedState<{ store: TeamState, match: MatchState, player: PlayerState, league: LeagueState }>) => {
  return {
    team: state.store,
    match: state.match,
    player: state.player,
    league: state.league
  }
};

export default connect(mapStateToProps)(TeamContainer);