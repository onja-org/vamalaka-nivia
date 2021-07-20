import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Transaction () {
  return (
    <TransactionWrapper>
      <h2>I am the transaction page</h2>
      <Link to='/' >Go home</Link>
    </TransactionWrapper>
  )
}

const TransactionWrapper = styled.div`
  display: grid;
  place-items: center;
`