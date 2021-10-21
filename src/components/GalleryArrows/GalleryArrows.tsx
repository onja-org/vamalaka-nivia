import React from 'react'
import styled, { css } from 'styled-components'
import circleIcon from "../../assests/circleIcon.svg";
import leftArrow from "../../assests/arrowLeft.svg";
import rightArrow from "../../assests/arrowRight.svg";

const backgroundStyles = css `
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: 28px 21px;
    cursor: pointer;
    border: none;
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
export interface GalleryArrowsProps {
    alt?: string
    arrowButtons: string
    onClick: () => void
    disabled: boolean
    style: React.CSSProperties
}

const GalleryArrows: React.FC<GalleryArrowsProps> = ({alt, arrowButtons, disabled=false}) => {
    return (
        <>
            {arrowButtons === "arrowLeft" 
                ? 
                <ButtonLeft onClick={() => console.log("cliked")} disabled={disabled} style={{}}>
                    <CircleIcon src = {circleIcon} alt={alt}/>
                </ButtonLeft>
                :
                <ButtonRight onClick={() => null} disabled={disabled} style={{}}>
                    <CircleIcon src = {circleIcon} alt={alt}/>
                </ButtonRight>
            }
        </>     
    )
}

export default  GalleryArrows