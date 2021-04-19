import React from 'react'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './AdminProducts.scss'

interface AdminProductsProps {}

const AdminProducts = (props: AdminProductsProps) => {
  return (
    <Container fluid className="AdminProducts p-0">
      <h1>AdminProducts</h1>
      <NavLink to="/admin">
        <h3>AdminPage</h3>
      </NavLink>
    </Container>
  )
}

export default AdminProducts
