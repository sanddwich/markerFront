import React from 'react'
import { Container } from 'react-bootstrap'
import './LoaderCircle.scss'

interface LoaderCircleProps {}

const LoaderCircle = (props: LoaderCircleProps) => {
  return (
    <Container fluid className="LoaderCircle p-0">
      <div className="LoaderCircle__container d-flex justify-content-center">
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

export default LoaderCircle