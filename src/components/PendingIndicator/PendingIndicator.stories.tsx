import React from 'react'
import { Story, Meta } from '@storybook/react'
import { PendingIndicator, PendingProps } from './PendingIndicator'
import vamalakaLoading from "./pending-svg/vamalaka_loading.svg"
import { IconSize } from './PendingIndicator'   

export default {
  title: 'PendingIndicator',
  component: PendingIndicator,
} as Meta

const Template: Story<PendingProps> = (args) => <PendingIndicator {...args} />

export const Large = Template.bind({})
Large.args = {
  src: vamalakaLoading,
  alt: "large",
  size: IconSize.lg
}

export const Medium = Template.bind({})
Medium.args = {
  src: vamalakaLoading,
  alt: "medium",
  size: IconSize.md
}

export const Small = Template.bind({})
Small.args = {
  src: vamalakaLoading,
  alt: "small",
  size: IconSize.sm
}

export const EtraSmall = Template.bind({})
EtraSmall.args = {
  src: vamalakaLoading,
  alt: "extra small",
  size: IconSize.extraSm,
}
