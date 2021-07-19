import { Story, Meta } from '@storybook/react'
import { CommonPageContainer, ContainerProps } from './CommonPageContainer'

export default {
	title: 'Components/CommonPageContainer',
	component: CommonPageContainer,
} as Meta

const Template: Story<ContainerProps> = (args) => (
	<CommonPageContainer {...args} />
)

export const CommonPageContainerWithSamllcontents = Template.bind({})
CommonPageContainerWithSamllcontents.args = {
	children: <div>Hello world</div>,
}

export const CommonPageContainerWithBigContents = Template.bind({})
CommonPageContainerWithBigContents.args = {
	children: (
		<div>
			<div>Hello world</div>
			<div>Hello world</div>
			<div>Hello world</div>
			<div>Hello world</div>
			<div>Hello world</div>
			<div>Hello world</div>
			<div>Hello world</div>
			<div>Hello world</div>
			<div>Hello world</div>
			<div>Hello world</div>
			<div>Hello world</div>
			<div>Hello world</div>
			<div>Hello world</div>
			<div>Hello world</div>
			<div>Hello world</div>
			<div>Hello world</div>
		</div>
	),
}
