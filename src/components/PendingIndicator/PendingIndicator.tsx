import React from "react";
import styled from 'styled-components'
import { ICON_SIZE } from "../../constants";
import vamalakaLoading from "./pending-svg/vamalaka_loading.svg"

export interface PendingProps {
    alt?: string
    size?: ICON_SIZE
}

export const PendingIndicator: React.FC<PendingProps> = ({ alt="Pending indicator", size=ICON_SIZE.MEDIUM_ICON,}) => {    
    return (
        <PendingImgWrapper>
            <PendingImg 
                style={{maxWidth: `${size}px`}}
                src={vamalakaLoading} 
                alt={alt}
            />
        </PendingImgWrapper>
    )   
}
const PendingImg = styled.img ``;
const PendingImgWrapper = styled.span ``;
