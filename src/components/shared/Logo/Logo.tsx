import React, { MouseEvent } from 'react';

export type LogoProps = {
  imageUrl: string;
  width?: string;
  onImageClick?: ((event: MouseEvent<HTMLImageElement>) => void)
}

const Logo = (props: LogoProps) => {
  return (
    <img 
      onClick={props.onImageClick}
      style={{ width: props.width }}
      src={props.imageUrl} 
      alt="this is the team logo" />
  )
}

export default Logo;