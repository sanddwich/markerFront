import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NavbarMenuItem from '../NavbarMenuItem/NavbarMenuItem'
import * as Icon from 'react-bootstrap-icons'
import './ProductReferenceCard.scss'
import Product from '../../Redux/interfaces/AdditionalInterfaces/Product'

interface ProductReferenceCardProps {
  product: Product
}

const ProductReferenceCard = (props: ProductReferenceCardProps) => {
  const [descr, setDescr] = useState(false)

  const toggleDescr = (): void => {
    const descrData = !descr
    setDescr(descrData)
  }

  return (
    <Container fluid className="ProductReferenceCard">
      <Row className="ProductReferenceCard__Row m-0">
        <Col xs={12} className="ProductReferenceCard__info p-0">
          <Container fluid className="ProductReferenceCard__Property p-0">
            <Row className="ProductReferenceCard__title m-0 d-flex justify-content-start">
              <Col xs={3} className="d-flex align-items-center">
                <div className="ProductReferenceCard__image">
                  <img
                    className="img-fluid"
                    src={
                      props.product.images.length > 0
                        ? `https://picsum.photos/100/100?random=${props.product.id}`
                        : `/img/defaultImage.jpg`
                    }
                    alt={props.product.name}
                  />
                </div>
              </Col>
              <Col xs={9} className="ProductReferenceCard__nameValue p-0 d-flex align-items-center">
                <div>
                  <div className="ProductReferenceCard__name">{props.product.name}</div>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductReferenceCard
