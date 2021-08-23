import React from "react";
import styled from 'styled-components'

export interface PendingProps {
    src: string,
    alt: string
    size: number
}

export const IconSize = {
    lg: 164,
    md: 64,
    sm: 40,
    extraSm: 20,
}

export const PendingIndicator: React.FC<PendingProps> = ({src, alt, size}) => {    
    return (
        <Button>
            <PendingImg 
                style={{maxWidth: `${size}px`}}
                src={src} 
                alt={alt}
            />
        </Button>
    )   
}

const Button = styled.button `
    background-color: transparent;
    border: none;
`;
const PendingImg = styled.img ``;
