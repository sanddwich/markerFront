import React from 'react'
import { Container } from 'react-bootstrap'
import './AdminProfile.scss'

interface AdminProfileProps {}

interface AdminProfileState {}

class AdminProfile extends React.Component<AdminProfileProps, AdminProfileState> {
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <Container fluid className="AdminProfile p-0">
        <h1>AdminProfile</h1>
      </Container>
    )
  }
}

export default AdminProfile
