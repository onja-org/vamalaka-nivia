import { Story, Meta } from '@storybook/react'
import { EditorOffer } from '../../Pages/EditOffer'

export default {
  title: 'Header/EditorOffer',
  component: EditorOffer,
} as Meta

const Template: Story = (args) => <EditorOffer {...args} />
export const LogoTemplate = Template.bind({})
