import React, { FC } from 'react'
import { useCallback } from 'react'
import { RegistrationOnboard } from '../components/RegistrationOnboard/RegistrationOnboard'
import { useSelector } from 'react-redux'
import {
  fetchRegisterUser,
  userErrorSelector,
  userStatusSelector,
} from '../redux/slices/userSlice'
import { useState } from 'react'
import { useAppDispatch } from '../redux/hooks'

interface OnboardingProp {
  role: string
}

// Change when the loading indicator component is done
const Loading = <span>Loading...</span>

export const OnboardingRegistration: FC<OnboardingProp> = ({ role }) => {
  const [accountRegistration, setAccountRegistration] = useState({
    username: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
  })
  const [isChecked, setIsChecked] = useState(false)

  const dispatch = useAppDispatch()
  const userError = useSelector(userErrorSelector)
  const userStatus = useSelector(userStatusSelector)

  const {
    username,
    password,
    emailAddress,
    confirmPassword,
  } = accountRegistration

  const handleRegister = useCallback(
    (e) => {
      e.preventDefault()
      dispatch(
        fetchRegisterUser({
          username,
          password,
          email: emailAddress,
          confirmPassword: confirmPassword,
          role: role.toLocaleLowerCase(),
        })
      )
    },
    [username, password, emailAddress, confirmPassword, role, dispatch]
  )

  const usernameErrorMessage =
    userError?.message?.toString()?.indexOf('CODE:EU2') > -1
      ? 'User name already exists'
      : ''
  const emailErrorMessage =
    userError?.message?.toString()?.indexOf('CODE:EU6') >= 0
      ? 'Email must be a valid email'
      : ''

  const passwordErrorMessage =
    userError?.message?.toString()?.indexOf('CODE:EU7') >= 0
      ? 'Password must be at least 8 characters long'
      : ''

  const confirmPasswordErrorMessage =
    userError?.message?.toString()?.indexOf('CODE:EU8') >= 0
      ? 'Passwords must match'
      : ''

  const errorMessages = {
    username: usernameErrorMessage,
    email: emailErrorMessage,
    password: passwordErrorMessage,
    confirmPassword: confirmPasswordErrorMessage,
  }

  return (
    <RegistrationOnboard
      backLabel='Back'
      accountRegistration={accountRegistration}
      termsAndConditionLink='/'
      isChecked={isChecked}
      onChangeCheckbox={() => setIsChecked(!isChecked)}
      onChangeUserName={({ target }) =>
        setAccountRegistration({
          ...accountRegistration,
          username: target.value,
        })
      }
      onChangeEmail={({ target }) =>
        setAccountRegistration({
          ...accountRegistration,
          emailAddress: target.value,
        })
      }
      onChangePassword={({ target }) =>
        setAccountRegistration({
          ...accountRegistration,
          password: target.value,
        })
      }
      onChangeConfirmPassword={({ target }) =>
        setAccountRegistration({
          ...accountRegistration,
          confirmPassword: target.value,
        })
      }
      onClickRegister={() => null}
      onSubmit={handleRegister}
      errorMessage={errorMessages}
      loadingButtonIcon={userStatus === 'loading' ? Loading : undefined}
    />
  )
}
