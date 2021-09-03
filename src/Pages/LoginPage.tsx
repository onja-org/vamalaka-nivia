import React from 'react'
import { useSelector } from 'react-redux'
import { userSelector } from '../redux/slices/userSlice'
import {
  fetchLogin,
  userErrorSelector,
  userStatusSelector,
} from '../redux/slices/userSlice'
import { useAppDispatch } from '../redux/hooks'
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
import GoogleIcon from '../assests/google.svg'
import {
  LoginForm,
  LoginFormContent,
  LoginButtonContainer,
  LoginFormHeading,
  LoginOnboardingContent,
  HeaderStyle,
  HeaderContent,
} from '../components/LoginOnboard/LoginOnboardStyle'
import { Login } from '../components/Login/Login'
import { useState } from 'react'
import { useCallback } from 'react'
import { history } from '../redux/store'
import { useEffect } from 'react'
import { FETCH_STATUS, ICON_SIZE } from '../constants'
import { PendingIndicator } from '../components/PendingIndicator/PendingIndicator'

export type LoginPageProps = {
  backLink: string
  accountLogin: {
    username: string
    password: string
  }
  errorMessage?: {
    email: string
    password: string
  }
  onClickLogin: () => void
  onSubmit: () => void
}
const ButtonIcon = <img src={GoogleIcon} alt='google-icon'></img>

export const LoginPage: React.FC<LoginPageProps> = () => {
  const [accountLogin, setAccountLogin] = useState({
    username: '',
    password: '',
  })
  const user = useSelector(userSelector)
  const dispatch = useAppDispatch()
  const userError = useSelector(userErrorSelector)
  const userStatus = useSelector(userStatusSelector)

  const loginUserName = (e: { target: { value: string } }) => {
    setAccountLogin({
      ...accountLogin,
      username: e.target.value,
    })
  }
  const enterPassword = (e: { target: { value: string } }) => {
    setAccountLogin({
      ...accountLogin,
      password: e.target.value,
    })
  }

  const { username, password } = accountLogin
  const handleLogin = useCallback(
    (e) => {
      e.preventDefault()
      dispatch(
        fetchLogin({
          username,
          password,
        })
      )
    },
    [username, password, dispatch]
  )

  const usernameErrorMessage =
    userError?.message?.toString()?.indexOf('CODE:EU12') > -1
      ? 'User name is invalid'
      : ''
  const passwordErrorMessage =
    userError?.message?.toString()?.indexOf('CODE:EU13') > -1
      ? 'Wrong password'
      : ''
  const errorMessage = {
    username: usernameErrorMessage,
    password: passwordErrorMessage,
  }

  useEffect(() => {
    if (user?.token && user?.token !== '') {
      return history.push('/')
    }
  }, [username, user])

  return (
    <Container>
      <TopContainerStyles>
        <HeaderContainer>
          <Header item={loggeOut} />
        </HeaderContainer>
        <MainContainer>
          <ImageContainer>
            <LeftSide backgroundImage='Farmer' />
          </ImageContainer>
          <LoginOnboardingContent>
            <HeaderStyle>
              <Back href='/' label='Back' />
              <HeaderContent>
                <Login isSignedUp={false} href='./registered' />
              </HeaderContent>
            </HeaderStyle>
            <LoginForm onSubmit={handleLogin}>
              <LoginFormHeading>Login</LoginFormHeading>
              <LoginFormContent>
                <Input
                  label='Username'
                  placeholder='Enter email address'
                  inputType=''
                  inputId='username'
                  inputValue={accountLogin?.username}
                  onChange={loginUserName}
                  errorMessage={errorMessage?.username}
                />
                <Input
                  label='Password'
                  placeholder='Enter a password'
                  inputType='password'
                  inputId='password'
                  inputValue={accountLogin?.password}
                  onChange={enterPassword}
                  errorMessage={errorMessage?.password}
                />
              </LoginFormContent>
              <LoginButtonContainer>
                <Button
                  isPrimary={true}
                  label='Login'
                  type='submit'
                  buttonIcon={
                    userStatus === FETCH_STATUS.LOADING ? (
                      <PendingIndicator size={ICON_SIZE.EXTRA_SMALL_ICON} />
                    ) : undefined
                  }
                />
                <Button
                  type='button'
                  label='Login with Google'
                  buttonIcon={ButtonIcon}
                />
              </LoginButtonContainer>
            </LoginForm>
          </LoginOnboardingContent>
        </MainContainer>
      </TopContainerStyles>
      <FooterContainer>
        <PageFooter footerLinks={footerLinks} />
      </FooterContainer>
    </Container>
  )
}
