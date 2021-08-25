import React from 'react'
import { FC } from 'react'
import styled, { css } from 'styled-components'
import { mediaQueries } from '../../globalStyles/mediaQuery'
import Button from '../Button/Button'
import BannerImage from './banner.png'

export interface LearnMoreBannerProps {
  heading: string
  description: {
    firstDescription: string
    secondDescription: string
  }
  primaryButtonText: string
  secondaryButtonText?: string
  onClickPrimaryButton: () => void
  onClickSecondaryButton?: () => void
}

const LearnMoreBanner: FC<LearnMoreBannerProps> = ({
  heading,
  description,
  primaryButtonText,
  secondaryButtonText,
  onClickPrimaryButton,
  onClickSecondaryButton,
}) => {
  return (
    <LearnMoreBannerContainer>
      <LearnMoreBannerContent>
        <LearnMoreBannerHeading>{heading}</LearnMoreBannerHeading>
        <LearnMoreBannerDescription>
          <p>{description.firstDescription}</p>
          <p>{description.secondDescription}</p>
        </LearnMoreBannerDescription>
        <ButtonContainer>
          <Button
            isPrimary={true}
            label={primaryButtonText}
            onClick={onClickPrimaryButton}
          />
          {secondaryButtonText && (
            <Button
              label={secondaryButtonText}
              onClick={onClickSecondaryButton}
            />
          )}
        </ButtonContainer>
      </LearnMoreBannerContent>
      <div>
        <LearnMoreBannerImage src={BannerImage} alt='Platform banner' />
      </div>
    </LearnMoreBannerContainer>
  )
}

export default LearnMoreBanner

const FlexBox = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const LearnMoreBannerContainer = styled.section`
  ${FlexBox}
  flex-direction: column-reverse;
  gap: 18px;
  padding: 0;
  max-width: 90%;
  margin: auto;
  color: #041d42;
  text-align: left;

  ${mediaQueries('lg', null)`
    padding: 10px;
    max-width: 1257px;
    flex-direction: row;
    gap: 25px;
  `}
`

const LearnMoreBannerHeading = styled.h1`
  font-family: 'Futura Std', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 30px;
  margin: 0;
  padding: 0;

  ${mediaQueries('lg', null)`
    font-size: 50px;
    line-height: 60px;
  `}
`
const LearnMoreBannerContent = styled.div`
  ${FlexBox}
  gap: 6px;

  ${mediaQueries('lg', null)`
    gap: 25px;
    max-width: 50%;
  `}
`
const LearnMoreBannerDescription = styled.div`
  font-family: 'Garamond', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 22px;

  ${mediaQueries('lg', null)`
    margin-bottom: 10px;
    font-size: 35px;
    line-height: 39px;
  `}
  p {
    margin: 0;
    padding: 0;
  }
`

const LearnMoreBannerImage = styled.img`
  max-width: 100%;
`

const ButtonContainer = styled.div`
  display: none;

  ${mediaQueries('lg', null)`
    display: flex;
    gap: 15px;
  `}
`
