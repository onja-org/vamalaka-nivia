import { Link } from "react-router-dom"
import styled from "styled-components"

export default function NotFound() {
  return (
    <div>
      <NotFoundWrapper>
        <h2>Page not found</h2>
        <Link to='/'>
          Go home
        </Link>
      </NotFoundWrapper>
    </div>
  )
}

const NotFoundWrapper = styled.div`
  display: grid;
  place-items: center;
}
`