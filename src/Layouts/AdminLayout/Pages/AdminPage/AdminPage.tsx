import React from 'react'
import { Container } from 'react-bootstrap'
import './AdminPage.scss'

interface AdminPageProps {}

interface AdminPageState {}

class AdminPage extends React.Component<AdminPageProps, AdminPageState> {
  render() {
    return (
      <Container fluid className="AdminPage p-0">
        <h1>AdminPage</h1>
      </Container>
    )
  }
}

export default AdminPage
