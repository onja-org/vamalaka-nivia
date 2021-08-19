import React, { FC } from 'react'
import {
  RoleOptionContainer,
  AccountButtonContainer,
  JoinUsHeader,
  AccountTopContainer,
  RoleSelectionContent,
} from './RoleSelectionOnBoardiStyle'
import { DescriptionOffer } from '../DescriptionOffer/descriptionOffer'
import { RoleSelectOption } from '../RoleSelectOption/RoleSelectOption'
import userIcon from '../../stories/assets/user.svg'
import userIconHovered from '../../stories/assets/userNotHovered.svg'
import briefcaseIcon from '../../stories/assets/briefcase.svg'
import briefcaseIconHovered from '../../stories/assets/briefcaseNotHovered.svg'
import { Login } from '../Login/Login'
import StepCounter from '../StepCounter/StepCounter'
export interface HandlerProp {
  setRoleSelected?: any
}

export const RoleSelectOnboard: FC<HandlerProp> = ({ setRoleSelected }) => {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  // const [roleSelected, setRoleSelected] = useState('')

  return (
    <RoleOptionContainer>
      <AccountTopContainer>
        <Login isSignedUp={true} href='./login' />
        <StepCounter stepNum='01' />
      </AccountTopContainer>
      <RoleSelectionContent>
        <JoinUsHeader>Join us</JoinUsHeader>
        <DescriptionOffer
          text={
            "To begin this story, tell us what kind of account you'd be opening "
          }
        />
        <div>
          <RoleSelectOption
            label='Buyer'
            text='Personal account to manage all you activities.'
            src={userIcon}
            hoveredSrc={userIconHovered}
            alt='User icon'
            setRoleSelected={setRoleSelected}
          />
        </div>
        <div>
          <RoleSelectOption
            label='Seller'
            text='Own or beluserIconHoveredong to a company, this is for you.'
            src={briefcaseIcon}
            hoveredSrc={briefcaseIconHovered}
            alt='Briefcase icon'
            setRoleSelected={setRoleSelected}
          />
        </div>
        <AccountButtonContainer>
          <Login isSignedUp={true} href='./login' />
        </AccountButtonContainer>
      </RoleSelectionContent>
    </RoleOptionContainer>
  )
}
