import React from 'react'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './AdminPage.scss'

interface AdminPageProps {}

const AdminPage = (props: AdminPageProps) => {
  return (
    <Container fluid className="AdminPage p-0">
      <h1>AdminPage</h1>
      <NavLink to="/admin/products"><h3>Products</h3></NavLink>
      <NavLink to="/admin/auth"><h3>Auth</h3></NavLink>
    </Container>
  )
}

export default AdminPage
