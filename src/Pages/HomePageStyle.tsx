import styled from 'styled-components'
import { mediaQueries } from '../globalStyles/mediaQuery';

export const Container = styled.div`
  footer > div {
    padding-top: 220px;
  }

  ${mediaQueries('md', null)`
    footer > div > * {
      display: block;
    }
    footer > div {
      padding: 0;
      min-height: 184px;
    }
  `}
`
