import React from 'react'
import { Story, Meta } from '@storybook/react'
import { PendingIndicator, PendingProps } from './PendingIndicator'
import { ICON_SIZE } from '../../constants/index'   

export default {
  title: 'PendingIndicator',
  component: PendingIndicator,
} as Meta

const Template: Story<PendingProps> = (args) => <PendingIndicator {...args} />

export const Large = Template.bind({})
Large.args = {
  // alt: "large",
  size: ICON_SIZE.LARGE_ICON
}

export const Medium = Template.bind({})
Medium.args = {
  size: ICON_SIZE.MEDIUM_ICON
}

export const Small = Template.bind({})
Small.args = {
  size: ICON_SIZE.SMALL_ICON
}

export const EtraSmall = Template.bind({})
EtraSmall.args = {
  size: ICON_SIZE.EXTRA_SMALL_ICON,
}
