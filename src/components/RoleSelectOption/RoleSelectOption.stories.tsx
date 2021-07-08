import { Story, Meta } from '@storybook/react';
import { RoleSelectOption, RoleSelectOptionProps } from './RoleSelectOption';

export default {
    title: 'Components/Role Select Option',
    component: RoleSelectOption,
} as Meta
  
const Template: Story<RoleSelectOptionProps> = (args) => (
    <RoleSelectOption {...args} />
)

export const Buyer = Template.bind({});
Buyer.args = {
    label:"Buyer",
    text:"Personal account to manage all you activities.",
};

export const Seller = Template.bind({});
Seller.args = {
    label:"Seller",
    text:"Own or belong to a company, this is for you.",
};

