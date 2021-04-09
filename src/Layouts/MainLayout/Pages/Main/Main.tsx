import React from 'react'
import { Container } from 'react-bootstrap'
import './Main.scss'

interface MainProps {}

interface MainState {}

class Main extends React.Component<MainProps, MainState> {
  render() {
    return (
      <Container fluid className="Main p-0">
        <h1>Main</h1>
      </Container>
    )
  }
}

export default Main