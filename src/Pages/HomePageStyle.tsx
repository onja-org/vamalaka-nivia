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

export const ImageContainer = styled.div `
  display: flex;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-x: scroll;
  flex-wrap: inherit;
  padding: 0;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
}

// `;
// export const ImageList = styled.img `
//   max-width: 326px;
//   ${mediaQueries('md', null) `
//       max-width: 1008px;
//   `}
// `;
// export const ImageWrapper = styled.div `
// `;
