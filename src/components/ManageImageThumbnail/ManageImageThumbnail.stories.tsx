import { Story, Meta } from '@storybook/react'
// import ManageImageThumbnail, {
//   ManageImageThumbnailProps,
// } from './ManageImageThumbnail'
import ManageImageThumbnail, {
  ManageImageThumbnailProps,
} from './ManageImageThumbnail'

import Image from '../../assests/flower.png'
// import Star from '../../assests/star.svg'

export default {
  title: 'Components/ManageImageThumbnail',
  component: ManageImageThumbnail,
} as Meta

const Template: Story<ManageImageThumbnailProps> = (args) => (
  <ManageImageThumbnail {...args} />
)
export const ManageImageThumbnails = Template.bind({})
ManageImageThumbnails.args = {
  src: Image,
  // icon: Star,
}

//check it if the image has src => show image with remove icon
////check it if the image has src and primary => show image with remove icon and star
//check it if the image does NOT have src => show image without nothing
