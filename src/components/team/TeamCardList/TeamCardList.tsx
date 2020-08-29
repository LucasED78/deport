import React from 'react';

import { Team } from '../../../stores/team/types';

import Flex from '../../shared/Flex/Flex';
import Spacer from '../../shared/Spacer/Spacer';
import TeamCard from '../TeamCard/TeamCard';

import '../../../utils/string';

type TeamCardClickedCallback = ((teamId: string) => void)

export type TeamCardListProps = {
  teams: Team[]
  onTeamCardClicked: TeamCardClickedCallback
}

const TeamCardList = 
  ({ teams, onTeamCardClicked }: { teams: Team[], onTeamCardClicked: TeamCardClickedCallback }) => {
  return (
    <Spacer marginVertical="40px">
      <Flex justifyContent="center">
        {
          teams.map(team => {
            return (
              <Spacer 
                key={team.id}
                marginHorizontal="10px"
                marginVertical="10px">
                <TeamCard
                  onCardClicked={() => onTeamCardClicked(team.id)}
                  logo={team.badge}
                  name={team.name.limit(9)}
                />
              </Spacer>
            )
          })
        }
      </Flex>
    </Spacer>
  )
}

export default TeamCardList;