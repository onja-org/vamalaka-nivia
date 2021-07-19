import { Link } from "react-router-dom"
import styled from "styled-components"

export default function SignIn() {
  return (
    <SignInWrapper>
      <h2>I am the sign in page</h2>
      <Link to='/'>Go home</Link>
    </SignInWrapper>
  )
}

const SignInWrapper = styled.div`
  display: grid;
  place-items: center;
`