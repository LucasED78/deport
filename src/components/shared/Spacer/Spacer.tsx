import React, { ReactNode } from 'react';

import styles from './Spacer.module.scss';

type SpacerProps = {
  children?: ReactNode
  marginVertical?: number | string;
  marginHorizontal?: number | string;
}

const Spacer = (props: SpacerProps) => {  
  return (
    <div
      className={styles.spacer}
      style={{ margin: `${props.marginVertical ?? 0} ${props.marginHorizontal ?? 0}` }}
    >{ props.children }</div>
  )
}

export default Spacer;