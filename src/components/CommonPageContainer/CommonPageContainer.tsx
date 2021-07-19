import { Header } from '../Header'
import { PageFooter } from '../PageFooter/PageFooter'
import { loggedIn } from '../HeaderNavLink/HeaderNavLink'
import styled from 'styled-components'

const footerLinks = [
	{
		summary: 'Madamada',
		links: [
			{ linkContent: 'about', linkUrl: '#about' },
			{ linkContent: 'careers', linkUrl: '#careers' },
			{ linkContent: 'pricing', linkUrl: '#pricing' },
			{ linkContent: 'FAQ', linkUrl: '#faq' },
			{ linkContent: 'About', linkUrl: '#about' },
		],
		id: '1',
	},
	{
		summary: 'Vamalaka',
		links: [
			{ linkContent: 'about', linkUrl: '#about' },
			{ linkContent: 'careers', linkUrl: '#careers' },
			{ linkContent: 'pricing', linkUrl: '#pricing' },
			{ linkContent: 'FAQ', linkUrl: '#faq' },
		],
		id: '2',
	},
	{
		summary: 'LearnGasy',
		links: [
			{ linkContent: 'about', linkUrl: '#about' },
			{ linkContent: 'careers', linkUrl: '#careers' },
			{ linkContent: 'pricing', linkUrl: '#pricing' },
			{ linkContent: 'FAQ', linkUrl: '#faq' },
			{ linkContent: 'Others', linkUrl: '#others' },
		],
		id: '3',
	},
	{
		summary: 'Vamalaka Developers',
		links: [
			{ linkContent: 'about', linkUrl: '#about' },
			{ linkContent: 'careers', linkUrl: '#careers' },
			{ linkContent: 'pricing', linkUrl: '#pricing' },
			{ linkContent: 'FAQ', linkUrl: '#faq' },
		],
		id: '4',
	},
	{
		summary: 'Others',
		links: [
			{ linkContent: 'about', linkUrl: '#about' },
			{ linkContent: 'careers', linkUrl: '#careers' },
			{ linkContent: 'pricing', linkUrl: '#pricing' },
			{ linkContent: 'FAQ', linkUrl: '#faq' },
		],
		id: '5',
	},
]

export interface ContainerProps {
	children: JSX.Element
}

export const CommonPageContainer: React.FC<ContainerProps> = ({ children }) => {
	return (
		<div>
			<Header item={loggedIn} />
			<Container>{children}</Container>
			<FooterContainer>
				<PageFooter footerLinks={footerLinks} />
			</FooterContainer>
		</div>
	)
}

const Container = styled.div`
	padding: 0 16px;
`
const FooterContainer = styled.div`
	footer > div {
		max-width: 90%;
		margin: auto;
	}

	@media (max-width: 920px) {
		footer > div > * {
			display: none;
		}

		footer > div {
			padding: 0;
			min-height: 184px;
		}
	}
`
