import React from 'react';
import Shimmer from '../../shared/Shimmer/Shimmer';
import Flex from '../../shared/Flex/Flex';
import Spacer from '../../shared/Spacer/Spacer';

const TeamCardListShimmer = () => {
  return (
    <Spacer marginVertical="40px">
      <Flex justifyContent="flex-start">
        {
          [...Array(10)].map((_, index) => {
            return (
              <Spacer 
                key={index}
                marginHorizontal="10"
                marginVertical="10">
                  <Shimmer 
                    width={150}
                    height={182}
                    radius={16}>
                  </Shimmer>
              </Spacer>
            )
          })
        }
      </Flex>
    </Spacer>
  )
}

export default TeamCardListShimmer;