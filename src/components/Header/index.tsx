import React, { FC } from 'react'
import { Logo } from '../Logo/Logo'
import styled from 'styled-components'
import LogoIcon from '../Logo/images/vamalaka.svg'
import SearchIcon from '../../assets/searchIcon.svg'
import {
	HeaderNavLink,
	ItemType,
	LinkTypes,
} from '../HeaderNavLink/HeaderNavLink'
import { List } from '../HeaderNavLink/List'
import Input from '../HeaderInputSearch/HeaderInputSearch'

export const Header: FC<LinkTypes> = ({ item }) => {
	return (
		<HeaderStyles>
			<div>
				<Logo logo={LogoIcon} alt='Vamalaka logo' />
				<Input
					icon={SearchIcon}
					alt='Input search'
					placeholderText='Search for anything...'
				/>
				<List>
					{item.map((link: ItemType) => (
						<HeaderNavLink {...link} key={link.text} />
					))}
				</List>
			</div>
		</HeaderStyles>
	)
}

const HeaderStyles = styled.header`
	margin: 0;
	width: 100%;

	div {
		width: 100%;
		display: grid;
		grid-template-columns: 346px 1fr 1fr;
		align-items: center;
		gap: 50px;

		@media (max-width: 900px) {
			display: flex;
			justify-content: space-between;
		}
	}
`
