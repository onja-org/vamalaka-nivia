import React from 'react'
import { Back } from '../Back/Back'
import Button from '../Button/Button'
import Input from '../Input/Input'
import { TermsAndConditions } from '../TermsAndConditions/TermsAndConditions'
import {
  HeaderStyle,
  HeaderContent,
  RegistrationOnboardingContent,
  RegistrationForm,
  RegistrationFormContent,
  RegistrationButtonContainer,
  RegistrationFormHeading,
} from './RegistrationOnboardStyle'
import StepCounter from '../StepCounter/StepCounter'

export type RegistrationOnboardingProps = {
  backLabel: string
  accountRegistration: {
    username: string
    emailAddress: string
    password: string
    confirmPassword: string
  }
  termsAndConditionLink: string
  isChecked?: boolean
  errorMessage?: {
    username: string
    email: string
    password: string
    confirmPassword: string
  }
  onChangeUserName: React.ChangeEventHandler<HTMLInputElement> | undefined
  onChangeEmail: React.ChangeEventHandler<HTMLInputElement> | undefined
  onChangePassword: React.ChangeEventHandler<HTMLInputElement> | undefined
  onChangeCheckbox?: React.ChangeEventHandler<HTMLInputElement> | undefined
  onChangeConfirmPassword:
    | React.ChangeEventHandler<HTMLInputElement>
    | undefined
  onClickRegister: () => void
  onSubmit: (e: any) => void
  loadingButtonIcon?: JSX.Element | undefined
}

export const ButtonIcon = (
  <svg
    width='18'
    height='18'
    viewBox='0 0 18 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M16.3541 7.53113H15.75V7.5H9V10.5H13.2386C12.6203 12.2464 10.9586 13.5 9 13.5C6.51488 13.5 4.5 11.4851 4.5 9C4.5 6.51487 6.51488 4.5 9 4.5C10.1471 4.5 11.1908 4.93275 11.9854 5.63962L14.1068 3.51825C12.7673 2.26987 10.9755 1.5 9 1.5C4.85813 1.5 1.5 4.85812 1.5 9C1.5 13.1419 4.85813 16.5 9 16.5C13.1419 16.5 16.5 13.1419 16.5 9C16.5 8.49713 16.4483 8.00625 16.3541 7.53113Z'
      fill='#FFC107'
    />
    <path
      d='M2.36474 5.50913L4.82886 7.31625C5.49561 5.6655 7.11036 4.5 8.99999 4.5C10.1471 4.5 11.1907 4.93275 11.9854 5.63963L14.1067 3.51825C12.7672 2.26988 10.9755 1.5 8.99999 1.5C6.11924 1.5 3.62099 3.12638 2.36474 5.50913Z'
      fill='#FF3D00'
    />
    <path
      d='M8.99999 16.5C10.9372 16.5 12.6975 15.7586 14.0284 14.553L11.7071 12.5888C10.9288 13.1807 9.97779 13.5008 8.99999 13.5C7.04924 13.5 5.39287 12.2561 4.76887 10.5203L2.32312 12.4046C3.56437 14.8335 6.08512 16.5 8.99999 16.5Z'
      fill='#4CAF50'
    />
    <path
      d='M16.3541 7.53113H15.75V7.5H9V10.5H13.2386C12.9428 11.3312 12.41 12.0574 11.706 12.5891L11.7071 12.5884L14.0284 14.5526C13.8641 14.7019 16.5 12.75 16.5 9C16.5 8.49713 16.4482 8.00625 16.3541 7.53113Z'
      fill='#1976D2'
    />
  </svg>
)

export const RegistrationOnboard: React.FC<RegistrationOnboardingProps> = ({
  backLabel,
  accountRegistration,
  onChangeUserName,
  onChangeEmail,
  onChangePassword,
  termsAndConditionLink,
  isChecked,
  onClickRegister,
  onChangeConfirmPassword,
  onSubmit,
  onChangeCheckbox,
  errorMessage,
  loadingButtonIcon,
}) => {
  return (
    <RegistrationOnboardingContent>
      <HeaderStyle>
        <Back href='/registered' label={backLabel} />
        <HeaderContent>
          <StepCounter stepNum='02' />
        </HeaderContent>
      </HeaderStyle>
      <RegistrationForm onSubmit={onSubmit}>
        <RegistrationFormHeading>Register your account</RegistrationFormHeading>
        <RegistrationFormContent>
          <Input
            label='Your username'
            placeholder='Username'
            inputType='text'
            inputId='useName'
            inputValue={accountRegistration.username}
            onChange={onChangeUserName}
            errorMessage={errorMessage?.username}
          />
          <Input
            label='Email address'
            placeholder='Enter email address'
            inputType='email'
            inputId='emailAddress'
            inputValue={accountRegistration.emailAddress}
            onChange={onChangeEmail}
            errorMessage={errorMessage?.email}
          />
          <Input
            label='Create password'
            placeholder='Enter a password'
            inputType='password'
            inputId='password'
            inputValue={accountRegistration.password}
            onChange={onChangePassword}
            errorMessage={errorMessage?.password}
          />
          <Input
            label='Confirm password'
            placeholder='Confirm a password'
            inputType='password'
            inputId='confirmPassword'
            inputValue={accountRegistration.confirmPassword}
            onChange={onChangeConfirmPassword}
            errorMessage={errorMessage?.confirmPassword}
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
            label='Register Account'
            onClick={onClickRegister}
            type='submit'
            buttonIcon={loadingButtonIcon}
          />
          <Button
            type='button'
            label='Register with Google'
            buttonIcon={ButtonIcon}
          />
        </RegistrationButtonContainer>
      </RegistrationForm>
    </RegistrationOnboardingContent>
  )
}
