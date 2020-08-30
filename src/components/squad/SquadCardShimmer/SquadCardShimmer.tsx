import React from 'react';
import Flex from '../../shared/Flex/Flex';
import Shimmer from '../../shared/Shimmer/Shimmer';
import Card from '../../shared/Card/Card';
import Spacer from '../../shared/Spacer/Spacer';

const SquadCardShimmer = () => {
  return (
    <Card width="430px" >
      <Flex 
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="stretch">

        <Flex 
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="stretch">
          <Shimmer 
            width="100px"
            height="100px"/>

          <Spacer marginHorizontal="5px" />

          <Flex 
            flexDirection="column"
            justifyContent="space-between">
            <Shimmer 
              width="100%"
              height="20px" />

            <Shimmer 
              width="100px"
              height="20px"/>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  )
}

export default SquadCardShimmer;