import { Story, Meta } from '@storybook/react'
import GalleryArrows, {GalleryArrowsProps} from './GalleryArrows'

export default {
  title: 'Components/GalleryArrows',
  component: GalleryArrows,
} as Meta

const Template: Story<GalleryArrowsProps> = (args) => <GalleryArrows {...args} />
export const GalleryArrowsLeft = Template.bind({})
export const GalleryArrowsRight = Template.bind({})
GalleryArrowsLeft.args = {
    alt: "Circle Icon",
    arrowButtons: "arrowLeft",
    disabled: false,

}

GalleryArrowsRight.args = {
    alt: "Circle Icon",
    arrowButtons: "arrowRight",
    disabled: false,
}