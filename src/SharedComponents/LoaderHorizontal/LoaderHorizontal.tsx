import React from 'react'
import { Container } from 'react-bootstrap'
import './LoaderHorizontal.scss'

interface LoaderHorizontalProps {}

const LoaderHorizontal = (props: LoaderHorizontalProps) => {
  return (
    <Container fluid className="LoaderHorizontal d-flex justify-content-center align-items-center p-0">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  )
}

export default LoaderHorizontal