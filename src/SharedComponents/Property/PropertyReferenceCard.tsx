import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PropertyReference from '../../Redux/interfaces/AdditionalInterfaces/PropertyReference'
import './PropertyReferenceCard.scss'

interface PropertyReferenceCardProps {
  propRef: PropertyReference
}

const PropertyReferenceCard = (props: PropertyReferenceCardProps) => {
  return (
    <Container fluid className="PropertyReferenceCard p-0">
      <Row className="PropertyReferenceCard__Row m-0">
        <Col xs={12} className="PropertyReferenceCard__info p-0">
          <Container fluid className="PropertyReferenceCard__Property p-0">
            <Row className="PropertyReferenceCard__title m-0 d-flex justify-content-start">
              <div
                className="PropertyReferenceCard__image"
                style={{
                  backgroundImage: `url("https://picsum.photos/100/100?random=${props.propRef.property.image.id}")`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
              <div className="PropertyReferenceCard__nameValue d-flex align-items-center">
                <div>
                  <div className="PropertyReferenceCard__name">{props.propRef.property.name + ":"}</div>
                  <div className="PropertyReferenceCard__value">
                    {props.propRef.property_value + ' ' + props.propRef.property.unit}
                  </div>
                </div>
              </div>
            </Row>
            <Row className="PropertyReferenceCard__additional m-0">
              <div className="PropertyReferenceCard__description">{props.propRef.property.description}</div>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default PropertyReferenceCard
