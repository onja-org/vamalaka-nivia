import React from 'react'
import { Story, Meta } from '@storybook/react'
import { LoginPage, LoginPageProps } from '../../Pages/LoginPage'

export default {
  title: 'Components/LoginPage',
  component: LoginPage,
} as Meta

const LoginOnboarding: Story<LoginPageProps> = (args) => <LoginPage {...args} />

export const EmptyForm = LoginOnboarding.bind({})
EmptyForm.args = {
  backLink: '/',
  termsAndConditionLink: '/',
  accountLogin: {
    emailAddress: '',
    password: '',
  },
  onChangeEmail: () => null,
  onChangePassword: () => null,
  onClickLogin: () => null,
  onSubmit: () => null,
}

export const ValidForm = LoginOnboarding.bind({})
ValidForm.args = {
  backLink: '/',
  termsAndConditionLink: '/',
  accountLogin: {
    emailAddress: 'name@gmail.com',
    password: 'aajdha',
  },
  isChecked: true,
  onChangeCheckbox: () => null,
  onChangeEmail: () => null,
  onChangePassword: () => null,
  onClickLogin: () => null,
  onSubmit: () => null,
}

export const inValidForm = LoginOnboarding.bind({})
inValidForm.args = {
  backLink: '/',
  termsAndConditionLink: '/',
  accountLogin: {
    emailAddress: 'name@gmail',
    password: 'aajdha',
  },
  errorMessage: {
    email: 'Invalid email',
    password: 'Password must be at least 8 character',
  },
  onChangeEmail: () => null,
  onChangePassword: () => null,
  onClickLogin: () => null,
  onSubmit: () => null,
}
