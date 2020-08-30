import React from 'react';

import { 
  TeamState, 
  Team 
} from '../../../stores/team/types';

import { MatchState } from '../../../stores/match/types';

import { 
  Headline1, 
  Headline2 
} from '../../shared/Headline/Headline';

import Spacer from '../../shared/Spacer/Spacer';
import HeadToHead from '../../shared/HeadToHead/HeadToHead/HeadToHead';
import HeadToHeadShimmer from '../../shared/HeadToHead/HeadToHeadShimmer/HeadToHeadShimmer';
import TeamDetailShimmer from '../TeamDetailShimmer/TeamDetailShimmer';

export type TeamDetailProps = {
  team: TeamState,
  match: MatchState
}

const TeamDetail = (props: TeamDetailProps) => {
  const { team: teamState, match: matchState }: { team: TeamState, match: MatchState } = props;
  const teamDetail = teamState.teamDetail as Team;
  const match = matchState.match

  return (
      <>
        { teamDetail && <>
          <Headline1 
            title={teamDetail.fullName}
            margin="0" />

          <Headline2 
            title={`${teamDetail.year}, ${teamDetail.name}`} 
            color="#E7E7E7" 
            fontWeight={500}
            margin="0" />

          <Spacer marginVertical="22px" />

          { teamState.loading && <TeamDetailShimmer />}

          { match && 
          <HeadToHead 
            homeLogo={match.homeTeamLogo ?? teamDetail.badge}
            awayLogo={match.awayTeamLogo ?? teamDetail.badge}
            score={`${match.homeScore}x${match.awayScore}`}
            /*onHomeTeamClicked={() => history.replace(`/${match.homeTeamId ?? teamId}`)}
            onAwayTeamClicked={() => history.replace(`/${match.awayTeamId ?? teamId}`)}*/ /> }

          { matchState.loading && <HeadToHeadShimmer /> }
        </>
      }
    </>
  )
}

export default TeamDetail;