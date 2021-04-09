import React from 'react'
import { Container } from 'react-bootstrap'
import './MainFooter.scss'

interface MainFooterProps {}

interface MainFooterState {}

class MainFooter extends React.Component<MainFooterProps, MainFooterState> {
  

  render() {
    return (
      <Container fluid className="MainFooter p-0">
        <h1>MainFooter</h1>        
      </Container>
    )
  }
}

export default MainFooter
