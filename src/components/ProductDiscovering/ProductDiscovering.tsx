import React from 'react'
import { FC } from 'react'
import styled from 'styled-components'
import { mediaQueries } from '../../globalStyles/mediaQuery'
import Button from '../Button/Button'
import { fonts } from '../../globalStyles/fonts'

export interface ProductDiscoveringProps {
  heading: string
  subHeading: string
  primaryButtonText: string
  secondaryButton: string
  onClickPrimary: () => void
  onClickSecondary: () => void
}

const ProductDiscovering: FC<ProductDiscoveringProps> = ({
  heading,
  subHeading,
  primaryButtonText,
  secondaryButton,
  onClickPrimary,
  onClickSecondary,
}) => {
  return (
    <DiscoverContainer>
      <DiscoverHeader>
        <DiscoverHeading>{heading}</DiscoverHeading>
        <DiscoverSubHeading>{subHeading}</DiscoverSubHeading>
      </DiscoverHeader>
      <DiscoverButtonContainer> 
        <DiscoverButtonContainerInner>
          <Button
            isPrimary={true}
            label={primaryButtonText}
            onClick={onClickPrimary}
          />
        </DiscoverButtonContainerInner>
        <DiscoverButtonContainerInner>
          <Button
            isPrimary={false}
            label={secondaryButton}
            onClick={onClickSecondary}
          />
        </DiscoverButtonContainerInner>
      </DiscoverButtonContainer>
    </DiscoverContainer>
  )
}

export default ProductDiscovering

const DiscoverContainer = styled.div`
  ${fonts}
  max-width: 1167px;
  margin: 11px;
  position: relative;
  bottom: -233px;
  text-align: center;
  background-color: #ffffff;
  padding-block-start: 29px;
  padding-block-end: 33px;

  ${mediaQueries('md', null)`
    max-width: 823px;
    margin: auto;
    padding-block-start: 63px;
    padding-block-end: 74px;
    padding-inline-start: 175px;
    padding-inline-end: 140px;
  `}
`
const DiscoverHeader = styled.header`
  color: #041d42;
`
const DiscoverHeading = styled.h2`
  font-family: 'Garamond',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #979797;
  line-height: 22px;
  
  ${mediaQueries('md', null)`
    font-size: 30px;
    line-height: 34px;
  `}
`
const DiscoverSubHeading = styled.h3`
  font-family: 'Futura Std', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  color: #041d42;
  margin-block-end: 0;
  margin-block-start: 0;
  padding-block-end: 32px;
  padding-block-start: 14px;

  ${mediaQueries('md', null)`
    font-size: 50px;
    line-height: 60px;
    padding-block-end: 39px;
    padding-block-start: 24px;
  `}
`
const DiscoverButtonContainer = styled.div`
  ${mediaQueries('md', null)`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `}
`
const DiscoverButtonContainerInner = styled.div`
  margin-block-end: 21px;
  ${mediaQueries('md', null)`
    display: flex;
    text-align: center;
  `}
`
