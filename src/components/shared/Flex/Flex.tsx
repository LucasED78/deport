import React, { ReactNode } from 'react';

import styles from './Flex.module.scss';

export type FlexProps = {
  children: ReactNode;
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'end' | 'space-between' | 'strech' | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'end' | 'stretch';
  flexDirection?: 'row' | 'column';
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
}

const Flex = (props: FlexProps) => {
  return (
    <div 
    className={styles.flex}
    style={{ 
      alignItems: props.alignItems, 
      justifyContent: props.justifyContent, 
      flexDirection: props.flexDirection,
      flexWrap: props.flexWrap
    }}>
      { props.children }
    </div>
  )
}

export default Flex;