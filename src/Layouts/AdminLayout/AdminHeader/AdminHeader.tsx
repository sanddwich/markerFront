import axios from 'axios'
import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Config } from '../../../Config/Config'
import { RootState } from '../../../Redux'
import { setAppMarketUser } from '../../../Redux/actions/app'
import { MarketUser } from '../../../Redux/interfaces/AdditionalInterfaces/MarketUser'
import { AppState } from '../../../Redux/interfaces/interfaces'
import * as Icon from 'react-bootstrap-icons'
import './AdminHeader.scss'
import NavbarMenuItem from '../../../SharedComponents/NavbarMenuItem/NavbarMenuItem'

interface AdminHeaderProps {
  setAppMarketUser: (marketUser: MarketUser | null) => void
  app: AppState
}

const AdminHeader = (props: AdminHeaderProps) => {
  const logoutHandler = (): void => {
    const api = axios.create({
      baseURL: Config.backConnectData.backendURL,
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${props.app.marketUser?.apiToken}`,
      },
    })

    api.get('/api/admin/logout')
    localStorage.removeItem('marketUser')
    props.setAppMarketUser(null)
  }

  return (
    <Container fluid className="AdminHeader">
      {/* <h3 onClick={() => logoutHandler()}>Logout</h3> */}
      <Row className="AdminHeader__navbar m-0 d-flex justify-content-between">
        <div className="AdminHeader__navbarLeft d-flex justify-content-between">
          <NavbarMenuItem title={`Профиль`}>
            <Icon.PersonSquare width={30} height={30} fill={`#f8f9fa`} />
          </NavbarMenuItem>
          <NavbarMenuItem title={`Продукты`}>
            <Icon.BasketFill width={30} height={30} fill={`#f8f9fa`} />
          </NavbarMenuItem>
          <NavbarMenuItem title={`Категории`}>
            <Icon.BarChartSteps width={30} height={30} fill={`#f8f9fa`} />
          </NavbarMenuItem>
        </div>
        <div className="AdminHeader__navbarRight">
          <NavbarMenuItem title={`Выход`}>
            <Icon.DoorOpenFill width={30} height={30} fill={`#f8f9fa`} />
          </NavbarMenuItem>
        </div>
      </Row>
    </Container>
  )
}

const mapDispatchToProps = {
  setAppMarketUser,
}

const mapStateToProps = (state: RootState) => {
  const app = state.app
  return {
    app,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminHeader)
