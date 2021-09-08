import { Story, Meta } from '@storybook/react'
import ProductDiscovering, {ProductDiscoveringProps} from "./ProductDiscovering"

export default {
    title: 'Components/ProductDiscovering',
    component: ProductDiscovering,
  } as Meta
  
  const Product: Story<ProductDiscoveringProps> = (args) => (
    <ProductDiscovering {...args} />
  )
  
  export const Discovering = Product.bind({})
  Discovering.args = {
    heading: "This is a subtitle that is very informative",
    subHeading: "Discover amazing products and profit from a truly fair market: ",
    primaryButtonText: "Discover Products",
    secondaryButton: "Become a member",
    onClickPrimary: () => null,
    onClickSecondary: () => null,
  }

  
  
