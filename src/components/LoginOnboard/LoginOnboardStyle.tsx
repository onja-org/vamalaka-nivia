import styled, { css } from 'styled-components'
import { mediaQueries } from '../../globalStyles/mediaQuery'

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  padding-top: 27px;
`

export const FlexLayout = css`
  display: flex;
  flex-direction: column;
`

export const LoginMainContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0;
  flex-basis: 50%;
  ${mediaQueries(null, 'md')`
  display: block;
    & > div:nth-child(1) {
      display: none;
    }
  `}
`

export const LoginOnboardingContent = styled.div`
  ${FlexLayout}
  width: 100%;
  padding-bottom: 63px;
  font-family: 'Futura Std', Arial, Helvetica, sans-serif;
  font-style: normal;
  background-color: #fff;
  max-width: 583px;
  ${mediaQueries(null, 'sm')`
   width: 100%;
  `}

  ${mediaQueries('sm', 'lg')`
    width: 70%;
    padding-top: 27px;
  `}
  ${mediaQueries('lg', null)`
    padding-left: 13px;
    padding-top: 25px;
    padding-right: 16px;
  `}
`

export const HeaderStyle = styled.div`
  display: none;
  ${mediaQueries('lg', null)`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-left: 13px;
    padding-right: 26px;
  `}
`

export const HeaderContent = styled.div`
  ${FlexLayout}
  align-items: flex-end;
  gap: 4px;
`

export const HeaderPage = styled.span`
  color: #bdbdbd;
  font-size: 14px;
  line-height: 17px;
`

export const HeaderInfo = styled.strong`
  color: #979797;
  font-weight: 650;
  font-size: 16px;
  line-height: 19px;
`

export const LoginForm = styled.form`
  max-width: 426px;
  height: 100%;
  ${FlexLayout}
  padding-left : 82px;
  padding-right: 75px;
  padding-top: 47px;
  gap: 17px;
`
export const LoginFormContent = styled.div`
  ${FlexLayout}
  gap: 14px;
  padding-bottom: 91px;
`

export const LoginButtonContainer = styled.div`
  ${FlexLayout}
  align-items: center;
  gap: 15px;
  margin-top: calc(28px - 17px);
  button {
    font-size: 16px;
  }
  ${mediaQueries('lg', null)`
    margin-top: calc(34px - 17px);
    flex-direction: row;
    align-self: unset;
    width: unset;
  `}
`
export const LoginFormHeading = styled.h2`
  text-align: left;
  margin: 0;
  display: none;
  font-size: 30px;
  line-height: 36px;
  color: #041d42;
  padding-bottom: 70px;
  ${mediaQueries('lg', null)`
   display: block;
  `}
`
