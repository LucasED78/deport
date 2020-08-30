import React, { MouseEvent } from 'react';

import { 
  Headline3, 
  Headline2
} from '../../Headline/Headline';
import Card from '../../Card/Card';
import Flex from '../../Flex/Flex';
import Image from '../../Image/Image';
import HeadToHeadShimmer from '../HeadToHeadShimmer/HeadToHeadShimmer';

export type HeadToHeadProps = {
  homeLogo: string;
  awayLogo: string;
  score: string;
  onHomeTeamClicked?: ((event: MouseEvent<HTMLImageElement>) => void);
  onAwayTeamClicked?: ((event: MouseEvent<HTMLImageElement>) => void);
  loading?: boolean;
}

const HeadToHead = (props: HeadToHeadProps) => {
  return (
    <>
      {
        (!props.loading && props.homeLogo) && <Card width="430px">
          <Headline3 
            title="LAST MATCH"
            margin="0px 0px 10px 0" />
    
          <Flex
            flexDirection="row"
            alignItems="center" 
            justifyContent="space-between">
            <Image
              width="150px" 
              alt="this is the team logo"
              imageUrl={props.homeLogo}
              onImageClick={props.onHomeTeamClicked} />
    
            <Headline2 
              title={props.score.toString()}
              fontWeight="bold" />
    
            <Image
              width="150px" 
              alt="this is the team logo"
              imageUrl={props.awayLogo}
              onImageClick={props.onAwayTeamClicked} />
          </Flex>
        </Card>
      }

      { props.loading && <HeadToHeadShimmer /> }
    </>
  )
}

export default HeadToHead;