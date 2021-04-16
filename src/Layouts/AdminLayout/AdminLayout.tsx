import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom'
import './AdminLayout.scss'
import AdminAuth from './Pages/AdminAuth/AdminAuth'
import AdminPage from './Pages/AdminPage/AdminPage'
import AdminProducts from './Pages/AdminProducts/AdminProducts'

interface MatchParams {
  id: string
}

// const calculateState = ():number => {
//   console.log('calculateState')
//   return Math.trunc(Math.random() * 10)
// }

interface AdminLayoutProps extends RouteComponentProps<MatchParams> {}

const AdminLayout = (props: AdminLayoutProps) => {
  // const [counter, setCounter] = useState(() => {
  //   return calculateState()
  // })

  // const changeCounter = (): void => {
  //   setCounter(previousCounter => {
  //     return previousCounter + 1
  //   })
  //   setCounter(previousCounter => previousCounter +1)
  // }

  useEffect(() => {
    // props.history.push('/')
  })

  return (
    <Container fluid className="AdminLayout p-0">
      <Switch>
        <Route path="/admin" exact component={AdminPage} />
        <Route path="/admin/products" exact component={AdminProducts} />
        <Route path="/admin/auth" exact component={AdminAuth} />

        <Redirect to="/" />
      </Switch>
    </Container>
  )
}

export default AdminLayout
