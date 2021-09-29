import React from 'react'
import styled, { css } from 'styled-components'
import { mediaQueries } from '../../globalStyles/mediaQuery'
import Button from '../Button/Button'

export interface OnwardPageProps {
  heading: string
  buttonText?: string
  isLeftSide: boolean
  description: {
    firstDescription: string
    secondDescription?: string
  }
  image: string
}

export const OnwardPage: React.FC<OnwardPageProps> = ({
  heading,
  description,
  buttonText,
  isLeftSide,
  image,
}) => {
  return (
    <OnwardContainer isLeftSide={isLeftSide}>
      <OnwardImage src={image} />
      <OnwardContent>
        <OnwardHeading>{heading}</OnwardHeading>
        <OnwardDescription isLeftSide={isLeftSide}>
          <p>{description.firstDescription}</p>
          <p>{description.secondDescription}</p>
        </OnwardDescription>
        <ButtonContainer>
          {buttonText && <Button label={buttonText} isPrimary={true} />}
        </ButtonContainer>
      </OnwardContent>
    </OnwardContainer>
  )
}

const OnwardImage = styled.img`
  width: 100%;
  max-width: 474px;
`
const FlexBox = css`
  display: flex;
  flex-direction: column;
`

const OnwardContainer = styled.section<{ isLeftSide: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.isLeftSide ? 'row' : 'row-reverse')};
  align-items: center;
  color: #041d42;
  justify-content: space-between;
  max-width: unset;
  
  ${mediaQueries(null, 'md')`
    flex-direction: column;
    align-items: left;
  `}

  ${mediaQueries('md', null)`
    padding-block-end: 150px;
    padding-block-start: 150px;
  `}
`
const OnwardContent = styled.div`
  ${FlexBox}
  text-align: start;
  gap: 23px;
  max-width: 678px;

  ${mediaQueries('md', null)`
    gap: 33px;
  `}
`
const OnwardHeading = styled.h2`
  font-family: 'Futura Std', sans-serif;
  font-size: 25px;
  line-height: 30px;
  font-style: normal;
  font-weight: normal;
  margin: 0;

  ${mediaQueries('md', null)`
    font-size: 50px;
    line-height: 60px;
  `}
`
const OnwardDescription = styled.div<{ isLeftSide: boolean }>`
  ${FlexBox}
  font-family: 'Garamond', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 22px;
  gap: ${({ isLeftSide }) => (isLeftSide ? 'unset' : '25px')};

  ${mediaQueries('md', null)`
    font-size: 35px;
    line-height: 39px;
  `}

  p {
    margin: 0;
  }
`

const ButtonContainer = styled.div`
  display: none;

  ${mediaQueries('md', null)`
   display: block;
  `}
`
