import React from 'react'
import { Container } from 'react-bootstrap'
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom'
import './AdminLayout.scss'
import AdminPage from './Pages/AdminPage/AdminPage'
import AdminProfile from './Pages/AdminProfile/AdminProfile'

interface MatchParams {
  id: string
}

interface AdminLayoutProps extends RouteComponentProps<MatchParams> {}

interface AdminLayoutState {}

class AdminLayout extends React.Component<AdminLayoutProps, AdminLayoutState> {
  constructor(props: AdminLayoutProps) {
    super(props)
    // console.log(this.props)
    if (true) {
      this.props.history.push('/')  //Переадресация с админки на MAIN компонент по умолчанию
    }
  }
  
  render() {
    return (
      <Container fluid className="AdminLayout p-0">
        <h1>AdminLayout</h1>
        <Switch>
          <Route path="/admin" exact component={AdminPage} />
          <Route path="/admin/profile" exact component={AdminProfile} />

          <Redirect to='/' />
        </Switch>
      </Container>
    )
  }
}

export default AdminLayout