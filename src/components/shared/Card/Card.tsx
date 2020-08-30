import React, { ReactNode } from 'react';

import styles from './Card.module.scss';

export type CardProps = {
  children: ReactNode;
  width?: number | string;
  onCardClicked? : (() => void);
}

const Card = (props: CardProps) => {
  return (
    <div
      style={{ width: props.width }}
      onClick={props.onCardClicked} 
      className={styles.card}>
      { props.children }
    </div>
  )
}

export default Card;