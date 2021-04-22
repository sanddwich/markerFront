import React from 'react'
import { Container } from 'react-bootstrap'
import './Loader.scss'

interface LoaderProps {}

const Loader = (props: LoaderProps) => {
  return (
    <Container fluid className="Loader p-0">
      <div className="Loader__container d-flex justify-content-center">
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Container>
  )
}

export default Loader