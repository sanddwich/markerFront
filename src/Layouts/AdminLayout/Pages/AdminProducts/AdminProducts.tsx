import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { setAppLoading } from '../../../../Redux/actions/app'
import { Config } from '../../../../Config/Config'
import { RootState } from '../../../../Redux'
import './AdminProducts.scss'
import { AppState } from '../../../../Redux/interfaces/interfaces'

interface AdminProductsProps {
  setAppLoading: (isActive: boolean) => void
  app: AppState
}

const AdminProducts = (props: AdminProductsProps) => {
  const [data, setData] = useState({
    paginate: 20,
    page: 1,
    products: [],
  })

  const getProducts = async (page: number = 1, paginate: number = 20): Promise<any> => {
    const api = axios.create({
      baseURL: Config.backConnectData.backendURL,
      withCredentials: true,
      method: 'POST',
      data: {
        paginate: data.paginate,
        page: data.page,
      },
      headers: {
        Authorization: `Bearer ${props.app.marketUser?.apiToken}`,
      },      
    })

    try {
      await api('/api/products').then(res => {
        console.log(res)
      })
    } catch (e) {
      console.log(e)
    }    
    
  }

  useEffect(() => {
    getProducts()
  })

  return (
    <Container fluid className="AdminProducts">
      <h1>Страница продуктов:</h1>
      <Row className="AdminProducts__Row">
        {data.products.map((product) => {
          return (
            <Col xl={3} lg={4} sm={6} xs={12} className="AdminProducts__cont">
              awdadadad
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

const mapDispatchToProps = {}

const mapStateToProps = (state: RootState) => {
  const app = state.app
  return {
    app,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminProducts)
