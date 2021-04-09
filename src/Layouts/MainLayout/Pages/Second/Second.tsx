import React from 'react'
import { Container } from 'react-bootstrap'
import './Second.scss'

interface SecondProps {}

interface SecondState {}

class Second extends React.Component<SecondProps, SecondState> {
  render() {
    return (
      <Container fluid className="Second p-0">
        <h1>Second</h1>
      </Container>
    )
  }
}

export default Second