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
  RegistrationOnboardingContent,
  HeaderStyle,
  HeaderContent,
} from '../components/RegistrationOnboard/RegistrationOnboardStyle'
import { TermsAndConditions } from '../components/TermsAndConditions/TermsAndConditions'
import { ButtonIcon } from '../components/RegistrationOnboard/RegistrationOnboard'
import { Login } from '../components/Login/Login'

export type LoginPageProps = {
  backLink: string
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
          <RegistrationOnboardingContent>
            <HeaderStyle>
              <Back href={backLink} label='Back' />
              <HeaderContent>
                <Login isSignedUp={false} href='./registered' />
              </HeaderContent>
            </HeaderStyle>
            <RegistrationForm onSubmit={onSubmit}>
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
                  inputValue={accountLogin?.password}
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
        </MainContainer>
      </TopContainerStyles>
      <FooterContainer>
        <PageFooter footerLinks={footerLinks} />
      </FooterContainer>
    </Container>
  )
}
