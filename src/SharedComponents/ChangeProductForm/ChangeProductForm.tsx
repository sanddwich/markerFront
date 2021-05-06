import React, { useEffect, useState } from 'react'
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
import { setAppProducts, setAppProductCategories } from '../../Redux/actions/app'
import { setErrorToast, setSuccessToast, hideToast } from '../../Redux/actions/toast'
import { AppState } from '../../Redux/interfaces/interfaces'
import { Config } from '../../Config/Config'
import axios from 'axios'
import ProductMethod from '../../Redux/interfaces/AdditionalInterfaces/ProductMethod'
import LoaderHorizontal from '../LoaderHorizontal/LoaderHorizontal'
import InputString from '../InputString/InputString'
import InputTextArea from '../InputTextArea/InputTextArea'
import SelectSearch, { fuzzySearch, SelectSearchOption } from 'react-select-search'
import ProductCategory from '../../Redux/interfaces/AdditionalInterfaces/ProductCategory'
import SelectSearchComponent from '../SelectSearchComponent/SelectSearchComponent'

interface ChangeProductFormProps {
  product: Product
  app: AppState
  setAppProducts: (products: Product[]) => void
  setAppProductCategories: (productCategories: ProductCategory[]) => void
  setErrorToast: (message: string) => void
  setSuccessToast: (message: string) => void
  hideToast: () => void
}

const ChangeProductForm = (props: ChangeProductFormProps) => {
  const [formLoader, setFormLoader] = useState(true)
  const [changePriceLoader, setChangePriceLoader] = useState(false)
  const [productPriceInput, setProductPriceInput] = useState(props.product.price)
  const [changeNameLoader, setChangeNameLoader] = useState(false)
  const [productNameInput, setProductNameInput] = useState(props.product.name)
  const [changeDescLoader, setChangeDescLoader] = useState(false)
  const [productDescInput, setProductDescInput] = useState(props.product.description)
  const [changeProductCategoryLoader, setChangeProductCategoryLoader] = useState(false)
  const [productCategoryInput, setProductCategoryInput] = useState(props.product.category_id)

  useEffect(() => {
    getProductCategories()
  }, [])

  const productPriceInputHandler = (value: string): void => {
    setProductPriceInput(parseInt(value))
  }

  const productNameInputHandler = (value: string): void => {
    setProductNameInput(value)
  }

  const productDescInputHandler = (value: string): void => {
    setProductDescInput(value)
  }

  const productCategoryInputHandler = (value: string): void => {
    setProductCategoryInput(parseInt(value))
  }

  const changeProductPrice = async (): Promise<any> => {
    if (checkNumber()) {
      setChangePriceLoader(true)
      //Создание переменной Product с актуальными значениями
      const changeProduct: Product = props.product
      changeProduct.price = productPriceInput
      //Получение Token для авторизации
      const apiToken = props.app.marketUser?.apiToken
      apiToken && (await dbProductAction(changeProduct, apiToken, 'CHANGE_PRODUCT'))

      setChangePriceLoader(false)
    }
  }

  const changeProductName = async (): Promise<any> => {
    if (checkString()) {
      setChangeNameLoader(true)
      //Создание переменной Product с актуальными значениями
      const changeProduct: Product = props.product
      changeProduct.name = productNameInput.trim()
      //Получение Token для авторизации
      //Получение Token для авторизации
      const apiToken = props.app.marketUser?.apiToken
      apiToken && (await dbProductAction(changeProduct, apiToken, 'CHANGE_PRODUCT'))

      setChangeNameLoader(false)
    }
  }

  const changeProductDesc = async (): Promise<any> => {
    if (checkString()) {
      setChangeDescLoader(true)
      //Создание переменной Product с актуальными значениями
      const changeProduct: Product = props.product
      changeProduct.description = productDescInput.trim()
      //Получение Token для авторизации
      const apiToken = props.app.marketUser?.apiToken
      apiToken && (await dbProductAction(changeProduct, apiToken, 'CHANGE_PRODUCT'))

      setChangeDescLoader(false)
    }
  }

  const changeProductCategory = async (): Promise<any> => {
    setChangeProductCategoryLoader(true)
    //Создание переменной Product с актуальными значениями
    const changeProduct: Product = props.product
    changeProduct.category_id = productCategoryInput
    //Получение Token для авторизации
    const apiToken = props.app.marketUser?.apiToken
    apiToken && (await dbProductAction(changeProduct, apiToken, 'CHANGE_PRODUCT'))
    setChangeProductCategoryLoader(false)
  }

  const checkString = (): boolean => {
    if (productNameInput.trim().length > 0) {
      return true
    } else {
      showHideToast('Поле не заполнено!')
      return false
    }
  }

  const checkNumber = (): boolean => {
    if (productPriceInput > 0) {
      return true
    } else {
      showHideToast('Неправильно установлена цена.')
      return false
    }
  }

  const dbProductAction = async (
    actionProduct: Product,
    apiToken: string,
    productMethod: ProductMethod
  ): Promise<any> => {
    const productOperation = Config.productOperations.find((po) => po.productMethod === productMethod)
    if (productOperation) {
      // actionProduct.id = 0
      await axios({
        method: productOperation.httpMethod,
        url: Config.backConnectData.backendURL + productOperation.apiLink,
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
        data: {
          product: actionProduct,
        },
      })
        .then((res) => {
          if (res.data.product) {
            const responseProduct: Product = res.data.product
            if (productMethod === 'CHANGE_PRODUCT') {
              const products = props.app.products.map((prod) => {
                if (prod.id === responseProduct.id) {
                  return responseProduct
                }
                return prod
              })
              props.setAppProducts(products)
            }

            if (productMethod === 'ADD_PRODUCT') {
              const products = props.app.products
              products.push(responseProduct)
              props.setAppProducts(products)
            }

            showHideToast('Операция выполнена!', false)
            // console.log(props.app.products)
            // console.log(res.data.product)
          }
        })
        .catch((error) => {
          console.log(error)
          showHideToast('Ошибка обращения к API создания/модификации продукта!')
        })
    }
  }

  const showHideToast = (message: string, error: boolean = true): void => {
    error ? props.setErrorToast(message) : props.setSuccessToast(message)
    setTimeout(() => {
      props.hideToast()
    }, Config.messageTimout)
  }

  const getProductCategories = async (): Promise<any> => {
    const api = axios.create({
      baseURL: Config.backConnectData.backendURL,
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${props.app.marketUser?.apiToken}`,
      },
    })

    return await api
      .get('/api/categories')
      .then((res) => {
        // console.log(res)
        if ((res.status = 200)) {
          const productCategories: ProductCategory[] = res.data.productCategories
          props.setAppProductCategories(productCategories)
          setFormLoader(false)
        } else {
          showHideToast('Ошибка получения категорий!')
        }
      })
      .catch((error) => {
        console.log(error)
        showHideToast('Ошибка обращения к API получения категорий!')
      })
  }

  const getSelectSearchOptionsForProductCategories = (): SelectSearchOption[] => {
    return props.app.productCategories.map((cat) => {
      return {
        name: cat.name,
        value: cat.id,
        photo: cat.images[0] ? cat.images[0].path : `https://picsum.photos/100/100?random=${cat.id}`,
        // photo: `https://picsum.photos/100/100?random=${cat.id}`,
      }
    })
  }

  return (
    <Container fluid className="ChangeProductForm">
      {formLoader ? (
        <LoaderCircle />
      ) : (
        <Container fluid className="ChangeProductForm__container p-0">
          <Row className="ChangeProductForm__Row">
            {/* Поле КАТЕГОРИЯ товара */}
            <Col xs={12} md={6} xl={4} className="ChangeProductForm__cont">
              <div className="ChangeProductForm__productCategory">
                <SelectSearchComponent
                  options={getSelectSearchOptionsForProductCategories()}
                  title="Категория:"
                  controlChangeHandler={productCategoryInputHandler}
                  value={props.product.category_id.toString()}
                />

                {changeProductCategoryLoader && <LoaderHorizontal />}

                {productCategoryInput !== props.product.category_id && (
                  <div className="ChangeProductForm__nameActions" onClick={() => changeProductCategory()}>
                    <ButtonComponent>
                      <NavbarMenuItem title="Применить">
                        <Icon.CheckCircle width={20} height={20} fill={`#212529`} />
                      </NavbarMenuItem>
                    </ButtonComponent>
                  </div>
                )}
              </div>
            </Col>
            {/* Поле НАИМЕНОВАНИЕ товара */}
            <Col xs={12} md={6} xl={4} className="ChangeProductForm__cont">
              <div className="ChangeProductForm__name">
                <InputString
                  controlChangeHandler={productNameInputHandler}
                  title="Наименование:"
                  value={productNameInput}
                  type="text"
                />

                {changeNameLoader && <LoaderHorizontal />}

                {productNameInput !== props.product.name && (
                  <div className="ChangeProductForm__nameActions" onClick={() => changeProductName()}>
                    <ButtonComponent>
                      <NavbarMenuItem title="Применить">
                        <Icon.CheckCircle width={20} height={20} fill={`#212529`} />
                      </NavbarMenuItem>
                    </ButtonComponent>
                  </div>
                )}
              </div>
            </Col>
            {/* Поле ЦЕНА товара */}
            <Col xs={12} md={6} xl={4} className="ChangeProductForm__cont">
              <div className="ChangeProductForm__price">
                <InputNumberFormat
                  controlChangeHandler={productPriceInputHandler}
                  title="Стоимость:"
                  value={productPriceInput}
                  mask="0.00"
                  currency="₽"
                />

                {changePriceLoader && <LoaderHorizontal />}

                {productPriceInput !== props.product.price && (
                  <div className="ChangeProductForm__nameActions" onClick={() => changeProductPrice()}>
                    <ButtonComponent>
                      <NavbarMenuItem title="Применить">
                        <Icon.CheckCircle width={20} height={20} fill={`#212529`} />
                      </NavbarMenuItem>
                    </ButtonComponent>
                  </div>
                )}
              </div>
            </Col>
            {/* Поле ОПИСАНИЕ товара */}
            <Col xs={12} md={6} xl={4} className="ChangeProductForm__cont">
              <div className="ChangeProductForm__desc">
                <InputTextArea
                  controlChangeHandler={productDescInputHandler}
                  title="Описание:"
                  value={productDescInput}
                />

                {changeDescLoader && <LoaderHorizontal />}

                {productDescInput !== props.product.description && (
                  <div className="ChangeProductForm__nameActions" onClick={() => changeProductDesc()}>
                    <ButtonComponent>
                      <NavbarMenuItem title="Применить">
                        <Icon.CheckCircle width={20} height={20} fill={`#212529`} />
                      </NavbarMenuItem>
                    </ButtonComponent>
                  </div>
                )}
              </div>
            </Col>
          </Row>
          <Row>
            
          </Row>
        </Container>
      )}
    </Container>
  )
}

const mapDispatchToProps = {
  setAppProducts,
  setAppProductCategories,
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
