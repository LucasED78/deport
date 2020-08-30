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

const TeamContainer = (props: any) => {  
  const { teamId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTeamById(dispatch, teamId)

    fetchMatch(dispatch, teamId)
  }, [])

  const { team: teamState, match: matchState } : { team: TeamState, match: MatchState } = props;

  return (
    <Container 
      alignItems="flex-start"
    >
      <TeamDetail 
        team={teamState} 
        match={matchState} />
    </Container>
  )
}

const mapStateToProps = (state: CombinedState<{ store: TeamState, match: MatchState }>) => {
  return {
    team: state.store,
    match: state.match
  }
};

export default connect(mapStateToProps)(TeamContainer);