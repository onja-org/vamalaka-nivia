import React from 'react'
import { Story, Meta } from '@storybook/react'
import {
  RegistrationOnboard,
  RegistrationOnboardingProps,
} from './RegistrationOnboard'

export default {
  title: 'Components/RegistrationOnboard',
  component: RegistrationOnboard,
} as Meta

const RegistrationOnboarding: Story<RegistrationOnboardingProps> = (args) => (
  <RegistrationOnboard {...args} />
)

export const EmptyForm = RegistrationOnboarding.bind({})
EmptyForm.args = {
  backLabel: 'Back',
  accountRegistration: {
    username: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
  },
  termsAndConditionLink: '/',
  onChangeUserName: () => null,
  onChangeEmail: () => null,
  onChangePassword: () => null,
  onClickRegister: () => null,
  onSubmit: () => null,
}

export const ValidForm = RegistrationOnboarding.bind({})
ValidForm.args = {
  backLabel: 'Back',
  accountRegistration: {
    username: 'Name',
    emailAddress: 'name@gmail.com',
    password: 'aajdha',
    confirmPassword: 'aajdha',
  },
  termsAndConditionLink: '/',
  isChecked: true,
  onChangeCheckbox: () => null,
  onChangeUserName: () => null,
  onChangeEmail: () => null,
  onChangePassword: () => null,
  onClickRegister: () => null,
  onSubmit: () => null,
}

export const inValidForm = RegistrationOnboarding.bind({})
inValidForm.args = {
  backLabel: 'Back',
  accountRegistration: {
    username: 'Name',
    emailAddress: 'name@gmail',
    password: 'aajdha',
    confirmPassword: 'aajdha',
  },
  errorMessage: {
    username: 'Invalid username',
    email: 'Invalid email',
    password: 'Password must be at least 8 character',
    confirmPassword: 'Passwords must match',
  },
  termsAndConditionLink: '/',
  onChangeUserName: () => null,
  onChangeEmail: () => null,
  onChangePassword: () => null,
  onClickRegister: () => null,
  onSubmit: () => null,
}
