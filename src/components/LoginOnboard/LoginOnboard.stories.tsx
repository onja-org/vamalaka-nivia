import React from 'react'
import { Story, Meta } from '@storybook/react'
import { LoginPage, LoginPageProps } from '../../Pages/LoginPage'

export default {
  title: 'Components/LoginPage',
  component: LoginPage,
} as Meta

const LoginOnboardingComponent: Story<LoginPageProps> = (args) => (
  <LoginPage {...args} />
)

export const EmptyForm = LoginOnboardingComponent.bind({})
EmptyForm.args = {
  backLink: '/',
  accountLogin: {
    username: '',
    password: '',
  },
  onClickLogin: () => null,
  onSubmit: () => null,
}

export const ValidForm = LoginOnboardingComponent.bind({})
ValidForm.args = {
  backLink: '/',
  accountLogin: {
    username: 'kala',
    password: 'aajdha',
  },
  onClickLogin: () => null,
  onSubmit: () => null,
}

export const inValidForm = LoginOnboardingComponent.bind({})
inValidForm.args = {
  backLink: '/',
  accountLogin: {
    username: 'name',
    password: 'aajdha',
  },
  errorMessage: {
    email: 'Invalid email',
    password: 'Password must be at least 8 character',
  },
  onClickLogin: () => null,
  onSubmit: () => null,
}
