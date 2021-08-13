import React from 'react'
import styled from 'styled-components'
import { mediaQueries } from '../../globalStyles/mediaQuery'
import { fonts } from '../../globalStyles/fonts'

export interface SellerInfoProperties {
  image: string
  name: string
  location: {
    country: string
    city: string
  }
}

export const SellerPreviewInfo: React.FC<SellerInfoProperties> = ({
  image,
  name,
  location,
}) => {
  return (
    <Container>
      <Image src={image} alt={`${name}'s profile picture`} />
      <Description>
        {name} | {location.city} | {location.country}
      </Description>
    </Container>
  )
}

const Container = styled('div')`
  display: flex;
  flext-direction: row;
  gap: 5px;
  align-items: center;
`
const Image = styled('img')`
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  border-radius: 20px;

  ${mediaQueries('sm', null)`
    width: 31px;
    height: 31px;
  `}
`
const Description = styled('span')`
  ${fonts}
  font-family: 'Futura Std', Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  color: #979797;
  ${mediaQueries('sm', null)`
    font-size: 12px;
    line-height: 14px;
  `}
`
