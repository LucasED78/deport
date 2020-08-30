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

const TeamContainer = (props: any) => {  
  const { teamId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTeamById(dispatch, teamId)

    fetchMatch(dispatch, teamId)

    fetchLovedPlayer(dispatch, teamId)
  }, [])

  const { team: teamState, match: matchState, player: playerState } 
    : { team: TeamState, match: MatchState, player: PlayerState } = props;

  return (
    <Container 
      alignItems="flex-start"
    >
      <TeamDetail 
        teamState={teamState} 
        matchState={matchState}
        playerState={playerState} />
    </Container>
  )
}

const mapStateToProps = (state: CombinedState<{ store: TeamState, match: MatchState, player: PlayerState }>) => {
  return {
    team: state.store,
    match: state.match,
    player: state.player
  }
};

export default connect(mapStateToProps)(TeamContainer);