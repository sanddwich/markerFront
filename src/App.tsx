import React from 'react'
import './App.scss'
import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'
import AdminLayout from './Layouts/AdminLayout/AdminLayout'
import MainLayout from './Layouts/MainLayout/MainLayout'

interface AppProps {}

interface AppState {}

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <Container fluid className="App p-0">
        <Switch>
          <Route path="/admin" component={AdminLayout} />
          <Route path="/" component={MainLayout} />
        </Switch>
      </Container>
    )
  }
}

export default App
