import React, { ReactNode, MouseEvent } from 'react';
import styles from './Button.module.scss';
import '../../../utils/array';

export type ButtonProps = {
  children: ReactNode;
  modifier?: 'button--bordered' | 'button--danger' | 'button--success';
  onClick?: ((event: MouseEvent<HTMLButtonElement>) => void)
}

const Button = (props: ButtonProps) => {
  return (
    <button 
      className={[styles.button, styles[props.modifier ?? '']].classify()}
      onClick={props.onClick}>
      { props.children }
    </button>
  )
}

export default Button;