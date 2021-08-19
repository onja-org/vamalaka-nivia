import { Story, Meta } from '@storybook/react'
import { HandlerProp, RoleSelectOnboard } from './RoleSelectionOnBoard'

export default {
  title: 'Components/RoleSelectOnboard',
  component: RoleSelectOnboard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<HandlerProp> = (args) => <RoleSelectOnboard {...args} />
export const RoleSelectOnBoardStory = Template.bind({})
