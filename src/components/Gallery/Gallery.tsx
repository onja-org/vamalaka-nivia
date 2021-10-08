import React, { FC, useState } from 'react'
import styled, { css } from 'styled-components'
import circleIcon from "../../assests/circleIcon.svg";
import leftArrow from "../../assests/arrowLeft.svg";
import rightArrow from "../../assests/arrowRight.svg";
import { mediaQueries } from '../../globalStyles/mediaQuery';

const backgroundStyles = css `
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: 28px 21px;
    cursor: pointer;
    border: none;
`;
const GalleryContainer = styled.div ``;
const GalleryDescription = styled.p ``;
const ButtonWrapper = styled.div `
    position: relative;
    top: -290px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-inline-end: 42px;
    padding-inline-start: 42px;
`;
const ButtonLeft = styled.button `
    background-image: url(${leftArrow});
    ${backgroundStyles}
`;
const ButtonRight = styled.button `
    background-image: url(${rightArrow});
    ${backgroundStyles}
`;
const CircleIcon = styled.img `
    border-radius: 50%
`;
const ImageWrapper = styled.div ``;

export const ImageContainer = styled.div `
    margin: auto;
    max-width: fit-content;
//   display: flex;
//   -ms-overflow-style: none;
//   scrollbar-width: none;
//   overflow-x: scroll;
//   flex-wrap: inherit;
//   padding: 0;
//   ::-webkit-scrollbar {
//     width: 0    ;
//     background: transparent;
//   }
`;

const ImageList = styled.img `
    max-width: 326px;
  ${mediaQueries('md', null) `
      max-width: 1008px;
  `}
`;

export interface GalleryProps {
    gallery: string
    imageDescription: string
    goLeftClick: () => void
    goRightClick: () => void
    disabled?: boolean
    alt?: string
}


const Gallery: FC<GalleryProps> = ({
    imageDescription, 
    alt,
}) => {

const imagesArray = [
    "https://picsum.photos/1008/487?random=1",
    "https://picsum.photos/1008/487?random=2",
    "https://picsum.photos/1008/487?random=3",
    "https://picsum.photos/1008/487?random=4",
    "https://picsum.photos/1008/487?random=5",
    "https://picsum.photos/1008/487?random=6",
    "https://picsum.photos/1008/487?random=7",
    "https://picsum.photos/1008/487?random=8",
    "https://picsum.photos/1008/487?random=9",
    "https://picsum.photos/1008/487?random=10",
  ];
  
  const increment = 1;
  
  const [visibleImage, setvisibleImage] = useState(
    imagesArray.slice(0, increment)  
  )
  
  const [leftEdge, setLeftEdge] = useState(0)
  
  const canGoLeft = leftEdge > 0;
  
  const canGoRight = leftEdge + increment <= imagesArray.length - 1;
  
  const handleGoLeftClick = (goLeft = false) => {
    const updatedleftEdge = leftEdge - increment < 0 ? 0 : leftEdge - increment;
    setvisibleImage(imagesArray.slice(updatedleftEdge, updatedleftEdge + increment))
    setLeftEdge(updatedleftEdge);
  }
  
  const handleGoRightClick = (goLeft = false) => {
    const updatedLeftEdge = 
        leftEdge + increment > imagesArray.length - 1
        ? leftEdge + increment - (imagesArray.length - 1 + increment)
        : leftEdge + increment;
    setvisibleImage(imagesArray.slice(updatedLeftEdge, updatedLeftEdge + increment))
    setLeftEdge(updatedLeftEdge)
  }
  
  const images = visibleImage.map((image, i) => {
    return (
        <ImageWrapper key={i}>
            <ImageList src={image}/>      
        </ImageWrapper>
    )
  })

  console.log(visibleImage)
    return (
        <GalleryContainer>
            <ImageContainer>
                {images}
            </ImageContainer>
            <ButtonWrapper>
                <ButtonLeft onClick={() => handleGoLeftClick()} disabled={!canGoLeft}>
                    <CircleIcon src = {circleIcon} alt={alt}/>
                </ButtonLeft>
                <ButtonRight onClick={() => handleGoRightClick()} disabled={!canGoRight}>
                    <CircleIcon src = {circleIcon} alt={alt}/>
                </ButtonRight>
            </ButtonWrapper>
            <GalleryDescription>{imageDescription}</GalleryDescription>
        </GalleryContainer>
    )
}

export default Gallery