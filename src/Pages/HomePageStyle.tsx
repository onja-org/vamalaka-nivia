import styled from 'styled-components'
const maxWidthMedia = '920px'

export const Container = styled.div`
  background: linear-gradient( 
    180deg
    , #fff5f1 0%, #feeae3 45.27%, #ffdbcc 94.31% );
  position: relative;

  footer > div {
    padding-top: 220px;
  }
  @media (max-width: ${maxWidthMedia}) {
    footer > div > * {
      display: block;
    }
    footer > div {
      padding: 0;
      min-height: 184px;
    }
  }
`
