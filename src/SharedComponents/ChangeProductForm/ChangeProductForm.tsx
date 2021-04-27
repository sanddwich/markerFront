import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Product from '../../Redux/interfaces/AdditionalInterfaces/Product'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import InputNumberFormat from '../InputNumberFormat/InputNumberFormat'
import LoaderCircle from '../LoaderCircle/LoaderCircle'
import NavbarMenuItem from '../NavbarMenuItem/NavbarMenuItem'
import * as Icon from 'react-bootstrap-icons'
import './ChangeProductForm.scss'

interface ChangeProductFormProps {
  product: Product
}

const ChangeProductForm = (props: ChangeProductFormProps) => {
  const [formLoader, setFormLoader] = useState(false)
  const [productNameInput, setProductNameInput] = useState(props.product.name)
  const [productPriceInput, setProductPriceInput] = useState(props.product.price)
  const [productDescriptionInput, setProductDescriptionInput] = useState(props.product.description)

  const productNameInputHandler = (value: string): void => {
    setProductNameInput(value)
  }

  const productPriceInputHandler = (value: string): void => {
    setProductPriceInput(parseInt(value))
  }

  const productDescriptionInputHandler = (value: string): void => {
    setProductDescriptionInput(value)
  }

  return (
    <Container fluid className="ChangeProductForm">
      {formLoader ? (
        <LoaderCircle />
      ) : (
        <Container fluid className="ChangeProductForm__container p-0">
          <Row className="ChangeProductForm__Row">
            <Col xs={12} md={6} xl={4} className="ChangeProductForm__name p-0">
              <InputNumberFormat
                controlChangeHandler={productPriceInputHandler}
                name={'currentPrice'}
                title="Стоимость:"
                value={props.product.price}
                mask="0.00"
                currency="₽"
              />

              {productPriceInput !== props.product.price && (
                <div className="ChangeProductForm__nameActions">
                  <ButtonComponent>
                    <NavbarMenuItem title="Применить">
                      <Icon.CheckCircle width={20} height={20} fill={`#212529`} />
                    </NavbarMenuItem>
                  </ButtonComponent>
                </div>
              )}

            </Col>
            <Col xs={12} md={6} className="ChangeProductForm__price"></Col>
          </Row>
        </Container>
      )}
    </Container>
  )
}

export default ChangeProductForm
