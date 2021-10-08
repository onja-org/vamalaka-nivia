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
import { useEffect, useState } from 'react'
import { TopCategories } from '../components/TopCategories/TopCategories'
import LearnMoreBanner from '../components/LearnMoreBanner/LearnMoreBanner'
import { history } from '../redux/store'
import ProductDiscovering from '../components/ProductDiscovering/ProductDiscovering'
import { Paths } from '../components/helpers/routeHelper'
import Gallery from '../components/Gallery/Gallery'
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

  // const imagesArray = [
  //       "https://picsum.photos/1008/487?random=1",
  //       "https://picsum.photos/1008/487?random=2",
  //       "https://picsum.photos/1008/487?random=3",
  //       "https://picsum.photos/1008/487?random=4",
  //       "https://picsum.photos/1008/487?random=5",
  //       "https://picsum.photos/1008/487?random=6",
  //       "https://picsum.photos/1008/487?random=7",
  //       "https://picsum.photos/1008/487?random=8",
  //       "https://picsum.photos/1008/487?random=9",
  //       "https://picsum.photos/1008/487?random=10",
  //   ];

  //   const increment = 1;

  //   const [visibleImage, setvisibleImage] = useState(
  //       imagesArray.slice(0, increment)  
  //   )

  //   const [leftEdge, setLeftEdge] = useState(0)

  //   const canGoLeft = leftEdge > 0;

  //   const canGoRight = leftEdge + increment <= imagesArray.length - 1;

  //   const handleGoLeftClick = (goLeft = false) => {
  //       const updatedleftEdge = leftEdge - increment < 0 ? 0 : leftEdge - increment;
  //       setvisibleImage(imagesArray.slice(updatedleftEdge, updatedleftEdge + increment))
  //       setLeftEdge(updatedleftEdge);
  //   }

  //   const handleGoRightClick = (goLeft = false) => {
  //       const updatedLeftEdge = 
  //           leftEdge + increment > imagesArray.length - 1
  //           ? leftEdge + increment - (imagesArray.length - 1 + increment)
  //           : leftEdge + increment;
  //       setvisibleImage(imagesArray.slice(updatedLeftEdge, updatedLeftEdge + increment))
  //       setLeftEdge(updatedLeftEdge)
  //   }

  //   const images = imagesArray.map((image, i) => {
  //       return (
  //           <ImageWrapper key={i}>
  //               <ImageList src={image}/>      
  //           </ImageWrapper>
  //       )
  //   })

    // console.log(images)
  return (
    <Container>
      {/* <ImageContainer>{images}</ImageContainer> */}
      {/* {visibleImage.map((image, i) => {
        return (  
          <ImageContainer key={i}>
            <Gallery 
              gallery = {image}
              imageDescription = "Description"
              goLeftClick = {handleGoLeftClick}
              goRightClick = {handleGoRightClick}
              // disabled = {canGoLeft} 
            />
          </ImageContainer> 
        )
      })} */}
      <TopContainerStyles>
        <HeaderContainer>
          <Header item={loggeOut} />
        </HeaderContainer>
        <LearnMoreBanner
          heading='Madagascars peer-to-peer e-commerce platform'
          primaryButtonText='Learn how it works'
          onClickPrimaryButton={() => history.push(Paths.HOW_IT_WORKS)} // Change the path here when how it works page is done
          description={description}
        />
        <TopCategories
          categories={categories}
          primary={true}
          selectCategory={() => {}}
          status={categoriesStatus}
        />
        <ListOffers offers={offers} status={offersStatus}/>
      </TopContainerStyles>
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
    </Container>
  )
}
