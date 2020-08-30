import React, { MouseEvent } from 'react';

export type LogoProps = {
  imageUrl: string;
  width?: string;
  alt?: string;
  onImageClick?: ((event: MouseEvent<HTMLImageElement>) => void)
}

const Image = (props: LogoProps) => {
  return (
    <img 
      onClick={props.onImageClick}
      style={{ width: props.width }}
      src={props.imageUrl} 
      alt={props.alt} />
  )
}

export default Image;