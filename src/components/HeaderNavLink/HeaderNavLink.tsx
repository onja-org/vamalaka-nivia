
import { FC } from 'react'
import styled from 'styled-components'
import language from '../../assets/languages.svg'
import transactions from '../../assets/transactions.svg'
import signUp from '../../assets/account.svg'
import signIn from '../../assets/signin.svg'
import { fonts } from '../../globalStyles/fonts'
import { Link } from 'react-router-dom'

export const loggedIn = [
	{ 
		imgSrc: language, 
		alt: 'Languages', 
		text: 'english' 
	},
	{
		imgSrc: transactions,
		alt: 'Transactions',
		text: 'Transactions'
	},
	{
		imgSrc: signUp,
		alt: 'signup',
		text: 'signup'
	}
]

export const loggedOut = [
	{ 
	  imgSrc: language, 
		alt: 'Languages', 
		text: 'english' 
	},
	{
		imgSrc: signIn,
		alt: 'Log in',
		text: 'Log in'
	},
	{
		imgSrc: signUp,
		alt: 'signup',
		text: 'signup'
	}
]
export interface ItemType {
	imgSrc?: string
	alt: string
	text: string
}

export interface LinkTypes {
	item: Array<ItemType>
}

export const HeaderNavLink: FC<ItemType> = ({ text, imgSrc, alt }) => (
		<Item>
			<Link to={`/${text}`} data-testid={text}>
				<img src={imgSrc} alt={alt} />
				<span>{text}</span>
			</Link>
		</Item>
)

const Item = styled.li`
	a {
		${fonts} font-family: 'Futura Std', Arial, Helvetica, sans-serif;
		font-size: 25px;
		line-height: 30px;
		color: #041d42;
		text-decoration: none;
		display: flex;
		text-transform: capitalize;

		span {
			margin-inline-start: 10px;

			@media (max-width: 600px) {
				display: none;
			}
		}
	}
	&:first-of-type {
		@media (max-width: 900px) {
			display: none;
		}
	}
`
