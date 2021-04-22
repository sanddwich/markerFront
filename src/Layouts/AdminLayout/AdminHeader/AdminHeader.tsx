import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Config } from '../../../Config/Config'
import { RootState } from '../../../Redux'
import { setAppMarketUser } from '../../../Redux/actions/app'
import { setMobileMenu } from '../../../Redux/actions/modal'
import { MarketUser } from '../../../Redux/interfaces/AdditionalInterfaces/MarketUser'
import { AppState, ModalState } from '../../../Redux/interfaces/interfaces'
import * as Icon from 'react-bootstrap-icons'
import './AdminHeader.scss'
import NavbarMenuItem from '../../../SharedComponents/NavbarMenuItem/NavbarMenuItem'
import { Command } from '../../../Redux/interfaces/AdditionalInterfaces/Command'
import { NavLink } from 'react-router-dom'

interface AdminHeaderProps {
  setMobileMenu: (isActive: boolean) => void
  setAppMarketUser: (marketUser: MarketUser | null) => void
  app: AppState
  modal: ModalState
}

const commands: Command[] = [
  {
    name: 'logout',
    method: 'GET',
    path: '/api/admin/logout',
  },
]

const AdminHeader = (props: AdminHeaderProps) => {
  const [commandList, setCommands] = useState(() => commands)

  const logoutHandler = (command: Command): void => {
    const api = axios.create({
      method: command.method,
      baseURL: Config.backConnectData.backendURL,
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${props.app.marketUser?.apiToken}`,
      },
    })

    api(command.path)
    localStorage.removeItem('marketUser')
    props.setAppMarketUser(null)
  }
  
  const bodyUnBlock = (): void => {
    document.querySelector('body')?.classList.remove('modal-open')
  }

  const commandRequestHandler = (commandName: string | null): void => {
    const command = commandList.find((command) => command.name === commandName)
    command && logoutHandler(command)
  }

  const toggleMobileMenu = (commandName: string | null): void => {
    const isActive = !props.modal.mobileMenu.isActive
    bodyUnBlock()
    props.setMobileMenu(isActive)
  }

  return (
    <Container fluid className="AdminHeader">
      {/* <h3 onClick={() => logoutHandler()}>Logout</h3> */}
      <Row className="AdminHeader__navbar m-0 d-flex justify-content-between">
        <div className="AdminHeader__navbarLeft d-block d-xl-none">
          <NavbarMenuItem clickHandler={toggleMobileMenu}>
            <Icon.Grid3x3GapFill width={30} height={30} fill={`#f8f9fa`} />
          </NavbarMenuItem>
        </div>

        <div className="AdminHeader__navbarLeft d-none d-xl-flex">
          <NavLink to="/admin">
            <NavbarMenuItem title={`Профиль`}>
              <Icon.PersonSquare width={30} height={30} fill={`#f8f9fa`} />
            </NavbarMenuItem>
          </NavLink>
          <NavLink to="/admin/products">
            <NavbarMenuItem title={`Продукты`}>
              <Icon.BasketFill width={30} height={30} fill={`#f8f9fa`} />
            </NavbarMenuItem>
          </NavLink>
          <NavLink to="/admin/categories">
            <NavbarMenuItem title={`Категории`}>
              <Icon.CardList width={30} height={30} fill={`#f8f9fa`} />
            </NavbarMenuItem>
          </NavLink>
        </div>
        <div className="AdminHeader__navbarRight">
          <NavbarMenuItem title={`Выход`} commandName="logout" clickHandler={commandRequestHandler}>
            <Icon.DoorOpenFill width={30} height={30} fill={`#f8f9fa`} />
          </NavbarMenuItem>
        </div>
      </Row>
    </Container>
  )
}

const mapDispatchToProps = {
  setAppMarketUser,
  setMobileMenu,
}

const mapStateToProps = (state: RootState) => {
  const app = state.app  
  const modal = state.modal
  return {
    app,
    modal,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminHeader)
