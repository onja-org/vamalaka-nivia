import { Story, Meta } from '@storybook/react'
import { UserThumbnail, UserThumbnailProps } from './UserThumbnail'
import Imag from '../../assests/flower.png'
export default {
  title: 'Components/UserThumbnail',
  component: UserThumbnail,
} as Meta

const Template: Story<UserThumbnailProps> = (args) => (
  <UserThumbnail {...args} />
)
export const Imagethumbnail = Template.bind({})
Imagethumbnail.args = {
  src: Imag,
  alt: 'flower-image',
}
