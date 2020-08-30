import React, { ReactNode } from 'react';

import styles from './Container.module.scss';

export type ContainerProps = {
  children: ReactNode;
  alignItems?: string;
}

const Container = (props: ContainerProps) => {
  return (
    <main
      style={{ alignItems: props.alignItems }} 
      className={styles.container}>
      { props.children }
    </main>
  )
}

export default Container;