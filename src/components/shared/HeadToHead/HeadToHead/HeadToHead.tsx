import React, { MouseEvent } from 'react';

import { 
  Headline3, 
  Headline2
} from '../../Headline/Headline';
import Card from '../../Card/Card';
import Flex from '../../Flex/Flex';
import Logo from '../../Logo/Logo';

export type HeadToHeadProps = {
  homeLogo: string;
  awayLogo: string;
  score: string;
  onHomeTeamClicked?: ((event: MouseEvent<HTMLImageElement>) => void)
  onAwayTeamClicked?: ((event: MouseEvent<HTMLImageElement>) => void)
}

const HeadToHead = (props: HeadToHeadProps) => {
  return (
    <Card width="430px">
      <Headline3 
        title="LAST MATCH"
        margin="0px 0px 10px 0" />

      <Flex
        flexDirection="row"
        alignItems="center" 
        justifyContent="space-between">
        <Logo
          width="150px" 
          imageUrl={props.homeLogo}
          onImageClick={props.onHomeTeamClicked} />

        <Headline2 
          title={props.score.toString()}
          fontWeight="bold" />

        <Logo
          width="150px" 
          imageUrl={props.awayLogo}
          onImageClick={props.onAwayTeamClicked} />
      </Flex>
    </Card>
  )
}

export default HeadToHead;