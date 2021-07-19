import { Story, Meta } from '@storybook/react'
import {
  HeaderNavLink,
  ItemType,
  LinkTypes,
  loggedIn,
  loggedOut,
} from './HeaderNavLink'
import { List } from './List'

export default {
  title: 'Header/NavLink',
  component: HeaderNavLink,
} as Meta


const Template: Story<LinkTypes> = ({ item }) => (
  <List>
      {item.map((link: ItemType) => (
        <HeaderNavLink {...link} key={link.text} />
      ))}
    </List>
)

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  item: loggedIn,
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  item: loggedOut,
}
