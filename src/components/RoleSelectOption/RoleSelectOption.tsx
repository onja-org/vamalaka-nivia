import React from 'react'
import styled, { css } from 'styled-components'
import { fonts } from '../../globalStyles/fonts'
import arrowRightIcon from '../../stories/assets/arrow-right.svg'
import darkPolygonBg from '../../stories/assets/dark-polygon.svg'
import whitePolygonBg from '../../stories/assets/white-polygon.svg'
import {ReactComponent as BuyerIcon} from "../../stories/assets/user.svg";
import {ReactComponent as SellerIcon} from "../../stories/assets/briefcase.svg";

export interface RoleSelectOptionProps {
  label?: string
  text?: string
  role: {label: string, id: string}
  setRole: (role: {label: string, id: string}) => void
}

const polygonBg = css`
  background-repeat: no-repeat;
  max-width: 426px;
  padding-block-end: 16px;
  padding-block-start: 16px;
  padding-inline-end: 16px;
  padding-inline-start: 16px;
`

const optionWrapperStyles = css`
  ${fonts}
  font-family: 'Futura Std', Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-inline-start: 8px;
  padding-block-start: 10px;
  padding-block-end: 4px;
  align-items: center;
  box-sizing: border-box;
  border-radius: 6px;
`

export const RoleSelectOption: React.FC<RoleSelectOptionProps> = ({ label, text, setRole, role }) => {
  return (
    <RoleSelectWrapper onClick={() => setRole(role)}>
      <InnerSelectWrapper>
        <PolygonWrapperBg>
          {label === 'Buyer' ? <BuyerIcon/> : <SellerIcon/>}
        </PolygonWrapperBg>
        <TextWrapper>
          <h6>{label}</h6>
          <p>{text}</p>
        </TextWrapper>
        
        <ArrowIconWrapper onClick={() => null}>
          <ArrowIcon src={arrowRightIcon} alt='Arrow icon'/>
        </ArrowIconWrapper>
      </InnerSelectWrapper>
    </RoleSelectWrapper>
  )
}

const RoleSelectWrapper = styled.div``;

const ArrowIcon = styled.img`
  opacity: 0;
`;

const PolygonWrapperBg = styled.div`
  background-image: url(${whitePolygonBg});
  ${polygonBg}
`;

const InnerSelectWrapper = styled.div`
  box-shadow: 0px 2px 14px 1px rgba(0, 0, 0, 0.06);
  ${optionWrapperStyles}
  cursor: pointer;
  @media (min-width: 375px) {
    padding-inline-start: 28px;
  }
  ${optionWrapperStyles}
  &:hover {
    background-color: #f5f9ff;
    border: 1px solid #041d42;
    box-shadow: 0px 4px 14px 1px rgba(0, 0, 0, 0.04);
    ${PolygonWrapperBg} {
      background-image: url(${darkPolygonBg});
      ${polygonBg}
    }
    svg path {
      fill: white;
    }
    ${ArrowIcon} {
      opacity: 1;
    }
  }
  
`;

const ArrowIconWrapper = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  justify-self: end;
  padding-inline-end: 8px;
  padding-inline-start: 0;
  padding-inline-end: 16px;
`;

const TextWrapper = styled.div`
  h6 {
    font-family: 'Futura Std';
    font-size: 16px;
    font-weight: normal;
    line-height: 19px;
    margin-block-start: 16px;
    margin-block-end: 0;
    color: #041d42;
  }

  p {
    max-width: 161px;
    font-size: 14px;
    line-height: 17px;
    margin-block-start: 4px;
    color: #979797;
    @media (min-width: 375px) {
      max-width: 239px;
    }
  }
  
  @media (max-width: 360px) {
    text-align: center;
    margin: 0;
  }
  @media (max-width: 476px) {
    max-width: 150px;
  }
`;
