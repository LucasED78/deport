import React, { ReactNode } from 'react';

import styles from './Shimmer.module.scss';

export type ShimmerProps = {
  children: ReactNode
  width?: number
  height?: number
  radius?: number
  disabled?: boolean
}

const Shimmer = (props: ShimmerProps) => {
  const getClasses = () => {
    return [
      styles.shimmer,
      props.disabled ? styles['shimmer--disabled'] : '',
    ].join(' ')
  }

  return (
    <div
    className={getClasses()}
    style={{ width: props.width, height: props.height, borderRadius: props.radius}}>
    </div>
  )
}

export default Shimmer;