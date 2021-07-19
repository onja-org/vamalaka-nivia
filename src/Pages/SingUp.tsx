import { Link } from "react-router-dom"
import styled from "styled-components"

export default function SignUp() {
  return (
    <SignUpWrapper>
      <h2>I am the sign up page</h2>
      <Link to='/'>Go home</Link>
    </SignUpWrapper>
  )
}

const SignUpWrapper = styled.div`
  display: grid;
  place-items: center;
`