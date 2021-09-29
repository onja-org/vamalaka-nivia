import React from "react";
import styled from "styled-components"
import { OnwardPage } from "../components/OnwardPage/OnwardPage";
import Discover from "../components/OnwardPage/discover.png"
import Sellers from "../components/OnwardPage/sellers.png"
import { PageFooter } from '../components/PageFooter/PageFooter'
import footerLinks from '../utils/FooterLinks'
import { Header } from '../components/Header'
import { loggeOut } from '../components/HeaderNavLink/HeaderNavLink'
import {
    HeaderContainer,
    FooterContainer,
} from '../components/RoleSelectionOnboard/RoleSelectionOnBoardiStyle'
import ProductDiscovering from "../components/ProductDiscovering/ProductDiscovering";
import LearnMoreBanner from '../components/LearnMoreBanner/LearnMoreBanner'
import { mediaQueries } from "../globalStyles/mediaQuery";

const HowItWorksContainer = styled.section ``;
const OnwardPageWrapper = styled.div `
    ${mediaQueries('md', null)`
        margin: auto;
        max-width: 1200px;
    `}
`;

const description = {
    firstDescription:
      'Purchase high-quality products made by the people that sell them.',
    secondDescription:
      ' By cutting out middlemen, you know exactly where your purchase is from and how it was made. ',
}

export const HowItWorksPage = () => {
    return (
        <HowItWorksContainer>
            <HeaderContainer>
                <Header item={loggeOut} />
            </HeaderContainer>
            <LearnMoreBanner
                heading='Madagascars peer-to-peer e-commerce platform'
                primaryButtonText='Learn more'
                secondaryButtonText='Can you trust us?'
                onClickPrimaryButton={() => null}
                description={description}
            />
            <OnwardPageWrapper>
                <OnwardPage 
                    heading= 'Discover Madagassy products'
                    description= {description}
                    buttonText= 'See offers'
                    isLeftSide= {true}
                    image={Discover}
                />
                <OnwardPage 
                    heading= 'Know your seller'
                    isLeftSide= {false}
                    description= {description}
                    image= {Sellers}
                />
            </OnwardPageWrapper>
            <ProductDiscovering 
                heading= "This is a subtitle that is very informative"
                subHeading= "Discover amazing products and profit from a truly fair market: "
                primaryButtonText= "Discover Products"
                secondaryButton= "Become a member"
                onClickPrimary= {() => null}
                onClickSecondary= {() => null}
            />
            <FooterContainer>
                <PageFooter footerLinks={footerLinks} />
            </FooterContainer>
        </HowItWorksContainer>
    )
}