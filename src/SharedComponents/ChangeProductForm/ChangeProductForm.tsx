import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Product from '../../Redux/interfaces/AdditionalInterfaces/Product'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import InputNumberFormat from '../InputNumberFormat/InputNumberFormat'
import LoaderCircle from '../LoaderCircle/LoaderCircle'
import NavbarMenuItem from '../NavbarMenuItem/NavbarMenuItem'
import * as Icon from 'react-bootstrap-icons'
import './ChangeProductForm.scss'
import { connect } from 'react-redux'
import { RootState } from '../../Redux'
import { setAppProducts } from '../../Redux/actions/app'
import { setErrorToast, setSuccessToast, hideToast } from '../../Redux/actions/toast'
import { AppState } from '../../Redux/interfaces/interfaces'
import { Config } from '../../Config/Config'
import axios from 'axios'
import ProductMethod from '../../Redux/interfaces/AdditionalInterfaces/ProductMethod'

interface ChangeProductFormProps {
  product: Product
  app: AppState
  setAppProducts: (products: Product[]) => void
  setErrorToast: (message: string) => void
  setSuccessToast: (message: string) => void
  hideToast: () => void
}

const ChangeProductForm = (props: ChangeProductFormProps) => {
  const [changePriceLoader, setChangePriceLoader] = useState(false)
  const [productPriceInput, setProductPriceInput] = useState(props.product.price)

  const productPriceInputHandler = (value: string): void => {
    setProductPriceInput(parseInt(value))
  }

  const changeProductPrice = (): void => {
    if (checkPrice()) {
      setChangePriceLoader(true)
      //Создание переменной Product с актуальными значениями
      const changeProduct: Product = props.product
      changeProduct.price = productPriceInput
      //Получение Token для авторизации
      const marketUser = localStorage.getItem('marketUser')
      if (marketUser) {
        const apiToken = JSON.parse(marketUser).apiToken
        dbChangeProduct(changeProduct, apiToken, 'CHANGE_PRODUCT_PRICE')
      } else {
        props.setErrorToast('Вы не авторизованы!')
        setChangePriceLoader(false)
      }

      // const api = axios.create({
      //   baseURL: Config.backConnectData.backendURL,
      //   withCredentials: true,
      //   headers: {
      //     Authorization: `Bearer ${apiToken}`,
      //   },
      // })

      // const products = props.app.products
      // products.map((product) => {
      //   if (product.id === props.product.id) {
      //     product.price = productPriceInput
      //   }
      //   return product
      // })
      // dbChangeProductPrice()
    }
  }

  const dbChangeProduct = async (
    changeProduct: Product,
    apiToken: string,
    productMethod: ProductMethod
  ): Promise<any> => {
    const productOperation = Config.productOperations.find((po) => po.productMethod === productMethod)
    if (productOperation) {
      // const api = axios.create({
      //   baseURL: Config.backConnectData.backendURL,
      //   withCredentials: true,
      //   headers: {
      //     Authorization: `Bearer ${apiToken}`,
      //   },
      // })

      // await api.post('/api/admin/product/changePrice', changeProduct).then((response) => {
      //   console.log(response)
      // })

      await axios({
        method: productOperation.httpMethod,
        url: Config.backConnectData.backendURL + productOperation.apiLink,
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
        data: {
          product: changeProduct,
        },
      }).then((response) => {
        console.log(response.data)
      })
    }
    setChangePriceLoader(false)
  }

  const checkPrice = (): boolean => {
    if (productPriceInput > 0) {
      return true
    } else {
      showHideToast('Неправильно установлена цена.')
      return false
    }
  }

  const showHideToast = (message: string, error: boolean = true): void => {
    error ? props.setErrorToast(message) : setSuccessToast(message)
    setTimeout(() => {
      props.hideToast()
    }, Config.messageTimout)
  }

  return (
    <Container fluid className="ChangeProductForm">
      <Container fluid className="ChangeProductForm__container p-0">
        <Row className="ChangeProductForm__Row">
          <Col xs={12} md={6} xl={4} className="ChangeProductForm__name p-0">
            <InputNumberFormat
              controlChangeHandler={productPriceInputHandler}
              title="Стоимость:"
              value={productPriceInput}
              mask="0.00"
              currency="₽"
            />

            {productPriceInput !== props.product.price && (
              <div className="ChangeProductForm__nameActions" onClick={() => changeProductPrice()}>
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
    </Container>
  )
}

const mapDispatchToProps = {
  setAppProducts,
  setErrorToast,
  setSuccessToast,
  hideToast,
}

const mapStateToProps = (state: RootState) => {
  const app = state.app
  return {
    app,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeProductForm)
