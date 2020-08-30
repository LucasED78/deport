import React from 'react';
import Shimmer from '../../Shimmer/Shimmer';
import Card from '../../Card/Card';
import Flex from '../../Flex/Flex';

const HeadToHeadShimmer = () => {
  return (
    <Card width="430px">
      <Flex 
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        >
        <Shimmer 
          width="150px"
          height="150px"
          radius="100%"
        />

        <Shimmer 
          width="20px"
          height="20px"
          radius="100%"
        />

        <Shimmer 
          width="150px"
          height="150px"
          radius="100%"
        />
      </Flex>
    </Card>
  )
}

export default HeadToHeadShimmer;