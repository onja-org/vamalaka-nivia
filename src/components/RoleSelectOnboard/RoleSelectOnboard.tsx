import React, {useState} from 'react'
import {
	TopContainerStyles,
	MainContainer,
	RoleOptionContainer,
	Container,
	AccountContainer,
	HeaderContainer,
	ImageContainer,
	JoinUsHeader,
	FooterContainer
} from './RoleSelectOnboardStyles'

import { DescriptionOffer } from '../DescriptionOffer/descriptionOffer'
import { PageFooter, Props } from '../PageFooter/PageFooter'
import { Header } from '../Header'
import { loggedIn } from '../HeaderNavLink/HeaderNavLink'
import { RoleSelectOption } from '../RoleSelectOption/RoleSelectOption'
import { Login } from '../Login/Login'
import { LeftSide } from '../LeftSide/LeftSide'

export const RoleSelectOnboard: React.FC<Props> = ({ footerLinks }) => {
	const roleOptions = [{label: "Buyer", id: '1'}, {label: "Seller", id: '2'}];
	const [role, setRole] = useState({label: '', id: ''})
	
	return (
		<Container>
			<TopContainerStyles>
				<HeaderContainer>
					<Header item={loggedIn} />
				</HeaderContainer>
				<MainContainer>
					<ImageContainer>
						<LeftSide backgroundImage='Baobab' />
					</ImageContainer>
					<RoleOptionContainer>
						{role.label 
						?
						<p>Form field of account registration will be here ....</p>
					:
					<div>
							<JoinUsHeader>Join us</JoinUsHeader>
							<DescriptionOffer
								text={"To begin this story, tell us what kind of account you'd be opening "}
							/>
							{roleOptions.map(role => (
							<RoleSelectOption key={role.id} setRole={setRole}
								role={role}
								label={role.label}
								text='Own or belong to a company, this is for you.'
							/>
							))}
							<AccountContainer>
								<Login isSignedUp={true} href='./' />
							</AccountContainer>
						</div> }
					</RoleOptionContainer>
				</MainContainer>
			</TopContainerStyles>
			<FooterContainer>
				<PageFooter footerLinks={footerLinks} />
			</FooterContainer>
		</Container>
	)
}
