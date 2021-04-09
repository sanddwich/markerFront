import React from 'react'
import { Container } from 'react-bootstrap'
import './MainBody.scss'

interface MainBodyProps {}

interface MainBodyState {}

class MainBody extends React.Component<MainBodyProps, MainBodyState> {
  

  render() {
    return (
      <Container fluid className="MainBody p-0">
        {this.props.children}
      </Container>
    )
  }
}

export default MainBody
