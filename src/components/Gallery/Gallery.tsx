import React, { FC, useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import leftArrow from "../../assests/arrowLeft.svg";
import rightArrow from "../../assests/arrowRight.svg";
import { mediaQueries } from '../../globalStyles/mediaQuery';
import { PendingIndicator } from '../PendingIndicator/PendingIndicator';
import { FETCH_STATUS, ICON_SIZE } from '../../constants';
import GalleryArrows from '../GalleryArrows/GalleryArrows';

const backgroundStyles = css `
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: 28px 21px;
    cursor: pointer;
    border: none;
`;
const GalleryContainer = styled.div `
    max-width: 1008px;
    margin: auto;
`;
const GalleryDescription = styled.p `
    text-align: center;
    margin-block-start: -65px;
`;
const ButtonWrapper = styled.div `
    position: relative;
    top: -122px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-inline-end: 5px;
    padding-inline-start: 5px;
    
    ${mediaQueries('md', null) `
        top: -290px;
        padding-inline-end: 42px;
        padding-inline-start: 42px;
        max-width: 1008px;
  `}
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
const ImageWrapper = styled.div `

`;

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
    status: string
}


const Gallery: FC<GalleryProps> = ({
    imageDescription, 
    status: pendingStatus
}) => {
    // const [loading, setLoading] = useState(false);
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

  const handleGoLeftClick = () => {
    const updatedleftEdge = leftEdge - increment < 0 ? 0 : leftEdge - increment;
    setvisibleImage(imagesArray.slice(updatedleftEdge, updatedleftEdge + increment))
    setLeftEdge(updatedleftEdge);
  }
  
  const handleGoRightClick = () => {
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

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(true), 5000);
//     return () => clearTimeout(timer);
//   }, []);
    return (
        <GalleryContainer>
            {pendingStatus === FETCH_STATUS.LOADING && (
                <PendingIndicator size={ICON_SIZE.LARGE_ICON}/>
            )}
            <ImageContainer>
                {images}
            </ImageContainer>
                <ButtonWrapper>
                    <GalleryArrows 
                        onClick={() => handleGoLeftClick()} disabled={!canGoLeft}
                        style={{
                            visibility: (() => {
                            if (!canGoLeft) {
                                return "hidden";
                            }
                            })()
                        }}
                    />
                    <GalleryArrows onClick={() => handleGoRightClick()} disabled={!canGoRight}
                        style={{
                            visibility: (() => {
                            if (!canGoRight) {
                                return "hidden";
                            }
                            })()
                        }}
                    />
                    {/* <ButtonLeft onClick={() => handleGoLeftClick()} disabled={!canGoLeft}
                            style={{
                                visibility: (() => {
                                if (!canGoLeft) {
                                    return "hidden";
                                }
                                })()
                            }}
                    >
                    </ButtonLeft>
                    <GalleryArrows onClick={() => handleGoRightClick()} disabled={!canGoRight}
                        style={{
                            visibility: (() => {
                            if (!canGoRight) {
                                return "hidden";
                            }
                            })()
                        }}
                    />
                    </ButtonRight> */}
                </ButtonWrapper>
            <GalleryDescription>{imageDescription}</GalleryDescription>
        </GalleryContainer>
    )
}

export default Gallery