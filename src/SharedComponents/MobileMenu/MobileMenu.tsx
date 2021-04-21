import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { RootState } from '../../Redux'
import { ModalState } from '../../Redux/interfaces/interfaces'
import { setMobileMenu } from '../../Redux/actions/modal'
import './MobileMenu.scss'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import NavbarMenuItem from '../NavbarMenuItem/NavbarMenuItem'
import * as Icon from 'react-bootstrap-icons'

interface MobileMenuProps {
  setMobileMenu: (isActive: boolean) => void
  modal: ModalState
}

const MobileMenu = (props: MobileMenuProps) => {
  useEffect(() => {
    bodyBlock()
  })

  const bodyBlock = (): void => {
    document.querySelector('body')?.classList.add('modal-open')
  }

  const bodyUnBlock = (): void => {
    document.querySelector('body')?.classList.remove('modal-open')
  }

  const closeButton = (commandName: string | null): void => {
    bodyUnBlock()
    props.setMobileMenu(false)
  }

  return (
    <Container fluid className="MobileMenu">
      <Row className="MobileMenu__closeBtnCont d-flex justify-content-end">
        <div className="MobileMenu__closeBtn">
          <NavbarMenuItem clickHandler={closeButton}>
            <Icon.XCircleFill width={40} height={40} fill={`#f8f9fa`} />
          </NavbarMenuItem>
        </div>
      </Row>
      <Row className="MobileMenu__Row">
        <Col className="MobileMenu__Col">
          <div className="MobileMenu__menuEl" onClick={() => closeButton(null)}>
            <NavLink to="/admin">
              <NavbarMenuItem title={`Профиль`}>
                <Icon.PersonSquare width={30} height={30} fill={`#f8f9fa`} />
              </NavbarMenuItem>
            </NavLink>
          </div>
          <div className="MobileMenu__menuEl" onClick={() => closeButton(null)}>
            <NavLink to="/admin/products">
              <NavbarMenuItem title={`Продукты`}>
                <Icon.BasketFill width={30} height={30} fill={`#f8f9fa`} />
              </NavbarMenuItem>
            </NavLink>
          </div>
          <div className="MobileMenu__menuEl" onClick={() => closeButton(null)}>
            <NavLink to="/admin/categories">
              <NavbarMenuItem title={`Категории`}>
                <Icon.CardList width={30} height={30} fill={`#f8f9fa`} />
              </NavbarMenuItem>
            </NavLink>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

const mapDispatchToProps = {
  setMobileMenu,
}

const mapStateToProps = (state: RootState) => {
  const modal = state.modal
  return {
    modal,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileMenu)
