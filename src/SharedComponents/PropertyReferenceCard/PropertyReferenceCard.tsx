import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PropertyReference from '../../Redux/interfaces/AdditionalInterfaces/PropertyReference'
import NavbarMenuItem from '../NavbarMenuItem/NavbarMenuItem'
import * as Icon from 'react-bootstrap-icons'
import './PropertyReferenceCard.scss'

interface PropertyReferenceCardProps {
  propRef: PropertyReference
}

const PropertyReferenceCard = (props: PropertyReferenceCardProps) => {
  const [descr, setDescr] = useState(false)

  const toggleDescr = (): void => {
    const descrData = !descr
    setDescr(descrData)
  }

  return (
    <Container fluid className="PropertyReferenceCard p-0">
      <Row className="PropertyReferenceCard__Row m-0">
        <Col xs={12} className="PropertyReferenceCard__info p-0">
          <Container fluid className="PropertyReferenceCard__Property p-0">
            <Row className="PropertyReferenceCard__title m-0 d-flex justify-content-start">
              <Col
                xs={3}
                className="PropertyReferenceCard__image"
                style={{
                  backgroundImage:
                    props.propRef.property.images.length > 0
                      ? `url("https://picsum.photos/300/300?random=${props.propRef.property.id}")`
                      : `url("/img/defaultImage.jpg")`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              ></Col>
              <Col xs={9} className="PropertyReferenceCard__nameValue d-flex align-items-center">
                <div>
                  <div className="PropertyReferenceCard__name">{props.propRef.property.name + ':'}</div>
                  <div className="PropertyReferenceCard__value">
                    {props.propRef.property_value + ' ' + props.propRef.property.unit}
                  </div>
                </div>
              </Col>
            </Row>

            {typeof props.propRef.property.description === 'string' && props.propRef.property.description !== '' && (
              <Row className="PropertyReferenceCard__additional m-0">
                <div
                  className="PropertyReferenceCard__additionalTitle w-100 d-flex justify-content-center"
                  onClick={() => toggleDescr()}
                >
                  <NavbarMenuItem title="Описание свойства:">
                    <Icon.LayerBackward width={12} height={12} fill={`#212529`} />
                  </NavbarMenuItem>
                </div>
                {descr && (
                  <div className="PropertyReferenceCard__description">{props.propRef.property.description}</div>
                )}
              </Row>
            )}
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default PropertyReferenceCard
