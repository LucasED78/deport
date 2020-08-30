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
import { PlayerState } from '../../../stores/player/types';
import SquadCard from '../../squad/SquadCard/SquadCard';
import SquadCardShimmer from '../../squad/SquadCardShimmer/SquadCardShimmer';

export type TeamDetailProps = {
  teamState: TeamState,
  matchState: MatchState,
  playerState: PlayerState
}

const TeamDetail = (props: TeamDetailProps) => {
  const { playerState, teamState, matchState } = props

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

          <HeadToHead 
            homeLogo={match?.homeTeamLogo ?? teamDetail.badge}
            awayLogo={match?.awayTeamLogo ?? teamDetail.badge}
            score={`${match?.homeScore}x${match?.awayScore}`}
            loading={matchState.loading}
            /*onHomeTeamClicked={() => history.replace(`/${match.homeTeamId ?? teamId}`)}
            onAwayTeamClicked={() => history.replace(`/${match.awayTeamId ?? teamId}`)}*/ />

          <Spacer marginVertical="18px" />

          <SquadCard 
            player={playerState.player}
            loading={playerState.loading} />
        </>
      }
    </>
  )
}

export default TeamDetail;