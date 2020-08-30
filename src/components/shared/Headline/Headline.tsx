import React from 'react';

import styles from './Headline.module.scss';
import '../../../utils/array';

export type TitleProps = {
  title: string;
  color?: string;
  fontWeight?: 'lighter' | 'bold' | 500;
  margin?: string;
}

export const Headline1 = (props: TitleProps) => {
  return (
    <h1
      style={{ color: props.color, fontWeight: props.fontWeight, margin: props.margin }} 
      className={[styles.title, styles['title--headline1']].classify()}>
      { props.title }
    </h1>
  )
}

export const Headline2 = (props: TitleProps) => {
  return (
    <h2
      style={{ color: props.color, fontWeight: props.fontWeight, margin: props.margin }} 
      className={[styles.title, styles['title--headline2']].classify()}>
      { props.title }
    </h2>
  )
}

export const Headline3 = (props: TitleProps) => {
  return (
    <h3 
      style={{ color: props.color, fontWeight: props.fontWeight, margin: props.margin }} 
      className={[styles.title, styles['title--headline3']].classify()}>
      { props.title }
    </h3>
  )
}

export const Headline4 = (props: TitleProps) => {
  return (
    <h4 
      style={{ color: props.color, fontWeight: props.fontWeight, margin: props.margin }} 
      className={[styles.title, styles['title--headline4']].classify()}>
      { props.title }
    </h4>
  )
}