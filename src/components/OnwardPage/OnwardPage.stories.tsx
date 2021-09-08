import { Meta, Story } from '@storybook/react'
import { OnwardPage, OnwardPageProps } from './OnwardPage'
import Sellers from './sellers.png'
import Discover from './discover.png'

export default {
  title: 'components/OnwardPage',
  component: OnwardPage,
} as Meta

const Onward: Story<OnwardPageProps> = (args) => <OnwardPage {...args} />

export const LeftSide = Onward.bind({})
LeftSide.args = {
  heading: 'Discover Madagassy products',
  buttonText: 'See offers',
  isLeftSide: true,
  description: {
    firstDescription:
      'Purchase high-quality products made by the people that sell them.',
    secondDescription:
      'By cutting out middlemen, you know exactly where your purchase is from and how it was made.',
  },
  image: Discover,
}

export const RightSide = Onward.bind({})
RightSide.args = {
  heading: 'Know your seller',
  isLeftSide: false,
  description: {
    firstDescription:
      'Track exactly who made your products, how they were made and how they got to you.',
    secondDescription:
      'Because you can actually talk to the person, you have an individual connection to the origin of your purchase.',
  },
  image: Sellers,
}
