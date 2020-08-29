import React, { ReactNode } from 'react';

import styles from './Container.module.scss';

export type ContainerProps = {
  children: ReactNode;
}

const Container = (props: ContainerProps) => {
  return (
    <main className={styles.container}>
      { props.children }
    </main>
  )
}

export default Container;