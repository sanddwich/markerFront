import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Product from '../../Redux/interfaces/AdditionalInterfaces/Product'
import NavbarMenuItem from '../NavbarMenuItem/NavbarMenuItem'
import PropertyReferenceCard from '../Property/PropertyReferenceCard'
import * as Icon from 'react-bootstrap-icons'
import './ProductCard.scss'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

interface ProductCardProps {
  product: Product
}

const ProductCard = (props: ProductCardProps) => {
  const [propsShow, setPropsShow] = useState(false)
  const [descShow, setDescShow] = useState(false)

  const togglePropsShow = (): void => {
    const val = !propsShow
    setPropsShow(val)
  }

  const toggleDescShow = (): void => {
    const val = !descShow
    setDescShow(val)
  }

  const getRoubles = (val: number): string => {
    return (val / 100).toFixed(2).toString()
  }

  return (
    <Container fluid className="ProductCard p-0">
      <Row
        className="ProductCard__image m-0"
        style={{
          backgroundImage: `url("https://picsum.photos/300/300?random=${props.product.id}")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      ></Row>

      <div className="ProductCard__info">
        <Row className="ProductCard__name m-0">{props.product.name}</Row>

        <Row className="ProductCard__price m-0">{getRoubles(props.product.price) + ' '}&#8381;</Row>

        <Row className="ProductCard__description m-0">
          <div className="ProductCard__descriptionTitle" onClick={() => toggleDescShow()}>
            <NavbarMenuItem title="Описание:">
              <Icon.LayerBackward width={15} height={15} fill={`#212529`} />
            </NavbarMenuItem>
          </div>
          {descShow && <div className="ProductCard__descriptionCont">{props.product.description}</div>}
        </Row>

        {props.product.property_reference.length > 0 && (
          <React.Fragment>
            <Row className="ProductCard__props m-0" onClick={() => togglePropsShow()}>
              <NavbarMenuItem title="Параметры:">
                <Icon.LayerBackward width={15} height={15} fill={`#212529`} />
              </NavbarMenuItem>
            </Row>
            <Row className="ProductCard__propsList m-0">
              {propsShow &&
                props.product.property_reference.map((prop) => {
                  return <PropertyReferenceCard key={prop.id} propRef={prop} />
                })}
            </Row>
          </React.Fragment>
        )}

        <Row className="ProductCard__button d-flex justify-content-end">
          <div>
            <ButtonComponent>
              <NavbarMenuItem title="Изменить">
                <Icon.PencilSquare width={20} height={20} fill={`#212529`} />
              </NavbarMenuItem>
            </ButtonComponent>
          </div>
        </Row>
      </div>
    </Container>
  )
}

export default ProductCard
