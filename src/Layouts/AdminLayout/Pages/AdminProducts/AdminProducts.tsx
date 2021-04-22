import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { setAppLoading } from '../../../../Redux/actions/app'
import { setErrorToast } from '../../../../Redux/actions/toast'
import { Config } from '../../../../Config/Config'
import { RootState } from '../../../../Redux'
import './AdminProducts.scss'
import { AppState, ToastState } from '../../../../Redux/interfaces/interfaces'
import Loader from '../../../../SharedComponents/Loader/Loader'
import Product from '../../../../Redux/interfaces/AdditionalInterfaces/Product'
import ProductCard from '../../../../SharedComponents/ProductCard/ProductCard'

interface AdminProductsProps {
  setAppLoading: (isActive: boolean) => void
  app: AppState
  toast: ToastState
  setErrorToast: (message: string) => void
}

const AdminProducts = (props: AdminProductsProps) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [paginate, setPaginate] = useState<number>(20)
  const [page, setPage] = useState<number>(1)  
  const [lastPage, setLastPage] = useState<number>(1)  
  const [total, setTotal] = useState<number>(1) 
  const [products, setProducts] = useState<Array<Product>>([])

  const getProducts = async (page: number = 1, paginate: number = 20): Promise<any> => {
    const api = axios.create({
      baseURL: Config.backConnectData.backendURL,
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${props.app.marketUser?.apiToken}`,
      },
    })

    await api
      .post('/api/products', {
        paginate,
        page,
      })
      .then((res) => {
        if (res.status === 200) {
          setProducts(res.data.data)
          setPage(res.data.current_page)
          setLastPage(res.data.last_page)
          setTotal(res.data.total)
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
          <Loader />
        </Container>
      ) : (
        <React.Fragment>
          <h1>Страница продуктов:</h1>
          <Row className="AdminProducts__Row">
            {products.map((product) => {
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
