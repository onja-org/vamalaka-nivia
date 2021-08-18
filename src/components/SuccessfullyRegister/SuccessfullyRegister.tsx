import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mediaQueries } from '../../globalStyles/mediaQuery'
import { HeaderStyle } from '../../redux/Style'
import {
  HeaderContent,
  RegistrationFormHeading,
  RegistrationOnboardingContent,
} from '../RegistrationOnboard/RegistrationOnboardStyle'
import StepCounter from '../StepCounter/StepCounter'

const SuccessfullyRegistered = () => {
  return (
    <RegistrationOnboardingContent>
      <HeaderStyle>
        <HeaderContent>
          <StepCounter stepNum='03' />
        </HeaderContent>
      </HeaderStyle>
      <RegistrationSuccessfullyContent>
        <RegistrationFormHeading>
          Registration succesfull!
        </RegistrationFormHeading>
        <LonginLink to={`/login`}>Go to login page</LonginLink>
      </RegistrationSuccessfullyContent>
    </RegistrationOnboardingContent>
  )
}

export default SuccessfullyRegistered

const RegistrationSuccessfullyContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 110px;

  ${mediaQueries('lg', null)`
    padding-top: 50px;
    padding-left: 80px;
  `}
`

export const LonginLink = styled(Link)`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-decoration-line: underline;
  color: #979797;
`
