import { Story, Meta } from '@storybook/react'
import Gallery, {GalleryProps} from './Gallery'

export default {
  title: 'Components/Gallery',
  component: Gallery,
} as Meta



const Template: Story<GalleryProps> = (args) => <Gallery {...args} />
export const GalleryStory = Template.bind({})
GalleryStory.args = {
  imageDescription: "Description", 
  alt: "Circle Icon",
}
