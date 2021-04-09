import React from 'react'
import { Container } from 'react-bootstrap'
import './MainHeader.scss'

interface MainHeaderProps {}

interface MainHeaderState {}

class MainHeader extends React.Component<MainHeaderProps, MainHeaderState> {
  

  render() {
    return (
      <Container fluid className="MainHeader p-0">
        <h1>MainHeader</h1>        
      </Container>
    )
  }
}

export default MainHeader
