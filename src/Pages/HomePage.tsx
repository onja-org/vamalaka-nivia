import { Container } from './HomePageStyle'
import React from 'react'
import { adsSelector, adsStatusSelector, fetchAds } from '../redux/slices/adsSlice'
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
  categoriesStatusSelector,
  fetchCategories,
} from '../redux/slices/categoriesSlice'
import { useAppDispatch } from '../redux/hooks'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { TopCategories } from '../components/TopCategories/TopCategories'
import LearnMoreBanner from '../components/LearnMoreBanner/LearnMoreBanner'
import { history } from '../redux/store'
export const HomePage = () => {

  const dispatch = useAppDispatch()
  const offers = useSelector(adsSelector)
  const categories = useSelector(categoriesSelector) 
  const categoriesStatus = useSelector(categoriesStatusSelector)
  const offersStatus = useSelector(adsStatusSelector)

  useEffect(() => {
    dispatch(fetchAds([]))
    dispatch(fetchCategories([]))
  }, [dispatch])

  const description = {
    firstDescription:
      'Purchase high-quality products made by the people that sell them.',
    secondDescription:
      ' By cutting out middlemen, you know exactly where your purchase is from and how it was made. ',
  }

  return (
    <Container>
      <TopContainerStyles>
        <HeaderContainer>
          <Header item={loggeOut} />
        </HeaderContainer>
        <LearnMoreBanner
          heading='Madagascars peer-to-peer e-commerce platform'
          primaryButtonText='Learn how it works'
          onClickPrimaryButton={() => history.push('/')} // Change the path here when how it works page is done
          description={description}
        />
          <TopCategories
            categories={categories}
            primary={true}
            selectCategory={() => {}}
            status={categoriesStatus}
          />
      </TopContainerStyles>
      <ListOffers offers={offers} status={offersStatus}/>
      <FooterContainer>
        <PageFooter footerLinks={footerLinks} />
      </FooterContainer>
    </Container>
  )
}
