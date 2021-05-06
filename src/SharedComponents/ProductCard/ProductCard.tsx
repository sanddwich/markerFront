import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Product from '../../Redux/interfaces/AdditionalInterfaces/Product'
import NavbarMenuItem from '../NavbarMenuItem/NavbarMenuItem'
import PropertyReferenceCard from '../PropertyReferenceCard/PropertyReferenceCard'
import * as Icon from 'react-bootstrap-icons'
import './ProductCard.scss'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import ProductReferenceCard from '../ProductReferenceCard/ProductReferenceCard'
import ImgSlider from '../ImgSlider/ImgSlider'
import ModalWindow from '../ModalWindow/ModalWindow'
import ChangeProductForm from '../ChangeProductForm/ChangeProductForm'

interface ProductCardProps {
  product: Product
}

const ProductCard = (props: ProductCardProps) => {
  const [propsShow, setPropsShow] = useState(false)
  const [descShow, setDescShow] = useState(false)
  const [pToPReferenceShow, setPToPReferenceShow] = useState(false)
  const [pToPAddReferenceShow, setPToPAddReferenceShow] = useState(false)
  const [imgShow, setImgShow] = useState(false)
  const [modalWindow, setModalWindow] = useState(false)

  const closeFormHandler = (): void => {
    setModalWindow(false)
  }

  const togglePropsShow = (): void => {
    const val = !propsShow
    setPropsShow(val)
  }

  const toggleDescShow = (): void => {
    const val = !descShow
    setDescShow(val)
  }

  const togglePToPRefsShow = (): void => {
    const val = !pToPReferenceShow
    setPToPReferenceShow(val)
  }

  const togglePToPAddReferenceShow = (): void => {
    const val = !pToPAddReferenceShow
    setPToPAddReferenceShow(val)
  }

  const toggleImgShow = (): void => {
    const val = !imgShow
    setImgShow(val)
  }

  const getRoubles = (val: number): string => {
    return (val / 100).toFixed(2).toString()
  }

  return (
    <Container fluid className="ProductCard p-0">
      {modalWindow && (
        <ModalWindow closeHandler={closeFormHandler} title="Изменение продукта">
          <ChangeProductForm product={props.product} />
        </ModalWindow>
      )}

      <Row
        className="ProductCard__image m-0"
        style={{
          backgroundImage:
            props.product.images.length > 0
              ? `url("https://picsum.photos/300/300?random=${props.product.id}")`
              : `url("/img/defaultImage.jpg")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      ></Row>

      <div className="ProductCard__info">
        <Row className="ProductCard__name m-0">{props.product.name}</Row>

        <Row className="ProductCard__price m-0">{getRoubles(props.product.price) + ' '}&#8381;</Row>

        <Row className="ProductCard__description m-0">
          <div className="ProductCard__descriptionTitle" onClick={() => toggleDescShow()}>
            <NavbarMenuItem title="Описание">
              <Icon.LayerBackward width={15} height={15} fill={`#212529`} />
            </NavbarMenuItem>
          </div>
          {descShow && <div className="ProductCard__descriptionCont">{props.product.description}</div>}
        </Row>

        <Row className="ProductCard__props m-0">
          <div className="ProductCard__descriptionTitle" onClick={() => toggleImgShow()}>
            <NavbarMenuItem title={`Картинки (${props.product.images.length})`}>
              <Icon.LayerBackward width={15} height={15} fill={`#212529`} />
            </NavbarMenuItem>
          </div>
          {imgShow && props.product.images.length > 0 && <ImgSlider images={props.product.images} slideWidth={100} />}
        </Row>

        <Row className="ProductCard__props m-0" onClick={() => togglePropsShow()}>
          <NavbarMenuItem title={`Параметры (${props.product.property_reference.length})`}>
            <Icon.LayerBackward width={15} height={15} fill={`#212529`} />
          </NavbarMenuItem>
        </Row>
        <Row className="ProductCard__propsList m-0">
          {propsShow &&
            props.product.property_reference.map((prop) => {
              return <PropertyReferenceCard key={prop.id} propRef={prop} />
            })}
        </Row>

        <Row className="ProductCard__props m-0" onClick={() => togglePToPRefsShow()}>
          <NavbarMenuItem title={`В комплект входит (${props.product.p_to_p_referense.length})`}>
            <Icon.LayerBackward width={15} height={15} fill={`#212529`} />
          </NavbarMenuItem>
        </Row>
        <Row className="ProductCard__propsList m-0">
          {pToPReferenceShow &&
            props.product.p_to_p_referense.map((productReference) => {
              return <ProductReferenceCard key={productReference.id} product={productReference.product_item} />
            })}
        </Row>

        <Row className="ProductCard__props m-0" onClick={() => togglePToPAddReferenceShow()}>
          <NavbarMenuItem title={`Доп-ные продукты (${props.product.p_to_p_additional_reference.length})`}>
            <Icon.LayerBackward width={15} height={15} fill={`#212529`} />
          </NavbarMenuItem>
        </Row>
        <Row className="ProductCard__propsList m-0">
          {pToPAddReferenceShow &&
            props.product.p_to_p_additional_reference.map((additionalProductReference) => {
              return (
                <ProductReferenceCard
                  key={additionalProductReference.id}
                  product={additionalProductReference.product_item}
                />
              )
            })}
        </Row>

        <Row className="ProductCard__button d-flex justify-content-end">
          <div onClick={() => setModalWindow(true)}>
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
