import React from 'react';
import { Player } from '../../../stores/player/types';
import Card from '../../shared/Card/Card';
import Flex from '../../shared/Flex/Flex';
import { Headline3, Headline4 } from '../../shared/Headline/Headline';
import Image from '../../shared/Image/Image';
import Button from '../../shared/Button/Button';
import SquadCardShimmer from '../SquadCardShimmer/SquadCardShimmer';
import Spacer from '../../shared/Spacer/Spacer';

export type SquadCardProps = {
  player?: Player,
  loading?: boolean
}

const SquadCard = (props: SquadCardProps) => {
  return (
    <>
      {
        (!props.loading && props.player) && <Card width="430px">
          <Flex 
            flexDirection="column"
            alignItems="flex-start">
            <Headline3 
              title="SQUAD" 
              margin="0px 0px 10px 0" />

            <Flex 
              flexDirection="row"
              justifyContent="flex-start"
              alignItems="stretch"
              flexWrap="nowrap">
                {props.player.avatar && <>
                  <Image
                    width="100px"
                    alt="this is the most loved player image"
                    imageUrl={props.player.avatar ?? ''} />
  
                  <Spacer marginHorizontal="6px" />
                </>}


                <Flex 
                  flexDirection="column"
                  justifyContent="space-between"
                  alignItems="flex-start">
                  <Headline4 
                    title="Take a look at your team squad, some new awesome player can be signed any moment 😁"
                    margin="0"
                    fontWeight={500} />

                  <Spacer marginVertical="10px" />

                  <Button 
                    modifier="button--bordered">
                    see players
                  </Button>
                </Flex>
            </Flex>
          </Flex>
        </Card>
      }

      { props.loading && <SquadCardShimmer /> }
    </>
  )
}

export default SquadCard;