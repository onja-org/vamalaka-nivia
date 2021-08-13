import React from 'react'
import styled from 'styled-components'
import { mediaQueries } from '../../globalStyles/mediaQuery'

export interface ImageProps {
  src: string
  alt: string
}

export const ImageWithinOffer: React.FC<ImageProps> = ({ src, alt }) => {
  return <Image src={src} alt={alt} />
}

const Image = styled.img`
  width: 100%;
  height: auto;
  ${mediaQueries('sm', null) `
    max-width: 322px;
  `}
`
