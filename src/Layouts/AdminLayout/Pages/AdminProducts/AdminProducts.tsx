import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { setAppLoading, setAppProducts, setAppPagination } from '../../../../Redux/actions/app'
import { setErrorToast } from '../../../../Redux/actions/toast'
import { Config } from '../../../../Config/Config'
import { RootState } from '../../../../Redux'
import './AdminProducts.scss'
import { AppState, ToastState } from '../../../../Redux/interfaces/interfaces'
import LoaderCircle from '../../../../SharedComponents/LoaderCircle/LoaderCircle'
import Product from '../../../../Redux/interfaces/AdditionalInterfaces/Product'
import ProductCard from '../../../../SharedComponents/ProductCard/ProductCard'
import Pagination from '../../../../Redux/interfaces/AdditionalInterfaces/Pagination'

interface AdminProductsProps {
  setAppLoading: (isActive: boolean) => void
  app: AppState
  toast: ToastState
  setErrorToast: (message: string) => void
  setAppProducts: (products: Product[]) => void
  setAppPagination: (pagination: Pagination) => void
}

const AdminProducts = (props: AdminProductsProps) => {
  const [loading, setLoading] = useState<boolean>(true)

  const getProducts = async (page: number = 1, paginate: number = 20): Promise<any> => {
    const api = axios.create({
      baseURL: Config.backConnectData.backendURL,
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${props.app.marketUser?.apiToken}`,
      },
    })

    await api
      .get('/api/products', {
        params: {
          paginate: props.app.pagination.paginate,
          page: props.app.pagination.page,
        }
      })
      .then((res) => {
        if (res.status === 200) {
          props.setAppProducts(res.data.data)
          props.setAppPagination({
            paginate: res.data.per_page,
            lastPage: res.data.last_page,
            page: res.data.current_page,
            total: res.data.total,
          })
          setLoading(false)
        }
        console.log(res.data)
      })
      .catch((error) => {
        props.setErrorToast('Ошибка связи с серверной частью приложения')
        console.log(error)
      })
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <Container fluid className="AdminProducts">
      {loading ? (
        <Container fluid className="AdminProducts__Loader">
          <LoaderCircle />
        </Container>
      ) : (
        <React.Fragment>
          <h1>Страница продуктов:</h1>
          <Row className="AdminProducts__Row">
            {props.app.products.map((product) => {
              return (
                <Col key={product.id} xl={3} lg={4} sm={6} xs={12} className="AdminProducts__cont">
                  <ProductCard product={product} />
                </Col>
              )
            })}
          </Row>
        </React.Fragment>
      )}
    </Container>
  )
}

const mapDispatchToProps = {
  setErrorToast,
  setAppLoading,
  setAppProducts,
  setAppPagination,
}

const mapStateToProps = (state: RootState) => {
  const app = state.app
  const toast = state.toast
  return {
    app,
    toast,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminProducts)
