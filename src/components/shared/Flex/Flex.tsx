import React, { ReactNode } from 'react';

import styles from './Flex.module.scss';

export type FlexProps = {
  children: ReactNode;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: 'row' | 'column';
}

const Flex = (props: FlexProps) => {
  return (
    <div 
    className={styles.flex}
    style={{ alignItems: props.alignItems, justifyContent: props.justifyContent, flexDirection: props.flexDirection }}>
      { props.children }
    </div>
  )
}

export default Flex;