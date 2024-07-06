import React from 'react'
import styled from '@emotion/styled'

type ImageWrapperProps = React.HTMLAttributes<HTMLDivElement>

const ImageWrapper = styled('div')<ImageWrapperProps>({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '180px',
  maxHeight: '180px',
  overflow: 'hidden',
  borderTopLeftRadius: '2px',
  borderTopRightRadius: '2px',
})

type ImageProps = {
  /**
   * Applies a path to the base image's src attribute.
   */
  src: string
  /**
   * Applies text to the base image's alt attribute.
   */
  alt: string
} & React.HTMLAttributes<HTMLImageElement>

const Image = styled('img')<ImageProps>({
  width: '100%',
  height: 'auto',
})

type CardImageProps = ImageProps

export default function CardImage({ src, alt, ...otherProps }: CardImageProps) {
  return (
    <ImageWrapper {...otherProps}>
      <Image src={src} alt={alt} />
    </ImageWrapper>
  )
}
