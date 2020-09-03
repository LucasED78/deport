import React, { MouseEvent } from 'react';
import Flex from '../Flex/Flex';
import Button from '../Button/Button';
import { Headline3 } from '../Headline/Headline';
import Image from '../Image/Image';
import svg from '../../../images/error.svg'
import Spacer from '../Spacer/Spacer';

export type ErrorScreenProps = {
  onTryAgain: ((event: MouseEvent<HTMLButtonElement>) => void)
}

const ErrorScreen = (props: ErrorScreenProps) => {
  return (
    <Flex 
      flexDirection="column"
      alignItems="center"
      justifyContent="center">

      <Headline3 
        title="It looks like we have some error when trying to load the content :/"
        margin="20px 0"
        fontWeight="lighter"/>

      <Image 
        width="40%"
        imageUrl={svg} />

      <Spacer 
        marginVertical="20px"/>

      <Button 
        onClick={props.onTryAgain}
        modifier="button--danger">
        Try Again
      </Button>

    </Flex>
  )
}

export default ErrorScreen;