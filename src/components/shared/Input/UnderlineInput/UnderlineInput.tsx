import React, { ChangeEvent, KeyboardEvent } from 'react';

import styles from './UnderlineInput.module.scss';

export type UnderlineInputProps = {
  name?: string;
  value?: string;
  width?: string | number;
  onChange?: ((event: ChangeEvent<HTMLInputElement>) => void);
  onKeyDown?: ((event: KeyboardEvent<HTMLInputElement>) => void);
}

const UnderlineInput = (props: UnderlineInputProps) => {
  return (
    <input
      style={{ width: props.width }}
      className={[styles.input, styles['input--underline']].join(' ')}
      type="text"
      value={props.value}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
    />
  )
}

export default UnderlineInput;