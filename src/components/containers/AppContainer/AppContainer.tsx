import React, { useState, KeyboardEvent } from 'react';
import UnderlineInput from '../../shared/Input/UnderlineInput/UnderlineInput';
import TeamCardListShimmer from '../../team/TeamCardListShimmer/TeamCardListShimmer';
import { useDispatch } from 'react-redux';
import { fetchTeam } from '../../../stores/team/store';
import { connect } from 'react-redux';
import { TeamState } from '../../../stores/team/types';
import TeamCardList from '../../team/TeamCardList/TeamCardList';
import Container from '../../shared/Container/Container';
import { useHistory } from 'react-router-dom';

const AppContainer = (props: any) => {
  const [team, setTeam] = useState('')
  const dispatch = useDispatch();
  const history = useHistory();

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      fetchTeam(dispatch, team)
    }
  }

  const handleTeamClicked = (id: string) => {
    history.push(`/${id}`)
  }
  
  return (
    <Container>
      <UnderlineInput 
        width="80%"
        onChange={e => setTeam(e.target.value)}
        onKeyDown={handleKeyDown}
        value={team} />

      { props.loading && <TeamCardListShimmer /> }

      { props.teams.length > 0 && <TeamCardList teams={props.teams} onTeamCardClicked={handleTeamClicked} /> }
  </Container>
  )
}

const mapStateToProps = (state: TeamState) => state;

export default connect(mapStateToProps)(AppContainer);