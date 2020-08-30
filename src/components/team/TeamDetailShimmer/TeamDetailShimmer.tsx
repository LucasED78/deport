import React from 'react';
import Container from '../../shared/Container/Container';
import Flex from '../../shared/Flex/Flex';
import Shimmer from '../../shared/Shimmer/Shimmer';

const TeamDetailShimmer = () => {
  return (
    <Container alignItems="flex-start">
      <Flex flexDirection="row">
        <Flex flexDirection="column">
          <Shimmer 
            width="430px"
            height="169px"
            radius="16px"/>

          <Shimmer 
            width="430px"
            height="169px"
            radius="16px"/>

          <Shimmer 
            width="430px"
            height="169px"
            radius="16px"/>

          <Shimmer 
            width="430px"
            height="169px"
            radius="16px"/>
        </Flex>
      </Flex>
    </Container>
  )
}

export default TeamDetailShimmer;