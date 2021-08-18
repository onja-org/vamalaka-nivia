import React, { useState } from 'react'
import { RoleSelectOnboard } from '../components/RoleSelectionOnboard/RoleSelectionOnBoard'
import { OnboardingRegistration } from './OnboardingRegistration'

import {
  TopContainerStyles,
  HeaderContainer,
  FooterContainer,
  Container,
  MainContainer,
  ImageContainer,
} from '../components/RoleSelectionOnboard/RoleSelectionOnBoardiStyle'
import { Header } from '../components/Header'
import { LeftSide } from '../components/LeftSide/LeftSide'
import { PageFooter } from '../components/PageFooter/PageFooter'
import { loggeOut } from '../components/HeaderNavLink/HeaderNavLink'
import footerLinks from '../utils/FooterLinks'
import { useSelector } from 'react-redux'
import { userSelector } from '../redux/slices/userSlice'
import SuccessfullyRegistered from '../components/SuccessfullyRegister/SuccessfullyRegister'

export default function OnboardingPage() {
  const [roleSelected, setRoleSelected] = useState('')
  const user = useSelector(userSelector)

  return (
    <Container>
      <TopContainerStyles>
        <HeaderContainer>
          <Header item={loggeOut} />
        </HeaderContainer>
        <MainContainer>
          <ImageContainer>
            <LeftSide backgroundImage='Baobab' />
          </ImageContainer>
          {roleSelected === '' ? (
            <RoleSelectOnboard setRoleSelected={setRoleSelected} />
          ) : user.username ? (
            <SuccessfullyRegistered />
          ) : (
            <OnboardingRegistration role={roleSelected} />
          )}
        </MainContainer>
      </TopContainerStyles>
      <FooterContainer>
        <PageFooter footerLinks={footerLinks} />
      </FooterContainer>
    </Container>
  )
}
