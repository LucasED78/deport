import React from 'react';

import styles from './TeamCard.module.scss'
import Card from '../../shared/Card/Card';
import Spacer from '../../shared/Spacer/Spacer';

type TeamCardProps = {
  logo: string;
  name: string;
  onCardClicked?: (() => void);
}

const TeamCard = (props: TeamCardProps) => {
  return (
    <Card onCardClicked={props.onCardClicked}>
      <div className={styles.team__card}>
        <img
          alt="this is a team logo"
          className={styles['team__card-image']} 
          src={props.logo} />

        <Spacer marginVertical="10" />

        <p className={styles['team__card-name']}>
          { props.name }
        </p>
      </div>
    </Card>
  )
}

export default TeamCard;