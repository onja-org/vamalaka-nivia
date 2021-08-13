import React from 'react'
import {
  TopContainerStyles,
  HeaderContainer,
  FooterContainer,
  Container,
  MainContainer,
  ImageContainer,
} from '../components/RoleSelectionOnboard/RoleSelectionOnBoardiStyle'
import Button from '../components/Button/Button'
import Input from '../components/Input/Input'
import { LeftSide } from '../components/LeftSide/LeftSide'
import { Back } from '../components/Back/Back'
import { Header } from '../components/Header'
import { loggeOut } from '../components/HeaderNavLink/HeaderNavLink'
import { PageFooter } from '../components/PageFooter/PageFooter'
import footerLinks from '../utils/FooterLinks'
import {
  RegistrationForm,
  RegistrationFormContent,
  RegistrationButtonContainer,
  RegistrationFormHeading,
  RegistrationOnboardingContainer,
  RegistrationOnboardingContent,
  HeaderStyle,
  HeaderContent,
  HeaderPage,
  HeaderInfo,
} from '../components/RegistrationOnboard/RegistrationOnboardStyle'
import { LoginWrapper } from '../components/LoginOnboard/LoginOnboardStyle'
import { TermsAndConditions } from '../components/TermsAndConditions/TermsAndConditions'
import { ButtonIcon } from '../components/RegistrationOnboard/RegistrationOnboard'

export type LoginPageProps = {
  backLink: string
  backLabel: string
  termsAndConditionLink: '/'
  accountLogin: {
    emailAddress: string
    password: string
  }
  isChecked?: boolean
  errorMessage?: {
    email: string
    password: string
  }
  onChangeEmail: React.ChangeEventHandler<HTMLInputElement> | undefined
  onChangePassword: React.ChangeEventHandler<HTMLInputElement> | undefined
  onChangeCheckbox?: React.ChangeEventHandler<HTMLInputElement> | undefined
  onClickLogin: () => void
  onSubmit: () => void
}

export const LoginPage: React.FC<LoginPageProps> = ({
  accountLogin,
  errorMessage,
  backLink,
  backLabel,
  termsAndConditionLink,
  isChecked,
  onChangeEmail,
  onChangePassword,
  onClickLogin,
  onSubmit,
  onChangeCheckbox,
}) => {
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
          <RegistrationOnboardingContainer>
            <RegistrationOnboardingContent>
              <HeaderStyle>
                <Back href={backLink} label={backLabel} />
                <HeaderContent>
                  <HeaderPage>STEP 01/02</HeaderPage>
                  <HeaderInfo>Personal Info.</HeaderInfo>
                </HeaderContent>
              </HeaderStyle>
              <RegistrationForm onSubmit={onSubmit}>
                <LoginWrapper>
                  <RegistrationFormHeading>
                    Log in your account
                  </RegistrationFormHeading>
                  <RegistrationFormContent>
                    <Input
                      label='Email address'
                      placeholder='Enter email address'
                      inputType='email'
                      inputId='emailAddress'
                      inputValue={accountLogin?.emailAddress}
                      onChange={onChangeEmail}
                      errorMessage={errorMessage?.email}
                    />
                    <Input
                      label='Create password'
                      placeholder='Enter a password'
                      inputType='password'
                      inputId='password'
                      inputValue={accountLogin.password}
                      onChange={onChangePassword}
                      errorMessage={errorMessage?.password}
                    />
                  </RegistrationFormContent>
                  <TermsAndConditions
                    termsLabel='I agree to the'
                    serviceTerms='terms & conditions'
                    href={termsAndConditionLink}
                    isChecked={isChecked}
                    onChange={onChangeCheckbox}
                  />
                </LoginWrapper>
                <RegistrationButtonContainer>
                  <Button
                    isPrimary={true}
                    label='Login Account'
                    onClick={onClickLogin}
                    type='submit'
                  />

                  <Button
                    type='button'
                    label='Login with Google'
                    buttonIcon={ButtonIcon}
                  />
                </RegistrationButtonContainer>
              </RegistrationForm>
            </RegistrationOnboardingContent>
          </RegistrationOnboardingContainer>
        </MainContainer>
      </TopContainerStyles>
      <FooterContainer>
        <PageFooter footerLinks={footerLinks} />
      </FooterContainer>
    </Container>
  )
}
