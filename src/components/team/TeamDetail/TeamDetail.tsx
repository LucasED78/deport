import React from 'react';
import { useMediaQuery } from 'react-responsive';

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
import TeamDetailShimmer from '../TeamDetailShimmer/TeamDetailShimmer';
import { PlayerState } from '../../../stores/player/types';
import SquadCard from '../../squad/SquadCard/SquadCard';
import Flex from '../../shared/Flex/Flex';
import { 
  LeagueState, 
} from '../../../stores/league/types';
import LeagueTable from '../../shared/LeagueTable/LeagueTable/LeagueTable';

export type TeamDetailProps = {
  teamState: TeamState,
  matchState: MatchState,
  playerState: PlayerState,
  leagueState: LeagueState
}

const TeamDetail = (props: TeamDetailProps) => {
  const { playerState, teamState, matchState, leagueState } = props
  const teamDetail = teamState.teamDetail as Team;
  const match = matchState.match;
  const league = leagueState.league;

  const isMediumScreen = useMediaQuery({ maxWidth: '900px' });

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

          <Flex 
            width="100%"
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="flex-start">
              
            <Flex 
              width={ isMediumScreen ? '100%' : '50%' }
              flexDirection="column"
              justifyContent="flex-start"
              alignItems={isMediumScreen ? 'center' : 'flex-start'}>

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

              { isMediumScreen ? <Spacer marginVertical="16px" /> : null }
            </Flex>

            <Flex
              width={isMediumScreen ? '100%' : '50%'}
              alignItems="center">
              <LeagueTable 
                league={league}
                loading={leagueState.loading} />
            </Flex>
          </Flex>
        </>
      }
    </>
  )
}

export default TeamDetail;