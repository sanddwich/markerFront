import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import Product from '../../Redux/interfaces/AdditionalInterfaces/Product'
import './ChangeProductForm.scss'

interface ChangeProductFormProps {
  product: Product
}

interface FormValues {
  productName: string
  productPrice: string
  productDescription: string
}

const ChangeProductForm = (props: ChangeProductFormProps) => {
  const [formLoader, setFormLoader] = useState(true)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  return (
    <Container fluid className="ChangeProductForm">
      {formLoader ? (
        <Container fluid className="ChangeProductForm__loader p-0 d-flex justify-content-center">
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
        </Container>
      ) : (
        <Container fluid className="ChangeProductForm__container p-0">
          <Row className="ChangeProductForm__Row">
            <Col xs={12} md={6} className="ChangeProductForm__name">
              
            </Col>
            <Col xs={12} md={6} className="ChangeProductForm__price"></Col>
          </Row>
        </Container>
      )}
    </Container>
  )
}

export default ChangeProductForm