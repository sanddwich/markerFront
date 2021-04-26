import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Product from '../../Redux/interfaces/AdditionalInterfaces/Product'
import InputNumberFormat from '../InputNumberFormat/InputNumberFormat'
import './ChangeProductForm.scss'

interface ChangeProductFormProps {
  product: Product
}

interface FormValues {
  currentName: string
  currentPrice: number
  currentDescription: string
}

const ChangeProductForm = (props: ChangeProductFormProps) => {
  const [formLoader, setFormLoader] = useState(false)
  const [formValues, setFormValues] = useState<FormValues>({
    currentName: props.product.name,
    currentPrice: props.product.price,
    currentDescription: props.product.description,
  })

  const controlChangeHandler = (name: string, value: string): void => {
    console.log('controlChangeHandler')
  }

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
              <InputNumberFormat
                controlChangeHandler={controlChangeHandler}
                name={'currentPrice'}
                value={props.product.price}
                mask="0.00"
                
              />
            </Col>
            <Col xs={12} md={6} className="ChangeProductForm__price"></Col>
          </Row>
        </Container>
      )}
    </Container>
  )
}

export default ChangeProductForm
