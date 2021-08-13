import { Container } from './HomePageStyle'
import React, {useEffect} from 'react'
import {
  adsSelector,
  fetchAds,
} from '../redux/slices/adsSlice'
import { useAppDispatch } from '../redux/hooks'
import { useSelector } from 'react-redux'
import {
  TopContainerStyles,
  HeaderContainer,
  FooterContainer,
} from '../components/RoleSelectionOnboard/RoleSelectionOnBoardiStyle'
import { Header } from '../components/Header'
import { loggeOut } from '../components/HeaderNavLink/HeaderNavLink'
import { PageFooter } from '../components/PageFooter/PageFooter'
import footerLinks from '../utils/FooterLinks'
import ListOffers, { ListOffersProps } from '../components/ListOffers/ListOffers'

export const HomePage = () => {
  const dispatch = useAppDispatch()
  const offer = useSelector(adsSelector)
  
  const ListOfOffers = function(props: ListOffersProps): JSX.Element {
    return <ListOffers {...props}/>
  }

  useEffect(() => {
    dispatch(fetchAds([]))
  }, [dispatch]) 

  return (
    <Container>
      <TopContainerStyles>
        <HeaderContainer>
          <Header item={loggeOut} />
        </HeaderContainer>
      </TopContainerStyles>
      <ListOfOffers offers={offer}/>
      <FooterContainer>
        <PageFooter footerLinks={footerLinks} />
      </FooterContainer>
    </Container>
  )
}
