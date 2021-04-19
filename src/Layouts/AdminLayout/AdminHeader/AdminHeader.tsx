import React from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { RootState } from '../../../Redux'
import { setAppMarketUser } from '../../../Redux/actions/app'
import { MarketUser } from '../../../Redux/interfaces/AdditionalInterfaces/MarketUser'
import './AdminHeader.scss'

interface AdminHeaderProps {
  setAppMarketUser: (marketUser: MarketUser | null) => void
}

const AdminHeader = (props: AdminHeaderProps) => {
  const logoutHandler = ():void => {
    localStorage.removeItem('marketUser')
    props.setAppMarketUser(null)
  }

  return (
    <Container className="AdminHeader p-0 d-flex justify-content-end">
      <h3 onClick={() => logoutHandler()}>Logout</h3>
    </Container>
  )
}

const mapDispatchToProps = {
  setAppMarketUser
}

const mapStateToProps = (state: RootState) => {
  const app = state.app
  return {
    app
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminHeader)