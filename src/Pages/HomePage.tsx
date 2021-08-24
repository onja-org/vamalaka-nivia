import { Container } from './HomePageStyle'
import React from 'react'
import { adsSelector, fetchAds } from '../redux/slices/adsSlice'
import {
  TopContainerStyles,
  HeaderContainer,
  FooterContainer,
} from '../components/RoleSelectionOnboard/RoleSelectionOnBoardiStyle'
import { Header } from '../components/Header'
import { loggeOut } from '../components/HeaderNavLink/HeaderNavLink'
import { PageFooter } from '../components/PageFooter/PageFooter'
import footerLinks from '../utils/FooterLinks'
import ListOffers from '../components/ListOffers/ListOffers'

import {
  categoriesSelector,
  fetchCategories,
} from '../redux/slices/categoriesSlice'
import { useAppDispatch } from '../redux/hooks'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { TopCategories } from '../components/TopCategories/TopCategories'
export const HomePage = () => {
  const dispatch = useAppDispatch()
  const offers = useSelector(adsSelector)
  const categories = useSelector(categoriesSelector)  
  useEffect(() => {
    dispatch(fetchAds([]))
    dispatch(fetchCategories([]))
  }, [dispatch])

  return (
    <Container>
      <TopContainerStyles>
        <HeaderContainer>
          <Header item={loggeOut} />
        </HeaderContainer>
        <TopCategories
          categories={categories}
          primary={true}
          selectCategory={() => {}}
        />
      </TopContainerStyles>
      <ListOffers offers={offers} />
      <FooterContainer>
        <PageFooter footerLinks={footerLinks} />
      </FooterContainer>
    </Container>
  )
}
