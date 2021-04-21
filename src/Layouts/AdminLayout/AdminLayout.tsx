import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom'
import { RootState } from '../../Redux'
import { AppState } from '../../Redux/interfaces/interfaces'
import AdminHeader from './AdminHeader/AdminHeader'
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

interface AdminLayoutProps extends RouteComponentProps<MatchParams> {
  app: AppState
}

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
    if (props.location.pathname !== '/admin/auth' && props.app.marketUser === null) {
      props.history.push('/admin/auth')
    }
  })

  return (
    <Container fluid className="AdminLayout">
      {props.app.marketUser && <AdminHeader />}

      <Switch>
        <Route path="/admin" exact component={AdminPage} />
        <Route path="/admin/products" exact component={AdminProducts} />
        <Route path="/admin/auth" exact component={AdminAuth} />

        <Redirect to="/admin" />
      </Switch>
    </Container>
  )
}

const mapDispatchToProps = {}

const mapStateToProps = (state: RootState) => {
  const app = state.app
  return {
    app,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminLayout)
