import React from 'react'
import { Container } from 'react-bootstrap'
import AuthorityForm from '../../../../SharedComponents/AuthorityForm/AuthorityForm'
import './AdminAuth.scss'

interface AdminAuthProps {}

const AdminAuth = (props: AdminAuthProps) => {
  return (
    <Container fluid className="AdminAuth p-0 d-flex justify-content-center align-items-center">
      <div className="AdminAuth__content">
        <h1>Авторизация в административную панель:</h1>
        <AuthorityForm />
      </div>
    </Container>
  )
}

export default AdminAuth
