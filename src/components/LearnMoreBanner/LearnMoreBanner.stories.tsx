import { Story, Meta } from '@storybook/react'
import LearnMoreBanner, { LearnMoreBannerProps } from './LearnMoreBanner'

export default {
  title: 'components/LearnMoreBanner',
  component: LearnMoreBanner,
} as Meta

const Template: Story<LearnMoreBannerProps> = (args) => (
  <LearnMoreBanner {...args} />
)

export const SingleButton = Template.bind({})
SingleButton.args = {
  heading: 'Madagascars peer-to-peer e-commerce platform',
  description: {
    firstDescription:
      'Purchase high-quality products made by the people that sell them.',
    secondDescription:
      ' By cutting out middlemen, you know exactly where your purchase is from and how it was made. ',
  },
  primaryButtonText: 'Learn how it works',
  onClickPrimaryButton: () => {},
}

export const MultipleButtons = Template.bind({})
MultipleButtons.args = {
  heading: 'Madagascars peer-to-peer e-commerce platform',
  description: {
    firstDescription:
      'Purchase high-quality products made by the people that sell them.',
    secondDescription:
      ' By cutting out middlemen, you know exactly where your purchase is from and how it was made. ',
  },
  primaryButtonText: 'Learn more',
  onClickPrimaryButton: () => {},
  secondaryButtonText: 'Can you trust us',
  onClickSecondaryButton: () => {},
}
